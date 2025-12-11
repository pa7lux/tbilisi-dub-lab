export const useLocaleStorage = () => {
  const { locale, setLocale } = useI18n()
  const router = useRouter()

  // Restore locale from storage on mount
  onMounted(() => {
    if (import.meta.client) {
      const storedLocale = localStorage.getItem('user-locale')
      const currentPath = router.currentRoute.value.path
      const localeFromPath = currentPath.startsWith('/ka') ? 'ka' : 'en'
      
      // If there's a stored locale and it differs from URL, use stored
      if (storedLocale && storedLocale !== localeFromPath) {
        setLocale(storedLocale as 'en' | 'ka')
      } else if (!storedLocale) {
        // Store the current locale
        localStorage.setItem('user-locale', localeFromPath)
      }
    }
  })

  // Function to persist locale
  const persistLocale = (localeCode: string) => {
    if (import.meta.client) {
      localStorage.setItem('user-locale', localeCode)
      
      const expires = new Date()
      expires.setFullYear(expires.getFullYear() + 1)
      document.cookie = `user_locale=${localeCode}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
    }
  }

  return {
    persistLocale
  }
}
