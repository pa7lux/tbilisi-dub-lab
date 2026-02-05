<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { usePartners } from '~/composables/usePartners'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { posthog } = usePostHog()
const { partners } = usePartners()

// Swiper modules
const modules = [Navigation, Pagination, Autoplay]

// Track swiper initialization
const isSwiperReady = ref(false)

const isContactOpen = ref(false)

const onSwiperInit = () => {
  isSwiperReady.value = true
}

const openContact = () => {
  isContactOpen.value = true
  
  // Track partner contact button click
  if (import.meta.client) {
    posthog.capture('partner_contact_clicked')
  }
}

const closeContact = () => {
  isContactOpen.value = false
}
</script>

<template>
  <section class="partners-section">
    <div class="partners-container">
      <h2 class="partners-title">PARTNERS</h2>
      <p class="partners-description">{{ $t('partners.description') }}</p>
      
      <div class="partners-slider-wrapper">
        <div class="partners-navigation">
          <button class="nav-button nav-button--prev">‹</button>
          <button class="nav-button nav-button--next">›</button>
        </div>
        
        <Swiper
          :modules="modules"
          :navigation="{
            prevEl: '.partners-section .nav-button--prev',
            nextEl: '.partners-section .nav-button--next',
          }"
          :slides-per-view="1"
          :space-between="20"
          :pagination="{ clickable: true }"
          :breakpoints="{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }"
          class="partners-swiper"
          :class="{ 'swiper-ready': isSwiperReady }"
          @swiper="onSwiperInit"
        >
          <SwiperSlide v-for="partner in partners" :key="partner.id">
            <PartnerCard :partner="partner" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="partners-cta">
        <p class="partners-cta__text">{{ $t('partners.callToAction') }}</p>
        <button @click="openContact" class="partners-cta__button">
          {{ $t('partners.contactButton') }}
        </button>
      </div>
    </div>

    <!-- Contact Overlay - slides from right -->
    <Overlay 
      :is-open="isContactOpen" 
      direction="right" 
      overlay-type="contact" 
      @close="closeContact"
    >
      <ContactForm />
    </Overlay>
  </section>
</template>

<style scoped>
/* PartnersSection Component Variables */
.partners-section {
  --section-bg: var(--color-red);
  --section-padding: 4rem 2rem;
  --section-padding-mobile: 3rem 1.5rem;
  --section-min-height: 100vh;
  
  --container-max-width: 1600px;
  
  --title-color: var(--color-white);
  --title-margin-bottom: 1rem;
  --title-text-align: left;
  
  --description-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --description-color: var(--color-white);
  --description-margin-bottom: 2rem;
  --description-line-height: 1.4;
  
  --swiper-margin-bottom: 2rem;
  --swiper-navigation-color: var(--color-yellow);
  --swiper-pagination-color: var(--color-yellow);
  --swiper-navigation-size: 40px;
  --swiper-navigation-gap: 0.25rem;
  
  --cta-padding: 0;
  --cta-gap: 2rem;
  --cta-gap-mobile: 1.5rem;
  --cta-flex-direction: row;
  --cta-flex-direction-mobile: column;
  --cta-align-items: center;
  
  --cta-text-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --cta-text-color: var(--color-white);
  --cta-text-margin: 0;
  
  --cta-button-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --cta-button-padding: 0.5rem 2rem;
  --cta-button-padding-mobile: 0.7rem 1.8rem;
  --cta-button-bg: var(--color-yellow);
  --cta-button-color: var(--color-dark);
  --cta-button-border-radius: 0;
  --cta-button-transition: all 0.2s;
  --cta-button-hover-transform: translateY(-2px);
  --cta-button-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  /* Actual styles */
  background: var(--section-bg);
  width: 100%;
  min-height: var(--section-min-height);
  padding: var(--section-padding);
  display: flex;
  align-items: center;
}

.partners-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  width: 100%;
}

.partners-title {
  font-family: var(--font-heading);
  font-size: var(--title-font-size);
  color: var(--title-color);
  margin: 0 0 var(--title-margin-bottom) 0;
  text-align: var(--title-text-align);
  font-weight: normal;
  letter-spacing: 0.05em;
}

.partners-description {
  font-family: var(--font-body);
  font-size: var(--description-font-size);
  color: var(--description-color);
  margin: 0 0 var(--description-margin-bottom) 0;
  line-height: var(--description-line-height);
  font-weight: normal;
}

.partners-slider-wrapper {
  position: relative;
}

.partners-navigation {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: var(--swiper-navigation-gap);
  z-index: 10;
}

.nav-button {
  width: var(--swiper-navigation-size);
  height: var(--swiper-navigation-size);
  background: transparent;
  border: none;
  color: var(--swiper-navigation-color);
  font-size: 48px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.nav-button:hover {
  color: var(--color-white);
  transform: scale(1.1);
}

.nav-button.swiper-button-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.partners-swiper {
  margin-bottom: var(--swiper-margin-bottom);
  padding-bottom: 3rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.partners-swiper.swiper-ready {
  opacity: 1;
}

/* Swiper pagination */
.partners-swiper :deep(.swiper-pagination) {
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  text-align: center;
  bottom: calc((var(--swiper-navigation-size) / 2) - 6px);
}

.partners-swiper :deep(.swiper-pagination-bullet) {
  background: var(--color-white);
  opacity: 0.5;
  width: 12px;
  height: 12px;
}

.partners-swiper :deep(.swiper-pagination-bullet-active) {
  background: var(--swiper-pagination-color);
  opacity: 1;
}

.partners-cta {
  padding: var(--cta-padding);
  display: flex;
  flex-direction: var(--cta-flex-direction);
  align-items: var(--cta-align-items);
  gap: var(--cta-gap);
  flex-wrap: wrap;
}

.partners-cta__text {
  font-family: var(--font-body);
  font-size: var(--cta-text-font-size);
  color: var(--cta-text-color);
  margin: var(--cta-text-margin);
  font-weight: normal;
}

.partners-cta__button {
  font-family: var(--font-body);
  font-size: var(--cta-button-font-size);
  padding: var(--cta-button-padding);
  background: var(--cta-button-bg);
  color: var(--cta-button-color);
  border: none;
  border-radius: var(--cta-button-border-radius);
  cursor: pointer;
  transition: var(--cta-button-transition);
  font-weight: normal;
}

.partners-cta__button:hover {
  transform: var(--cta-button-hover-transform);
  box-shadow: var(--cta-button-hover-shadow);
}

/* Responsive */
@media (max-width: 768px) {
  .partners-section {
    padding: var(--section-padding-mobile);
  }
  
  .partners-navigation {
    display: none;
  }
  
  .partners-cta {
    flex-direction: var(--cta-flex-direction-mobile);
    gap: var(--cta-gap-mobile);
  }
  
  .partners-cta__button {
    padding: var(--cta-button-padding-mobile);
    width: 100%;
  }
}
</style>
