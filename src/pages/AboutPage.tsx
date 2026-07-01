// About page view
// Contains the company story, values, and team sections for easy content updates.
import { Link } from 'react-router-dom';
import { IconCheck } from '../components/icons';
import { useI18n } from '../i18n';

const HERO_BG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80';
const STORY_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[68vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl animate-slide-in-left">
            {/* Glass content panel */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-12">
              <p className="text-sm font-semibold text-orange-300 uppercase tracking-widest mb-4">
                {t('about.eyebrow')}
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                {t('about.title')}
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-8">{t('about.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] transition-all"
                >
                  {t('actions.getQuote')}
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/15 backdrop-blur-sm border-2 border-white/30 rounded-lg hover:bg-white/25 transition-all"
                >
                  {t('cta.viewProjects')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat pills anchored to bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
          <div className="mx-auto max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '30+', label: 'Projects Done' },
              { value: '98%', label: 'Satisfaction' },
              { value: '5+', label: 'Years' },
              { value: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 text-center shadow-xl animate-scale-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <p className="text-3xl font-bold text-brand-orange">{stat.value}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for floating stats */}
      <div className="h-20 bg-slate-50 dark:bg-slate-900" />

      {/* Trust signals strip */}
      <section className="bg-tech-blue py-8 border-b-4 border-brand-orange">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Trusted by clients in</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['Retail', 'Healthcare', 'Finance', 'Education', 'NGOs', 'E-commerce'].map((sector) => (
                <span
                  key={sector}
                  className="text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Values Grid ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-widest mb-3">Our Core Values</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mb-4">What Defines Us</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Six principles that guide every project, every decision, and every relationship we build.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(['one', 'two', 'three', 'four', 'five', 'six'] as const).map((k, idx) => (
              <div
                key={k}
                className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-6 hover:shadow-xl hover:border-brand-orange hover:-translate-y-2 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange-light flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-orange font-black text-lg">{idx + 1}</span>
                  </div>
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                    {t(`about.cards.${k}.eyebrow`)}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{t(`about.cards.${k}.title`)}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t(`about.cards.${k}.body`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Story + Founder ──────────────────────────────────── */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ backgroundImage: `url(${STORY_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-tech-blue/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] items-start">
            {/* Story — glass card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 lg:p-10 animate-slide-in-left">
              <p className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-4">
                {t('about.story.eyebrow')}
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">{t('about.story.title')}</h2>
              <p className="text-white/80 leading-relaxed text-lg mb-8">{t('about.story.body')}</p>
              <div className="space-y-3">
                {[
                  'Modern Technology Solutions',
                  'Ethiopian Market Expertise',
                  'Proven Track Record',
                  'Customer-Focused Approach',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white flex-shrink-0">
                      <IconCheck className="w-3 h-3" />
                    </div>
                    <span className="text-white/90 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder — glass card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-slide-in-right">
              <p className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-4">
                {t('about.founder.eyebrow')}
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">{t('about.founder.title')}</h2>
              <p className="text-white/80 leading-relaxed mb-6">{t('about.founder.body')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] transition-all"
              >
                {t('about.founder.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Team ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-4">
              {t('about.team.eyebrow')}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white mb-4">
              {t('about.team.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">{t('about.team.subtitle')}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Founder card */}
            <div className="group bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:border-brand-orange transition-all duration-300 animate-scale-in">
              {/* Orange top stripe */}
              <div className="h-2 bg-gradient-to-r from-brand-orange to-[#FFB347]" />
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#E66D00] text-white text-2xl font-black shadow-lg flex-shrink-0">
                    TM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-1">
                      {t('about.team.founder.role')}
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">Tesfatseyon Merkineh</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t('about.team.founder.body')}
                </p>
                <div className="pt-4 border-t-2 border-slate-100 dark:border-slate-700">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] transition-all"
                  >
                    {t('about.founder.cta')}
                  </Link>
                </div>
              </div>
            </div>

            {/* Developer card */}
            <div
              className="group bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:border-brand-blue transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '100ms' }}
            >
              {/* Blue top stripe */}
              <div className="h-2 bg-gradient-to-r from-tech-blue to-[#2BA7E6]" />
              <div className="p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br from-tech-blue to-[#007ACC] text-white text-2xl font-black shadow-lg flex-shrink-0">
                    LD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-blue uppercase tracking-wider mb-1">
                      {t('about.team.developer.role')}
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{t('about.team.developer.name')}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t('about.team.developer.body')}
                </p>
                <div className="pt-4 border-t-2 border-slate-100 dark:border-slate-700">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-blue rounded-lg hover:bg-[#0069B3] transition-all"
                  >
                    {t('cta.viewProjects')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ──────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-orange rounded-2xl p-8 lg:p-12 text-center border-2 border-brand-orange shadow-2xl animate-scale-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-orange bg-white rounded-lg hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
