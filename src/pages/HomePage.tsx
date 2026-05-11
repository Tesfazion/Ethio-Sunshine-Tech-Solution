import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { IconChevronDown, IconCloud, IconCode, IconDevices, IconShield, IconSparkles } from '../components/icons';
import { cn } from '../lib/cn';
import { PROJECTS } from '../data/projects';

import heroImage from '../../Images/Copilot_20260510_134932.png';

import cyberSecurityImage from '../../Images/cyber-security/9ad3fb14fec1877b220d02187e4e8494.jpg';
import infrastructureImage from '../../Images/it-infrastructure/a6ac98b7add388a11e26f63afd33e783.jpg';
import iotImage from '../../Images/iot/b66694e550998d6ef5a9c6cb6ca22c74.jpg';
import softwareDevImage from '../../Images/software-dev/b31c608108475fea6cd7e49e3a2dd46e.jpg';
import webDesignImage from '../../Images/web-designing/7b1eb6a2b96f287333455fd78bb1c453.jpg';

export default function HomePage() {
  const { t, formatNumber } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = useMemo(
    () => [
      {
        key: 'web',
        icon: IconSparkles,
        image: webDesignImage,
        title: t('services.web.title'),
        description: t('services.web.description'),
      },
      {
        key: 'software',
        icon: IconCode,
        image: softwareDevImage,
        title: t('services.software.title'),
        description: t('services.software.description'),
      },
      {
        key: 'infrastructure',
        icon: IconCloud,
        image: infrastructureImage,
        title: t('services.infrastructure.title'),
        description: t('services.infrastructure.description'),
      },
      {
        key: 'iot',
        icon: IconDevices,
        image: iotImage,
        title: t('services.iot.title'),
        description: t('services.iot.description'),
      },
      {
        key: 'security',
        icon: IconShield,
        image: cyberSecurityImage,
        title: t('services.security.title'),
        description: t('services.security.description'),
      },
    ],
    [t]
  );

  const stats = useMemo(
    () => [
      { value: `${formatNumber(30)}+`, label: t('stats.projects') },
      { value: `${formatNumber(98)}%`, label: t('stats.clients') },
      { value: `${formatNumber(12)}h`, label: t('stats.hours') },
      { value: `${formatNumber(24)}h`, label: t('stats.response') },
    ],
    [formatNumber, t]
  );

  const engagementModels = useMemo(
    () => [
      { key: 'delivery', icon: IconSparkles, title: t('engagement.models.delivery.title'), description: t('engagement.models.delivery.description') },
      { key: 'team', icon: IconCode, title: t('engagement.models.team.title'), description: t('engagement.models.team.description') },
      { key: 'review', icon: IconShield, title: t('engagement.models.review.title'), description: t('engagement.models.review.description') },
    ],
    [t]
  );

  const faqItems = useMemo(
    () => [
      { question: t('faq.items.one.q'), answer: t('faq.items.one.a') },
      { question: t('faq.items.two.q'), answer: t('faq.items.two.a') },
      { question: t('faq.items.three.q'), answer: t('faq.items.three.a') },
      { question: t('faq.items.four.q'), answer: t('faq.items.four.a') },
    ],
    [t]
  );

  const featuredProjects = useMemo(() => PROJECTS.slice(0, 3), []);

  return (
    <div>
      <section className="relative overflow-hidden bg-aurora dark:bg-aurora-dark">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl motion-safe:animate-float dark:bg-emerald-400/10" />
        <div className="pointer-events-none absolute -bottom-28 left-[10%] h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-3xl motion-safe:animate-float-slower dark:bg-sky-400/10" />
        <div className="pointer-events-none absolute -bottom-32 right-[8%] h-[420px] w-[420px] rounded-full bg-amber-300/20 blur-3xl motion-safe:animate-float-xy dark:bg-amber-300/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_60%)] opacity-70 dark:opacity-0 motion-safe:animate-pulse-soft" />

        <div className="mx-auto max-w-screen-2xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 lg:pb-24 lg:pt-20">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-2 text-xs font-semibold text-emerald-900 shadow-sm dark:border-emerald-400/20 dark:bg-slate-950/50 dark:text-emerald-100 dark:shadow-none">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>{t('hero.badge')}</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl motion-safe:animate-fade-up dark:text-slate-50">
                  {t('hero.title')}
                </h1>
                <p
                  className="max-w-2xl text-balance text-base leading-relaxed text-slate-700 sm:text-lg motion-safe:animate-fade-up dark:text-slate-300"
                  style={{ animationDelay: '90ms' }}
                >
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 motion-safe:animate-fade-up dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  style={{ animationDelay: '160ms' }}
                >
                  {t('actions.getQuote')}
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 motion-safe:animate-fade-up dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
                  style={{ animationDelay: '220ms' }}
                >
                  {t('actions.viewWork')}
                </Link>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/40 dark:shadow-none">
                  <IconSparkles className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t('hero.highlight')}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t('hero.note')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-emerald-300/25 via-sky-300/20 to-amber-300/15 blur-2xl dark:from-emerald-500/10 dark:via-sky-500/10 dark:to-amber-400/5" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-white shadow-xl dark:border-slate-800/70 dark:bg-slate-950">
                <div className="absolute inset-0 -translate-x-[40%] bg-gradient-to-tr from-white/0 via-white/40 to-white/0 motion-safe:animate-shimmer dark:via-white/10" />
                <img src={heroImage} alt="" className="aspect-[16/12] w-full object-cover" loading="eager" decoding="async" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/40 dark:ring-slate-700/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('services.eyebrow')}</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
            {t('services.title')}
          </h2>
          <p className="max-w-3xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('services.subtitle')}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.key}
                className="group relative overflow-hidden rounded-[2rem] bg-white/70 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow motion-safe:animate-fade-up dark:bg-slate-900/60 dark:ring-slate-800/70 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative">
                  <img src={service.image} alt={service.title} className="h-40 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/15 to-transparent dark:from-slate-950/85 dark:via-slate-950/20" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/40 dark:ring-slate-700/40" />
                </div>

                <div className="relative space-y-3 px-6 pb-7 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-slate-50">{service.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl transition opacity-0 group-hover:opacity-100 dark:bg-emerald-500/10" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('services.ctaTitle')}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t('services.ctaSubtitle')}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              {t('actions.viewWork')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('actions.getQuote')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('projects.featured.eyebrow')}</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
                {t('projects.featured.title')}
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('projects.featured.subtitle')}</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('projects.featured.viewAll')}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group relative isolate overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-200/25 via-sky-200/20 to-amber-200/20 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-emerald-500/10 dark:via-sky-500/10 dark:to-amber-500/5" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{project.year}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>

                <div className="mt-5">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                  >
                    {t('projects.readCaseStudy')}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl opacity-0 transition group-hover:opacity-100 dark:bg-sky-500/10" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('solutions.eyebrow')}</p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
                {t('solutions.title')}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('hero.subtitle')}</p>
            </div>

            <div className="grid gap-4">
              {(['one', 'two', 'three', 'four'] as const).map((k) => (
                <div
                  key={k}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
                >
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-200">{t(`solutions.bullets.${k}`)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('engagement.eyebrow')}</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">
              {t('engagement.title')}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('engagement.subtitle')}</p>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              {t('actions.getQuote')}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={model.key}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-slate-950 dark:text-slate-50">{model.title}</p>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{model.description}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl opacity-0 transition group-hover:opacity-100 dark:bg-sky-500/10" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('faq.eyebrow')}</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">{t('faq.title')}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('faq.subtitle')}</p>
          </div>

          <div className="mt-10 grid gap-4">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={`${idx}-${item.question}`}
                  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    onClick={() => setOpenFaq((current) => (current === idx ? null : idx))}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                  >
                    <span className="text-base font-semibold text-slate-950 dark:text-slate-50 sm:text-lg">{item.question}</span>
                    <IconChevronDown
                      className={cn(
                        'h-5 w-5 flex-none text-slate-500 transition-transform duration-200 dark:text-slate-400',
                        isOpen ? 'rotate-180' : 'rotate-0'
                      )}
                    />
                  </button>

                  <div id={`faq-${idx}`} className={cn('px-6 pb-6', isOpen ? 'block' : 'hidden')}>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-aurora p-8 shadow-sm dark:border-slate-800 dark:bg-aurora-dark dark:shadow-none sm:p-12">
            <div className="pointer-events-none absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-400/10" />
            <div className="pointer-events-none absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-400/10" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.75),transparent_55%)] opacity-70 dark:opacity-0" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.18),rgba(14,165,233,0.14),rgba(250,204,21,0.14),rgba(16,185,129,0.18))] bg-[length:220%_220%] opacity-55 mix-blend-multiply motion-safe:animate-gradient-pan dark:hidden" />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 dark:text-emerald-200">{t('cta.eyebrow')}</p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">{t('cta.title')}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{t('cta.subtitle')}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  {t('actions.getQuote')}
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  {t('cta.viewProjects')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
