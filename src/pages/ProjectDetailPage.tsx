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
              className="inline-flex items-center justify-center rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#E66D00] dark:bg-brand-orange dark:text-white dark:hover:bg-[#FFB366]"
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

  const initials = project.testimonial
    ? project.testimonial.author
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
    : '';

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
            {/* LEFT — title, summary, tags, result */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-300 mb-3">{project.year}</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{project.title}</h1>
              <p className="text-white/80 text-lg leading-relaxed mt-4 max-w-2xl">{project.summary}</p>

              {/* Result banner */}
              {project.result && (
                <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-2 text-orange-200 text-sm font-semibold">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 flex-none text-orange-300"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.result}
                </div>
              )}
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

              {/* Meta: Industry + Duration */}
              {(project.industry || project.duration) && (
                <div className="border-t border-white/20 mt-4 pt-4 grid grid-cols-2 gap-3">
                  {project.industry && (
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">Industry</p>
                      <p className="text-white font-semibold text-sm mt-0.5">{project.industry}</p>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-wider">Duration</p>
                      <p className="text-white font-semibold text-sm mt-0.5">{project.duration}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Metrics */}
              {project.metrics?.length ? (
                <div className="grid grid-cols-2 gap-3 mt-4 border-t border-white/20 pt-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                      <p className="text-brand-orange text-2xl font-bold">{metric.value}</p>
                      <p className="text-white/60 text-xs mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {/* Links */}
              {project.links?.length ? (
                <div className="mt-4 border-t border-white/20 pt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-full border-2 border-brand-orange px-5 py-2 text-sm font-semibold text-orange-200 transition hover:bg-brand-orange hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Case Study Body + Sidebar ────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr] items-start">
            {/* LEFT — section cards + testimonial */}
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

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-brand-orange rounded-2xl p-8 mt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-300"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed italic mb-6">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                      {initials}
                    </div>
                    <div>
                      <p className="font-bold text-white">{project.testimonial.author}</p>
                      <p className="text-white/70 text-sm">
                        {project.testimonial.role}, {project.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
                    className="inline-flex items-center justify-center rounded-full bg-brand-orange text-white px-6 py-3 text-sm font-semibold shadow-sm transition hover:bg-[#E66D00] dark:hover:bg-[#FFB366]"
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

              {/* Card 2 — Industry & Year */}
              <div className="bg-section-c dark:bg-slate-800 rounded-2xl border-2 border-brand-blue/15 dark:border-slate-700 p-6 mt-4">
                <p className="font-bold text-brand-blue dark:text-[#7FA8FF] mb-3 text-sm">Project Details</p>
                <div className="space-y-2">
                  {project.industry && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Industry</span>
                      <span className="font-semibold text-slate-800 dark:text-white">{project.industry}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Duration</span>
                      <span className="font-semibold text-slate-800 dark:text-white">{project.duration}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Year</span>
                    <span className="font-semibold text-slate-800 dark:text-white">{project.year}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
