// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/i18n'],
  
  css: ['~/assets/css/variables.css', '~/assets/css/main.css'],
  
  content: {
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    },
    locales: ['en', 'ka'],
    defaultLocale: 'en'
  },
  
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ka',
        iso: 'ka-GE',
        name: 'ქართული',
        file: 'ka.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})