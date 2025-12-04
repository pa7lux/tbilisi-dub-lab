<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter((i: any) => i.code !== locale.value)
})

const switchLocale = (code: string) => {
  setLocale(code)
}
</script>

<template>
  <div class="app-wrapper">
    <header class="header">
      <div class="container">
        <nav class="nav">
          <NuxtLink :to="localePath('/')" class="logo">
            <h1>{{ t('nav.logo') }}</h1>
          </NuxtLink>
          
          <div class="lang-switcher">
            <button 
              v-for="loc in availableLocales" 
              :key="loc.code"
              @click="switchLocale(loc.code)"
              class="lang-btn"
              :title="t('lang.switch')"
            >
              {{ loc.name }}
            </button>
          </div>
        </nav>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} {{ t('nav.logo') }}. {{ t('footer.copyright') }}.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: #000;
  color: #fff;
  padding: 1.5rem 0;
  border-bottom: 2px solid #333;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
  color: #fff;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
}

.lang-switcher {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.main {
  flex: 1;
  padding: 3rem 0;
}

.footer {
  background: #111;
  color: #888;
  padding: 2rem 0;
  text-align: center;
  margin-top: auto;
}

.footer p {
  margin: 0;
}
</style>

