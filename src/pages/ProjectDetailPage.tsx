// Project detail page view
// Shows an illustrative project concept based on the URL slug.
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { useI18n } from '../i18n';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useI18n();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="bg-slate-50 dark:bg-slate-900">
        <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold text-brand-orange">{t('projects.notFound.eyebrow')}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {t('projects.notFound.title')}
          </h1>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t('projects.notFound.subtitle')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#9A3412] dark:bg-brand-orange dark:text-white dark:hover:bg-[#9A3412]"
            >
              {t('projects.backToProjects')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-orange bg-white px-6 py-3 text-sm font-semibold text-brand-orange shadow-sm transition hover:bg-brand-orange-light dark:border-brand-orange dark:bg-slate-950 dark:text-brand-orange dark:hover:bg-brand-orange/10"
            >
              {t('actions.getQuote')}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-sunrise-orange/10" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link to="/projects" className="font-semibold text-white/70 hover:text-white transition">
              {t('nav.projects')}
            </Link>
            <span className="text-white/40" aria-hidden="true">
              /
            </span>
            <span className="text-white/50 truncate">{project.title}</span>
          </div>

          {/* Hero 2-col grid */}
          <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            {/* Concept title and summary */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-3">
                Illustrative concept · {project.industry}
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{project.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mt-4 max-w-2xl">{project.summary}</p>
            </div>

            {/* RIGHT — glass card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              {/* Highlights */}
              <p className="text-sm font-semibold text-white">{t('projects.highlights')}</p>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-orange text-white">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                        <path
                          d="M20 6L9 17l-5-5"
                          className="stroke-current"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Case Study Body + Sidebar ────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] items-start">
            {/* Concept details */}
            <div>
              {project.sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-8 mb-6"
                >
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{section.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{section.body}</p>
                </div>
              ))}

            </div>

            {/* RIGHT — Sticky sidebar */}
            <aside className="sticky top-24">
              {/* Card 1 — Next Steps */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-6">
                <p className="font-bold text-slate-900 dark:text-white">{t('projects.nextStep.title')}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{t('projects.nextStep.subtitle')}</p>
                <div className="mt-4 flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#9A3412] dark:hover:bg-[#9A3412]"
                  >
                    {t('actions.getQuote')}
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center rounded-full border-2 border-brand-orange bg-white px-6 py-3 text-sm font-semibold text-brand-orange transition hover:bg-brand-orange-light dark:bg-slate-800 dark:text-brand-orange dark:hover:bg-brand-orange/10"
                  >
                    {t('projects.backToProjects')}
                  </Link>
                </div>
              </div>

              {/* Project focus */}
              <div className="bg-section-c dark:bg-slate-800 rounded-2xl border-2 border-brand-blue/15 dark:border-slate-700 p-6 mt-4">
                <p className="font-bold text-brand-blue dark:text-[#7FA8FF] mb-2 text-sm">Project focus</p>
                <p className="text-sm text-slate-800 dark:text-white">{project.industry}</p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  This is an illustrative concept, not a verified client case study or performance claim.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
