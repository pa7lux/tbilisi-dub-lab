# Tbilisi Dub Lab

Website for Tbilisi Dub Lab music space with bilingual support (English and Georgian).

## 🚀 Technologies

- **Nuxt 4** - Vue.js framework for web applications
- **Nuxt Content** - Content management through Markdown files
- **Nuxt i18n** - Multilingual support (English and Georgian)
- **TypeScript** - Typed JavaScript

## 🌍 Languages

The site supports two languages:
- **English (en)** - primary language (default)
- **ქართული (ka)** - Georgian language

Language switcher is located in the top navigation bar.

## 📁 Project Structure

```
tbilisi-dub-lab/
├── app/
│   ├── app.vue              # Root application component
│   ├── layouts/
│   │   └── default.vue      # Layout with header, footer and language switcher
│   ├── pages/
│   │   └── index.vue        # Home page with multilingual content
│   └── assets/
│       └── css/
│           └── main.css     # Global styles
├── content/
│   ├── en/                  # English content
│   │   └── home/
│   │       ├── hero.md
│   │       ├── about.md
│   │       └── sections/
│   └── ka/                  # Georgian content
│       └── home/
│           ├── hero.md
│           ├── about.md
│           └── sections/
├── locales/
│   ├── en.json             # Interface translations (English)
│   └── ka.json             # Interface translations (Georgian)
├── public/                 # Static files
├── content.config.ts       # Content configuration
└── nuxt.config.ts         # Nuxt + i18n configuration
```

## 📝 Editing Content

### Page Texts

Content is separated by language in `content/` folder:
- `content/en/` - English texts
- `content/ka/` - Georgian texts

To edit content:
1. Open the needed `.md` file in corresponding language folder
2. Edit the text
3. Save file

### Interface Translations

Navigation, buttons and other UI element translations are in:
- `locales/en.json` - English translations
- `locales/ka.json` - Georgian translations

Example `locales/en.json` structure:
```json
{
  "nav": {
    "home": "Home",
    "logo": "Tbilisi Dub Lab"
  },
  "footer": {
    "copyright": "All rights reserved"
  }
}
```

### Using Translations in Components

```vue
<script setup>
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('nav.logo') }}</h1>
</template>
```

## 🔗 Routing with Languages

- English (default): `/`
- Georgian: `/ka/`

Nuxt automatically creates routes for each language.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server on localhost:3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Adding New Sections

To add new section to home page:

1. Create file for each language:
   - `content/en/home/sections/new-section.md`
   - `content/ka/home/sections/new-section.md`

2. Add frontmatter with `title` and `order`:

**English version** (`content/en/home/sections/new-section.md`):
```markdown
---
title: New Section
order: 3
---

Your content here in English...
```

**Georgian version** (`content/ka/home/sections/new-section.md`):
```markdown
---
title: ახალი სექცია
order: 3
---

თქვენი კონტენტი აქ ქართულად...
```

## 🌐 Adding New Language

1. Add language configuration in `nuxt.config.ts`:
```typescript
i18n: {
  locales: [
    // ... existing languages
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Русский',
      file: 'ru.json'
    }
  ]
}
```

2. Create translation file `locales/ru.json`

3. Create content folder `content/ru/`

4. Update `content.config.ts` adding new collection

## 🎨 Customizing Styles

- **Global styles**: `app/assets/css/main.css`
- **Component-specific styles**: in `<style scoped>` section of each component
- **Language switcher**: styles in `app/layouts/default.vue`

## 📚 Useful Links

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxt.com/)
- [Nuxt i18n Documentation](https://i18n.nuxtjs.org/)
- [Vue Documentation](https://vuejs.org/)

## 🐛 Troubleshooting

### Content doesn't update on language change

Make sure `useAsyncData` uses `watch: [locale]` for reactivity:
```typescript
const { data } = await useAsyncData(
  `key-${locale.value}`,
  () => queryContent(`/${locale.value}/path`).findOne(),
  { watch: [locale] }
)
```

### 404 error for Georgian language

Check that:
1. Content files exist in `content/ka/`
2. Routes generate correctly (strategy: 'prefix_except_default')

## 📖 Documentation

- Quick Start: `QUICK-START.md`
- i18n Guide: `docs/i18n-guide.md`
- Cheatsheet: `docs/i18n-cheatsheet.md`
- Architecture: `docs/i18n-architecture.md`
- Testing: `docs/testing-i18n.md`
- Creation Log: `creation-log.md`
