<script setup lang="ts">
const route = useRoute()
const brandText = computed(() => {
  if (route.path === '/') return '西南石油大学 铁人战队'
  if (route.path.startsWith('/ai-plus')) return '铁人战队'
  return '铁人战队-智能车'
})
</script>

<template>
  <div class="site-shell">
    <SiteHeader :brand-text="brandText" />
    <slot />
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <span class="footer-logo image-box">
            <img src="/images/footer-logo.png?v=20260626" alt="ironSpirit logo">
          </span>
          <div>
            <p>西南石油大学 ironSpirit 铁人战队</p>
            <span>ENGINEERED TO INSPIRE</span>
          </div>
        </div>
        <div class="footer-links">
          <h2>Quick Links</h2>
          <a href="/docs/smartcar/">文档</a>
          <a href="/#news">动态</a>
          <a href="/#ai-plus">AI+</a>
          <a href="/#practice">实践平台</a>
          <a href="/#association">铁人协会</a>
        </div>
        <div class="footer-links">
          <h2>Connect</h2>
          <a href="https://github.com/ironspirit-team" target="_blank" rel="noopener">GitHub</a>
          <a href="https://space.bilibili.com/2138265818" target="_blank" rel="noopener">Bilibili</a>
          <a href="mailto:ironspirit_rm@swpu.edu.cn">邮箱</a>
        </div>
      </div>
      <div class="footer-bottom">
        © 2015-2026 ironSpirit Team. All Rights Reserved.
        <span class="footer-icp"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">蜀ICP备2026004009号-3</a></span>
      </div>
    </footer>
  </div>
</template>
