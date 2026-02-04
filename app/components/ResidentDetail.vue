<script setup lang="ts">
import type { Resident } from '~/composables/useResidents'

interface Props {
  resident: Resident | null
}

defineProps<Props>()
</script>

<template>
  <div v-if="resident" class="resident-detail">
    <div class="resident-detail__header">
      <div class="resident-detail__image-wrapper">
        <img 
          :src="resident.image" 
          :alt="resident.name"
          class="resident-detail__image"
        />
      </div>
      <h2 class="resident-detail__name">{{ resident.name }}</h2>
    </div>

    <div class="resident-detail__content">
      <section class="resident-detail__section">
        <h3 class="resident-detail__section-title">{{ $t(resident.whoIsHeTitle) }}</h3>
        <p class="resident-detail__text">{{ resident.whoIsHe }}</p>
      </section>

      <section class="resident-detail__section">
        <h3 class="resident-detail__section-title">{{ $t(resident.whatHeDoesTitle) }}</h3>
        <div class="resident-detail__text-wrapper">
          <p 
            v-for="(paragraph, index) in resident.whatHeDoes.split('\n\n')" 
            :key="index"
            class="resident-detail__text"
          >
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section class="resident-detail__section">
        <h3 class="resident-detail__section-title">{{ $t(resident.partnershipTitle) }}</h3>
        <p class="resident-detail__text">{{ resident.partnership }}</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* ResidentDetail Component Variables */
.resident-detail {
  --detail-color: var(--color-white);
  
  --header-margin-bottom: 3rem;
  
  --image-wrapper-margin-bottom: 2rem;
  --image-border-radius: 0;
  --image-max-width: 400px;
  --image-width: 100%;
  --image-aspect-ratio: 1 / 1;
  --image-object-fit: cover;
  --image-filter: grayscale(100%);
  
  --name-font-size: clamp(2.5rem, 5vw, 4rem);
  --name-margin: 0;
  --name-color: var(--color-white);
  
  --section-margin-bottom: 2.5rem;
  
  --section-title-font-size: clamp(1.8rem, 3vw, 2.5rem);
  --section-title-margin-bottom: 1rem;
  --section-title-color: var(--color-yellow);
  
  --text-font-size: clamp(1.2rem, 2vw, 1.6rem);
  --text-line-height: 1.6;
  --text-margin-bottom: 1rem;
  --text-color: var(--color-white);
  
  /* Actual styles */
  color: var(--detail-color);
}

.resident-detail__header {
  margin-bottom: var(--header-margin-bottom);
}

.resident-detail__image-wrapper {
  margin-bottom: var(--image-wrapper-margin-bottom);
}

.resident-detail__image {
  width: var(--image-width);
  max-width: var(--image-max-width);
  aspect-ratio: var(--image-aspect-ratio);
  object-fit: var(--image-object-fit);
  border-radius: var(--image-border-radius);
  display: block;
  filter: var(--image-filter);
}

.resident-detail__name {
  font-family: var(--font-body);
  font-size: var(--name-font-size);
  margin: var(--name-margin);
  color: var(--name-color);
  font-weight: normal;
}

.resident-detail__content {
  display: flex;
  flex-direction: column;
  gap: var(--section-margin-bottom);
}

.resident-detail__section {
  margin-bottom: var(--section-margin-bottom);
}

.resident-detail__section:last-child {
  margin-bottom: 0;
}

.resident-detail__section-title {
  font-family: var(--font-body);
  font-size: var(--section-title-font-size);
  margin-bottom: var(--section-title-margin-bottom);
  color: var(--section-title-color);
  font-weight: normal;
}

.resident-detail__text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resident-detail__text {
  font-family: var(--font-body);
  font-size: var(--text-font-size);
  line-height: var(--text-line-height);
  margin-bottom: var(--text-margin-bottom);
  color: var(--text-color);
  font-weight: normal;
}

.resident-detail__text:last-child {
  margin-bottom: 0;
}
</style>
