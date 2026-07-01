# Contributing to Ethio-Sunshine Tech Solution

Thank you for considering contributing to our project! This document provides guidelines for contributing to this codebase.

## 📋 Table of Contents
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Project Structure](#project-structure)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd Ethio-Sunshine-Tech-Solution

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 💻 Development Workflow

### 1. Create a Feature Branch
```bash
# Always create a new branch from main
git checkout main
git pull origin main
git checkout -b feature/your-feature-name
```

### Branch Naming Convention
- `feature/` - New features (e.g., `feature/pricing-page`)
- `fix/` - Bug fixes (e.g., `fix/contact-form-validation`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/homepage-components`)
- `style/` - UI/styling changes (e.g., `style/footer-redesign`)

### 2. Make Your Changes
- Write clean, readable code
- Follow the existing code style
- Test your changes thoroughly
- Update documentation if needed

### 3. Test Your Changes
```bash
# Run TypeScript type checking
npm run build

# Test in development mode
npm run dev
```

---

## 📝 Code Standards

### TypeScript/React
- Use TypeScript for type safety
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use proper prop types

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components (one per route)
├── layout/        # Layout components (AppShell, etc.)
├── data/          # Static data and constants
├── lib/           # Utility functions and helpers
└── i18n.tsx       # Internationalization setup
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ContactPage.tsx`, `IconMail.tsx`)
- **Utilities**: camelCase (e.g., `cn.ts`, `useGithubRepo.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `SITE`, `PROJECTS`)
- **CSS Classes**: Use Tailwind utility classes

### Design System
Always follow the established design system:

**Colors**:
```typescript
// Primary
'brand-orange': '#FF7A00'
'brand-orange-light': '#FFF4E6'

// Secondary  
'brand-blue': '#007ACC'
'brand-blue-light': '#E6F4FF'

// Backgrounds
'slate-50': '#F8FAFC'   // Light mode background
'slate-900': '#0F172A'  // Dark mode background
```

**Typography**:
- Headings: Montserrat Bold
- Body: Poppins Regular

**Design Rules**:
- Use 2px borders (not 1px)
- No gradients - solid colors only
- Consistent rounded corners: `rounded-lg`, `rounded-xl`, `rounded-2xl`
- Smooth animations: `animate-fade-in`, `animate-slide-in`, etc.

### Code Style
```typescript
// Good - Clean component structure
export default function MyComponent() {
  const { t } = useI18n();
  const [state, setState] = useState(initialValue);

  function handleAction() {
    // Handle action
  }

  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
}

// Use meaningful variable names
const emailAddress = SITE.email;
const isFormValid = errors.length === 0;

// Use type safety
type FormData = {
  name: string;
  email: string;
  message: string;
};
```

---

## 📦 Commit Guidelines

### Commit Message Format
```
type(scope): short description

Longer description if needed

Fixes #123
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(pricing): add discount badges to pricing tiers
fix(contact): validate email format on form submission
docs(readme): update installation instructions
style(footer): adjust spacing and alignment
refactor(homepage): extract hero section to component
```

---

## 🔄 Pull Request Process

### Before Submitting
1. ✅ Code builds without errors (`npm run build`)
2. ✅ No TypeScript errors
3. ✅ Tested in both light and dark modes
4. ✅ Responsive on mobile, tablet, and desktop
5. ✅ Follows design system guidelines
6. ✅ Updated relevant documentation

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- List key changes
- Include any new dependencies
- Mention any breaking changes

## Testing
- How was this tested?
- Which browsers/devices were tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code builds successfully
- [ ] No TypeScript errors
- [ ] Responsive design tested
- [ ] Dark mode tested
- [ ] Documentation updated
```

### Review Process
1. Submit PR with clear description
2. Wait for code review from maintainers
3. Address any requested changes
4. Once approved, PR will be merged

---

## 📁 Project Structure

```
Ethio-Sunshine-Tech-Solution/
├── .github/
│   └── workflows/          # CI/CD workflows
├── .vscode/               # VS Code settings
├── dist/                  # Build output (generated)
├── docs/                  # Documentation files
│   ├── ABOUT_PAGE_REDESIGN.md
│   ├── BRANDING_UPDATE.md
│   ├── COMPLETE_REDESIGN_SUMMARY.md
│   ├── IMPLEMENTATION_COMPLETE.md
│   ├── How Much Is the Website Cost in Eth.txt
│   └── Web application quality.txt
├── src/assets/images/                # Image assets
│   ├── logo/
│   ├── cyber-security/
│   ├── iot/
│   ├── it-infrastructure/
│   ├── software-dev/
│   └── web-designing/
├── node_modules/          # Dependencies (generated)
├── public/                # Static files
│   ├── 404.html
│   ├── icon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
├── scripts/               # Build and utility scripts
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── ErrorBoundary.tsx
│   │   └── icons.tsx
│   ├── data/             # Static data
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── layout/           # Layout components
│   │   └── AppShell.tsx
│   ├── lib/              # Utilities
│   │   ├── cn.ts
│   │   └── useGithubRepo.ts
│   ├── pages/            # Page components
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── ProjectDetailPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ServicesPage.tsx
│   ├── App.tsx           # Main app component
│   ├── i18n.tsx          # Internationalization
│   ├── index.css         # Global styles
│   ├── main.tsx          # Entry point
│   └── vite-env.d.ts     # Vite types
├── .editorconfig          # Editor configuration
├── .gitignore            # Git ignore rules
├── docs/CONTRIBUTING.md       # This file
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── package-lock.json     # Locked dependencies
├── postcss.config.js     # PostCSS configuration
├── README.md             # Project overview
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.node.json    # TypeScript config for Node
└── vite.config.ts        # Vite configuration
```

---

## 🛠️ Common Tasks

### Adding a New Page
1. Create component in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Update navigation in `src/layout/AppShell.tsx`
4. Add translations if needed in `src/i18n.tsx`

### Adding a New Component
1. Create component in `src/components/ComponentName.tsx`
2. Export component
3. Import and use where needed
4. Follow design system guidelines

### Updating Styles
1. Use Tailwind utility classes
2. Follow 2px border rule
3. Test in both light and dark modes
4. Ensure responsive design

### Adding Dependencies
```bash
# Install dependency
npm install package-name

# Install dev dependency
npm install -D package-name

# Document why the dependency is needed in PR
```

---

## 🐛 Reporting Issues

### Bug Reports
Include:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots if applicable

### Feature Requests
Include:
- Clear description of feature
- Use case and benefits
- Mockups or examples if available

---

## 📞 Getting Help

- Check existing documentation in `/docs`
- Review closed issues and PRs
- Ask questions in pull requests
- Contact maintainers

---

## 🎯 Development Tips

### Hot Reload
Changes to components will hot reload automatically in development mode.

### TypeScript Errors
Always run `npm run build` to check for TypeScript errors before committing.

### Responsive Testing
Test on multiple screen sizes:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Dark Mode Testing
Always test changes in both light and dark modes using the theme toggle.

### Performance
- Keep bundle size small
- Optimize images before adding
- Use lazy loading for heavy components
- Minimize re-renders

---

## ✅ Code Review Checklist

Before requesting review, ensure:
- [ ] Code follows project conventions
- [ ] No console.log statements (except in ErrorBoundary)
- [ ] No commented-out code
- [ ] Proper error handling
- [ ] Accessibility considerations (aria labels, keyboard navigation)
- [ ] Responsive on all screen sizes
- [ ] Works in light and dark modes
- [ ] TypeScript types are properly defined
- [ ] No any types used unnecessarily

---

Thank you for contributing to Ethio-Sunshine Tech Solution! 🎉
