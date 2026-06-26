<template>
  <div>
    <header id="siteHeader" class="site-header" :class="{ 'is-scrolled': isScrolled }">
      <nav class="navbar" aria-label="主导航">
        <a class="brand" href="#home" aria-label="返回首页" @click="scrollToSection">
          <span class="brand-logo image-box">
            <img src="/assets/logo.png" alt="ironSpirit logo" @error="markImageMissing">
          </span>
          <span class="brand-text">西南石油大学 机甲大师战队</span>
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-label="展开导航"
          :aria-expanded="String(isMenuOpen)"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
          <a class="active" href="#home" @click="scrollToSection">首页</a>
          <a href="/docs" @click="scrollToSection">文档</a>
          <a href="#news" @click="scrollToSection">动态</a>
          <a href="#ai-plus" @click="scrollToSection">AI+</a>
          <a href="#team" @click="scrollToSection">团队结构</a>
          <a href="#association" @click="scrollToSection">铁人协会</a>
          <a href="#">GitHub</a>
          <a href="#">Bilibili</a>
          <a class="nav-join" href="#join" @click="scrollToSection">加入我们</a>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <section id="home" class="hero section-anchor">
        <div class="hero-bg" aria-hidden="true"></div>
        <div class="hero-overlay" aria-hidden="true"></div>
        <div class="hero-content">
          <span class="hero-logo image-box">
            <img src="/assets/logo.png" alt="ironSpirit logo" @error="markImageMissing">
          </span>
          <h1>IRONSPIRIT</h1>
          <p class="hero-subtitle">ENGINEERED TO INSPIRE</p>
          <p class="hero-meta">EST. 2015</p>
        </div>
      </section>

      <section id="about" class="section section-anchor about-section">
        <div class="container about-grid">
          <div class="section-heading">
            <p class="section-kicker">ABOUT US</p>
            <h2>关于我们</h2>
          </div>
          <div class="about-copy panel">
            <p>
              西南石油大学 ironSpirit 铁人战队成立于 2015 年，是以工程实践、机器人研发、技术传承与团队协作为核心的学生科技创新团队。团队关注机械结构、嵌入式控制、视觉感知、算法开发与项目运营，致力于在工程实践中积累经验、培养能力。
            </p>
            <a class="button button-line" href="#team" @click="scrollToSection">了解更多</a>
          </div>
        </div>
      </section>

      <section id="team" class="section section-anchor">
        <div class="container">
          <div class="section-heading centered">
            <p class="section-kicker">TEAM STRUCTURE</p>
            <h2>团队结构</h2>
          </div>

          <div class="team-grid">
            <article v-for="item in teamItems" :key="item.title" class="team-card">
              <span class="card-icon image-box">
                <img :src="item.icon" :alt="`${item.title}图标`" @error="markImageMissing">
              </span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.lines[0] }}</p>
              <p>{{ item.lines[1] }}</p>
              <span class="card-arrow" aria-hidden="true">→</span>
            </article>
          </div>
        </div>
      </section>

      <section id="timeline" class="section section-anchor timeline-section">
        <div class="container">
          <div class="section-heading centered">
            <p class="section-kicker">TIMELINE</p>
            <h2>发展历程</h2>
          </div>

          <div class="timeline">
            <div v-for="item in timelineItems" :key="item.year" class="timeline-item">
              <time>{{ item.year }}</time>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-plus" class="section section-anchor">
        <div class="container">
          <div class="section-heading centered">
            <p class="section-kicker">AI PLUS</p>
            <h2>AI+</h2>
          </div>

          <div class="ai-panel panel">
            <div class="ai-copy">
              <h3>智能化探索预留模块</h3>
              <p>
                AI+ 模块用于展示团队在智能感知、辅助开发、数据分析、文档沉淀与训练流程优化等方向的探索。当前内容作为官网预留模块，后续可接入项目介绍、技术文章或演示页面。
              </p>
            </div>
            <div class="ai-placeholder image-box" aria-label="AI+ 图片占位">
              <span>assets/ai-plus-placeholder.png</span>
            </div>
          </div>
        </div>
      </section>

      <section id="association" class="section section-anchor association-section">
        <div class="container association-panel panel">
          <div class="association-icon image-box">
            <img src="/assets/icon-association.png" alt="铁人协会图标" @error="markImageMissing">
          </div>
          <div>
            <div class="section-heading compact">
              <p class="section-kicker">IRON ASSOCIATION</p>
              <h2>铁人协会</h2>
            </div>
            <p>
              铁人协会是面向校内学生的科技交流与实践平台，围绕机器人、工程实践、技术分享、招新培训与团队文化建设开展活动，为同学提供参与项目、了解竞赛和接触工程实践的入口。
            </p>
          </div>
        </div>
      </section>

      <section id="join" class="section section-anchor join-section">
        <div class="container join-grid">
          <div>
            <div class="section-heading compact">
              <p class="section-kicker">JOIN US</p>
              <h2>加入我们</h2>
            </div>
            <ul class="contact-list">
              <li><span>邮箱</span><a href="mailto:ironspirit_rm@swpu.edu.cn">ironspirit_rm@swpu.edu.cn</a></li>
              <li><span>地址</span><p>四川省成都市新都区西南石油大学</p></li>
              <li><span>交流群</span><p>123456789（QQ群，占位）</p></li>
            </ul>
            <a class="button button-solid" href="#">立即报名</a>
          </div>

          <div class="qr-panel panel">
            <div class="qr-code image-box">
              <img src="/assets/qr-code.png" alt="招新二维码" @error="markImageMissing">
            </div>
            <div>
              <h3>扫码加入我们</h3>
              <p>获取更多团队资讯和报名信息</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <span class="footer-logo image-box">
            <img src="/assets/logo.png" alt="ironSpirit logo" @error="markImageMissing">
          </span>
          <div>
            <p>西南石油大学 ironSpirit 铁人战队</p>
            <span>ENGINEERED TO INSPIRE</span>
          </div>
        </div>

        <div class="footer-links">
          <h2>Quick Links</h2>
          <a href="#docs" @click="scrollToSection">文档</a>
          <a href="#news" @click="scrollToSection">动态</a>
          <a href="#ai-plus" @click="scrollToSection">AI+</a>
          <a href="#team" @click="scrollToSection">团队结构</a>
          <a href="#association" @click="scrollToSection">铁人协会</a>
        </div>

        <div class="footer-links">
          <h2>Connect</h2>
          <a href="#">GitHub</a>
          <a href="#">Bilibili</a>
          <a href="mailto:ironspirit_rm@swpu.edu.cn">邮箱</a>
        </div>
      </div>
      <div class="footer-bottom">© 2015-2024 ironSpirit Team. All Rights Reserved.</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const teamItems = [
  {
    title: '机械组',
    icon: '/assets/icon-mech.png',
    lines: ['结构设计与加工制造', '传动、装配与整车调试']
  },
  {
    title: '电控组',
    icon: '/assets/icon-electric.png',
    lines: ['电路设计与功率管理', '整车电控系统开发']
  },
  {
    title: '视觉组',
    icon: '/assets/icon-vision.png',
    lines: ['视觉算法开发', '目标识别与图像处理']
  },
  {
    title: '嵌入式组',
    icon: '/assets/icon-embedded.png',
    lines: ['嵌入式软件开发', '通信、控制与系统优化']
  },
  {
    title: '运营组',
    icon: '/assets/icon-operation.png',
    lines: ['品牌宣传与内容运营', '资料管理与团队协作']
  },
  {
    title: '铁人协会',
    icon: '/assets/icon-association.png',
    lines: ['校内学生科技协会', '技术交流、活动组织与文化建设']
  }
]

const timelineItems = [
  { year: '2015', text: '团队成立' },
  { year: '2018', text: '体系建设' },
  { year: '2019', text: '稳步前行' },
  { year: '2021', text: '持续突破' },
  { year: '2023', text: '技术沉淀' },
  { year: '2024', text: '继续探索' }
]

function updateHeader() {
  isScrolled.value = window.scrollY > 12
}

function scrollToSection(event: MouseEvent) {
  const link = event.currentTarget as HTMLAnchorElement
  const targetId = link.getAttribute('href')

  if (!targetId || targetId === '#') {
    return
  }

  const target = document.querySelector(targetId)

  if (!target) {
    return
  }

  event.preventDefault()
  isMenuOpen.value = false
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function markImageMissing(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.classList.add('is-missing')
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateHeader)
})
</script>
