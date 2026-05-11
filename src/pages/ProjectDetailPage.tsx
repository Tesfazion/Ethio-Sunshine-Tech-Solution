import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { useI18n } from '../i18n';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useI18n();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold text-emerald-700">{t('projects.notFound.eyebrow')}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{t('projects.notFound.title')}</h1>
        <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t('projects.notFound.subtitle')}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {t('projects.backToProjects')}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            {t('actions.getQuote')}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div>
      <section className="bg-aurora dark:bg-aurora-dark">
        <div className="mx-auto max-w-screen-2xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Link to="/projects" className="font-semibold text-slate-900 hover:underline dark:text-slate-100">
              {t('nav.projects')}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="truncate">{project.title}</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{project.year}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-slate-50">{project.title}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{project.summary}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.highlights')}</p>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-600 text-white">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" className="stroke-current" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {project.metrics?.length ? (
                <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.metrics')}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{metric.label}</p>
                        <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-slate-50">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {project.links?.length ? (
                <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.links')}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.35fr] lg:items-start">
          <div className="space-y-6">
            {project.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[2rem] border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{section.body}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none">
              <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('projects.nextStep.title')}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t('projects.nextStep.subtitle')}</p>
              <div className="mt-4 flex flex-col gap-3">
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
                  {t('projects.backToProjects')}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
