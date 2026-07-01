// Contact page view
// Includes contact tiles, inquiry form validation, and direct email/phone links.
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconClock, IconMail, IconMapPin, IconPhone } from '../components/icons';
import { useI18n } from '../i18n';
import { cn } from '../lib/cn';

const CONTACT_BG = 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80';
const WHY_BG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80';

const PHONES = [
  { label: 'Consultation', number: '+251983708869' },
  { label: 'Company Line', number: '+251704300069' },
];
const EMAILS = [
  { label: 'Consultation & Counsel', address: 'tesfatseyon69@gmail.com' },
  { label: 'General Inquiries', address: 'sunshinetechsolution4@gmail.com' },
];

const COMPANY_EMAIL = 'sunshinetechsolution4@gmail.com';

type FormErrors = {
  name?: string;
  email?: string;
  brief?: string;
};

export default function ContactPage() {
  const { t } = useI18n();
  const [formStatus, setFormStatus] = useState<'idle' | 'done'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validateForm(formData: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const brief = String(formData.get('brief') ?? '').trim();

    if (!name || name.length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters)';
    }

    if (!email) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!brief || brief.length < 10) {
      errs.brief = 'Please provide a brief description (at least 10 characters)';
    }

    return errs;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, brief: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const brief = String(formData.get('brief') ?? '');

    const subject = encodeURIComponent(`Project inquiry from ${name || 'Website visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject brief:\n${brief}`);
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;

    setFormStatus('done');
    setErrors({});
    setTouched({});
    form.reset();
    window.setTimeout(() => setFormStatus('idle'), 4500);
  }

  function handleBlur(fieldName: string) {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* ─── Section 1: Hero + Glass Contact Tiles ─────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${CONTACT_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-tech-blue/50 to-slate-900/80" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
            <p className="text-sm font-semibold text-orange-300 uppercase tracking-widest mb-4">
              {t('contact.eyebrow')}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">{t('contact.subtitle')}</p>
          </div>

          {/* Glass contact tiles — 2×2 on mobile, 4-col on sm+ */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {/* Phone tiles */}
            {PHONES.map((phone, idx) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-5 hover:bg-white/20 transition-all animate-scale-in group"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-orange text-white flex-shrink-0">
                  <IconPhone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-orange-300 uppercase tracking-wide mb-1">{phone.label}</p>
                  <p className="text-white font-semibold group-hover:text-orange-200 transition-colors text-sm break-all">
                    {phone.number}
                  </p>
                </div>
              </a>
            ))}

            {/* Email tiles */}
            {EMAILS.map((mail, idx) => (
              <a
                key={mail.address}
                href={`mailto:${mail.address}`}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-5 hover:bg-white/20 transition-all animate-scale-in group"
                style={{ animationDelay: `${(idx + 2) * 80}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-tech-blue text-white flex-shrink-0">
                  <IconMail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-1">{mail.label}</p>
                  <p className="text-white font-semibold group-hover:text-blue-200 transition-colors text-sm break-all">
                    {mail.address}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Contact Details (left) + Form (right) ───────────────── */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* ── Left column: contact details ─────────────────────────────── */}
            <div className="animate-slide-in-left space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Let's Start a Conversation</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Have a project in mind or a question about our services? Reach out to us directly — we're here to help
                  and happy to discuss your needs.
                </p>
              </div>

              {/* Phones card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-orange text-white flex-shrink-0">
                    <IconPhone className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Phone Numbers</h3>
                </div>
                <ul className="space-y-4">
                  {PHONES.map((phone) => (
                    <li key={phone.number} className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-brand-orange uppercase tracking-wide">
                        {phone.label}
                      </span>
                      <a
                        href={`tel:${phone.number}`}
                        dir="ltr"
                        className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-orange dark:hover:text-brand-orange transition-colors"
                      >
                        {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emails card */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-tech-blue text-white flex-shrink-0">
                    <IconMail className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Email Addresses</h3>
                </div>
                <ul className="space-y-4">
                  {EMAILS.map((mail) => (
                    <li key={mail.address} className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                        {mail.label}
                      </span>
                      <a
                        href={`mailto:${mail.address}`}
                        dir="ltr"
                        className="break-all text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
                      >
                        {mail.address}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location + Timezone 2-col bottom */}
              <div className="grid grid-cols-2 gap-4">
                {/* Location */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-orange text-white flex-shrink-0">
                      <IconMapPin className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {t('contact.info.locationTitle')}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                    {t('contact.info.locationValue')}
                  </p>
                </div>

                {/* Timezone */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-tech-blue text-white flex-shrink-0">
                      <IconClock className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {t('contact.info.timezoneTitle')}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                    {t('contact.info.timezoneValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right column: contact form ──────────────────────────────── */}
            <div className="animate-slide-in-right">
              <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Send Us a Message</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t('contact.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                      onBlur={() => handleBlur('name')}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange',
                        touched.name && errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:border-brand-orange'
                      )}
                      placeholder="John Doe"
                    />
                    {touched.name && errors.name && (
                      <p className="mt-2 text-sm text-red-500 animate-fade-in">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t('contact.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                      onBlur={() => handleBlur('email')}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange',
                        touched.email && errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:border-brand-orange'
                      )}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-2 text-sm text-red-500 animate-fade-in">{errors.email}</p>
                    )}
                  </div>

                  {/* Brief */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      {t('contact.brief')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="brief"
                      required
                      aria-required="true"
                      aria-invalid={touched.brief && errors.brief ? 'true' : 'false'}
                      onBlur={() => handleBlur('brief')}
                      rows={6}
                      className={cn(
                        'w-full px-4 py-3 rounded-lg border-2 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none',
                        touched.brief && errors.brief
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-300 dark:border-slate-600 focus:border-brand-orange'
                      )}
                      placeholder={t('contact.briefPlaceholder')}
                    />
                    {touched.brief && errors.brief && (
                      <p className="mt-2 text-sm text-red-500 animate-fade-in">{errors.brief}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-orange rounded-lg hover:bg-[#E66D00] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    {t('actions.send')}
                  </button>

                  {/* Success message */}
                  <div
                    className={cn(
                      'rounded-lg border-2 border-green-200 bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-900 transition-all dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-100',
                      formStatus === 'done'
                        ? 'opacity-100 translate-y-0'
                        : 'pointer-events-none opacity-0 -translate-y-2'
                    )}
                    role="status"
                    aria-live="polite"
                  >
                    {t('contact.success')}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Why Work With Us? (WHY_BG + glass cards) ───────────── */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ backgroundImage: `url(${WHY_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Orange overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/90 to-[#E66D00]/85" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">Why Work With Us?</h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              We're committed to delivering excellence in every project
            </p>
          </div>

          {/* Benefit cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '⚡',
                title: 'Fast Response',
                description: 'We respond to all inquiries within 24 hours',
              },
              {
                icon: '👥',
                title: 'Expert Team',
                description: 'Experienced professionals ready to help',
              },
              {
                icon: '🇪🇹',
                title: 'Local Support',
                description: 'Based in Ethiopia, we understand your needs',
              },
              {
                icon: '💰',
                title: 'Affordable Pricing',
                description: 'Competitive rates for quality work',
              },
              {
                icon: '✅',
                title: 'Proven Results',
                description: '30+ successful projects delivered',
              },
              {
                icon: '🤝',
                title: 'Ongoing Support',
                description: 'We are here even after project completion',
              },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 animate-scale-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/85">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center animate-fade-in-up">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-orange font-semibold text-base hover:bg-orange-50 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
