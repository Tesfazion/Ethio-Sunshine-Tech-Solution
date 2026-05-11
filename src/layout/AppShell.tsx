import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n';
import { IconGitHub, IconMail, IconMoon, IconPhone, IconSun } from '../components/icons';
import { SITE } from '../data/site';
import { cn } from '../lib/cn';
import { getProjectBySlug } from '../data/projects';

import logoImage from '../../Images/logo/Copilot_20260510_125854.png';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
}

export default function AppShell() {
  const { locale, locales, setLocale, t } = useI18n();
  const location = useLocation();
  const githubUrl = SITE.socials.find((link) => link.kind === 'github')?.href ?? 'https://github.com/';

  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { to: '/', label: t('nav.home'), end: true },
      { to: '/services', label: t('nav.services') },
      { to: '/projects', label: t('nav.projects') },
      { to: '/about', label: t('nav.about') },
      { to: '/contact', label: t('nav.contact') },
    ],
    [t]
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const brand = t('brand.name');
    const path = location.pathname;

    if (path === '/') {
      document.title = brand;
      return;
    }

    if (path.startsWith('/projects/')) {
      const slug = path.split('/')[2] ?? '';
      const project = getProjectBySlug(slug);
      document.title = project ? `${project.title} | ${brand}` : `${t('nav.projects')} | ${brand}`;
      return;
    }

    const titleMap: Record<string, string> = {
      '/services': t('nav.services'),
      '/projects': t('nav.projects'),
      '/about': t('nav.about'),
      '/contact': t('nav.contact'),
    };

    document.title = `${titleMap[path] ?? brand} | ${brand}`;
  }, [location.pathname, t]);

  return (
    <div id="top" className="min-h-screen bg-app text-slate-900 dark:bg-app-dark dark:text-slate-100">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-white dark:focus:text-slate-900"
      >
        {t('a11y.skip')}
      </a>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/60 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm dark:ring-slate-800">
              <img src={logoImage} alt={t('brand.name')} className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('brand.name')}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t('brand.tagline')}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn('transition hover:text-slate-950 dark:hover:text-white', isActive && 'text-slate-950 dark:text-white')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50 sm:flex">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('language.label')}</span>
              <select
                aria-label={t('language.label')}
                value={locale}
                onChange={(e) => setLocale(e.target.value as typeof locale)}
                className="bg-transparent text-sm font-semibold text-slate-800 outline-none dark:text-slate-100"
              >
                {locales.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => setTheme((v) => (v === 'dark' ? 'light' : 'dark'))}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
              aria-label={t('a11y.toggleTheme')}
            >
              {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
            </button>

            <Link
              to="/contact"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:inline-flex"
            >
              {t('actions.getQuote')}
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900 lg:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label={t('a11y.toggleMenu')}
              aria-expanded={mobileNavOpen}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                <path d="M5 7h14M5 12h14M5 17h14" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={cn(
            'border-t border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70 lg:hidden',
            mobileNavOpen ? 'block' : 'hidden'
          )}
        >
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-3 px-5 py-5 sm:px-8">
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{t('language.label')}</span>
              <select
                aria-label={t('language.label')}
                value={locale}
                onChange={(e) => setLocale(e.target.value as typeof locale)}
                className="bg-transparent text-sm font-semibold text-slate-800 outline-none dark:text-slate-100"
              >
                {locales.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:text-slate-100 dark:hover:bg-slate-900',
                    isActive && 'bg-slate-50 dark:bg-slate-900'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('actions.getQuote')}
            </Link>
          </div>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-5 py-10 text-sm text-slate-600 dark:text-slate-300 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="font-semibold text-slate-950 dark:text-slate-50">{t('brand.name')}</p>
            <p>{t('footer.line')}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${SITE.email}`}
                dir="ltr"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <IconMail className="h-4 w-4" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone}`}
                dir="ltr"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <IconPhone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                <IconGitHub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          <p>{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}
