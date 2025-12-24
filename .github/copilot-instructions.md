# Copilot instructions for Diostec React SPA

- Stack: Create React App (react-scripts 5) with React 19 and react-router-dom v7; `src/App.js` wraps pages in `LanguageProvider`, lazy-loads `Home`, `AboutUs`, `Services`, `Contact`, and mounts a persistent `Navbar` plus `LoadingSpinner` fallback.
- Translations-first: All user-facing strings must come from `useTranslation()` (`t(section, key)`) backed by `src/translations.js`; always add both `en` and `ar` entries for new keys. Never hardcode copy in components.
- RTL aware: `LanguageContext` sets `<html lang/dir>` and `body` class (`rtl`/`ltr`). Global RTL overrides live near the bottom of `App.css`; when adding styles, include `[dir="rtl"]` variants or use logical properties. Preserve DOM structure/classNames referenced by RTL rules.
- Page SEO: Use `components/SEO.js` per route to set title/description/keywords/canonical plus OG/Twitter tags (relies on meta tags in `public/index.html`). Provide canonical path and focused keywords for new pages.
- Navigation & scrolling: Router links live in `Navbar`; sections often call `window.scrollTo({ top: 0, behavior: 'smooth' })` on navigations/buttons—match this pattern when adding CTAs.
- Effects & animations: `Home.js` and `Services.js` use manual DOM listeners (`querySelectorAll`, `IntersectionObserver`) for cursor glow, reveal animations, and carousels. Keep class names (`.reveal`, `.project-card`, `.industry-slide`, etc.) stable and clean up listeners in `useEffect` returns.
- Assets: Images reside in `src/assets` (optimized variants under `assets/optimized`). Use `loading="lazy"` and `decoding="async"`; prefer compressed assets via `compress-images.js` / `replace-images.js` when adding new media.
- Styling: Components pair with adjacent CSS files; `App.css` holds globals + RTL tweaks. Reuse existing utility classes before adding new globals.
- Content status: Home is fully translated; About/Services are wired for translations but content parity should be checked against `IMPLEMENTATION_SUMMARY.md` and `ARABIC_TRANSLATION_README.md` before edits.
- Netlify/SPA routing: Keep `_redirects` in `public/` (and build output) intact so client-side routes work on refresh.
- Commands: `npm start` (dev), `npm test` (Jest + Testing Library), `npm run build` (production bundle).
- Reference docs: `SEO-IMPLEMENTATION.md` for meta/structured data expectations; `PERFORMANCE_OPTIMIZATION_COMPLETE.md` & `IMAGE_OPTIMIZATION_GUIDE.md` for optimization practices; `TESTING_GUIDE.md` for local testing tips.
