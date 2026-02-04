<script setup lang="ts">
import type { Resident } from '~/composables/useResidents'

interface Props {
  resident: Resident
}

defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()
</script>

<template>
  <div class="resident-card" @click="emit('click')">
    <div class="resident-card__image-wrapper">
      <img 
        :src="resident.image" 
        :alt="resident.name"
        class="resident-card__image"
      />
    </div>
    <h3 class="resident-card__name">{{ resident.name }}</h3>
  </div>
</template>

<style scoped>
/* ResidentCard Component Variables */
.resident-card {
  --card-bg: var(--color-dark);
  --card-border-radius: 0;
  --card-transition: transform 0.3s ease, box-shadow 0.3s ease;
  --card-cursor: pointer;
  --card-hover-transform: translateY(-8px);
  --card-hover-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  
  --image-aspect-ratio: 1 / 1;
  --image-border-radius: 0;
  --image-object-fit: cover;
  --image-filter: grayscale(100%);
  
  --name-font-size: clamp(1.5rem, 2.5vw, 2rem);
  --name-color: var(--color-white);
  --name-padding: 1.5rem;
  --name-margin: 0;
  
  /* Actual styles */
  background: var(--card-bg);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  transition: var(--card-transition);
  cursor: var(--card-cursor);
}

.resident-card:hover {
  transform: var(--card-hover-transform);
  box-shadow: var(--card-hover-shadow);
}

.resident-card__image-wrapper {
  width: 100%;
  aspect-ratio: var(--image-aspect-ratio);
  overflow: hidden;
}

.resident-card__image {
  width: 100%;
  height: 100%;
  object-fit: var(--image-object-fit);
  display: block;
  filter: var(--image-filter);
}

.resident-card__name {
  font-family: var(--font-body);
  font-size: var(--name-font-size);
  color: var(--name-color);
  padding: var(--name-padding);
  margin: var(--name-margin);
  text-align: center;
  font-weight: normal;
}
</style>
