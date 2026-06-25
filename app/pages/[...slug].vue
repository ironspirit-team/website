<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const { data: pages } = await useAsyncData('content-navigation', () => {
  return queryCollection('content')
    .select('path', 'title')
    .order('path', 'ASC')
    .all()
})

const navGroups = computed(() => {
  const groups = new Map<string, { title: string, items: { path: string, title?: string }[] }>()

  for (const item of pages.value || []) {
    if (item.path === '/') {
      continue
    }

    const [, section = '其他', subsection = ''] = item.path.split('/')
    const key = section === 'docs' && subsection === 'smartcar' ? 'docs-smartcar' : section
    const title = key === 'docs-smartcar' ? '智能车文档' : section === 'blog' ? '动态' : '页面'

    if (!groups.has(key)) {
      groups.set(key, { title, items: [] })
    }

    groups.get(key)?.items.push(item)
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
  <main class="content-layout">
    <aside class="content-nav" aria-label="内容导航">
      <div v-for="group in navGroups" :key="group.title" class="nav-group">
        <h2 class="nav-group-title">{{ group.title }}</h2>
        <NuxtLink
          v-for="item in group.items"
          :key="item.path"
          :to="item.path"
        >
          {{ item.title || item.path }}
        </NuxtLink>
      </div>
    </aside>

    <article class="content-page">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </article>
  </main>
</template>
