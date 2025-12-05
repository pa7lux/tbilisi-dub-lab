<script setup lang="ts">
const { posthog } = usePostHog()

// Track email click
const trackEmailClick = () => {
  if (import.meta.client) {
    posthog.capture('email_link_clicked', {
      location: 'donation_info'
    })
  }
}
</script>

<template>
  <div class="donation-info">
    <h2 class="donation-title">{{ $t('donation.title') }}</h2>
    
    <p class="donation-description">
      {{ $t('donation.description') }}
    </p>

    <div class="donation-details">
      <div class="donation-section">
        <h3 class="donation-subtitle">{{ $t('donation.bankTitle') }}</h3>
        <div class="donation-data">
          <div class="donation-field">
            <span class="donation-label">IBAN:</span>
            <span class="donation-value">GE21BG0000000536190048</span>
          </div>
          <div class="donation-field">
            <span class="donation-label">{{ $t('donation.bankName') }}:</span>
            <span class="donation-value">{{ $t('donation.recipientName') }}</span>
          </div>
        </div>
      </div>

      <div class="donation-section">
        <h3 class="donation-subtitle">{{ $t('donation.otherTitle') }}</h3>
        <p class="donation-text">
          {{ $t('donation.otherDescription') }}
          <a 
            :href="`mailto:${$t('donation.email').replace('{\'@\'}', '@')}`" 
            class="donation-email"
            @click="trackEmailClick"
          >
            {{ $t('donation.email').replace('{\'@\'}', '@') }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* DonationInfo Component Variables */
.donation-info {
  --title-font-family: var(--font-heading);
  --title-font-size: clamp(3rem, 8vw, 8rem);
  --title-font-size-ka: clamp(2rem, 4.5vw, 4.5rem);
  --title-color: var(--color-white);
  --title-margin: 0 0 2rem 0;
  --title-letter-spacing: 0.05em;
  --title-letter-spacing-ka: 0.02em;
  
  --subtitle-font-family: var(--font-heading);
  --subtitle-font-size: clamp(2rem, 5vw, 4rem);
  --subtitle-font-size-ka: clamp(1.6rem, 3.5vw, 3rem);
  --subtitle-color: var(--color-yellow);
  --subtitle-margin: 0 0 1.5rem 0;
  --subtitle-letter-spacing: 0.03em;
  --subtitle-letter-spacing-ka: 0.02em;
  
  --description-font-size: clamp(1.5rem, 3vw, 2.5rem);
  --description-color: var(--color-white);
  --description-line-height: 1.6;
  --description-margin: 0 0 3rem 0;
  
  --section-margin: 0 0 3rem 0;
  
  --label-color: var(--color-green);
  --label-font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  --label-font-weight: bold;
  
  --value-color: var(--color-white);
  --value-font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  
  --field-margin: 0 0 1rem 0;
  --field-gap: 0.5rem;
  
  --text-font-size: clamp(1.3rem, 2.5vw, 2rem);
  --text-color: var(--color-white);
  --text-line-height: 1.6;
  --text-margin: 0;
  
  --email-color: var(--color-yellow);
  --email-hover-color: var(--color-white);
  --email-transition: color 0.2s;
  
  /* Actual styles */
  color: var(--value-color);
}

/* Georgian language overrides */
html[lang="ka"] .donation-info,
html[lang="ka-GE"] .donation-info {
  --title-font-family: var(--font-body-ka);
  --title-font-size: var(--title-font-size-ka);
  --title-letter-spacing: var(--title-letter-spacing-ka);

  --subtitle-font-family: var(--font-body-ka);
  --subtitle-font-size: var(--subtitle-font-size-ka);
  --subtitle-letter-spacing: var(--subtitle-letter-spacing-ka);
}



.donation-title {
  font-family: var(--title-font-family);
  font-size: var(--title-font-size);
  color: var(--title-color);
  margin: var(--title-margin);
  text-transform: uppercase;
  letter-spacing: var(--title-letter-spacing);
  font-weight: normal;
  line-height: 1.1;
}

.donation-description {
  font-family: var(--font-body);
  font-size: var(--description-font-size);
  color: var(--description-color);
  line-height: var(--description-line-height);
  margin: var(--description-margin);
  font-weight: normal;
}

.donation-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.donation-section {
  margin: var(--section-margin);
}

.donation-section:last-child {
  margin-bottom: 0;
}

.donation-subtitle {
  font-family: var(--subtitle-font-family);
  font-size: var(--subtitle-font-size);
  color: var(--subtitle-color);
  margin: var(--subtitle-margin);
  text-transform: uppercase;
  letter-spacing: var(--subtitle-letter-spacing);
  font-weight: normal;
  line-height: 1.1;
}

.donation-data {
  display: flex;
  flex-direction: column;
  gap: var(--field-gap);
}

.donation-field {
  display: flex;
  flex-direction: column;
  gap: var(--field-gap);
  margin: var(--field-margin);
}

.donation-label {
  font-family: var(--font-body);
  font-size: var(--label-font-size);
  color: var(--label-color);
  font-weight: var(--label-font-weight);
}

.donation-value {
  font-family: var(--font-body);
  font-size: var(--value-font-size);
  color: var(--value-color);
  word-break: break-all;
}

.donation-text {
  font-family: var(--font-body);
  font-size: var(--text-font-size);
  color: var(--text-color);
  line-height: var(--text-line-height);
  margin: var(--text-margin);
  font-weight: normal;
}

.donation-email {
  color: var(--email-color);
  text-decoration: none;
  transition: var(--email-transition);
}

.donation-email:hover {
  color: var(--email-hover-color);
}

/* Responsive */
@media (max-width: 768px) {
  .donation-field {
    gap: 0.3rem;
  }
}
</style>

