import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IconCheck } from '../components/icons';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

import cyberSecurityImage from '../assets/images/cyber-security/cyber-security.jpeg';
import iotImage from '../assets/images/iot/iot.jpeg';
import infrastructureImage from '../assets/images/it-infrastructure/it-infrastructure.png';
import softwareDevImage from '../assets/images/software-dev/software-development.jpeg';
import webDesignImage from '../assets/images/web-designing/web-design-development.png';

const HERO_BG = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80';
const PROCESS_BG = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80';

export default function ServicesPage() {
  const { t, formatNumber } = useI18n();

  const services = useMemo(
    () => [
      {
        key: 'web',
        image: webDesignImage,
        tag: '01',
        label: 'Web & Design',
        caseStudy: 'global-company-website',
        title: t('services.web.title'),
        description: t('services.web.description'),
        features: ['Works perfectly on phones', 'Easy to find on Google', 'Loads in seconds', 'Professional brand look'],
      },
      {
        key: 'software',
        image: softwareDevImage,
        tag: '02',
        label: 'Software',
        caseStudy: 'customer-portal',
        title: t('services.software.title'),
        description: t('services.software.description'),
        features: ['Built around your workflow', 'Grows as your business grows', 'Connects to your existing tools', 'Access from anywhere'],
      },
      {
        key: 'infrastructure',
        image: infrastructureImage,
        tag: '03',
        label: 'Infrastructure',
        caseStudy: 'cloud-observability-foundation',
        title: t('services.infrastructure.title'),
        description: t('services.infrastructure.description'),
        features: ['Cloud setup & migration', 'Reliable servers & networks', 'Keeps your systems running fast', '24/7 monitoring & alerts'],
      },
      {
        key: 'iot',
        image: iotImage,
        tag: '04',
        label: 'IoT',
        caseStudy: 'smart-iot-dashboard',
        title: t('services.iot.title'),
        description: t('services.iot.description'),
        features: ['Connect sensors & devices', 'Live dashboards & reports', 'Automate everyday tasks', 'Secure data collection'],
      },
      {
        key: 'security',
        image: cyberSecurityImage,
        tag: '05',
        label: 'Security',
        caseStudy: 'security-hardening',
        title: t('services.security.title'),
        description: t('services.security.description'),
        features: ['Find & fix weak spots', 'Protect customer data', 'Security testing & audits', 'Compliance guidance'],
      },
    ],
    [t]
  );

  const process = useMemo(
    () => [
      {
        title: t('process.step1.title'),
        desc: t('process.step1.desc'),
        icon: '🎯',
      },
      {
        title: t('process.step2.title'),
        desc: t('process.step2.desc'),
        icon: '💡',
      },
      {
        title: t('process.step3.title'),
        desc: t('process.step3.desc'),
        icon: '🚀',
      },
      {
        title: t('process.step4.title'),
        desc: t('process.step4.desc'),
        icon: '✨',
      },
    ],
    [t]
  );

  return (
    <div className="bg-section-a dark:bg-slate-950">
      {/* ── Section 1 · Hero ───────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-slate-900/85" />

        {/* content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-sm font-semibold text-orange-300 uppercase tracking-widest">{t('services.eyebrow')}</p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t('services.title')}
              </h1>
              <p className="max-w-2xl text-lg text-white/80 leading-relaxed">{t('services.subtitle')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right shrink-0">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/15 backdrop-blur-sm border-2 border-white/30 rounded-lg hover:bg-white/25 transition-all"
              >
                {t('cta.viewProjects')}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] hover:shadow-lg transition-all"
              >
                {t('actions.getQuote')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 · Core Services ─────────────────────────────────── */}
      <section className="bg-brand-orange-light dark:bg-slate-900 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Five focused solutions for Ethiopian businesses — each backed by real projects and clear ETB pricing.
            </p>
          </div>

          {/* Bento grid — 2 large + 3 compact */}
          <div className="grid gap-5 lg:grid-cols-6 lg:grid-rows-2">
            {services.map((service, idx) => {
              const isLarge = idx < 2;
              const accentBar = idx % 2 === 0 ? 'bg-brand-orange' : 'bg-tech-blue';

              return (
                <article
                  key={service.key}
                  className={cn(
                    'group bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col animate-scale-in',
                    isLarge ? 'lg:col-span-3 lg:row-span-1' : 'lg:col-span-2'
                  )}
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  <div className={cn('h-1.5', accentBar)} />

                  <div className={cn('relative overflow-hidden', isLarge ? 'h-52' : 'h-40')}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-900/25" />
                    <span className="absolute top-3 start-3 text-xs font-black text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                      {service.tag}
                    </span>
                    <span className="absolute bottom-3 start-3 text-xs font-bold text-white uppercase tracking-wider">
                      {service.label}
                    </span>
                  </div>

                  <div className="p-5 lg:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <IconCheck className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
                      <Link
                        to={`/projects/${service.caseStudy}`}
                        className="text-xs font-semibold text-tech-blue dark:text-[#7FA8FF] hover:underline"
                      >
                        See case study →
                      </Link>
                      <Link
                        to="/contact"
                        className="text-xs font-bold text-brand-orange hover:gap-2 inline-flex items-center gap-1 transition-all"
                      >
                        Learn more <span className="arrow-dir">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* How it works — single CTA strip (no repeated buttons) */}
          <div className="mt-12 bg-tech-blue rounded-2xl p-8 lg:p-10 animate-fade-in-up">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">How to get started</p>
                <h3 className="text-xl font-bold text-white mb-4">Three simple steps to your project</h3>
                <ol className="grid sm:grid-cols-3 gap-4">
                  {[
                    { step: '1', title: 'Free consultation', desc: 'Tell us your goals — no commitment' },
                    { step: '2', title: 'Clear proposal', desc: 'Fixed ETB quote within 48 hours' },
                    { step: '3', title: 'We build & support', desc: 'Delivery, training & ongoing help' },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-orange text-white text-sm font-black flex-shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{item.title}</p>
                        <p className="text-xs text-white/65 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-tech-blue bg-white rounded-xl hover:bg-slate-50 transition-all"
                >
                  Book free consultation
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border-2 border-white/40 rounded-xl hover:bg-white/10 transition-all"
                >
                  View ETB pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3 · Process (glass cards on PROCESS_BG) ───────────── */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ backgroundImage: `url(${PROCESS_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-tech-blue/70 to-slate-900/85" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm font-semibold text-orange-300 uppercase tracking-widest mb-4">
              {t('process.eyebrow')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('process.title')}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our proven methodology for delivering successful projects
            </p>
          </div>

          {/* glass process cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, idx) => (
              <div
                key={step.title}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* icon + step number */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{step.icon}</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sunrise-orange/80 text-white text-lg font-bold">
                    {formatNumber(idx + 1)}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{step.desc}</p>

                {/* connector line (desktop only, not on last card) */}
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-white/25" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4 · Why Choose Us ─────────────────────────────────── */}
      <section className="bg-section-b dark:bg-slate-900 py-16 lg:py-24 border-b-2 border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left — bullet list */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Leading Tech Solutions in Ethiopia
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We combine global technology standards with deep understanding of the Ethiopian market to deliver
                solutions that actually work for your business.
              </p>

              <ul className="space-y-4">
                {[
                  'Local Market Expertise',
                  'Affordable Ethiopian Pricing',
                  'Ongoing Support & Training',
                  'Proven Track Record',
                  'Latest Technologies',
                  'Customer-Focused Approach',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange text-white flex-shrink-0">
                      <IconCheck className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all dark:bg-white dark:text-slate-900"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right — stat boxes */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {[
                { value: '30+', label: 'Projects Delivered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`bg-white dark:bg-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700 p-6 text-center ${idx % 2 === 0 ? 'hover:border-brand-orange' : 'hover:border-brand-blue'} hover:shadow-lg transition-all animate-scale-in`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <p className="text-4xl font-bold text-brand-orange mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5 · CTA ───────────────────────────────────────────── */}
      <section className="bg-white dark:bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-orange rounded-2xl p-8 lg:p-12 text-center border-2 border-brand-orange shadow-2xl animate-scale-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-orange bg-white rounded-lg hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
