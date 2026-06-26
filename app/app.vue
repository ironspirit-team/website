<script setup lang="ts">
const route = useRoute()
const shellBrandText = computed(() => route.path === '/ai-plus' ? '西南石油大学 铁人战队' : '铁人战队-智能车')
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
      </div>
    </footer>
  </div>
</template>
