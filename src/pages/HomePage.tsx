// Home page view
// Displays the company overview, service highlights, project concepts, and FAQs.
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconBuilding,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconGlobe,
  IconGraduation,
  IconHeartPulse,
  IconMapPin,
  IconShoppingBag,
} from '../components/icons';
import { PROJECTS } from '../data/projects';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

import animatedManImage from '../assets/images/anim-man-laptop.webp';

export default function HomePage() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ─────────────────────────────────────────────────────────── */

  const featuredServices = useMemo(
    () => [
      {
        key: 'web',
        image: PROJECTS[0].coverImage,
        title: t('services.web.title'),
        description: t('services.web.description'),
        tag: 'Web & UX',
      },
      {
        key: 'software',
        image: PROJECTS[1].coverImage,
        title: t('services.software.title'),
        description: t('services.software.description'),
        tag: 'Software',
      },
      {
        key: 'security',
        image: PROJECTS[4].coverImage,
        title: t('services.security.title'),
        description: t('services.security.description'),
        tag: 'Security',
      },
    ],
    [t]
  );

  const differentiators = [
    {
      Icon: IconMapPin,
      color: 'bg-brand-orange',
      title: 'Rooted in Ethiopia',
      body: 'Based in Addis Ababa, with project planning shaped around each client’s market and needs.',
    },
    {
      Icon: IconGlobe,
      color: 'bg-tech-blue',
      title: 'International-ready design',
      body: 'Multilingual content and right-to-left layouts can be included in the agreed project scope.',
    },
    {
      Icon: IconChartBar,
      color: 'bg-brand-orange',
      title: 'Pricing in ETB and USD',
      body: 'Local ETB and international USD ranges are set independently, not calculated by currency conversion.',
    },
    {
      Icon: IconClock,
      color: 'bg-tech-blue',
      title: 'Support scoped to your needs',
      body: 'Training, maintenance, and post-launch support can be discussed as part of a project proposal.',
    },
  ];

  const industries = [
    { Icon: IconShoppingBag, name: 'Retail & E-commerce', desc: 'Online stores, catalogs & payments' },
    { Icon: IconHeartPulse, name: 'Healthcare', desc: 'Patient portals & clinic systems' },
    { Icon: IconGraduation, name: 'Education', desc: 'School sites, LMS & student portals' },
    { Icon: IconChartBar, name: 'Finance', desc: 'Secure dashboards & client portals' },
    { Icon: IconBuilding, name: 'Construction', desc: 'Project tracking & field reporting' },
    { Icon: IconGlobe, name: 'NGOs & International', desc: 'Multilingual & donor management' },
  ];

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

  /* ── JSX ──────────────────────────────────────────────────────────── */

  return (
    <div className="bg-page-warm dark:bg-slate-900">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-orange-light dark:bg-slate-950 border-b-4 border-brand-orange overflow-hidden">
        {/* Solid accent blocks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/8 dark:bg-brand-orange/5" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-tech-blue/10 dark:bg-tech-blue/8 rounded-tr-[4rem]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left — copy */}
            <div className="space-y-8 animate-slide-in-left z-10">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="space-y-5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#9A3412] transition-all hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                >
                  Book a consultation
                </Link>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No commitment required.{' '}
                  <Link to="/projects" className="font-semibold text-tech-blue hover:underline">
                    Explore project concepts →
                  </Link>
                </p>
              </div>
            </div>

            {/* Right — illustration with solid backdrop */}
            <div className="relative lg:h-[560px] flex items-center justify-center animate-slide-in-right">
              <div className="absolute inset-0 lg:inset-y-6 bg-tech-blue rounded-3xl shadow-xl" />
              <div className="absolute inset-0 lg:inset-y-6 bg-brand-orange rounded-3xl translate-x-3 translate-y-3 -z-10" />
              <div className="relative z-10 w-full h-full flex items-end justify-center lg:items-center p-6">
                <img
                  src={animatedManImage}
                  alt="Professional tech consultant"
                  className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl mx-auto drop-shadow-2xl animate-float-gentle"
                  loading="eager"
                  decoding="async"
                  width={720}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK OVERVIEW ─────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Based in Addis Ababa', description: 'Local company, Ethiopia' },
                { title: 'Remote collaboration', description: 'Work with local and international teams' },
                { title: 'Five service areas', description: 'Web, software, IT, IoT, and security' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                  <p className="font-bold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
            {featuredProjects[0] && (
              <Link
                to={`/projects/${featuredProjects[0].slug}`}
                className="group flex gap-4 bg-brand-orange-light dark:bg-slate-800 border-2 border-brand-orange/30 dark:border-slate-700 rounded-xl p-4 hover:border-brand-orange transition-all"
              >
                {featuredProjects[0].coverImage && (
                  <img
                    src={featuredProjects[0].coverImage}
                    alt=""
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0 hidden sm:block"
                    loading="lazy"
                  />
                )}
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-1">
                    Project concept
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-brand-orange transition-colors truncate">
                    {featuredProjects[0].title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                    {featuredProjects[0].summary}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-tech-blue group-hover:underline">
                    Explore concept →
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="bg-tech-blue dark:bg-slate-950 py-12 lg:py-16 border-b-4 border-brand-orange">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">Sector focus</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Technology for different industries</h2>
            <p className="text-white/70 text-sm max-w-lg mx-auto">
              Explore common needs across sectors; each engagement is scoped to the organization.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <div
                key={industry.name}
                className="group flex items-start gap-4 bg-white/10 border border-white/15 rounded-xl p-5 hover:bg-white/15 transition-all animate-scale-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-orange text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  <industry.Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{industry.name}</h3>
                  <p className="text-white/65 text-xs leading-relaxed">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ───────────────────────────────────────── */}
      <section className="bg-section-b dark:bg-slate-900 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              What Makes Sunshine Tech Different
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We're not just another tech vendor — we're a long-term partner that grows with your business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, idx) => (
              <div
                key={d.title}
                className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-scale-in hover:border-brand-orange"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className={cn('h-1.5', d.color)} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={cn('flex items-center justify-center w-12 h-12 rounded-xl text-white', d.color)}>
                      <d.Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{d.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────────── */}
      <section className="bg-section-a dark:bg-slate-950 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">Potential applications</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Who We Can Support</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From local startups in Addis Ababa to international organizations operating in Ethiopia — we deliver for
              both.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Ethiopian businesses */}
            <div className="bg-brand-orange-light dark:bg-slate-800 rounded-2xl border-2 border-brand-orange/30 dark:border-slate-700 p-8 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange text-white">
                  <IconMapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ethiopian Businesses</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-sm">
                Affordable, practical solutions built for the Ethiopian market — scaled to grow with your business.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  'Startups & SMEs',
                  'Retail & E-commerce',
                  'Healthcare & Clinics',
                  'Education & NGOs',
                  'Government Offices',
                  'Hospitality & Tourism',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* International clients */}
            <div className="bg-brand-blue-light dark:bg-slate-800 rounded-2xl border-2 border-brand-blue/30 dark:border-slate-700 p-8 animate-slide-in-right">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-tech-blue text-white">
                  <IconGlobe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">International Clients</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-sm">
                Global-standard delivery for organizations operating in or expanding to Ethiopia, with remote-first
                collaboration.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  'Ethiopian Diaspora',
                  'International NGOs',
                  'Companies entering ET',
                  'Remote tech teams',
                  'Multilingual businesses',
                  'Cross-border commerce',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <IconCheck className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────────────────────── */}
      <section className="bg-section-b dark:bg-slate-900 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">
                {t('services.eyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {t('services.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">{t('services.subtitle')}</p>
            </div>
            {/* Soft CTA — not "Get Quote" */}
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-brand-orange border-2 border-brand-orange rounded-lg hover:bg-brand-orange hover:text-white transition-all shrink-0"
            >
              View All 5 Services →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredServices.map((service, idx) => (
              <div
                key={service.key}
                className="group bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:border-brand-orange hover:-translate-y-2 transition-all duration-300 animate-scale-in flex flex-col"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-white/80 uppercase tracking-widest bg-black/30 px-2 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-orange transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t-2 border-slate-100 dark:border-slate-700 mt-4">
                    {/* Soft learn-more link, not a hard CTA */}
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Learn more{' '}
                      <span aria-hidden="true" className="arrow-dir">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="bg-section-a dark:bg-slate-950 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">
                {t('projects.featured.eyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {t('projects.featured.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">{t('projects.featured.subtitle')}</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:border-brand-blue hover:text-brand-blue transition-all dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 shrink-0"
            >
              {t('projects.featured.viewAll')}
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.slug}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-brand-orange hover:-translate-y-2 transition-all duration-300 animate-scale-in flex flex-col"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className={cn(
                    'h-1.5',
                    idx === 0 ? 'bg-brand-orange' : idx === 1 ? 'bg-tech-blue' : 'bg-brand-orange'
                  )}
                />

                {project.coverImage && (
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-slate-900/20" />
                    {project.industry && (
                      <span className="absolute top-3 start-3 text-[10px] font-bold text-white bg-tech-blue px-2 py-1 rounded-full">
                        {project.industry}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-xs font-bold text-brand-blue dark:text-[#7FA8FF] uppercase tracking-wider mb-3">
                    Illustrative concept
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex-grow">
                    {project.summary}
                  </p>

                  <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-700 mt-auto">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all"
                    >
                      {t('projects.readCaseStudy')}{' '}
                      <span aria-hidden="true" className="arrow-dir">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─── */}
      <section className="bg-section-a dark:bg-slate-950 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3">{t('faq.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">{t('faq.title')}</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t('faq.subtitle')}</p>
          </div>

          <div className="space-y-3 animate-slide-in-right">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border-2 border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 hover:border-brand-orange transition-colors"
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-6 py-5 text-start hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    onClick={() => setOpenFaq((current) => (current === idx ? null : idx))}
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-${idx}`}
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white pe-4">{item.question}</span>
                    <IconChevronDown
                      className={cn(
                        'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180 text-brand-orange' : 'text-brand-blue dark:text-[#7FA8FF]'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div id={`home-faq-${idx}`} className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700 animate-fade-in-up">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 bg-brand-orange-light dark:bg-slate-800 border-2 border-brand-orange/30 dark:border-slate-700 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-slate-700 dark:text-slate-300 flex-grow">
              <span className="font-semibold text-brand-orange">Still have questions?</span> Our team is happy to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-orange rounded-xl hover:bg-[#9A3412] transition-all shrink-0"
            >
              Ask us now
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — ONE strong CTA at the bottom ─────────────────────── */}
      <section className="bg-section-b dark:bg-slate-900 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-orange rounded-2xl p-8 lg:p-12 text-center shadow-2xl animate-scale-in">
            <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{t('cta.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('cta.title')}</h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-orange bg-white rounded-lg hover:bg-slate-50 hover:shadow-lg transition-all"
            >
              Book a consultation
            </Link>
            <p className="mt-4 text-sm text-white/75">
              Or{' '}
              <Link to="/projects" className="font-semibold text-white underline hover:text-orange-200">
                browse project concepts
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
