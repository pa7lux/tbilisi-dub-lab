// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/i18n'],
  
  css: ['~/assets/css/variables.css', '~/assets/css/main.css'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tbilisi Dub Lab - Supporting Reggae, Dub and Roots Culture in Georgia',
      meta: [
        { name: 'description', content: 'Non-profit community creating an environment where reggae, dub and roots culture in Georgia can grow, connect and sound louder. Dub Fund supporting musicians.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#000000' },
        
        // Open Graph
        { property: 'og:site_name', content: 'Tbilisi Dub Lab' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dub.ge' },
        { property: 'og:title', content: 'Tbilisi Dub Lab - Supporting Reggae, Dub and Roots Culture in Georgia' },
        { property: 'og:description', content: 'Non-profit community creating an environment where reggae, dub and roots culture in Georgia can grow, connect and sound louder. Dub Fund supporting musicians.' },
        { property: 'og:image', content: 'https://dub.ge/og.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Tbilisi Dub Lab' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@tbilisidublab' },
        { name: 'twitter:title', content: 'Tbilisi Dub Lab - Supporting Reggae, Dub and Roots Culture in Georgia' },
        { name: 'twitter:description', content: 'Non-profit community creating an environment where reggae, dub and roots culture in Georgia can grow, connect and sound louder. Dub Fund supporting musicians.' },
        { name: 'twitter:image', content: 'https://dub.ge/og.jpg' },
        { name: 'twitter:image:alt', content: 'Tbilisi Dub Lab' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16.png' },
        { rel: 'canonical', href: 'https://dub.ge' }
      ]
    }
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
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})