<script setup lang="ts">
useSeoMeta({
  title: 'AI+ | ironSpirit 铁人战队',
  description: '面向校内同学的 AI 社区与活动入口，预留 Vibe Coding、AI Hackathon、AI 工具体验与 AI 创作交流等活动方向。'
})

const heroTags = ['Vibe Coding', 'AI Hackathon', 'AI 工具体验', 'AI 创作交流']

const activityDirections = [
  {
    index: '01',
    title: 'Vibe Coding',
    visual: 'VIBE CODING VISUAL RESERVED',
    description: '面向 AI 辅助开发体验的活动方向，鼓励同学使用自然语言、AI 编程工具和低门槛开发流程完成创意原型。'
  },
  {
    index: '02',
    title: 'AI Hackathon',
    visual: 'AI HACKATHON VISUAL RESERVED',
    description: '面向短周期项目开发与创意实现的活动方向，围绕具体主题进行组队、开发、展示与交流。'
  },
  {
    index: '03',
    title: 'AI 工具体验',
    visual: 'AI TOOLS VISUAL RESERVED',
    description: '分享和体验不同 AI 工具在学习、开发、设计、文档整理和创意表达中的使用方式。'
  },
  {
    index: '04',
    title: 'AI 创作与开发交流',
    visual: 'AI CREATION VISUAL RESERVED',
    description: '面向对 AI 应用感兴趣的同学，开展作品分享、想法交流、项目组队和经验复盘。'
  }
]

const activityFormats = [
  {
    index: '01',
    title: '主题工作坊',
    description: '围绕某个 AI 工具、开发方式或创作主题进行集中体验。'
  },
  {
    index: '02',
    title: '短周期挑战',
    description: '在限定时间内完成一个小型 AI 应用、网页、工具或创意 Demo。'
  },
  {
    index: '03',
    title: '组队共创',
    description: '鼓励不同专业同学组队，将想法转化为可展示的原型。'
  },
  {
    index: '04',
    title: '展示交流',
    description: '通过路演、Demo 展示或线上记录沉淀活动成果。'
  }
]

const communityItems = [
  { title: '活动预告', status: '待补充', visual: 'UPCOMING VISUAL RESERVED' },
  { title: '活动报名', status: '暂未开放', visual: 'SIGN UP VISUAL RESERVED' },
  { title: '作品展示', status: '待活动后补充', visual: 'SHOWCASE VISUAL RESERVED' },
  { title: '工具清单', status: '可后续整理', visual: 'TOOLKIT VISUAL RESERVED' },
  { title: '资料沉淀', status: '可后续整理', visual: 'RESOURCE VISUAL RESERVED' },
  { title: '活动复盘', status: '待活动后补充', visual: 'REVIEW VISUAL RESERVED' }
]
</script>

<template>
  <main class="ai-plus-page">
    <section class="ai-plus-hero">
      <div class="container ai-plus-hero-grid">
        <div class="ai-plus-hero-copy">
          <p class="section-kicker">AI PLUS</p>
          <div class="ai-plus-title-row">
            <h1>AI+</h1>
            <span class="ai-status">筹备中</span>
          </div>
          <h2>面向校内同学的 AI 社区与活动入口</h2>
          <p>
            AI+ 是 ironSpirit 官网中面向校内 AI 兴趣交流的社区模块。当前页面用于展示后续计划开展的 Vibe Coding、AI Hackathon、AI 工具体验与创作开发活动，并为活动报名、作品展示和社区资料沉淀预留入口。
          </p>
          <div class="ai-tag-list" aria-label="AI+ 信息标签">
            <span v-for="tag in heroTags" :key="tag">{{ tag }}</span>
          </div>
        </div>

        <div class="ai-visual ai-visual-hero" aria-label="AI+ 页面头部主视觉预留位">
          <span>AI+ HERO VISUAL RESERVED</span>
          <small>public/images/ai-plus/ai-plus-hero.png</small>
        </div>
      </div>
    </section>

    <section class="ai-plus-section">
      <div class="container ai-plus-intro-grid">
        <div class="section-heading">
          <p class="section-kicker">COMMUNITY</p>
          <h2>AI+ 社区简介</h2>
        </div>
        <div class="ai-plus-panel ai-community-intro-card">
          <p>
            AI+ 面向对 AI 工具、Vibe Coding、AI Hackathon、AI 创作与短周期项目实践感兴趣的校内同学。当前阶段以方向展示与活动预留为主，后续可根据实际组织情况逐步开放报名入口、活动说明、作品展示和社区资料沉淀。
          </p>
        </div>
      </div>
    </section>

    <section class="ai-plus-section">
      <div class="container">
        <div class="section-heading centered">
          <p class="section-kicker">FOCUS</p>
          <h2>核心活动方向</h2>
        </div>

        <div class="ai-direction-grid">
          <article v-for="item in activityDirections" :key="item.title" class="ai-detail-card">
            <div class="ai-card-topline">
              <span>{{ item.index }}</span>
              <i aria-hidden="true">AI</i>
            </div>
            <div class="ai-visual ai-visual-card" :aria-label="`${item.title} 活动视觉图预留位`">
              <span>{{ item.visual }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="ai-plus-section">
      <div class="container">
        <div class="ai-plus-section-split">
          <div class="section-heading">
            <p class="section-kicker">FORMAT</p>
            <h2>活动形式</h2>
          </div>
          <div class="ai-visual ai-visual-format" aria-label="活动形式视觉图预留位">
            <span>ACTIVITY FORMAT VISUAL RESERVED</span>
            <small>public/images/ai-plus/activity-format.png</small>
          </div>
        </div>

        <div class="ai-format-flow">
          <article v-for="item in activityFormats" :key="item.title" class="ai-format-step">
            <span>{{ item.index }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="ai-plus-section">
      <div class="container">
        <div class="ai-signup-card">
          <div class="ai-signup-copy">
            <p class="section-kicker">SIGN UP</p>
            <div class="ai-signup-title">
              <h2>活动报名</h2>
              <span class="ai-status">暂未开放</span>
            </div>
            <p>
              AI+ 社区活动报名入口暂未开放。后续将根据 Vibe Coding、AI Hackathon 或其他活动安排，开放报名通道、活动说明和参与方式。
            </p>
            <button class="button button-line ai-disabled-button" type="button" disabled>报名入口预留</button>
          </div>
          <div class="ai-visual ai-visual-signup" aria-label="活动报名视觉图预留位">
            <span>SIGN UP VISUAL RESERVED</span>
            <small>public/images/ai-plus/signup-placeholder.png</small>
          </div>
        </div>
      </div>
    </section>

    <section class="ai-plus-section">
      <div class="container">
        <div class="section-heading centered">
          <p class="section-kicker">ROADMAP</p>
          <h2>社区建设预留板块</h2>
        </div>
        <p class="ai-section-lead">
          AI+ 社区当前处于筹备阶段，页面先建立活动方向与内容结构。未来可根据实际活动逐步补充活动预告、报名信息、作品展示、工具清单、资料沉淀和活动复盘。
        </p>

        <div class="ai-community-grid">
          <article v-for="item in communityItems" :key="item.title" class="ai-community-card">
            <div class="ai-mini-visual" aria-hidden="true">{{ item.visual }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.status }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="ai-plus-section ai-plus-section-last">
      <div class="container">
        <div class="ai-team-ai-card">
          <div>
            <p class="section-kicker">TEAM EXPLORATION</p>
            <div class="ai-signup-title">
              <h2>团队 AI 探索</h2>
              <span class="ai-status">预留中</span>
            </div>
            <p>
              除校内 AI 社区活动外，团队后续也可能结合机器人研发、文档整理、数据分析和训练复盘等方向探索 AI 工具的辅助作用。当前该部分仅作为预留板块，待实际内容成熟后再补充。
            </p>
          </div>
          <div class="ai-visual ai-visual-team" aria-label="团队 AI 探索视觉图预留位">
            <span>TEAM AI VISUAL RESERVED</span>
            <small>public/images/ai-plus/team-ai-placeholder.png</small>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.ai-plus-page {
  background-image: url("/images/ai-plus/ai-plus-section-bg.png");
  background-repeat: repeat-y;
  background-size: max(100%, 1180px) auto;
  background-position: top center;
  background-color: #f4f4f4;
}

.ai-plus-intro-grid {
  grid-template-columns: 0.7fr 1.3fr;
  gap: 64px;
  align-items: start;
}

.ai-plus-section-split {
  grid-template-columns: 0.7fr 1.3fr;
  gap: 64px;
}

.ai-visual-format {
  width: 100%;
  aspect-ratio: 16 / 9;
  min-height: 0;
}

.ai-community-intro-card {
  position: relative;
  padding: 34px;
}

.ai-community-intro-card::before {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 34px;
  height: 34px;
  content: "";
  border-top: 2px solid var(--color-black);
  border-left: 2px solid var(--color-black);
}

.ai-community-intro-card p {
  max-width: 900px;
  margin: 0;
  color: var(--color-gray-700);
  font-size: 17px;
}

@media (max-width: 900px) {
  .ai-plus-intro-grid,
  .ai-plus-section-split {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .ai-plus-page {
    background-size: auto 900px;
  }

  .ai-community-intro-card {
    padding: 26px;
  }
}
</style>
