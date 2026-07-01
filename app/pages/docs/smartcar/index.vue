<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('docs-index', () => {
  return queryCollection('content').path('/docs/smartcar').first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => (page.value as any)?.title || '文档 | 铁人战队·智能车',
  description: () => (page.value as any)?.description || '铁人战队智能车文档',
})
</script>

<template>
  <div class="content-page">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
