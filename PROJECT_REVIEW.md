# Project Review: PZN Company Profile

## Overall Assessment: **Very Good** (8/10)

This is a well-executed **static marketing website** built with modern tooling and professional design. The project demonstrates excellent frontend development practices for a static site showcasing educational programming courses.

---

## 📊 Project Overview

### Technology Stack
- **Framework**: SvelteKit 2.43.2 with Svelte 5.39.5
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **Language**: TypeScript 5.9.2
- **Deployment**: GitHub Pages via GitHub Actions
- **Type**: Static site (pre-rendered HTML)

### Project Statistics
- **Total Files**: 92
- **Route Files**: 9 Svelte components
- **Asset Images**: 39 technology stack icons
- **Total Lines**: ~2,600+ lines of Svelte code
- **Courses Listed**: 33 programming courses

---

## ✅ Strengths

### 1. Modern Technology Stack
- Latest SvelteKit 5 with TypeScript provides excellent developer experience
- Vite 7 ensures fast builds and hot module replacement
- Tailwind CSS 4 for consistent, responsive design
- Proper GitHub Actions CI/CD pipeline

### 2. Code Organization
- Clean file-based routing structure (`/kelas`, `/promo`, `/sosial-media`)
- Responsive design throughout (mobile-first approach)
- Good use of SvelteKit features (base paths, static adapter)
- Proper TypeScript configuration with strict mode enabled

### 3. Professional UI/UX
- Modern dark theme design (consistent branding)
- Smooth transitions and animations (marquee, fade, fly, scale)
- Comprehensive filtering/search/sort functionality
- Mobile-responsive navigation with hamburger menu
- Interactive elements with hover effects

### 4. Deployment & CI/CD
- Well-configured GitHub Actions workflow
- Automatic deployment to GitHub Pages on push to main
- Proper base path configuration for GitHub Pages subdirectory
- Clean separation of build and deploy jobs

---

## 🔴 Critical Issues

### 1. Spelling Errors (User-Facing Content)

**Location**: `src/routes/kelas/+page.svelte`

#### A. Category Name Typos
```typescript
// Lines 45, 122, 158, 194, 203, 351
category: ["Pemrogramman", "Go-Lang"]  // ❌ Should be "Pemrograman"
category: "Pemogramming"                // ❌ Should be "Pemrograman"
```

**Impact**: Affects filtering functionality and user experience

#### B. Language Name Typos
```typescript
// Line 265-267
{ name: "Phyton", category: ["Database", "Phyton"] }  // ❌ Should be "Python"
```

Also in: `src/routes/+page.svelte:31`

#### C. Technology Name Typos
```typescript
// Line 214 (description)
"Belajar database elasticseacrh..."  // ❌ Should be "elasticsearch"
```

**Fix Required**:
```bash
# Find and replace:
"Pemrogramman" → "Pemrograman"
"Pemogramming" → "Pemrograman"
"Phyton" → "Python"
"elasticseacrh" → "elasticsearch"
```

---

### 2. Data Structure Inconsistency

**Location**: `src/routes/kelas/+page.svelte:41-347`

```typescript
// Inconsistent property names and types:
{ name: "Golang", category: ["Pemrogramman", "Go-Lang"] }      // Array
{ name: "PHP", category: "Pemrograman" }                        // String
{ name: "Svelte", categories: ["Framework", "Web"] }            // Different property name!
{ name: "Bootstrap", categories: ["Framework", "Web"] }         // Uses "categories"
```

**Impact**: Filter logic must handle both `category` and `categories`, both string and array types (lines 411-413)

**Recommendation**: Standardize to one property name, always use array:
```typescript
// All courses should use:
{
  name: "PHP",
  category: ["Pemrograman"]  // Always array, always "category"
}
```

---

### 3. Code Duplication

#### A. Footer Component Duplicated

**Locations**:
- `src/routes/+page.svelte:498-559` (62 lines)
- `src/routes/kelas/+page.svelte:643-704` (62 lines)
- Likely in other route files as well

**Impact**: Changes must be made in multiple places, risk of inconsistency

**Recommendation**: Extract to reusable component:
```typescript
// src/lib/components/Footer.svelte
<footer class="bg-gray-950 text-gray-400 border-t border-gray-800">
  <!-- footer content -->
</footer>

// Then import in pages:
<script>
  import Footer from '$lib/components/Footer.svelte';
</script>
<Footer />
```

#### B. Navigation Links Repeated

**Locations**:
- Desktop menu: `src/routes/+layout.svelte:79-94`
- Mobile menu: `src/routes/+layout.svelte:132-145`
- Footer: Multiple files

**Recommendation**: Create shared constant:
```typescript
// src/lib/constants/navigation.ts
export const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Kelas Online", href: "/kelas" },
  { name: "Promo", href: "/promo" },
  { name: "Sosial Media", href: "/sosial-media" }
];
```

---

## 🟡 Medium Priority Issues

### 4. Accessibility Issues

#### A. Suppressed A11y Warnings

**Location**: `src/routes/+layout.svelte:120-122`

```svelte
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="fixed inset-0 z-30 bg-black/40" on:click={closeMobileMenu}></div>
```

**Fix**: Add keyboard support and use proper element:
```svelte
<button
  class="fixed inset-0 z-30 bg-black/40 border-0 p-0 cursor-default"
  on:click={closeMobileMenu}
  on:keydown={(e) => e.key === 'Escape' && closeMobileMenu()}
  aria-label="Tutup menu"
  type="button"
/>
```

#### B. Missing ARIA Labels
- Some interactive elements lack descriptive labels
- Category filter buttons need better screen reader support

---

### 5. Performance Optimizations

#### A. Missing Lazy Loading

**Location**: `src/routes/+page.svelte` and other pages

Many images don't have lazy loading:
```svelte
<!-- Current -->
<img src={img} alt="logo" class="..." />

<!-- Should be -->
<img src={img} alt="logo" class="..." loading="lazy" />
```

**Exception**: Hero/above-the-fold images should NOT be lazy loaded.

#### B. Large Image Assets
- 39 technology logos (contributes to 7.3 MB total project size)
- External Pinterest URLs (no caching control)

**Recommendations**:
1. Convert images to WebP format (50-80% smaller)
2. Use image optimization tools (`@vite-imagetools`)
3. Download external images locally for better caching

#### C. Animation Performance

Current CSS animations are well-optimized, but can be improved:

```css
/* Add to marquee animations */
.animate-marquee {
  display: flex;
  white-space: nowrap;
  animation: marquee 25s linear infinite;
  will-change: transform; /* Add this for smoother rendering */
}
```

---

### 6. SEO Improvements

#### A. Missing Meta Tags

**Current**: Only basic title and description
```svelte
<title>Programmer Zaman Now</title>
<meta name="description" content="..." />
```

**Recommendation**: Add comprehensive SEO meta tags:

```svelte
<svelte:head>
  <title>Programmer Zaman Now – Belajar Pemrograman Modern</title>
  <meta name="description" content="Platform belajar programming terbaik di Indonesia" />

  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Programmer Zaman Now" />
  <meta property="og:description" content="Belajar programming dari dasar hingga mahir" />
  <meta property="og:image" content="https://www.programmerzamannow.com/img/pzn.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://pzn-labs.github.io/pzn-company-profile/" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Programmer Zaman Now" />
  <meta name="twitter:description" content="Belajar programming dari dasar hingga mahir" />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://pzn-labs.github.io/pzn-company-profile/" />
</svelte:head>
```

#### B. Structured Data (JSON-LD)

Add course structured data for better Google search results:

```svelte
<svelte:head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Golang Programming",
      "description": "Pelajari bahasa Go untuk membangun aplikasi backend",
      "provider": {
        "@type": "Organization",
        "name": "Programmer Zaman Now",
        "url": "https://www.programmerzamannow.com"
      },
      "offers": {
        "@type": "Offer",
        "price": "129000",
        "priceCurrency": "IDR"
      }
    }
  </script>
</svelte:head>
```

---

## 🟢 Low Priority Improvements

### 7. Code Organization

#### A. Long Component Files
- `+page.svelte`: 634 lines (too long)
- `kelas/+page.svelte`: 707 lines (too long)

#### B. Unused Code

**Location**: `src/routes/+page.svelte:2`
```typescript
import { onMount, onDestroy } from "svelte";
// onDestroy is imported but never used
```

**Location**: `src/routes/+page.svelte:138`
```typescript
// Fix for missing activeClass  ← Empty comment, remove this
```

#### C. Recommended Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Footer.svelte          ← Extract duplicated footer
│   │   ├── Navbar.svelte          ← Extract from +layout.svelte (optional)
│   │   ├── CourseCard.svelte      ← Extract from kelas page
│   │   ├── CategoryFilter.svelte  ← Extract filter UI
│   │   └── Hero.svelte            ← Extract hero section
│   ├── data/
│   │   ├── courses.ts             ← Move course data here
│   │   ├── categories.ts          ← Move categories here
│   │   └── navigation.ts          ← Shared nav links
│   └── utils/
│       └── format.ts              ← Price/number formatting functions
├── routes/
│   └── ... (existing routes)
```

---

### 8. Non-Functional Features

#### Login/Registration Pages

**Location**: `src/routes/login/+page.svelte:13-17`

```typescript
if (email === "dwi@gmail.com" && password === "12345") {
  window.location.href = "/";
}
```

**Issue**: Hardcoded credentials, no actual authentication

**Options**:
1. **Remove** `/login` and `/daftar` routes entirely (recommended for static site)
2. **Add disclaimer**: "Demo UI only - not functional"
3. **Link to external platform**: Redirect to actual course platform login

---

### 9. Dependency Management

#### Unused Dependency

**Location**: `package.json:16`

```json
"@sveltejs/adapter-auto": "^6.1.0"  // Not used (adapter-static is used instead)
```

**Fix**:
```bash
npm uninstall @sveltejs/adapter-auto
```

---

## 📋 Priority Action Items

### 🔴 High Priority (Fix Immediately)

1. **Fix typos** in categories and course names
   - [ ] `Pemrogramman` → `Pemrograman`
   - [ ] `Pemogramming` → `Pemrograman`
   - [ ] `Phyton` → `Python`
   - [ ] `elasticseacrh` → `elasticsearch`

2. **Standardize data structure**
   - [ ] Use consistent `category` property (not `categories`)
   - [ ] Always use array format for categories
   - [ ] Update filter logic accordingly

3. **Extract Footer component**
   - [ ] Create `src/lib/components/Footer.svelte`
   - [ ] Replace duplicated footer in all pages

### 🟡 Medium Priority (Next Sprint)

4. **Add image lazy loading**
   - [ ] Add `loading="lazy"` to below-the-fold images
   - [ ] Keep hero/above-fold images without lazy loading

5. **Fix accessibility warnings**
   - [ ] Mobile menu overlay needs proper keyboard support
   - [ ] Add ARIA labels to interactive elements
   - [ ] Remove a11y-ignore comments

6. **Add SEO meta tags**
   - [ ] Open Graph tags for social sharing
   - [ ] Twitter Card meta tags
   - [ ] Structured data (JSON-LD) for courses
   - [ ] Canonical URLs

### 🟢 Low Priority (Nice to Have)

7. **Image optimization**
   - [ ] Convert images to WebP format
   - [ ] Implement automatic image optimization
   - [ ] Download external images locally

8. **Component extraction**
   - [ ] Create reusable CourseCard component
   - [ ] Extract CategoryFilter component
   - [ ] Extract Hero component

9. **Remove/disable non-functional features**
   - [ ] Remove login/registration pages or add disclaimer
   - [ ] Remove unused code and comments
   - [ ] Clean up unused imports

---

## 🚀 Quick Wins (1-2 Hours)

These can be implemented immediately:

```bash
# 1. Fix typos (find and replace across project)
# Search for: "Pemrogramman" → Replace with: "Pemrograman"
# Search for: "Phyton" → Replace with: "Python"
# Search for: "elasticseacrh" → Replace with: "elasticsearch"

# 2. Standardize category property
# In kelas/+page.svelte, change all:
#   category: "Web" → category: ["Web"]
#   categories: [...] → category: [...]

# 3. Add lazy loading
# Add to images (except hero): loading="lazy"

# 4. Remove unused imports
# In +page.svelte line 2:
#   import { onMount, onDestroy } → import { onMount }

# 5. Remove unused dependency
npm uninstall @sveltejs/adapter-auto
```

---

## 📊 Final Scores

| Category | Score | Notes |
|----------|-------|-------|
| **Code Quality** | 7/10 | Clean but has duplication & typos |
| **Performance** | 8/10 | Good, could optimize images |
| **Accessibility** | 6/10 | Some a11y warnings ignored |
| **SEO** | 6/10 | Basic meta tags, missing OG/structured data |
| **Maintainability** | 7/10 | Needs component extraction |
| **Design/UX** | 9/10 | Professional, responsive, smooth animations |
| **Configuration** | 9/10 | Excellent tooling setup |
| **Deployment** | 9/10 | Well-configured CI/CD |

**Overall: 8/10** - Excellent static site with minor improvements needed

---

## 🎯 Summary

### What's Working Well
- ✅ Modern, well-configured tech stack (SvelteKit + Tailwind + Vite)
- ✅ Professional design with smooth animations
- ✅ Fully responsive across all devices
- ✅ Proper GitHub Pages deployment with CI/CD
- ✅ Clean routing structure
- ✅ Good TypeScript configuration

### What Needs Improvement
- ⚠️ Spelling errors in user-facing content (affects filtering)
- ⚠️ Code duplication (footer, navigation links)
- ⚠️ Inconsistent data structure (category vs categories)
- ⚠️ Missing lazy loading on images
- ⚠️ Accessibility warnings suppressed
- ⚠️ Basic SEO (missing Open Graph, structured data)

### Recommendation

This project is **production-ready** after fixing the typos and extracting the footer component. The other improvements are enhancements that can be done iteratively.

For a static marketing site, this is very well executed. Focus on the high-priority items first, especially the typos since they affect functionality and user experience.

---

## 📚 Additional Resources

### Testing Recommendations

Even for static sites, basic testing helps:

1. **Visual Regression Testing**
   ```bash
   npm install -D @playwright/test
   ```

2. **Link Checking**
   ```bash
   npm install -D check-links
   ```

3. **Lighthouse CI** (automated performance/SEO/a11y audits)
   ```yaml
   # .github/workflows/lighthouse.yml
   - name: Run Lighthouse CI
     uses: treosh/lighthouse-ci-action@v9
   ```

### Image Optimization Tools

1. **Vite ImageTools**
   ```bash
   npm install -D vite-imagetools
   ```

2. **Convert to WebP**
   ```bash
   npm install -D @vite-imagetools/core @vite-imagetools/plugin-webp
   ```

---

**Review Date**: 2025-10-30
**Reviewer**: Claude (AI Code Reviewer)
**Project Version**: Based on commit `0317f0c`
