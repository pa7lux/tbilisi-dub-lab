<script setup lang="ts">
const { locale, setLocale } = useI18n()
const { posthog } = usePostHog()

const menuOpen = ref(false)

const switchLocale = (code: string) => {
  setLocale(code as 'en' | 'ka')
  
  // Persist locale choice
  if (import.meta.client) {
    localStorage.setItem('user-locale', code)
    
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    document.cookie = `user_locale=${code}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
    
    // Track language switch event
    posthog.capture('language_switched', {
      from_language: locale.value,
      to_language: code
    })
  }
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="header-controls">
        <button 
          @click="switchLocale('en')"
          class="flag-btn"
          :class="{ active: locale === 'en' }"
          :title="$t('header.langSwitchEn')"
        >
          🇬🇧
        </button>
        <button 
          @click="switchLocale('ka')"
          class="flag-btn"
          :class="{ active: locale === 'ka' }"
          :title="$t('header.langSwitchKa')"
        >
          🇬🇪
        </button>
        <!-- <button 
          @click="toggleMenu"
          class="hamburger"
          :class="{ open: menuOpen }"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Header Component Variables */
.header {
  --header-bg: var(--color-dark);
  --header-padding: 1rem 2rem;
  --header-z-index: 1000;
  
  --controls-gap: 1rem;
  
  --flag-size: 1.8rem;
  --flag-padding: 0.2rem;
  --flag-opacity-default: 1;
  --flag-opacity-active: 0.4;
  --flag-scale-hover: 1.1;
  --flag-transition: all 0.2s;
  
  /* Actual styles */
  background: var(--header-bg);
  padding: var(--header-padding);
  position: sticky;
  top: 0;
  z-index: var(--header-z-index);
}

.header-content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: var(--controls-gap);
}

.flag-btn {
  background: transparent;
  border: none;
  font-size: var(--flag-size);
  cursor: pointer;
  padding: var(--flag-padding);
  transition: var(--flag-transition);
  opacity: var(--flag-opacity-default);
  line-height: 1;
}

.flag-btn:hover {
  transform: scale(var(--flag-scale-hover));
}

.flag-btn.active {
  opacity: var(--flag-opacity-active);
  cursor: default;
  pointer-events: none;
}

.flag-btn.active:hover {
  transform: none;
}

/* .hamburger {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
} */

/* .hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--color-white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger:hover span {
  background: var(--color-yellow);
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
} */
</style>

