import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';
import { IconCloud, IconCode, IconDevices, IconShield, IconSparkles } from '../components/icons';

import cyberSecurityImage from '../../Images/cyber-security/9ad3fb14fec1877b220d02187e4e8494.jpg';
import infrastructureImage from '../../Images/it-infrastructure/a6ac98b7add388a11e26f63afd33e783.jpg';
import iotImage from '../../Images/iot/b66694e550998d6ef5a9c6cb6ca22c74.jpg';
import softwareDevImage from '../../Images/software-dev/b31c608108475fea6cd7e49e3a2dd46e.jpg';
import webDesignImage from '../../Images/web-designing/7b1eb6a2b96f287333455fd78bb1c453.jpg';

export default function ServicesPage() {
  const { t, formatNumber } = useI18n();

  const services = useMemo(
    () => [
      { key: 'web', icon: IconSparkles, image: webDesignImage, title: t('services.web.title'), description: t('services.web.description') },
      { key: 'software', icon: IconCode, image: softwareDevImage, title: t('services.software.title'), description: t('services.software.description') },
      { key: 'infrastructure', icon: IconCloud, image: infrastructureImage, title: t('services.infrastructure.title'), description: t('services.infrastructure.description') },
      { key: 'iot', icon: IconDevices, image: iotImage, title: t('services.iot.title'), description: t('services.iot.description') },
      { key: 'security', icon: IconShield, image: cyberSecurityImage, title: t('services.security.title'), description: t('services.security.description') },
    ],
    [t]
  );

  const process = useMemo(
    () => [
      { title: t('process.step1.title'), desc: t('process.step1.desc') },
      { title: t('process.step2.title'), desc: t('process.step2.desc') },
      { title: t('process.step3.title'), desc: t('process.step3.desc') },
      { title: t('process.step4.title'), desc: t('process.step4.desc') },
    ],
    [t]
  );

  return (
    <div>
      <section className="bg-aurora dark:bg-aurora-dark">
        <div className="mx-auto max-w-screen-2xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('services.eyebrow')}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-slate-50">{t('services.title')}</h1>
              <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">{t('services.subtitle')}</p>
            </div>
            <div className="flex items-center gap-3">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.key}
                className="group relative overflow-hidden rounded-[2rem] bg-white/70 shadow-sm ring-1 ring-slate-200/70 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow motion-safe:animate-fade-up dark:bg-slate-900/60 dark:ring-slate-800/70 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative">
                  <img src={service.image} alt={service.title} className="h-44 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/15 to-transparent dark:from-slate-950/85 dark:via-slate-950/20" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/40 dark:ring-slate-700/40" />
                </div>

                <div className="relative space-y-3 px-6 pb-7 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-200 dark:ring-emerald-500/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="text-lg font-semibold text-slate-950 dark:text-slate-50">{service.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('process.eyebrow')}</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl dark:text-slate-50">{t('process.title')}</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {process.map((step, idx) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-slate-950 dark:text-slate-50">{step.title}</p>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{step.desc}</p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-slate-900">
                    {formatNumber(idx + 1)}
                  </span>
                </div>
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
