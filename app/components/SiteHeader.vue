<template>
  <header id="siteHeader" class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <nav class="navbar" aria-label="主导航">
      <a class="brand" :href="anchorHref('home')" aria-label="返回首页" @click="scrollToSection">
        <span class="brand-logo image-box">
          <img src="/assets/logo.png" alt="ironSpirit logo" @error="markImageMissing">
        </span>
        <span class="brand-text">{{ brandText }}</span>
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
        <a :class="{ active: isHomePage }" :href="anchorHref('home')" @click="scrollToSection">首页</a>
        <a :class="{ active: route.path.startsWith('/docs') }" href="/docs/smartcar/" @click="scrollToSection">文档</a>
        <a :class="{ active: route.path.startsWith('/blog') }" href="/blog/" @click="scrollToSection">动态</a>
        <a :href="anchorHref('ai-plus')" @click="scrollToSection">AI+</a>
        <a :href="anchorHref('practice')" @click="scrollToSection">实践平台</a>
        <a :href="anchorHref('association')" @click="scrollToSection">铁人协会</a>
        <a href="https://github.com/ironspirit-team" target="_blank" rel="noopener" @click="scrollToSection">GitHub</a>
        <a href="https://space.bilibili.com/2138265818" target="_blank" rel="noopener" @click="scrollToSection">Bilibili</a>
        <a class="nav-join" :href="anchorHref('join')" @click="scrollToSection">加入我们</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  brandText: string
}>()

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const isHomePage = computed(() => route.path === '/')

function anchorHref(id: string) {
  return isHomePage.value ? `#${id}` : `/#${id}`
}

function updateHeader() {
  isScrolled.value = window.scrollY > 12
}

function scrollToSection(event: MouseEvent) {
  const link = event.currentTarget as HTMLAnchorElement
  const targetHref = link.getAttribute('href')

  if (!targetHref || targetHref === '#') {
    return
  }

  if (!targetHref.startsWith('#')) {
    isMenuOpen.value = false
    return
  }

  const target = document.querySelector(targetHref)

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
