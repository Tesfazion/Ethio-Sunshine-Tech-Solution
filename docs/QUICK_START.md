# Quick Start Guide

> Get up and running in 5 minutes! ⚡

## 🚀 Setup (First Time)

```bash
# 1. Clone the repository
git clone <repository-url>
cd Ethio-Sunshine-Tech-Solution

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Visit: http://localhost:5173
```

---

## 🛠️ Daily Development

### Starting Work

```bash
# Pull latest changes
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Start dev server
npm run dev
```

### Making Changes

1. Edit files in `src/`
2. Changes auto-reload in browser
3. Follow design system (see below)
4. Test in light/dark mode

### Before Committing

```bash
# Build to check for errors
npm run build

# If successful, commit
git add .
git commit -m "feat(scope): description"
git push origin feature/your-feature-name
```

### Creating PR

1. Go to GitHub repository
2. Click "New Pull Request"
3. Fill out PR template
4. Request review

---

## 🎨 Design System (Quick Reference)

### Colors

```tsx
// Use these Tailwind classes
'bg-brand-orange'; // Orange #FF7A00
'text-brand-orange';
'border-brand-orange';

'bg-brand-blue'; // Blue #007ACC
'text-brand-blue';
'border-brand-blue';
```

### Borders (IMPORTANT)

```tsx
// Always 2px
className="border-2"      ✅ Correct
className="border"        ❌ Wrong (1px)
```

### Typography

```tsx
// Headings - Montserrat Bold
<h1 className="text-4xl font-bold">

// Body - Poppins Regular
<p className="text-base">
```

### Common Patterns

```tsx
// Card
<div className="bg-white dark:bg-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-800 p-6">

// Button Primary
<button className="px-6 py-3 bg-brand-orange text-white rounded-lg hover:bg-[#E66D00]">

// Button Secondary
<button className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
```

---

## 📁 File Locations

### Creating New Page

1. Create: `src/pages/NewPage.tsx`
2. Add route: `src/App.tsx`
3. Add nav: `src/layout/AppShell.tsx`

### Creating New Component

1. Create: `src/components/ComponentName.tsx`
2. Export it
3. Import where needed

### Adding Icons

1. Add to: `src/components/icons.tsx`
2. Follow existing pattern

---

## 🐛 Common Issues

### Build Fails

```bash
# Clear and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

### TypeScript Errors

- Check imports are correct
- Ensure types are defined
- Run `npm run build` to see all errors

---

## 💡 Tips

1. **Use VS Code**: Install recommended extensions
2. **Check Dark Mode**: Always test both themes
3. **Mobile First**: Test responsive on small screens
4. **Console Clean**: No console.logs in commits
5. **Read docs/CONTRIBUTING.md**: Full guidelines there

---

## 📝 Commit Message Format

```bash
# Format
type(scope): short description

# Examples
feat(pricing): add discount calculator
fix(contact): email validation bug
style(footer): align social icons
docs(readme): update installation steps
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

---

## 🔗 Quick Links

- **Full Guide**: [docs/CONTRIBUTING.md](CONTRIBUTING.md)
- **Docs**: [docs/](docs/)
- **Issues**: GitHub Issues tab
- **Design Docs**: [docs/COMPLETE_REDESIGN_SUMMARY.md](docs/COMPLETE_REDESIGN_SUMMARY.md)

---

## ⚡ Keyboard Shortcuts (VS Code)

- `Ctrl+P` - Quick file open
- `Ctrl+Shift+P` - Command palette
- `Ctrl+B` - Toggle sidebar
- `F2` - Rename symbol
- `Alt+Click` - Multi-cursor
- `Ctrl+/` - Toggle comment

---

## 🎯 Page Routes

- `/` - Home
- `/services` - Services
- `/projects` - Projects
- `/projects/:slug` - Project Detail
- `/pricing` - Pricing
- `/about` - About
- `/contact` - Contact

---

## 📦 Build Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Checking
npm run build        # Also runs type checking
```

---

## ✅ Pre-Commit Checklist

Quick checklist before committing:

- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors
- [ ] Tested in light & dark mode
- [ ] Responsive on mobile
- [ ] 2px borders used
- [ ] Brand colors used correctly
- [ ] No console.logs
- [ ] Meaningful commit message

---

**Need More Help?**

- Read: [docs/CONTRIBUTING.md](CONTRIBUTING.md)
- Check: [docs/](docs/) folder
- Ask: Create a GitHub issue

**Happy Coding! 🎉**
