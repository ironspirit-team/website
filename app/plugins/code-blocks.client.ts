/**
 * 客户端插件：Mermaid 图表渲染 + 代码块复制按钮
 *
 * Mermaid 采用「叠加层」方式渲染：隐藏原始 <code>、插入 SVG 兄弟节点，
 * 不替换 pre.innerHTML，避免与 Vue 虚拟 DOM 冲突导致闪回。
 */
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: '"Noto Serif SC", "Microsoft YaHei", sans-serif',
})

export default defineNuxtPlugin(() => {
  onNuxtReady(() => {
    setTimeout(processAll, 300)
  })

  const router = useRouter()
  router.afterEach(() => {
    nextTick(() => {
      setTimeout(processAll, 300)
    })
  })
})

async function processAll() {
  await renderMermaidBlocks()
  addCopyButtons()
}

// ─────────────────────────────────────────────

/**
 * 查找 Mermaid 代码块，用叠加层方式渲染 SVG
 * 保留原始 <pre><code> DOM 不动，只隐藏 code + 插入 SVG 兄弟节点
 */
async function renderMermaidBlocks() {
  const pres = document.querySelectorAll<HTMLPreElement>('pre[class*="language-mermaid"]')

  // 兜底：内容特征匹配
  const allPres = document.querySelectorAll<HTMLPreElement>('pre')
  const candidates = new Set<HTMLPreElement>(pres)

  for (const pre of allPres) {
    if (candidates.has(pre)) continue
    const text = pre.textContent?.trim() || ''
    if (/^(graph\s|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|flowchart|git[gG]raph|mindmap|timeline|zenuml|sankey-beta|xyChart|block-beta|packet|architecture)/m.test(text)) {
      candidates.add(pre)
    }
  }

  for (const pre of candidates) {
    if (pre.dataset.mermaidDone === 'true') continue
    pre.dataset.mermaidDone = 'true'

    const code = pre.textContent?.trim() || ''
    if (!code) continue

    // 隐藏原始 code 元素
    const codeEl = pre.querySelector('code')
    if (codeEl) {
      ;(codeEl as HTMLElement).style.display = 'none'
    }

    // 标记 pre 为 mermaid 块（CSS 样式）
    pre.classList.add('mermaid-block')

    // 移除已有 SVG（避免重复）
    const existingContainer = pre.querySelector('.mermaid-container')
    if (existingContainer) existingContainer.remove()

    try {
      const id = 'mermaid-' + Math.random().toString(36).slice(2, 10)
      const { svg } = await mermaid.render(id, code)

      const container = document.createElement('div')
      container.className = 'mermaid-container'
      container.innerHTML = svg
      pre.appendChild(container)

      // 添加复制按钮
      const existingBtn = pre.querySelector('.copy-button')
      if (!existingBtn) {
        pre.appendChild(makeCopyButton(code))
      }

      // 监听 Vue 是否移除了我们的 SVG（如在路由切换时）
      observeMermaidContainer(pre, container, code)
    } catch (err) {
      console.warn('[Mermaid] 渲染失败:', err)
      // 失败时恢复 code 显示
      if (codeEl) (codeEl as HTMLElement).style.display = ''
      pre.dataset.mermaidDone = 'error'
    }
  }
}

/**
 * 监听 Mermaid 容器是否被 Vue 移除，若被移除则重新插入
 */
function observeMermaidContainer(pre: HTMLPreElement, container: HTMLDivElement, code: string) {
  const observer = new MutationObserver(() => {
    if (!pre.contains(container) && pre.dataset.mermaidDone === 'true') {
      // Vue 移除了我们的 SVG，重新插入
      pre.appendChild(container)
      const existingBtn = pre.querySelector('.copy-button')
      if (!existingBtn) {
        pre.appendChild(makeCopyButton(code))
      }
    }
  })

  observer.observe(pre, { childList: true })
}

/**
 * 为所有代码块添加复制按钮
 */
function addCopyButtons() {
  const pres = document.querySelectorAll<HTMLPreElement>('pre')

  for (const pre of pres) {
    if (pre.classList.contains('mermaid-block')) continue
    if (pre.querySelector('.copy-button')) continue

    const text = pre.textContent || ''
    if (!text.trim()) continue

    pre.appendChild(makeCopyButton(text))
  }
}

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
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;opacity:0'
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
