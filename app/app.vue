<script setup lang="ts">
const route = useRoute()
const shellBrandText = computed(() => route.path === '/ai-plus' ? '铁人战队' : '铁人战队-智能车')
</script>

<template>
  <div v-if="route.path === '/'">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <div v-else class="site-shell">
    <NuxtRouteAnnouncer />
    <SiteHeader :brand-text="shellBrandText" />
    <NuxtPage />
    <footer class="site-footer">
      <div class="section-inner">
        <span>Copyright (c) Ironspirit</span>
        <span>由 Nuxt Content 驱动</span>
        <span><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">蜀ICP备2026004009号-3</a></span>
      </div>
    </footer>
  </div>
</template>
