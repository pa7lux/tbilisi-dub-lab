<script setup lang="ts">
const { locale } = useI18n()

const { data: hero } = await useAsyncData(
  `hero-${locale.value}`,
  () => queryContent(`/${locale.value}/home/hero`).findOne(),
  { watch: [locale] }
)

const { data: about } = await useAsyncData(
  `about-${locale.value}`,
  () => queryContent(`/${locale.value}/home/about`).findOne(),
  { watch: [locale] }
)

const { data: sections } = await useAsyncData(
  `sections-${locale.value}`,
  () => queryContent(`/${locale.value}/home/sections`).sort({ order: 1 }).find(),
  { watch: [locale] }
)
</script>

<template>
  <div class="home-page">
    <ClientOnly>
      <!-- Color Palette Section -->
      <section class="color-palette">
      <h3>Color Palette / ფერთა პალიტრა</h3>
      <div class="colors-grid">
        <div class="color-item">
          <div class="color-box" style="background: var(--color-dark);"></div>
          <div class="color-info">
            <span class="color-name">Dark</span>
            <span class="color-code">#1E202C</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-box" style="background: var(--color-red);"></div>
          <div class="color-info">
            <span class="color-name">Red</span>
            <span class="color-code">#E20D0D</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-box" style="background: var(--color-yellow);"></div>
          <div class="color-info">
            <span class="color-name">Yellow</span>
            <span class="color-code">#F0D817</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-box" style="background: var(--color-green);"></div>
          <div class="color-info">
            <span class="color-name">Green</span>
            <span class="color-code">#3EB308</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-box" style="background: var(--color-white); border: 2px solid #ddd;"></div>
          <div class="color-info">
            <span class="color-name">White</span>
            <span class="color-code">#FFFFFF</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Font Preview Section -->
    <section class="font-preview">
      <h3>Font Preview / შრიფტების ნიმუში</h3>
      <div class="font-sample font-heading">
        <span class="font-label">Big Shoulders Inline Display (Headings):</span>
        <p>The Quick Brown Fox Jumps Over The Lazy Dog</p>
        <p>სწრაფი ყავისფერი მელა ახტა ზარმაც ძაღლზე</p>
      </div>
      <div class="font-sample font-body-en">
        <span class="font-label">Abel (English Body Text):</span>
        <p>The quick brown fox jumps over the lazy dog. This is a sample of body text in English using the Abel font family.</p>
      </div>
      <div class="font-sample font-body-ka">
        <span class="font-label">MChNeobau (Georgian Body Text):</span>
        <p>სწრაფი ყავისფერი მელა ახტა ზარმაც ძაღლზე. ეს არის ქართული ტექსტის ნიმუში MChNeobau შრიფტით.</p>
      </div>
    </section>
    </ClientOnly>

    <!-- Hero Section -->
    <section v-if="hero" class="hero">
      <h1 class="hero-title">{{ hero.title }}</h1>
      <p class="hero-subtitle">{{ hero.subtitle }}</p>
      <div class="hero-description">
        <ContentRenderer :value="hero" />
      </div>
    </section>

    <!-- About Section -->
    <section v-if="about" class="section about">
      <h2>{{ about.title }}</h2>
      <div class="content">
        <ContentRenderer :value="about" />
      </div>
    </section>

    <!-- Additional Sections -->
    <section v-for="section in sections" :key="section._path" class="section">
      <h2>{{ section.title }}</h2>
      <div class="content">
        <ContentRenderer :value="section" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 100%;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  margin: 0 0 1rem 0;
  font-weight: 800;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin: 0 0 2rem 0;
  opacity: 0.9;
}

.hero-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.section.about {
  background: #fff;
  border: 2px solid #eee;
}

.section h2 {
  margin-top: 0;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

/* Стили для контента markdown */
.content :deep(p) {
  margin-bottom: 1rem;
}

.content :deep(ul),
.content :deep(ol) {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.content :deep(li) {
  margin-bottom: 0.5rem;
}

.content :deep(strong) {
  color: #333;
  font-weight: 600;
}

.content :deep(a) {
  color: #667eea;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.content :deep(a:hover) {
  border-bottom-color: #667eea;
}

/* Font Preview Styles */
.font-preview {
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  border: 2px dashed #999;
}

.font-preview h3 {
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
  font-size: 1.2rem;
}

.font-sample {
  background: white;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.font-sample:last-child {
  margin-bottom: 0;
}

.font-label {
  display: block;
  font-size: 0.85rem;
  color: #667eea;
  font-weight: bold;
  margin-bottom: 0.75rem;
  font-family: monospace;
}

.font-sample p {
  margin: 0.5rem 0 0 0;
  font-size: 1.3rem;
  line-height: 1.6;
}

.font-heading {
  border-left-color: #e74c3c;
}

.font-heading p {
  font-family: var(--font-heading);
  font-size: 2rem;
}

.font-body-en {
  border-left-color: #3498db;
}

.font-body-en p {
  font-family: var(--font-body-en);
}

.font-body-ka {
  border-left-color: #2ecc71;
}

.font-body-ka p {
  font-family: var(--font-body-ka);
}

/* Color Palette Styles */
.color-palette {
  background: #f0f0f0;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 2px dashed #999;
}

.color-palette h3 {
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: center;
  color: #666;
  font-size: 1.2rem;
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.color-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.color-box {
  width: 100%;
  height: 100px;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.color-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.color-name {
  font-weight: bold;
  color: #333;
  font-size: 0.95rem;
}

.color-code {
  font-family: monospace;
  color: #666;
  font-size: 0.85rem;
}
</style>

