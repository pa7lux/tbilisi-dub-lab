<script setup lang="ts">
import type { Partner } from '~/composables/usePartners'

interface Props {
  partner: Partner
}

defineProps<Props>()

const { posthog } = usePostHog()

// Track partner click
const handleClick = (partner: Partner) => {
  if (import.meta.client) {
    posthog.capture('partner_card_clicked', {
      partner_id: partner.id,
      partner_name: partner.name
    })
  }
}
</script>

<template>
  <a 
    :href="partner.instagram" 
    target="_blank" 
    rel="noopener noreferrer"
    class="partner-card"
    @click="handleClick(partner)"
  >
    <div class="partner-card__logo-wrapper">
      <img 
        :src="partner.logo" 
        :alt="partner.name"
        class="partner-card__logo"
      />
    </div>
    <h3 class="partner-card__name">{{ partner.name }}</h3>
  </a>
</template>

<style scoped>
/* PartnerCard Component Variables */
.partner-card {
  --card-bg: var(--color-dark);
  --card-border-radius: 0;
  --card-transition: transform 0.3s ease, box-shadow 0.3s ease;
  --card-cursor: pointer;
  --card-hover-transform: translateY(-8px);
  --card-hover-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  
  --logo-padding: 3rem;
  --logo-aspect-ratio: 1 / 1;
  --logo-border-radius: 0;
  --logo-object-fit: contain;
  --logo-bg: var(--color-dark);
  
  --name-font-size: clamp(1.5rem, 2.5vw, 2rem);
  --name-color: var(--color-white);
  --name-padding: 1.5rem;
  --name-margin: 0;
  
  /* Actual styles */
  display: block;
  background: var(--card-bg);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  transition: var(--card-transition);
  cursor: var(--card-cursor);
  text-decoration: none;
}

.partner-card:hover {
  transform: var(--card-hover-transform);
  box-shadow: var(--card-hover-shadow);
}

.partner-card__logo-wrapper {
  width: 100%;
  aspect-ratio: var(--logo-aspect-ratio);
  overflow: hidden;
  background: var(--logo-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--logo-padding);
}

.partner-card__logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: var(--logo-object-fit);
  display: block;
}

.partner-card__name {
  font-family: var(--font-body);
  font-size: var(--name-font-size);
  color: var(--name-color);
  padding: var(--name-padding);
  margin: var(--name-margin);
  text-align: center;
  font-weight: normal;
}
</style>
