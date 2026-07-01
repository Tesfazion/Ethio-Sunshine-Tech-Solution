# Ethio-Sunshine Tech Solution – Portfolio Website

Modern, multi-page, multilingual portfolio/agency website built with **React + Vite + Tailwind CSS**.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – typecheck + production build
- `npm run preview` – preview production build locally

## Project structure

- `src/pages/` – route pages (Home, Services, Projects, About, Contact)
- `src/layout/` – app shell (header/footer/navigation)
- `src/components/` – shared UI pieces (icons, error boundary)
- `src/data/` – structured content (projects, site/contact/social links)
- `public/` – static assets (`sitemap.xml`, `robots.txt`, `404.html` for GitHub Pages SPA support)

## Editing company details

- Contact + social links live in `src/data/site.ts`.
- Translated UI strings live in `src/i18n.tsx`.
- Project/case-study content lives in `src/data/projects.ts`.

## GitHub Pages (SPA) publishing

This repo includes GitHub Pages refresh/deep-link support:

- `public/404.html` handles redirects for SPA routes.
- `index.html` contains a small redirect script (must stay **before** the app module script).

If you publish as **Project Pages** (URL like `https://username.github.io/repo-name/`) and you **do not** use a custom domain:

1. Update `public/404.html` and set `pathSegmentsToKeep = 1`.
2. Set Vite base path in `vite.config.ts`, for example:
   - `base: '/repo-name/'`

The router already uses `import.meta.env.BASE_URL` as its `basename` (`src/main.tsx`), so it will follow your Vite `base` setting.

