// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/style.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
      },
      preload: [
        'c',
        'cpp',
        'python',
        'bash',
        'shell',
        'json',
        'yaml',
        'typescript',
        'javascript',
        'html',
        'css',
        'markdown',
        'diff',
        'makefile',
        'cmake',
      ],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      title: 'ironSpirit 西南石油大学铁人战队',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '西南石油大学 ironSpirit 铁人战队官方网站' }
      ]
    }
  }
})
