<script setup lang="ts">
const route = useRoute()

const { data: pages } = await useAsyncData('docs-navigation', () => {
  return queryCollection('content')
    .select('path', 'title')
    .where('path', 'LIKE', '/docs/smartcar%')
    .order('path', 'ASC')
    .all()
})

const navGroups = computed(() => {
  const groups = new Map<string, { title: string, items: { path: string, title?: string }[] }>()

  for (const item of pages.value || []) {
    if (item.path === '/docs/smartcar') continue

    const [, , , section = 'overview'] = item.path.split('/')
    const key = section
    const title = item.path === `/docs/smartcar/${section}` ? (item.title || section) : section

    if (!groups.has(key)) {
      groups.set(key, { title, items: [] })
    }

    if (item.path !== `/docs/smartcar/${section}`) {
      groups.get(key)?.items.push(item)
    }
  }

  return [...groups.values()]
})
</script>

<template>
  <main class="docs-layout">
    <aside class="docs-sidebar" aria-label="文档导航">
      <NuxtLink class="docs-sidebar-home" to="/docs/smartcar/">
        <span class="docs-sidebar-home-icon" aria-hidden="true">📖</span>
        智能车文档
      </NuxtLink>
      <details
        v-for="group in navGroups"
        :key="group.title"
        class="sidebar-group"
        :open="group.items.some(item => route.path.startsWith(item.path))"
      >
        <summary class="sidebar-group-title">{{ group.title }}</summary>
        <NuxtLink
          v-for="item in group.items"
          :key="item.path"
          :to="item.path"
          class="sidebar-link"
          :class="{ active: route.path === item.path }"
        >
          {{ item.title || item.path }}
        </NuxtLink>
      </details>
    </aside>

    <article class="docs-content">
      <NuxtPage />
    </article>
  </main>
</template>
