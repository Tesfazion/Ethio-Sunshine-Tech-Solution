import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

export default function ProjectsPage() {
  const { t } = useI18n();
  const [activeTag, setActiveTag] = useState<string>('__all__');

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const project of PROJECTS) {
      for (const tag of project.tags) set.add(tag);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === '__all__') return PROJECTS;
    return PROJECTS.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div>
      <section className="bg-aurora dark:bg-aurora-dark">
        <div className="mx-auto max-w-screen-2xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('projects.page.eyebrow')}</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-slate-50">{t('projects.page.title')}</h1>
            <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{t('projects.page.subtitle')}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTag('__all__')}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition',
                activeTag === '__all__'
                  ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900'
              )}
            >
              {t('projects.filterAll')}
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition',
                  activeTag === tag
                    ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none">
          <div className="relative">
            <div className="pointer-events-none absolute -top-20 -left-24 h-56 w-56 rounded-full bg-emerald-200/40 blur-3xl motion-safe:animate-float dark:bg-emerald-500/10" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl motion-safe:animate-float-xy dark:bg-sky-500/10" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.18),rgba(14,165,233,0.14),rgba(250,204,21,0.12),rgba(16,185,129,0.18))] bg-[length:220%_220%] opacity-55 mix-blend-multiply motion-safe:animate-gradient-pan dark:hidden" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.dashboard.title')}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300">{t('projects.dashboard.subtitle')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: t('projects.dashboard.cards.one.label'), value: t('projects.dashboard.cards.one.value') },
                  { label: t('projects.dashboard.cards.two.label'), value: t('projects.dashboard.cards.two.value') },
                  { label: t('projects.dashboard.cards.three.label'), value: t('projects.dashboard.cards.three.value') },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="min-w-[180px] rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:shadow-none"
                  >
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{card.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-slate-50">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <article
              key={project.slug}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow motion-safe:animate-fade-up dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
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

              <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>

              <div className="mt-5 flex items-center justify-between gap-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
                >
                  {t('projects.readCaseStudy')}
                  <span aria-hidden="true">→</span>
                </Link>
                <span className="text-xs text-slate-500 dark:text-slate-400">{t('projects.caseStudy')}</span>
              </div>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl opacity-0 transition group-hover:opacity-100 dark:bg-sky-500/10" />
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.ctaTitle')}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t('projects.ctaSubtitle')}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {t('actions.getQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
}
