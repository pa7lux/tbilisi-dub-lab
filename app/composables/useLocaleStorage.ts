export const useLocaleStorage = () => {
  const { locale, setLocale } = useI18n()
  const route = useRoute()

  // Restore locale from storage immediately (before initial render)
  if (import.meta.client) {
    const storedLocale = localStorage.getItem('user-locale')
    const currentPath = route.path
    const localeFromPath = currentPath.startsWith('/ka') ? 'ka' : 'en'
    
    // If there's a stored locale and it differs from URL, use stored
    if (storedLocale && storedLocale !== localeFromPath) {
      // Synchronously set locale to prevent wrong language flash
      setLocale(storedLocale as 'en' | 'ka')
    } else if (!storedLocale) {
      // Store the current locale
      localStorage.setItem('user-locale', localeFromPath)
    }
  }

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
