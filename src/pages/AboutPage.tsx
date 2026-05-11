import { Link } from 'react-router-dom';
import { IconGitHub } from '../components/icons';
import { SITE } from '../data/site';
import { useI18n } from '../i18n';
import { useGithubRepo } from '../lib/useGithubRepo';

export default function AboutPage() {
  const { t } = useI18n();
  const githubUrl = SITE.socials.find((link) => link.kind === 'github')?.href ?? 'https://github.com/';
  const portfolioRepoUrl = SITE.socials.find((link) => link.label === 'Portfolio Repo')?.href ?? githubUrl;
  const repoInfo = useGithubRepo('Tesfazion', 'Tesfa-portfolio');

  return (
    <div>
      <section className="bg-aurora dark:bg-aurora-dark">
        <div className="mx-auto max-w-screen-2xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('about.eyebrow')}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-slate-50">{t('about.title')}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{t('about.subtitle')}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
              >
                {t('cta.viewProjects')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {t('actions.getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {(['one', 'two', 'three', 'four', 'five', 'six'] as const).map((k) => (
            <div
              key={k}
              className="rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{t(`about.cards.${k}.eyebrow`)}</p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-slate-50">{t(`about.cards.${k}.title`)}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t(`about.cards.${k}.body`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('about.story.eyebrow')}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">{t('about.story.title')}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{t('about.story.body')}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('about.founder.eyebrow')}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-3xl">{t('about.founder.title')}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{t('about.founder.body')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {t('about.founder.cta')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('about.team.eyebrow')}</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">{t('about.team.title')}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('about.team.subtitle')}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-200 via-sky-200 to-amber-200 text-slate-900 shadow-sm motion-safe:animate-pulse-soft dark:from-emerald-500/20 dark:via-sky-500/15 dark:to-amber-400/10 dark:text-slate-100">
                  <span className="text-sm font-black">FC</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{t('about.team.founder.role')}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-slate-50">{t('about.team.founder.name')}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{t('about.team.founder.body')}</p>

              {repoInfo.status === 'ready' && repoInfo.data ? (
                <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={repoInfo.data.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
                    >
                      <IconGitHub className="h-4 w-4" />
                      {repoInfo.data.full_name}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Updated{' '}
                      {new Date(repoInfo.data.updated_at).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                      })}
                    </p>
                  </div>
                  {repoInfo.data.description ? (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{repoInfo.data.description}</p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                      ⭐ {repoInfo.data.stargazers_count}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                      Forks {repoInfo.data.forks_count}
                    </span>
                    {repoInfo.data.language ? (
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                        {repoInfo.data.language}
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  {t('about.founder.cta')}
                </Link>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <IconGitHub className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-200 via-emerald-200 to-slate-100 text-slate-900 shadow-sm motion-safe:animate-pulse-soft dark:from-sky-500/15 dark:via-emerald-500/15 dark:to-slate-900/0 dark:text-slate-100">
                  <span className="text-sm font-black">LD</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">{t('about.team.developer.role')}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-slate-50">{t('about.team.developer.name')}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{t('about.team.developer.body')}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  {t('cta.viewProjects')}
                </Link>
                <a
                  href={portfolioRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <IconGitHub className="h-5 w-5" />
                  Portfolio Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
