<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('content')
    .where('path', 'LIKE', '/blog/%')
    .all()
})

const blogPosts = computed(() => {
  return (posts.value || [])
    .filter(post => post.path !== '/blog')
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
})

const formatDate = (date?: string) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

useSeoMeta({
  title: '博客 | 铁人战队·智能车',
  description: '铁人战队智能车博客与动态',
})
</script>

<template>
  <main class="blog-index">
    <header class="blog-hero">
      <p>博客</p>
      <h1>铁人战队智能车</h1>
    </header>

    <section class="blog-list" aria-label="博客文章">
      <NuxtLink
        v-for="post in blogPosts"
        :key="post.path"
        class="blog-card"
        :to="post.path"
      >
        <time v-if="post.date" :datetime="post.date">{{ formatDate(post.date) }}</time>
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </NuxtLink>
    </section>
  </main>
</template>