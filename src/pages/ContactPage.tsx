import type { FormEvent } from 'react';
import { useState } from 'react';
import { useI18n } from '../i18n';
import { IconClock, IconGitHub, IconMail, IconMapPin, IconPhone } from '../components/icons';
import { SITE } from '../data/site';
import { cn } from '../lib/cn';

export default function ContactPage() {
  const { t } = useI18n();
  const [formStatus, setFormStatus] = useState<'idle' | 'done'>('idle');

  const emailAddress = SITE.email;
  const phoneNumber = SITE.phone;
  const githubUrl = SITE.socials.find((link) => link.kind === 'github')?.href ?? 'https://github.com/';

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const brief = String(formData.get('brief') ?? '');

    const subject = encodeURIComponent(`Project inquiry from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject brief:\n${brief}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    setFormStatus('done');
    form.reset();
    window.setTimeout(() => setFormStatus('idle'), 4500);
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl motion-safe:animate-float dark:bg-emerald-500/10" />
        <div className="pointer-events-none absolute -bottom-28 right-[10%] h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-3xl motion-safe:animate-float-slower dark:bg-sky-500/10" />

        <div className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">{t('contact.eyebrow')}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-slate-50">{t('contact.title')}</h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">{t('contact.subtitle')}</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('contact.info.emailTitle')}</p>
                    <IconMail className="h-5 w-5 flex-none text-slate-400 dark:text-slate-500" />
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    dir="ltr"
                    className="mt-2 inline-flex break-all text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
                  >
                    {emailAddress}
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('contact.info.phoneTitle')}</p>
                    <IconPhone className="h-5 w-5 flex-none text-slate-400 dark:text-slate-500" />
                  </div>
                  <a
                    href={`tel:${phoneNumber}`}
                    dir="ltr"
                    className="mt-2 inline-flex text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
                  >
                    {phoneNumber}
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('contact.info.locationTitle')}</p>
                    <IconMapPin className="h-5 w-5 flex-none text-slate-400 dark:text-slate-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t('contact.info.locationValue')}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-950 dark:text-slate-50">{t('contact.info.timezoneTitle')}</p>
                    <IconClock className="h-5 w-5 flex-none text-slate-400 dark:text-slate-500" />
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t('contact.info.timezoneValue')}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <IconGitHub className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white/70 p-7 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('contact.name')}</label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={t('contact.namePlaceholder')}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('contact.email')}</label>
                  <input
                    name="email"
                    type="email"
                    required
                    dir="ltr"
                    placeholder={t('contact.emailPlaceholder')}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200">{t('contact.brief')}</label>
                  <textarea
                    name="brief"
                    required
                    rows={6}
                    placeholder={t('contact.briefPlaceholder')}
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-emerald-500/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  {t('actions.send')}
                </button>

                <div
                  className={cn(
                    'rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 transition dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100',
                    formStatus === 'done' ? 'opacity-100' : 'pointer-events-none opacity-0'
                  )}
                  role="status"
                  aria-live="polite"
                >
                  {t('contact.success')}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
