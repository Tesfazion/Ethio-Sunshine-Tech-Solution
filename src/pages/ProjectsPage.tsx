// Projects page view
// Lists project case studies with spotlight cards and a call-to-action section.
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProjectSpotlight from '../components/ProjectSpotlight';
import { PROJECTS } from '../data/projects';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

const HERO_BG = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80';

export default function ProjectsPage() {
  const { t } = useI18n();

  const stats = useMemo(
    () => [
      {
        label: t('projects.dashboard.cards.one.label'),
        value: t('projects.dashboard.cards.one.value'),
      },
      {
        label: t('projects.dashboard.cards.two.label'),
        value: t('projects.dashboard.cards.two.value'),
      },
      {
        label: t('projects.dashboard.cards.three.label'),
        value: t('projects.dashboard.cards.three.value'),
      },
    ],
    [t]
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* ── Hero with integrated stats ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-tech-blue" aria-label="Projects hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl animate-slide-in-left">
            <p className="text-orange-300 text-sm font-bold uppercase tracking-widest mb-4">
              {t('projects.page.eyebrow')}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {t('projects.page.title')}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">{t('projects.page.subtitle')}</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl animate-fade-in-up">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={cn(
                  'bg-white dark:bg-slate-800 rounded-xl border-2 p-5 text-center shadow-lg',
                  idx === 0
                    ? 'border-brand-orange'
                    : idx === 1
                      ? 'border-tech-blue'
                      : 'border-slate-200 dark:border-slate-600'
                )}
              >
                <p className="text-3xl font-bold text-brand-orange">{stat.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All projects — unified spotlight layout ─────────────────── */}
      <section className="bg-white dark:bg-slate-950 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">Case Studies</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Real Results for Real Clients</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
                Every project below follows the same proven process — clear goals, measurable outcomes, and ongoing
                support.
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-brand-orange-light dark:bg-slate-800 px-4 py-2 rounded-full border-2 border-brand-orange/30 dark:border-slate-700">
              {PROJECTS.length} projects delivered
            </p>
          </div>

          <div className="space-y-10 lg:space-y-14">
            {PROJECTS.map((project, index) => (
              <ProjectSpotlight
                key={project.slug}
                project={project}
                reverse={index % 2 === 1}
                readCaseStudyLabel={t('projects.readCaseStudy')}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-orange-light dark:bg-slate-900 py-16 border-t-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-orange rounded-2xl p-8 lg:p-12 text-center shadow-2xl animate-scale-in">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3">Ready to build?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('projects.ctaTitle')}</h2>
            <p className="text-white/85 mb-8 max-w-xl mx-auto">{t('projects.ctaSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-orange bg-white rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all"
              >
                {t('actions.getQuote')}
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
