<script setup lang="ts">
const socialLinks = [
  {
    nameKey: 'footer.instagram',
    url: 'https://instagram.com/tbilisidublab',
    color: 'red'
  },
  {
    nameKey: 'footer.facebook',
    url: 'https://facebook.com/tbilisidublab',
    color: 'yellow'
  },
  {
    nameKey: 'footer.tiktok',
    url: 'https://tiktok.com/@tbilisidublab',
    color: 'green'
  }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h2 class="footer-title">{{ $t('footer.title') }}</h2>
        <p class="footer-subtitle">
          {{ $t('footer.subtitlePrefix') }} 
          <a :href="`mailto:${$t('footer.email').replace('{\'@\'}', '@')}`" class="footer-email">
            {{ $t('footer.email').replace('{\'@\'}', '@') }}
          </a>
        </p>
      </div>
      
      <div class="footer-right">
        <a 
          v-for="link in socialLinks" 
          :key="link.nameKey"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          :class="`social-link--${link.color}`"
        >
          {{ $t(link.nameKey) }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Component Variables */
.footer {
  --footer-bg: var(--color-dark);
  --footer-padding: 4rem 2rem;
  --footer-padding-mobile: 3rem 1.5rem;
  
  --content-max-width: 1600px;
  --content-gap: 1rem;
  --content-gap-tablet: 0.5rem;
  --content-grid-columns: min-content auto;
  --content-grid-columns-tablet: 1fr;
  
  --title-font-size: clamp(4rem, 20vw, 22rem);
  --title-color: var(--color-white);
  --title-line-height: 0.9;
  --title-letter-spacing: 0.1em;
  
  --subtitle-font-size: clamp(1rem, 2vw, 1.5rem);
  --subtitle-color: var(--color-white);
  --subtitle-margin-top: 1rem;
  
  --email-color: var(--color-yellow);
  --email-color-hover: var(--color-white);
  --email-transition: color 0.2s;
  
  --links-gap: 1.5rem;
  --links-gap-tablet: 1rem;
  
  --link-font-size: clamp(4rem, 6vw, 6rem);
  --link-font-size-tablet: clamp(2rem, 5vw, 4rem);
  --link-font-size-mobile: clamp(1.5rem, 4.5vw, 2.5rem);
  --link-padding: 0.5rem 2.5rem;
  --link-padding-tablet: 1rem 3rem;
  --link-padding-mobile: 0.5rem 1.5rem;
  --link-letter-spacing: 0.02em;
  --link-transition: all 0.2s;
  --link-hover-offset: -10px;
  --link-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  --link-red-bg: var(--color-red);
  --link-red-color: var(--color-white);
  --link-yellow-bg: var(--color-yellow);
  --link-yellow-color: var(--color-dark);
  --link-green-bg: var(--color-green);
  --link-green-color: var(--color-white);
  
  /* Actual styles */
  background: var(--footer-bg);
  width: 100%;
  padding: var(--footer-padding);
}

.footer-content {
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: var(--content-grid-columns);
  gap: var(--content-gap);
  align-items: start;
  justify-items: start;
}

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-title {
  font-family: var(--font-heading);
  font-size: var(--title-font-size);
  color: var(--title-color);
  margin: 0;
  line-height: var(--title-line-height);
  font-weight: normal;
  letter-spacing: var(--title-letter-spacing);
  text-transform: uppercase;
}

.footer-subtitle {
  font-family: var(--font-body);
  font-size: var(--subtitle-font-size);
  color: var(--subtitle-color);
  margin: var(--subtitle-margin-top) 0 0 0.5em;
  line-height: 1.4;
  font-weight: normal;
}

.footer-email {
  color: var(--email-color);
  text-decoration: none;
  transition: var(--email-transition);
}

.footer-email:hover {
  color: var(--email-color-hover);
}

.footer-right {
  display: grid;
  gap: var(--links-gap);
  width: 100%;
  justify-items: start;
}

.social-link {
  font-family: var(--font-body);
  font-size: var(--link-font-size);
  padding: var(--link-padding);
  letter-spacing: var(--link-letter-spacing);
  line-height: 1;
  text-decoration: none;
  transition: var(--link-transition);
  display: grid;
  white-space: nowrap;
  text-align: center;
}

.social-link:hover {
  transform: translateX(var(--link-hover-offset));
  box-shadow: var(--link-hover-shadow);
}

.social-link--red {
  background: var(--link-red-bg);
  color: var(--link-red-color);
  transform: translateX(-0.5rem);
}

.social-link--yellow {
  background: var(--link-yellow-bg);
  color: var(--link-yellow-color);
  justify-self: end;
}

.social-link--green {
  background: var(--link-green-bg);
  color: var(--link-green-color);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: var(--content-grid-columns-tablet);
    gap: var(--content-gap-tablet);
    align-self: start;
  }
  
  .footer-left {
    align-items: start;
    margin-bottom: 1rem;
  }
  
  .footer-right {
    align-items: center;
  }

  .social-link--red  {
    transform: none;
  }

  .social-link--yellow {
    justify-self: start;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--footer-padding-mobile);
  }
  
  .footer-right {
    align-items: stretch;
  }
  
  .social-link {
    font-size: var(--link-font-size-tablet);
    padding: var(--link-padding-tablet);
    width: 100%;
  }
}

/* Responsive - Small Mobile */
@media (max-width: 480px) {
  .social-link {
    font-size: var(--link-font-size-mobile);
    padding: var(--link-padding-mobile);
  }

  .footer-subtitle {
    margin-left: 0;
  }
}
</style>

