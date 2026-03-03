export const useLocaleStorage = () => {
  const { locale } = useI18n()

  const persist = (code: string) => {
    localStorage.setItem('user-locale', code)

    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `user_locale=${code}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
  }

  if (import.meta.client) {
    // URL is the source of truth with prefix_except_default strategy;
    // sync storage to match current locale, never override the URL
    persist(locale.value)

    watch(locale, (newLocale) => {
      persist(newLocale)
    })
  }
}
