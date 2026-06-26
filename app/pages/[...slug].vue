<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const isDocsPage = computed(() => route.path.startsWith('/docs/smartcar'))

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
    if (item.path === '/docs/smartcar') {
      continue
    }

    const [, , , section = 'overview'] = item.path.split('/')
    const key = section
    const title = item.path === `/docs/smartcar/${section}` ? item.title || section : section

    if (!groups.has(key)) {
      groups.set(key, { title, items: [] })
    }

    if (item.path !== `/docs/smartcar/${section}`) {
      groups.get(key)?.items.push(item)
    }
  }

  return [...groups.values()]
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => page.value?.title || '铁人战队·智能车',
  description: () => page.value?.description || page.value?.lead || '铁人战队智能车官方网站',
})
</script>

<template>
  <main :class="['content-layout', { 'content-layout-single': !isDocsPage, 'docs-page': isDocsPage }]">
    <aside v-if="isDocsPage" class="content-nav" aria-label="文档导航">
      <NuxtLink class="content-nav-home" to="/docs/smartcar/">智能车文档</NuxtLink>
      <details
        v-for="group in navGroups"
        :key="group.title"
        class="nav-group"
        :open="group.items.some(item => route.path.startsWith(item.path))"
      >
        <summary class="nav-group-title">{{ group.title }}</summary>
        <NuxtLink
          v-for="item in group.items"
          :key="item.path"
          :to="item.path"
          :class="{ active: route.path === item.path }"
        >
          {{ item.title || item.path }}
        </NuxtLink>
      </details>
    </aside>

    <article class="content-page">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </article>
  </main>
</template>
