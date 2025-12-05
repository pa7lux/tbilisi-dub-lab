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
  --content-gap: 4rem;
  --content-gap-tablet: 3rem;
  --content-grid-columns: 1fr auto;
  --content-grid-columns-tablet: 1fr;
  
  --title-font-size: clamp(4rem, 10vw, 10rem);
  --title-color: var(--color-white);
  --title-line-height: 0.9;
  --title-letter-spacing: 0.1em;
  
  --links-gap: 1.5rem;
  
  --link-font-size: clamp(2rem, 3.5vw, 4rem);
  --link-padding: 2rem 4rem;
  --link-min-width: 450px;
  --link-transition: all 0.2s;
  --link-hover-offset: -10px;
  --link-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  --link-red-bg: var(--color-red);
  --link-red-color: var(--color-white);
  --link-yellow-bg: var(--color-yellow);
  --link-yellow-color: var(--color-white);
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
  align-items: center;
}

.footer-left {
  display: flex;
  align-items: center;
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

.footer-right {
  display: flex;
  flex-direction: column;
  gap: var(--links-gap);
  align-items: flex-end;
}

.social-link {
  font-family: var(--font-body);
  font-size: var(--link-font-size);
  padding: var(--link-padding);
  text-decoration: none;
  transition: var(--link-transition);
  display: block;
  min-width: var(--link-min-width);
  text-align: center;
}

.social-link:hover {
  transform: translateX(var(--link-hover-offset));
  box-shadow: var(--link-hover-shadow);
}

.social-link--red {
  background: var(--link-red-bg);
  color: var(--link-red-color);
}

.social-link--yellow {
  background: var(--link-yellow-bg);
  color: var(--link-yellow-color);
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
    text-align: center;
  }
  
  .footer-left {
    justify-content: center;
  }
  
  .footer-right {
    align-items: stretch;
  }
  
  .social-link {
    min-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--footer-padding-mobile);
  }
}
</style>

