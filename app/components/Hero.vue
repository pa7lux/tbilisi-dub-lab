<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">{{ $t('hero.title') }}</h1>
      <h2 class="hero-subtitle">{{ $t('hero.subtitle') }}</h2>
      <div class="hero-center">
        <img src="/images/logo_lion.svg" :alt="$t('hero.logoAlt')" class="hero-logo" />
      </div>
      <div class="hero-tag hero-tag--green">{{ $t('hero.tagGreen') }}</div>
      <div class="hero-tag hero-tag--yellow">{{ $t('hero.tagYellow') }}</div>
      <div class="hero-tag hero-tag--red">{{ $t('hero.tagRed') }}</div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Component Variables */
.hero {
  /* Desktop sizes */
  --hero-padding: 4rem 2rem;
  --hero-content-max-width: 1600px;
  --hero-content-gap: 3rem 1rem;
  
  /* Title sizes */
  --hero-title-size-desktop: clamp(10rem, 22vw, 22rem);
  --hero-title-size-tablet: clamp(8rem, 20vw, 18rem);
  --hero-title-size-mobile: clamp(6rem, 18vw, 14rem);
  --hero-title-line-height-desktop: 0.9;
  --hero-title-line-height-mobile: 1;
  --hero-title-letter-spacing: 0.05em;
  --hero-title-word-spacing-1: -0.17em;
  --hero-title-word-spacing-2: -0.18em;
  
  /* Tag sizes */
  --hero-tag-size-desktop: clamp(4rem, 6vw, 6rem);
  --hero-tag-size-tablet: clamp(2rem, 5vw, 4rem);
  --hero-tag-size-mobile: clamp(1.8rem, 5vw, 3rem);
  --hero-tag-padding-desktop: 0.5rem 2.5rem;
  --hero-tag-padding-tablet: 1rem 3rem;
  --hero-tag-padding-mobile: 0.75rem 2rem;
  --hero-tag-letter-spacing: 0.02em;
  
  /* Tag transforms */
  --hero-tag-yellow-offset: 5rem;
  --hero-tag-red-offset: 2rem;
  
  /* Responsive sizes */
  --hero-padding-tablet: 2rem 1rem;
  --hero-padding-mobile: 1.5rem 0.75rem;
  --hero-content-max-width-tablet: 600px;
  --hero-content-gap-tablet: 2rem;
  --hero-content-gap-mobile: 1.5rem;
  --hero-logo-max-width-tablet: 300px;
  --hero-logo-max-width-mobile: 200px;

  /* Actual styles */
  background: var(--color-dark);
  min-height: calc(100dvh - var(--header-height));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--hero-padding);
}

.hero-content {
  width: 100%;
  max-width: var(--hero-content-max-width);
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  grid-template-rows: auto calc(clamp(4rem, 6vw, 6rem) + 1rem) auto;
  gap: var(--hero-content-gap);
  align-items: start;
  justify-items: start;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: var(--hero-title-size-desktop);
  color: var(--color-white);
  margin: 0;
  line-height: var(--hero-title-line-height-desktop);
  font-weight: normal;
  letter-spacing: var(--hero-title-letter-spacing);
  word-spacing: var(--hero-title-word-spacing-1);
  grid-row: 1;
  grid-column: 1;
  align-self: end;
}

.hero-subtitle {
  font-family: var(--font-heading);
  font-size: var(--hero-title-size-desktop);
  color: var(--color-white);
  margin: 0;
  line-height: var(--hero-title-line-height-desktop);
  font-weight: normal;
  letter-spacing: var(--hero-title-letter-spacing);
  white-space: nowrap;
  word-spacing: var(--hero-title-word-spacing-2);
  grid-row: 2/4;
  grid-column: 1;
}

.hero-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.hero-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  filter: invert(1);
}

.hero-tag {
  font-family: var(--font-body);
  font-size: var(--hero-tag-size-desktop);
  padding: var(--hero-tag-padding-desktop);
  font-weight: normal;
  letter-spacing: var(--hero-tag-letter-spacing);
  line-height: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.hero-tag--green {
  background: var(--color-green);
  color: var(--color-white);
  align-self: end;
}

.hero-tag--yellow {
  background: var(--color-yellow);
  color: var(--color-dark);
  grid-row: 2;
  grid-column: 2/-1;
  transform: translateX(var(--hero-tag-yellow-offset));
}

.hero-tag--red {
  background: var(--color-red);
  color: var(--color-white);
  grid-row: 3;
  grid-column: 3;
  transform: translateX(var(--hero-tag-red-offset));
}

@media (max-width: 1200px) { 
  .hero-content {
    grid-template-columns: min-content min-content 1fr;
    grid-template-rows: auto auto auto;
    gap: var(--hero-content-gap-tablet);
    align-items: start;
    justify-items: start;
  }

  .hero-title {
    grid-row: 1;
    grid-column: 1 / 3;
  }

  .hero-subtitle {
    grid-row: 2;
    grid-column: 1 / 3;
  }

  .hero-center {
    grid-row: 1 / 3;
    grid-column: 3;
    align-self: center;
    justify-self: center;
  }

  .hero-tag--green {
    grid-row: 3;
    grid-column: 1;
  }

  .hero-tag--yellow {
    grid-row: 3;
    grid-column: 2;
    transform: none;
  }

  .hero-tag--red {
    grid-row: 3;
    grid-column: 3;
    transform: none;
  }
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: min-content min-content 1fr;
    grid-template-rows: auto auto auto auto auto;
    gap: var(--hero-content-gap-tablet);
    align-items: start;
    justify-items: start;
  }

  .hero-tag--green {
    grid-row: 3;
    grid-column: 1;
  }

  .hero-tag--yellow {
    grid-row: 4;
    grid-column: 1;
  }

  .hero-tag--red {
    grid-row: 5;
    grid-column: 1;
  }

}

/* Responsive - Tablet and Mobile */
@media (max-width: 768px) {
  .hero {
    padding: var(--hero-padding-tablet);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--hero-content-gap-tablet);
    max-width: var(--hero-content-max-width-tablet);
  }

  .hero-center {
    order: -1;
    width: 100%;
    max-width: var(--hero-logo-max-width-tablet);
  }

  .hero-title,
  .hero-subtitle {
    font-size: var(--hero-title-size-tablet);
    text-align: center;
    width: 100%;
    letter-spacing: var(--hero-title-letter-spacing);
    line-height: var(--hero-title-line-height-mobile);
    white-space: normal;
    font-weight: normal;
    margin: 0;
  }

  .hero-tag {
    font-size: var(--hero-tag-size-tablet);
    padding: var(--hero-tag-padding-tablet);
    width: 100%;
    transform: none;
  }

  .hero-tag--green,
  .hero-tag--yellow,
  .hero-tag--red {
    align-self: stretch;
  }
}

/* Responsive - Small Mobile */
@media (max-width: 480px) {
  .hero {
    padding: var(--hero-padding-mobile);
  }

  .hero-content {
    gap: var(--hero-content-gap-mobile);
  }

  .hero-center {
    max-width: var(--hero-logo-max-width-mobile);
  }

  .hero-title,
  .hero-subtitle {
    font-size: var(--hero-title-size-mobile);
    letter-spacing: var(--hero-title-letter-spacing);
    line-height: var(--hero-title-line-height-mobile);
    white-space: normal;
    font-weight: normal;
    margin: 0;
  }

  .hero-tag {
    font-size: var(--hero-tag-size-mobile);
    padding: var(--hero-tag-padding-mobile);
  }
}
</style>

