# 🚀 Quick Start - Tbilisi Dub Lab

## ✅ What's Ready

✨ **Site fully configured with bilingual support!**

- 🌍 **English** (primary) - no URL prefix
- 🇬🇪 **Georgian** - with `/ka/` URL prefix

## 🎯 Quick Start

### 1. Dev Server Already Running!

Open in browser:
- **English**: http://localhost:3000/
- **Georgian**: http://localhost:3000/ka/

### 2. Language Switching

Top right corner has a button:
- **"ქართული"** → switch to Georgian
- **"English"** → switch to English

### 3. What You Can Do Right Now

#### ✏️ Edit Content

**English texts:**
```
content/en/home/hero.md       - Hero section
content/en/home/about.md      - About project
content/en/home/sections/events.md     - Events
content/en/home/sections/community.md  - Community
```

**Georgian texts:**
```
content/ka/home/hero.md       - მთავარი
content/ka/home/about.md      - პროექტის შესახებ
content/ka/home/sections/events.md     - ღონისძიებები
content/ka/home/sections/community.md  - საზოგადოება
```

#### 🔧 Edit Interface

**Navigation, buttons, footer:**
```
locales/en.json - English
locales/ka.json - ქართული
```

## 📁 Project Structure

```
tbilisi-dub-lab/
├── 📁 app/
│   ├── layouts/default.vue    ← Header + Footer + Switcher
│   └── pages/index.vue        ← Home page
│
├── 📁 content/
│   ├── en/                    ← English content
│   └── ka/                    ← Georgian content
│
├── 📁 locales/
│   ├── en.json               ← UI translations (EN)
│   └── ka.json               ← UI translations (KA)
│
└── 📁 docs/
    ├── i18n-cheatsheet.md    ← Cheatsheet
    ├── i18n-guide.md         ← Full guide
    ├── i18n-architecture.md  ← Architecture
    └── testing-i18n.md       ← Testing
```

## 🎓 Documentation

### For quick start:
📖 `docs/i18n-cheatsheet.md` - basic commands and examples

### For deep dive:
📚 `docs/i18n-guide.md` - comprehensive usage guide

### For architecture understanding:
🏗️ `docs/i18n-architecture.md` - diagrams and schemas

### For testing:
🧪 `docs/testing-i18n.md` - how to verify functionality

## 💡 Common Tasks

### Add New Section

1. Create files for both languages:
```bash
content/en/home/sections/new-section.md
content/ka/home/sections/new-section.md
```

2. Add frontmatter:
```markdown
---
title: Section Title
order: 3
---
Content here...
```

### Change Header/Footer Text

Edit `locales/en.json` or `locales/ka.json`:
```json
{
  "nav": {
    "logo": "New Title"
  }
}
```

### Add Translation in Component

```vue
<script setup>
const { t } = useI18n()
</script>

<template>
  <h1>{{ t('nav.logo') }}</h1>
</template>
```

## 🛠️ Commands

```bash
# Dev server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Installed Packages

- ✅ `nuxt` 4.2.1
- ✅ `@nuxt/content` 3.9.0
- ✅ `@nuxtjs/i18n` 10.2.1 ← **New!**
- ✅ `@nuxt/image` 2.0.0

## 🔗 Routes

| URL | Language | Description |
|-----|------|----------|
| `/` | EN | Home (default) |
| `/ka/` | KA | საწყისი გვერდი |

## 🎨 Features

✅ Auto browser language detection  
✅ Save choice in cookie  
✅ Smooth switching without reload  
✅ SEO-friendly URLs  
✅ Localized content  
✅ Interface translations  

## 🆘 Need Help?

### Content doesn't change on language switch
→ Check DevTools Console for errors

### 404 error on `/ka/`
→ Make sure files exist in `content/ka/`

### Text shows as "nav.logo"
→ Add translation to `locales/{locale}.json`

### More details
→ Read `docs/testing-i18n.md`

## 🎉 Ready!

Site fully configured and ready to use!

**Next steps:**
1. 📝 Edit content for your needs
2. 🎨 Customize styles in `app/assets/css/main.css`
3. 📄 Add new pages (about, events, contact)
4. 🚀 Deploy to hosting

**Good luck! 🎵**
