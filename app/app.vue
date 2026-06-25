<template>
  <div class="site-shell">
    <NuxtRouteAnnouncer />
    <header class="site-header">
      <div class="header-inner">
        <NuxtLink class="brand" to="/">
          <img src="/images/iron-logo.png" alt="铁人战队标志">
          <span>铁人战队·智能车</span>
        </NuxtLink>
        <nav class="nav-links" aria-label="主导航">
          <NuxtLink to="/docs/smartcar/prologue/01-how-to-ask-question/">文档</NuxtLink>
          <NuxtLink to="/blog/">博客</NuxtLink>
          <a href="https://github.com/ironspirit-team" target="_blank" rel="noopener">GitHub</a>
        </nav>
      </div>
    </header>
    <NuxtPage />
    <footer class="site-footer">
      <div class="section-inner">
        <span>Copyright (c) Ironspirit</span>
        <span>由 Nuxt Content 驱动</span>
      </div>
    </footer>
  </div>
</template>