# La Grande France — Website

Private guided journeys through France for American families.

## Stack
- React 18 + Vite
- No CSS framework — custom design system
- Deploys on Render as a static site

## Local development
```bash
npm install
npm run dev
```

## Deploy on Render
1. Push to GitHub
2. New Static Site on Render
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Done ✓

## Before going live
- Replace Calendly link in `src/components/Sections.jsx` (Book section)
- Add real photos in `/public/` when available
- Update domain in Render settings
- Add Google Analytics if needed

## Customisation
- Colors: `src/index.css` (CSS variables at the top)
- Prices: `src/components/Regions.jsx` (block arrays)
- Content: each component is self-contained
