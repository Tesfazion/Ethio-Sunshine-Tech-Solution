# Code Structure & Collaboration Guide

## Project folders

- `src/`: application source code.
  - `src/pages/`: page-level views rendered by the router.
  - `src/components/`: reusable UI components and widgets.
  - `src/layout/`: shared layout wrappers, navigation, and page frame.
  - `src/data/`: static content, project metadata, and site configuration.
  - `src/lib/`: small utilities and hooks used across the app.
  - `src/assets/`: images and static media assets.
  - `src/i18n.tsx`: localization provider and translations.

## How to update safely

- Add new pages in `src/pages/` and then register them in `src/App.tsx`.
- Keep navigation items in sync between `src/layout/AppShell.tsx` and the routes in `src/App.tsx`.
- Store static content in `src/data/` rather than hardcoding copy across pages.
- Put shared UI pieces in `src/components/` and reuse them in pages.
- Use `src/lib/cn.ts` for safe class name composition.

## Collaboration notes

- Each source file has a header comment describing its purpose.
- Use section comments inside large page files to make updates easier.
- If adding a new feature, update both the component and the matching documentation in this file.
- For brand or contact changes, update `src/data/site.ts` and the translated strings in `src/i18n.tsx`.
