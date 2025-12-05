<template>
  <div class="app-wrapper">
    <AppHeader />

    <main class="main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>

