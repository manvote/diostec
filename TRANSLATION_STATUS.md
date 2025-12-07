# Arabic Translation Implementation Guide

## Status: ✅ Completed Sections

### Navbar (✅ Complete)
- All navigation links translated
- Language switcher functional

### Home Page

#### ✅ Completed:
1. Hero Section - Title, Description, CTA Button
2. Feature Cards - All 3 cards
3. Who We Are Section - Label and title
4. Services Heading - Label, title, button
5. Services Expand Section - All 5 service cards (Cloud, BI, QA, Managed, AMS)

#### 🔄 Needs Translation:
1. **Projects Carousel Section (Lines 375-560)**
   - Section label: "Industries"
   - Project titles (4 projects)
   - Project descriptions
   - "READ MORE" button
   - "Industry:" label
   - "Core Technologies:" label

2. **Industries Section (Lines 560-700)**
   - Section label: "Industries"
   - Section title: "Expertise that Empowers Industries Worldwide"
   - Industry card titles (4 industries)
   - Industry descriptions

3. **Solutions Section (Lines 700-800)**
   - Section label: "Solutions"
   - Section title
   - Solution names (5 solutions)
   - Solution descriptions

4. **Why Choose Us Section (Lines 800-850)**
   - Section label: "Why Should Choose Us"
   - Section title
   - Card content (6 cards)

5. **Footer (Lines 850-920)**
   - "WHAT WE DO?", "Services"
   - "WHO WE ARE?", "About Us"
   - "HOW WE DELIVER", "Contact Us"
   - Address
   - Copyright text

## Translation Keys Already in translations.js

All translation keys for Home page are already defined in `src/translations.js` under:
- `translations.en.home.*`
- `translations.ar.home.*`

## About Page & Services Page
- Need to add `useTranslation` hook
- Replace all static text with `t('about', 'key')` or `t('services', 'key')`

## Next Steps

1. Update remaining Home.js sections with translations
2. Update AboutUs.js component
3. Update Services.js component  
4. Add RTL CSS support
5. Test language switching on all pages
