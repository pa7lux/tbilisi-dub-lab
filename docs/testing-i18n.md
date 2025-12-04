# Testing Multilingual Support

## How to Verify i18n Works

### 1. Start Dev Server

```bash
npm run dev
```

### 2. Check Routes

Open in browser:

#### English Version (default)
- `http://localhost:3000/`
- Should display English content

#### Georgian Version
- `http://localhost:3000/ka/`
- Should display Georgian content

### 3. Check Language Switcher

1. Open `http://localhost:3000/`
2. Top right corner should have **"ქართული"** button
3. Click the button
4. URL changes to `/ka/`
5. Content should switch to Georgian
6. Button changes to **"English"**

### 4. What Should Change on Language Switch

#### Header
- **EN**: "Tbilisi Dub Lab"
- **KA**: "თბილისის დაბ ლაბორატორია"

#### Hero Section
- **EN**: "Welcome to Tbilisi Dub Lab"
- **KA**: "კეთილი იყოს თქვენი მობრძანება თბილისის დაბ ლაბორატორიაში"

#### About Section
- **EN**: "About the Project"
- **KA**: "პროექტის შესახებ"

#### Footer
- **EN**: "All rights reserved"
- **KA**: "ყველა უფლება დაცულია"

### 5. Check Cookie

After switching language check cookie in DevTools:
- Name: `i18n_redirected`
- Value: `ka` or `en`

### 6. Check Navigation

When switching language:
- URL should update
- Content loads without page reload
- Browser history updates (can use Back button)

## Common Issues

### Issue: Content Doesn't Change

**Solution**: Check DevTools console for content loading errors

### Issue: 404 on `/ka/`

**Solution**: 
1. Check files exist in `content/ka/home/`
2. Restart dev server

### Issue: Switcher Button Doesn't Work

**Solution**: Check console for JavaScript errors

### Issue: Text Shows as Key (e.g. "nav.logo")

**Solution**: Check `locales/en.json` and `locales/ka.json` for the key

## Production Testing

```bash
# Build project
npm run build

# Run preview
npm run preview

# Open in browser
http://localhost:3000
```

## Automated Testing

Can add tests to verify:
- All content files exist for each language
- Translation correctness
- Switcher functionality

Example test (if using Vitest):

```js
describe('i18n', () => {
  it('should have content for all languages', () => {
    const languages = ['en', 'ka']
    const contentFiles = ['hero.md', 'about.md']
    
    languages.forEach(lang => {
      contentFiles.forEach(file => {
        const path = `content/${lang}/home/${file}`
        expect(fs.existsSync(path)).toBe(true)
      })
    })
  })
})
```

## Checklist

- [ ] Dev server starts without errors
- [ ] English version opens on `/`
- [ ] Georgian version opens on `/ka/`
- [ ] Language switcher visible in header
- [ ] Clicking button changes language
- [ ] URL updates on language change
- [ ] All content translates (titles, text, footer)
- [ ] Cookie `i18n_redirected` is set
- [ ] No errors in browser console
- [ ] Switching works smoothly without reload
