// Shared layout wrapper and site chrome.
// This component owns top navigation, theme handling, metadata updates, and the footer.
import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import ChatWidget from '../components/ChatWidget';
import { IconGitHub, IconMail, IconMapPin, IconMoon, IconPhone, IconSun } from '../components/icons';
import { getProjectBySlug } from '../data/projects';
import { SITE } from '../data/site';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

import logoImage from '../assets/images/logo/company-logo.png';

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

  const navGroups = useMemo(
    () => [
      {
        links: [{ to: '/', label: t('nav.home'), end: true as const }],
      },
      {
        label: 'Work',
        links: [
          { to: '/services', label: t('nav.services') },
          { to: '/projects', label: t('nav.projects') },
          { to: '/pricing', label: 'Pricing' },
        ],
      },
      {
        label: 'Company',
        links: [
          { to: '/about', label: t('nav.about') },
          { to: '/contact', label: t('nav.contact') },
        ],
      },
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

    const metaDescriptions: Record<string, string> = {
      '/': 'Sunshine Tech Solution — Web design, software development, IT infrastructure, IoT & cybersecurity for businesses worldwide. 30+ projects delivered.',
      '/services':
        'Professional tech services in Ethiopia: websites, custom software, cloud infrastructure, IoT systems & cybersecurity. Free consultation available.',
      '/projects':
        'Explore 30+ real case studies — websites, portals, e-commerce, cloud & security projects delivered for Ethiopian and international clients.',
      '/pricing':
        'Transparent website pricing in Ethiopian Birr (ETB). Basic, Standard & Advanced packages from 14,250 ETB. Free consultation included.',
      '/about':
        'Meet the Sunshine Tech team — Ethiopian tech experts delivering global-quality web, software & security solutions since 2021.',
      '/contact':
        'Contact Sunshine Tech Solution in Addis Ababa. Free project consultation via phone, email, WhatsApp or our contact form.',
      '/privacy':
        'Privacy policy for Sunshine Tech Solution — how we collect, use and protect your personal information.',
    };

    let pageTitle = brand;
    if (path === '/') {
      pageTitle = brand;
    } else if (path.startsWith('/projects/')) {
      const slug = path.split('/')[2] ?? '';
      const project = getProjectBySlug(slug);
      pageTitle = project ? `${project.title} | ${brand}` : `${t('nav.projects')} | ${brand}`;
    } else {
      const titleMap: Record<string, string> = {
        '/services': t('nav.services'),
        '/projects': t('nav.projects'),
        '/about': t('nav.about'),
        '/contact': t('nav.contact'),
        '/pricing': 'Pricing',
        '/privacy': 'Privacy',
      };
      pageTitle = `${titleMap[path] ?? brand} | ${brand}`;
    }

    document.title = pageTitle;

    const description =
      path.startsWith('/projects/') && getProjectBySlug(path.split('/')[2] ?? '')
        ? getProjectBySlug(path.split('/')[2] ?? '')!.summary
        : (metaDescriptions[path] ?? metaDescriptions['/']);

    let metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', description);
    }
  }, [location.pathname, t]);

  return (
    <div id="top" className="min-h-screen bg-page-warm dark:bg-slate-900">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t('a11y.skip')}
      </a>

      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-sm dark:bg-slate-950/85 dark:border-slate-800/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl border-2 border-brand-orange shadow-sm">
              <img src={logoImage} alt={t('brand.name')} className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-slate-900 dark:text-white">{t('brand.name')}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400">{t('brand.tagline')}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navGroups.map((group, gi) => (
              <div key={group.label ?? `group-${gi}`} className="flex items-center gap-1">
                {gi > 0 && <span className="mx-2 h-4 w-px bg-slate-200 dark:bg-slate-700" aria-hidden />}
                {group.label && <span className="sr-only">{group.label}</span>}
                {group.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={'end' in link ? link.end : undefined}
                    className={({ isActive }) =>
                      cn(
                        'px-3 py-2 rounded-lg text-sm font-semibold transition-colors',
                        isActive
                          ? 'text-brand-orange bg-brand-orange-light dark:bg-brand-orange/10'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <label htmlFor="locale-select" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {t('language.label')}
              </label>
              <select
                id="locale-select"
                aria-label={t('language.label')}
                value={locale}
                onChange={(e) => setLocale(e.target.value as typeof locale)}
                className="px-3 py-2 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg outline-none dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
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
              className="inline-flex items-center justify-center p-2 text-slate-700 bg-slate-100 border border-slate-200 rounded-lg transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label={t('a11y.toggleTheme')}
            >
              {theme === 'dark' ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
            </button>

            <Link
              to="/contact"
              className="hidden px-6 py-2 text-sm font-semibold text-white bg-brand-orange rounded-lg transition-colors hover:bg-[#E66D00] sm:inline-flex"
            >
              Book consultation
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-slate-700 bg-slate-100 border border-slate-200 rounded-lg transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700 lg:hidden"
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
            'border-t-2 border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 lg:hidden',
            mobileNavOpen ? 'block' : 'hidden'
          )}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            <div className="mb-2 flex items-center justify-between px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{t('language.label')}</span>
              <select
                aria-label={t('language.label')}
                value={locale}
                onChange={(e) => setLocale(e.target.value as typeof locale)}
                className="bg-transparent text-sm font-semibold text-slate-900 outline-none dark:text-white"
              >
                {locales.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>

            {navGroups.map((group, gi) => (
              <div key={group.label ?? `mobile-group-${gi}`}>
                {group.label && (
                  <p className="px-4 pt-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {group.label}
                  </p>
                )}
                {group.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={'end' in link ? link.end : undefined}
                    className={({ isActive }) =>
                      cn(
                        'px-4 py-3 rounded-lg text-sm font-semibold transition-colors block',
                        isActive
                          ? 'bg-brand-orange-light text-brand-orange'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            ))}

            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-brand-orange rounded-lg transition-colors hover:bg-[#E66D00]"
            >
              Book consultation
            </Link>
          </div>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-slate-900 dark:bg-slate-950 text-white">
        {/* ── Brand gradient top accent ─────────────────────── */}
        <div className="h-1 bg-gradient-to-r from-[#FF7A00] via-[#FF7A00] to-[#007ACC]" />

        {/* ── Main footer body ──────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Col 1 — Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-xl border-2 border-[#FF7A00] shadow-lg flex-shrink-0">
                  <img src={logoImage} alt={t('brand.name')} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">{t('brand.name')}</p>
                  <p className="text-xs text-white/50 mt-0.5">{t('brand.tagline')}</p>
                </div>
              </div>
              <p className="text-sm text-white/65 leading-relaxed max-w-xs">{t('footer.line')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A00] hover:text-orange-300 transition-colors"
              >
                Book a free consultation →
              </Link>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconGitHub className="h-4 w-4 text-white" />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  aria-label="Email"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconMail className="h-4 w-4 text-white" />
                </a>
                <a
                  href={`tel:${SITE.phone}`}
                  aria-label="Phone"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <IconPhone className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>

            {/* Col 2 — Explore */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">Explore</h3>
              <ul className="space-y-2.5">
                {[
                  { to: '/services', label: t('nav.services') },
                  { to: '/projects', label: t('nav.projects') },
                  { to: '/pricing', label: 'Pricing' },
                  { to: '/about', label: t('nav.about') },
                  { to: '/contact', label: t('nav.contact') },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        cn(
                          'text-sm transition-colors',
                          isActive ? 'text-[#FF7A00] font-semibold' : 'text-white/65 hover:text-white'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#7FA8FF]">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-start gap-2 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <IconMail className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#7FA8FF]" />
                    <span className="break-all">{SITE.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <IconPhone className="h-4 w-4 flex-shrink-0 text-[#7FA8FF]" />
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm text-white/65">
                  <IconMapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#7FA8FF]" />
                  <span>{SITE.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-center sm:text-start">
              <p className="text-xs text-white/40">{t('footer.rights')}</p>
              <Link to="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
