## Quick overview
- Author: SkkJodhpur
- Purpose: Personal CV and portfolio website
- Framework: React (react-scripts)
- Styling: Tailwind CSS

## Local development
1. Install dependencies:

```powershell
cd 'C:\Users\Hp\Documents\GitHub\CV2025'
npm install
```

2. Start dev server:

```powershell
npm start
```

Open http://localhost:3000 in your browser.

## Build (production)

```powershell
npm run build
```

This creates an optimized `build/` folder ready for static hosting.

## Project structure (important files)

- `public/` — static public files (index.html, manifest, etc.)
  - `sitemap.xml` — basic sitemap generated (update if necessary)
- `src/` — React source
  - `App.js`
  - `index.js`
  - `index.css`
  - `components/` — UI components used in the site (`About.js`, `Hero.js`, `Projects.js`, etc.)
- `build/` — production build output (generated)
- `robots.txt` — in root, controls crawler access (update domain/sitemap if needed)