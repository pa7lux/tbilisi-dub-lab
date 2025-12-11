<script setup lang="ts">
// Update i18n meta tags dynamically
useI18nMeta()

// Restore locale from storage
useLocaleStorage()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
