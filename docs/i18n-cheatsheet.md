# i18n Cheatsheet

## Quick Commands

### Get Current Language
```js
const { locale } = useI18n()
console.log(locale.value) // 'en' or 'ka'
```

### Translate Text
```vue
{{ t('nav.logo') }}
```

### Switch Language
```js
const { setLocale } = useI18n()
setLocale('ka')
```

### Link with Language
```vue
<NuxtLink :to="localePath('/about')">About</NuxtLink>
```

### Load Content by Language
```js
const { data } = await useAsyncData(
  `key-${locale.value}`,
  () => queryContent(`/${locale.value}/path`).findOne(),
  { watch: [locale] }
)
```

## File Structure

```
locales/
├── en.json        → UI translations (EN)
└── ka.json        → UI translations (KA)

content/
├── en/            → Page content (EN)
└── ka/            → Page content (KA)
```

## Translation Format (locales/*.json)

```json
{
  "section": {
    "key": "Translation"
  }
}
```

## Content Format

```markdown
---
title: Page Title
---
Page content
```

## Routes

- `/` → English (default)
- `/ka/` → Georgian
- `/ka/about` → Georgian about page

## Important!

✅ Use `watch: [locale]` in `useAsyncData`  
✅ Create content for ALL languages  
✅ Prefix keys: `section.subsection.key`  
✅ Use `localePath()` for links
