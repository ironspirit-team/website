<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div v-if="route.path === '/'">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <div v-else class="site-shell">
    <NuxtRouteAnnouncer />
    <SiteHeader brand-text="铁人战队-智能车" />
    <NuxtPage />
    <footer class="site-footer">
      <div class="section-inner">
        <span>Copyright (c) Ironspirit</span>
        <span>由 Nuxt Content 驱动</span>
      </div>
    </footer>
  </div>
</template>
