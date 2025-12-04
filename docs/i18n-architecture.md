# i18n Architecture

## General Schema

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
│                                                              │
│  URL: http://localhost:3000/     (English - default)        │
│  URL: http://localhost:3000/ka/  (Georgian - with prefix)   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    Nuxt Application                          │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              @nuxtjs/i18n Module                       │ │
│  │                                                        │ │
│  │  • Detects locale from URL/Cookie/Browser            │ │
│  │  • Provides: useI18n(), localePath(), t()            │ │
│  │  • Manages locale state                              │ │
│  └────────────────────────────────────────────────────────┘ │
│                       │                                      │
│         ┌─────────────┴─────────────┐                       │
│         ▼                           ▼                        │
│  ┌─────────────┐             ┌──────────────┐              │
│  │  UI Texts   │             │   Content    │              │
│  │             │             │              │              │
│  │ locales/    │             │  content/    │              │
│  │  ├─ en.json │             │   ├─ en/     │              │
│  │  └─ ka.json │             │   └─ ka/     │              │
│  └─────────────┘             └──────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Page Load

```
User → URL → i18n → Detect locale → Load translations & content
                                          │
                    ┌─────────────────────┴────────────────────┐
                    ▼                                          ▼
              locales/{locale}.json                  content/{locale}/
                    │                                          │
                    └──────────────┬───────────────────────────┘
                                   ▼
                            Render Page
```

### 2. Language Switch

```
Click Button → setLocale('ka') → Update URL (/ka/) 
                                      │
                    ┌─────────────────┴────────────────────┐
                    ▼                                      ▼
              Update Cookie                      Reload Content
              (i18n_redirected)                  (via watch)
                    │                                      │
                    └──────────────┬───────────────────────┘
                                   ▼
                            Re-render Page
```

## Component Architecture

```
app.vue
  │
  ├─ NuxtLayout (default.vue)
  │    │
  │    ├─ Header
  │    │    ├─ Logo: {{ t('nav.logo') }}         ← locales/{locale}.json
  │    │    └─ Language Switcher
  │    │         └─ setLocale()
  │    │
  │    ├─ Main
  │    │    └─ NuxtPage (index.vue)
  │    │         ├─ Hero: queryContent(`/${locale}/home/hero`)
  │    │         ├─ About: queryContent(`/${locale}/home/about`)
  │    │         └─ Sections: queryContent(`/${locale}/home/sections`)
  │    │
  │    └─ Footer: {{ t('footer.copyright') }}    ← locales/{locale}.json
  │
  └─ Uses: useI18n() composable
```

## File Structure

```
📁 Project Root
│
├── 📁 locales/                  ← UI translations
│   ├── 📄 en.json              (nav, footer, buttons)
│   └── 📄 ka.json              
│
├── 📁 content/                  ← Page content
│   ├── 📁 en/
│   │   └── 📁 home/
│   │       ├── 📄 hero.md
│   │       ├── 📄 about.md
│   │       └── 📁 sections/
│   │           ├── 📄 events.md
│   │           └── 📄 community.md
│   │
│   └── 📁 ka/
│       └── 📁 home/
│           ├── 📄 hero.md
│           ├── 📄 about.md
│           └── 📁 sections/
│               ├── 📄 events.md
│               └── 📄 community.md
│
├── 📁 app/
│   ├── 📁 layouts/
│   │   └── 📄 default.vue       ← Uses t(), setLocale()
│   │
│   └── 📁 pages/
│       └── 📄 index.vue         ← Loads content by locale
│
└── 📄 nuxt.config.ts            ← i18n configuration
```

## Translation Types

### 1. Static Translations (locales/*.json)

**Used for:**
- Navigation
- Buttons
- Forms
- Footer
- Short UI text

**Example:**
```json
{
  "nav": { "home": "Home" }
}
```

**Usage:**
```vue
{{ t('nav.home') }}
```

### 2. Dynamic Content (content/{locale}/)

**Used for:**
- Pages
- Articles
- Long text
- Markdown content

**Example:**
```markdown
---
title: About Us
---
Content here...
```

**Usage:**
```vue
queryContent(`/${locale.value}/home/about`)
```

## Configuration (nuxt.config.ts)

```typescript
i18n: {
  locales: [
    { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    { code: 'ka', iso: 'ka-GE', name: 'ქართული', file: 'ka.json' }
  ],
  defaultLocale: 'en',
  strategy: 'prefix_except_default',
  lazy: true,
  langDir: 'locales/',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root'
  }
}
```

### Parameters

| Parameter | Value | Description |
|----------|----------|----------|
| `defaultLocale` | `en` | Default language |
| `strategy` | `prefix_except_default` | EN without prefix, KA with `/ka/` |
| `lazy` | `true` | Load translations on demand |
| `detectBrowserLanguage` | `true` | Auto-detect browser language |
| `useCookie` | `true` | Save choice in cookie |

## Routes

| URL | Locale | Content |
|-----|--------|---------|
| `/` | `en` | `content/en/home/*` |
| `/ka/` | `ka` | `content/ka/home/*` |
| `/about` | `en` | `content/en/about/*` |
| `/ka/about` | `ka` | `content/ka/about/*` |

## Composables and Helpers

### useI18n()

```javascript
const { 
  locale,        // Current language: 'en' | 'ka'
  locales,       // All available languages
  setLocale,     // Language switch function
  t              // Translation function
} = useI18n()
```

### localePath()

```vue
<NuxtLink :to="localePath('/about')">
  <!-- /about or /ka/about depending on language -->
</NuxtLink>
```

### t()

```vue
{{ t('nav.home') }}
<!-- "Home" or "მთავარი" depending on language -->
```

## Lifecycle

```
1. User opens site
   ↓
2. i18n detects language (URL → Cookie → Browser)
   ↓
3. Sets locale.value
   ↓
4. Loads translations from locales/{locale}.json
   ↓
5. Components render with t()
   ↓
6. Content loads from content/{locale}/
   ↓
7. Page displays

─────────────────────────────────────────

8. User clicks language switch button
   ↓
9. Calls setLocale('ka')
   ↓
10. Updates URL (/ka/)
    ↓
11. Updates cookie
    ↓
12. watch: [locale] triggers content reload
    ↓
13. Page updates without reload
```

## Best Practices

### ✅ Do

- Use `watch: [locale]` in useAsyncData
- Create content for ALL languages
- Use keys in format `section.key`
- Test on both languages
- Use localePath() for links

### ❌ Don't

- Hardcode text in templates
- Forget fallback translations
- Use direct links (`/about`) instead of `localePath()`
- Mix languages in one file
- Skip translations

## Extending the System

### Adding New Language

1. `nuxt.config.ts`: add to `locales`
2. Create `locales/ru.json`
3. Create `content/ru/`
4. Update `content.config.ts`
5. Restart dev server

### Adding New Section

1. Create `content/en/section/file.md`
2. Create `content/ka/section/file.md`
3. Update component for loading
4. Add UI translations to `locales/*.json`

## Debugging

### Check Current Language
```javascript
console.log(locale.value)
```

### Check Available Languages
```javascript
console.log(locales.value)
```

### Check Loaded Content
```javascript
console.log(hero.value)
```

### Check Cookie
```
DevTools → Application → Cookies → i18n_redirected
```
