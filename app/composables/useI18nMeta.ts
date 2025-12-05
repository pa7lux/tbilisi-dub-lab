export const useI18nMeta = () => {
  const { t, locale } = useI18n()
  const route = useRoute()

  const updateMeta = () => {
    const title = t('meta.title')
    const description = t('meta.description')
    const currentUrl = `https://dub.ge${route.path}`
    const ogImage = 'https://dub.ge/og.jpg'

    useHead({
      htmlAttrs: {
        lang: locale.value
      },
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: currentUrl },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
      ],
      link: [
        { rel: 'canonical', href: currentUrl }
      ]
    })
  }

  // Update meta on locale change
  watch(locale, updateMeta)
  
  // Initial update
  updateMeta()
}
