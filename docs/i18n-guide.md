# i18n Guide

## Core Principles

The site uses Nuxt i18n for multilingual support with two languages:
- **English (en)** - primary language
- **ქართული (ka)** - Georgian language

## Using in Components

### Getting Current Language

```vue
<script setup>
const { locale } = useI18n()
// locale.value = 'en' or 'ka'
</script>
```

### Translating UI Text

```vue
<script setup>
const { t } = useI18n()
</script>

<template>
  <!-- Use t() for translations from locales/*.json -->
  <h1>{{ t('nav.logo') }}</h1>
  <p>{{ t('footer.copyright') }}</p>
</template>
```

### Switching Language

```vue
<script setup>
const { setLocale } = useI18n()

const switchToGeorgian = () => {
  setLocale('ka')
}
</script>
```

### Creating Links with Language

```vue
<template>
  <!-- Automatically adds language prefix -->
  <NuxtLink :to="localePath('/')">Home</NuxtLink>
  <NuxtLink :to="localePath('/about')">About</NuxtLink>
</template>
```

## Working with Content

### Loading Content by Language

```vue
<script setup>
const { locale } = useI18n()

// Dynamic content loading based on language
const { data } = await useAsyncData(
  `unique-key-${locale.value}`,
  () => queryContent(`/${locale.value}/home/hero`).findOne(),
  { watch: [locale] } // Important! Updates data on language change
)
</script>
```

### Content Structure

```
content/
├── en/
│   └── home/
│       ├── hero.md
│       └── sections/
│           └── events.md
└── ka/
    └── home/
        ├── hero.md
        └── sections/
            └── events.md
```

## Adding Translations

### 1. UI Translations

Edit `locales/en.json` and `locales/ka.json`:

```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "buttons": {
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

### 2. Content Translations

Create identical files for each language with translated content:

**content/en/page.md:**
```markdown
---
title: My Page
---
Content in English
```

**content/ka/page.md:**
```markdown
---
title: ჩემი გვერდი
---
Content in Georgian
```

## Pluralization

```json
{
  "items": {
    "count": "no items | one item | {count} items"
  }
}
```

```vue
<template>
  <p>{{ t('items.count', { count: 5 }) }}</p>
  <!-- Result: "5 items" -->
</template>
```

## Formatting Dates and Numbers

```vue
<script setup>
const { d, n } = useI18n()
const date = new Date()
</script>

<template>
  <!-- Date -->
  <p>{{ d(date, 'long') }}</p>
  
  <!-- Number -->
  <p>{{ n(100, 'currency') }}</p>
</template>
```

## Composables

### useLocaleHead

For SEO optimization add to head:

```vue
<script setup>
const i18nHead = useLocaleHead({
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
})
</script>
```

## Tips

1. **Always use `watch: [locale]`** in `useAsyncData` for content
2. **Translation keys** use format `section.subsection.key`
3. **Check both languages** when adding new text
4. **Fallback**: if translation not found, key will be displayed

## Usage Examples

### Example 1: Button with Translation

```vue
<script setup>
const { t } = useI18n()
</script>

<template>
  <button>{{ t('buttons.submit') }}</button>
</template>
```

### Example 2: Dynamic Page Loading

```vue
<script setup>
const { locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(
  `page-${route.path}-${locale.value}`,
  () => queryContent(`/${locale.value}${route.path}`).findOne(),
  { watch: [locale] }
)
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <ContentRenderer :value="page" />
  </div>
</template>
```

### Example 3: Language Switcher

```vue
<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i: any) => i.code !== locale.value)
})
</script>

<template>
  <div class="language-switcher">
    <button
      v-for="loc in availableLocales"
      :key="loc.code"
      @click="setLocale(loc.code)"
    >
      {{ loc.name }}
    </button>
  </div>
</template>
```
