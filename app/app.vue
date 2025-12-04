<script setup lang="ts">
const { locale } = useI18n()

// Update html lang attribute when locale changes
useHead({
  htmlAttrs: {
    lang: locale
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
