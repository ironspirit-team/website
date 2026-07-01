<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('docs-page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: () => (page.value as any)?.title || '铁人战队·智能车',
  description: () => (page.value as any)?.description || (page.value as any)?.lead || '铁人战队智能车文档',
})
</script>

<template>
  <div class="content-page">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
