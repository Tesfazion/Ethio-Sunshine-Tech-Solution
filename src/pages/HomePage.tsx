import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCheck, IconChevronDown, IconChartBar, IconBuilding, IconGlobe, IconGraduation, IconHeartPulse, IconMapPin, IconShoppingBag, IconClock } from '../components/icons';
import { PROJECTS } from '../data/projects';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

import animatedManImage from '../assets/images/anim-man-laptop.png';
import cyberSecurityImage from '../assets/images/cyber-security/cyber-security.jpeg';
import softwareDevImage from '../assets/images/software-dev/software-development.jpeg';
import webDesignImage from '../assets/images/web-designing/web-design-development.png';

const TESTIMONIAL_BG = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80';

export default function HomePage() {
  const { t, formatNumber } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ─────────────────────────────────────────────────────────── */

  const stats = useMemo(
    () => [
      { value: `${formatNumber(30)}+`, label: t('stats.projects') },
      { value: `${formatNumber(98)}%`, label: t('stats.clients') },
      { value: `${formatNumber(5)}+`, label: 'Years Experience' },
      { value: '24/7', label: t('stats.response') },
    ],
    [formatNumber, t]
  );

  const featuredServices = useMemo(
    () => [
      {
        key: 'web',
        image: webDesignImage,
        title: t('services.web.title'),
        description: t('services.web.description'),
        tag: 'Web & UX',
      },
      {
        key: 'software',
        image: softwareDevImage,
        title: t('services.software.title'),
        description: t('services.software.description'),
        tag: 'Software',
      },
      {
        key: 'security',
        image: cyberSecurityImage,
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
      title: 'Ethiopian Market Expertise',
      body: 'Local regulations, payment systems, and customer expectations — built in from day one.',
      stat: '5+',
      statLabel: 'Years in Addis',
    },
    {
      Icon: IconGlobe,
      color: 'bg-tech-blue',
      title: 'Global Tech Standards',
      body: 'The same tools and practices used by top international firms, adapted for your budget.',
      stat: '5',
      statLabel: 'Languages supported',
    },
    {
      Icon: IconChartBar,
      color: 'bg-brand-orange',
      title: 'Transparent ETB Pricing',
      body: 'Every quote in Ethiopian Birr. No hidden fees — you know the cost before we start.',
      stat: '48h',
      statLabel: 'Quote turnaround',
    },
    {
      Icon: IconClock,
      color: 'bg-tech-blue',
      title: 'Full-Lifecycle Support',
      body: 'Training, updates, and security patches included — we stay after launch.',
      stat: '24/7',
      statLabel: 'Support available',
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

  const clientPartners = [
    { name: 'Addis Fashion House', initials: 'AF', sector: 'Retail' },
    { name: 'Haile Health Center', initials: 'HH', sector: 'Healthcare' },
    { name: 'EthioMart Online', initials: 'EM', sector: 'E-commerce' },
    { name: 'Addis Financial Services', initials: 'AFS', sector: 'Finance' },
  ];

  const testimonials = [
    {
      quote:
        'Sunshine Tech transformed our retail website completely. Our customer inquiries tripled within 2 months — truly professional, start to finish.',
      author: 'Belay Tesfaye',
      role: 'Owner',
      company: 'Addis Fashion House',
      category: 'Retail',
      initials: 'BT',
    },
    {
      quote:
        "They built our patient management system on time and within budget. The team genuinely understood our clinic's needs. Highly recommended.",
      author: 'Dr. Tigist Haile',
      role: 'Medical Director',
      company: 'Haile Health Center',
      category: 'Healthcare',
      initials: 'TH',
    },
    {
      quote:
        'From first consultation to final delivery, the experience was seamless. Our e-commerce store now handles hundreds of orders daily.',
      author: 'Solomon Bekele',
      role: 'Co-Founder',
      company: 'EthioMart Online',
      category: 'E-commerce',
      initials: 'SB',
    },
  ];

  const insights = [
    {
      category: 'Business Growth',
      title: 'Why Ethiopian SMEs Need a Professional Website in 2026',
      excerpt:
        'Mobile internet is booming in Ethiopia. Your website is your first impression — and first impressions shape buying decisions.',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=70',
    },
    {
      category: 'Cybersecurity',
      title: 'Top 5 Cyber Threats Facing Ethiopian Businesses Today',
      excerpt:
        'Phishing, weak passwords, and unpatched software remain the biggest risks. Protect your business without breaking the bank.',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=70',
    },
    {
      category: 'IoT & Innovation',
      title: "Smart Technology Adoption in Ethiopia: What's Working",
      excerpt:
        'From smart inventory to IoT sensors, Ethiopian businesses are innovating fast. Real use cases from our clients.',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70',
    },
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
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 shadow-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-semibold text-white">{t('hero.badge')}</span>
              </div>

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
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] transition-all hover:shadow-lg hover:-translate-y-0.5 shadow-md"
                >
                  Book free consultation
                </Link>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  No commitment required.{' '}
                  <Link to="/projects" className="font-semibold text-tech-blue hover:underline">
                    View our work →
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP — stats backed by real work ──────────────────────── */}
      <section className="bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr_1fr] items-stretch">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-4 text-center"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <p className="text-2xl font-bold text-brand-orange">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Featured case study preview */}
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
                  <p className="text-[10px] font-bold text-brand-orange uppercase tracking-widest mb-1">Latest case study</p>
                  <p className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-brand-orange transition-colors truncate">
                    {featuredProjects[0].title}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{featuredProjects[0].summary}</p>
                  <span className="inline-block mt-2 text-xs font-semibold text-tech-blue group-hover:underline">
                    Read case study →
                  </span>
                </div>
              </Link>
            )}

            {/* Mini testimonial */}
            <div className="bg-tech-blue rounded-xl p-5 flex flex-col justify-center">
              <div className="flex gap-1 mb-2" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-orange-300">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/90 text-sm italic leading-relaxed mb-3">
                "{testimonials[0].quote.slice(0, 100)}…"
              </blockquote>
              <p className="text-xs text-white/70">
                <span className="font-semibold text-white">{testimonials[0].author}</span> · {testimonials[0].company}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="bg-tech-blue dark:bg-slate-950 py-12 lg:py-16 border-b-4 border-brand-orange">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-fade-in-up">
            <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">Industries We Serve</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trusted Across Ethiopia &amp; Beyond</h2>
            <p className="text-white/70 text-sm max-w-lg mx-auto">
              From local shops to international NGOs — we build technology that fits your industry.
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
                    <div className="text-end">
                      <p className="text-2xl font-black text-brand-orange leading-none">{d.stat}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide mt-0.5">{d.statLabel}</p>
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
            <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">Our Clients</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Who We Serve</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From local startups in Addis Ababa to international organizations operating in Ethiopia — we deliver for
              both.
            </p>
          </div>

          {/* Named clients */}
          <div className="mb-10 animate-fade-in-up">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Organizations we've worked with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clientPartners.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 hover:border-brand-orange transition-colors"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-tech-blue text-white text-xs font-black flex-shrink-0">
                    {client.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{client.name}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide">{client.sector}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{project.year}</span>
                    {project.duration && (
                      <>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{project.duration}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex-grow">
                    {project.summary}
                  </p>

                  {project.metrics?.length ? (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.metrics.slice(0, 3).map((m) => (
                        <div
                          key={m.label}
                          className="text-center bg-white dark:bg-slate-700 rounded-lg px-3 py-2 border border-slate-200 dark:border-slate-600"
                        >
                          <p className="text-sm font-bold text-brand-orange leading-none">{m.value}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : project.result ? (
                    <p className="mt-4 text-xs font-semibold text-brand-orange bg-brand-orange-light dark:bg-brand-orange/10 rounded-lg px-3 py-2">
                      ✦ {project.result}
                    </p>
                  ) : null}

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

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${TESTIMONIAL_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/88" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-3">Client Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">Real outcomes for real businesses across Ethiopia.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.author}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/90 leading-relaxed mb-6 italic text-sm">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white text-sm font-bold flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm">{testimonial.author}</p>
                    <p className="text-white/60 text-xs truncate">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <span className="ml-auto text-xs text-orange-300 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                    {testimonial.category}
                  </span>
                </div>
              </div>
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
                  >
                    <span className="text-base font-semibold text-slate-900 dark:text-white pe-4">
                      {item.question}
                    </span>
                    <IconChevronDown
                      className={cn(
                        'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180 text-brand-orange' : 'text-brand-blue dark:text-[#7FA8FF]'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-700 animate-fade-in-up">
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
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-brand-orange rounded-xl hover:bg-[#E66D00] transition-all shrink-0"
            >
              Ask us now
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS / BLOG TEASER ───────────────────────────────────────── */}
      <section className="bg-section-a dark:bg-slate-950 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 animate-fade-in-up">
            <div>
              <p className="text-sm font-semibold text-brand-blue uppercase tracking-wider mb-3">
                Ethiopian Tech Insights
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Industry Knowledge</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
                Stay ahead with insights on technology trends shaping businesses in Ethiopia and beyond.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 border-2 border-slate-300 rounded-lg hover:border-brand-orange hover:text-brand-orange transition-all dark:text-slate-300 dark:border-slate-600 shrink-0"
            >
              Get Insights Newsletter
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((insight, idx) => (
              <article
                key={insight.title}
                className="group bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:border-brand-blue hover:-translate-y-2 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white bg-brand-orange px-3 py-1 rounded-full">
                    {insight.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 dark:text-slate-500">{insight.readTime} read</span>
                    <Link
                      to="/contact"
                      className="text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors"
                    >
                      Subscribe →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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
              Book free consultation
            </Link>
            <p className="mt-4 text-sm text-white/75">
              Or{' '}
              <Link to="/projects" className="font-semibold text-white underline hover:text-orange-200">
                browse our case studies
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
