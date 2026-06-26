// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/style.css'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      title: 'ironSpirit 瑗垮崡鐭虫补澶у閾佷汉鎴橀槦',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '瑗垮崡鐭虫补澶у ironSpirit 閾佷汉鎴橀槦瀹樼綉棣栭〉' }
      ]
    }
  }
})
