<template>
  <section class="intro-section">
    <div class="intro-content">
      <div class="intro-text">
        <p>{{ $t('intro.paragraph1') }}</p>
        <p>{{ $t('intro.paragraph2') }}</p>
      </div>
      
      <div class="intro-buttons">
        <a :href="$t('intro.donateUrl')" class="intro-btn intro-btn--green">{{ $t('intro.donateText') }}</a>
        <a :href="$t('intro.contactUrl')" class="intro-btn intro-btn--yellow">{{ $t('intro.contactText') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* IntroSection Component Variables */
.intro-section {
  --intro-bg: var(--color-red);
  --intro-padding: 5rem 2rem;
  --intro-padding-mobile: 3rem 1.5rem;
  --intro-min-height: 100vh;
  
  --content-max-width: 1600px;
  --content-gap: 3rem;
  
  --text-gap: 2rem;
  --text-font-size: clamp(1.8rem, 4vw, 5rem);
  --text-line-height: 1.5;
  --text-color: var(--color-white);
  --text-margin: 0 0 2rem 0;
  
  --buttons-gap: 2rem;
  
  --btn-font-size: clamp(3rem, 5vw, 5rem);
  --btn-font-size-tablet: clamp(2rem, 5vw, 4rem);
  --btn-font-size-mobile: clamp(1.5rem, 4.5vw, 2.5rem);
  --btn-padding: 0.5rem 2.5rem;
  --btn-padding-tablet: 1rem 3rem;
  --btn-padding-mobile: 0.5rem 1.5rem;
  --btn-letter-spacing: 0.02em;
  --btn-transition: all 0.2s;
  --btn-hover-offset: -2px;
  --btn-hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  --btn-green-bg: var(--color-green);
  --btn-green-color: var(--color-white);
  --btn-yellow-bg: var(--color-yellow);
  --btn-yellow-color: var(--color-dark);
  
  /* Actual styles */
  background: var(--intro-bg);
  width: 100%;
  min-height: var(--intro-min-height);
  padding: var(--intro-padding);
  display: flex;
  align-items: center;
}

.intro-content {
  max-width: var(--content-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--content-gap);
}

.intro-text {
  display: flex;
  flex-direction: column;
  gap: var(--text-gap);
}

.intro-text p {
  font-family: var(--font-body);
  font-size: var(--text-font-size);
  line-height: var(--text-line-height);
  color: var(--text-color);
  margin: var(--text-margin);
  font-weight: normal;
}

.intro-text p:last-child {
  margin-bottom: 0;
}

.intro-buttons {
  display: flex;
  gap: var(--buttons-gap);
  flex-wrap: wrap;
}

.intro-btn {
  font-family: var(--font-body);
  font-size: var(--btn-font-size);
  padding: var(--btn-padding);
  letter-spacing: var(--btn-letter-spacing);
  line-height: 1;
  border: none;
  cursor: pointer;
  transition: var(--btn-transition);
  font-weight: normal;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.intro-btn:hover {
  transform: translateY(var(--btn-hover-offset));
  box-shadow: var(--btn-hover-shadow);
}

.intro-btn--green {
  background: var(--btn-green-bg);
  color: var(--btn-green-color);
}

.intro-btn--yellow {
  background: var(--btn-yellow-bg);
  color: var(--btn-yellow-color);
}

/* Responsive */
@media (max-width: 768px) {
  .intro-section {
    padding: var(--intro-padding-mobile);
  }
  
  .intro-buttons {
    flex-direction: column;
    align-items: stretch;
  }
  
  .intro-btn {
    font-size: var(--btn-font-size-tablet);
    padding: var(--btn-padding-tablet);
    width: 100%;
  }
}

/* Responsive - Small Mobile */
@media (max-width: 480px) {
  .intro-btn {
    font-size: var(--btn-font-size-mobile);
    padding: var(--btn-padding-mobile);
  }
}
</style>

