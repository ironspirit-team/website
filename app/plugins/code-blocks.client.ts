/**
 * 客户端插件：Mermaid 图表渲染 + 代码块复制按钮
 *
 * 通过 DOM 操作实现，在 Vue hydration 完成后运行，
 * 避免与 Nuxt Content v3 的 Shiki 服务端渲染产生冲突。
 */
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: '"Noto Serif SC", "Microsoft YaHei", sans-serif',
})

export default defineNuxtPlugin(() => {
  // 初始加载：等 Nuxt 完全就绪后执行
  onNuxtReady(() => {
    // 延迟确保 hydration 完成
    setTimeout(processAll, 300)
  })

  // 路由切换后执行
  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      setTimeout(processAll, 200)
    })
  })
})

// ─────────────────────────────────────────────

async function processAll() {
  await renderMermaidBlocks()
  addCopyButtons()
}

/**
 * 查找所有 Mermaid 代码块并渲染为 SVG
 */
async function renderMermaidBlocks() {
  // Nuxt Content v3 将 language 作为 class 放在 <pre> 上（如 class="language-mermaid ..."）
  const pres = document.querySelectorAll<HTMLPreElement>('pre[class*="language-mermaid"]')

  // 兜底：通过内容特征匹配 Mermaid 代码块
  const allPres = document.querySelectorAll<HTMLPreElement>('pre')
  const candidates = new Set<HTMLPreElement>(pres)

  for (const pre of allPres) {
    if (candidates.has(pre)) continue
    const text = pre.textContent?.trim() || ''
    // Mermaid 图表的典型起始语法
    if (
      /^(graph\s|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|flowchart|git[gG]raph|mindmap|timeline|zenuml|sankey-beta|xyChart|block-beta|packet|architecture)/m.test(text)
    ) {
      candidates.add(pre)
    }
  }

  for (const pre of candidates) {
    if (pre.dataset.mermaidDone === 'true') continue
    pre.dataset.mermaidDone = 'true'

    const code = pre.textContent?.trim() || ''
    if (!code) continue

    try {
      const id = 'mermaid-' + Math.random().toString(36).slice(2, 10)
      const { svg } = await mermaid.render(id, code)

      // 替换 pre 的内容
      pre.innerHTML = ''
      pre.classList.add('mermaid-block')

      const container = document.createElement('div')
      container.className = 'mermaid-container'
      container.innerHTML = svg
      pre.appendChild(container)

      // 添加复制按钮
      const btn = makeCopyButton(code)
      pre.appendChild(btn)
    } catch (err) {
      console.warn('[Mermaid] 渲染失败:', err)
      pre.dataset.mermaidDone = 'error'
    }
  }
}

/**
 * 为所有代码块添加复制按钮
 */
function addCopyButtons() {
  const pres = document.querySelectorAll<HTMLPreElement>('pre')

  for (const pre of pres) {
    // 跳过 Mermaid 块（已在 renderMermaidBlocks 中添加）
    if (pre.classList.contains('mermaid-block')) continue
    // 跳过已有按钮的
    if (pre.querySelector('.copy-button')) continue

    const text = pre.textContent || ''
    if (!text.trim()) continue

    const btn = makeCopyButton(text)
    pre.appendChild(btn)
  }
}

/**
 * 创建一个复制按钮 DOM 元素
 */
function makeCopyButton(text: string): HTMLButtonElement {
  const btn = document.createElement('button')
  btn.className = 'copy-button'
  btn.setAttribute('aria-label', '复制代码')
  btn.textContent = '复制'

  btn.addEventListener('click', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // 降级方案
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;opacity:0;'
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      document.body.removeChild(ta)
    }

    btn.textContent = '已复制 ✓'
    btn.classList.add('copied')
    setTimeout(() => {
      btn.textContent = '复制'
      btn.classList.remove('copied')
    }, 2000)
  })

  return btn
}
