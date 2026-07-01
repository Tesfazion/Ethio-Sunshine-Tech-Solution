# Ethio-Sunshine Tech Solution

Professional technology solutions website built with React, TypeScript, Vite, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

The local development server runs at the URL printed by Vite, usually `http://localhost:5173`.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Typecheck and create production build
npm run preview  # Preview the production build locally
```

## Project Structure

```text
Ethio-Sunshine-Tech-Solution/
├── .github/                 # GitHub configuration and workflows
├── .vscode/                 # Shared editor settings
├── docs/                    # Project notes, setup docs, and references
├── public/                  # Static public files
├── scripts/                 # Utility scripts
├── src/                     # Application source
│   ├── assets/images/       # Imported website images
│   ├── components/          # Shared UI components
│   ├── data/                # Site and project content
│   ├── layout/              # App shell, header, footer
│   ├── lib/                 # Small utilities
│   ├── pages/               # Route pages
│   ├── App.tsx              # Route definitions
│   ├── i18n.tsx             # Language strings
│   ├── index.css            # Global styles
│   └── main.tsx             # React entry point
├── index.html               # Vite HTML entry
├── package.json             # npm scripts and dependencies
├── tailwind.config.js       # Tailwind configuration
└── vite.config.ts           # Vite configuration
```

Root-level files are limited to files required by the build tooling or repository setup. App code, assets, docs, and scripts live in folders.

## Documentation

- [Quick Start](docs/QUICK_START.md)
- [Contributing](docs/CONTRIBUTING.md)
- [Code of Conduct](docs/CODE_OF_CONDUCT.md)
- [Technical Reference](docs/TECHNICAL_REFERENCE.md)

## Content Locations

- Company contact details: `src/data/site.ts`
- Project/case-study content: `src/data/projects.ts`
- UI language strings: `src/i18n.tsx`
- Website images: `src/assets/images/`

## Deployment

Build the site with:

```bash
npm run build
```

The production files are generated in `dist/`. That folder is ignored because it is build output and can be regenerated at any time.

## License

This project is proprietary and confidential.
