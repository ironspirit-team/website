<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('blog-post-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => (page.value as any)?.title || '博客',
  description: () => (page.value as any)?.description || (page.value as any)?.lead || '',
})
</script>

<template>
  <main class="blog-post-layout">
    <article class="content-page">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </main>
</template>
