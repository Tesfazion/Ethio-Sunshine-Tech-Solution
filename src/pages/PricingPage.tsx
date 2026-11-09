// Pricing page view
// Shows pricing tiers, cost breakdown, and benefits for easy pricing updates.
import { Link } from 'react-router-dom';
import { IconCheck } from '../components/icons';
import { useI18n } from '../i18n';

const HERO_BG = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=70';
const COSTS_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70';

export default function PricingPage() {
  const { t } = useI18n();

  const pricingTiers = [
    {
      name: 'Basic Website',
      etbRange: '14,250–28,500',
      usdRange: '$250–$600',
      etbStarting: '14,250',
      usdStarting: '$250',
      description: 'For small businesses and individuals establishing a simple online presence.',
      features: [
        'Essential pages (Home, About, Services, Contact)',
        'Basic design layout',
        'Mobile-friendly structure',
        'Domain and hosting quoted separately',
        'Basic SEO setup',
        '3 months support',
      ],
      recommended: false,
      color: 'border-slate-300 dark:border-slate-700',
    },
    {
      name: 'Standard Business',
      etbRange: '27,000–72,000',
      usdRange: '$600–$1,500',
      etbStarting: '27,000',
      usdStarting: '$600',
      description: 'For businesses needing a branded site, content management, and selected integrations.',
      features: [
        'Custom design aligned with brand',
        'SEO-friendly structure',
        'Optimized performance',
        'Enhanced user experience',
        'Content management system',
        'Contact forms & integrations',
        '6 months support',
        'Analytics setup',
      ],
      recommended: true,
      color: 'border-brand-orange',
    },
    {
      name: 'Advanced Custom',
      etbRange: '69,600–174,000+',
      usdRange: '$1,500–$5,000+',
      etbStarting: '69,600',
      usdStarting: '$1,500',
      description: 'For projects needing e-commerce, booking, integrations, or custom functionality.',
      features: [
        'E-commerce systems',
        'Booking platforms',
        'Custom dashboards',
        'API integrations',
        'Advanced security features',
        'Performance optimization',
        '12 months support',
        'Priority maintenance',
        'Custom features',
      ],
      recommended: false,
      color: 'border-tech-blue',
    },
  ];

  const additionalCosts = [
    {
      name: 'Domain Name',
      etbPrice: '1,000–2,500 ETB',
      usdPrice: '$10–$25 USD',
      period: 'per year',
      description: 'Your website address (e.g., yourbusiness.com)',
    },
    {
      name: 'Web Hosting',
      etbPrice: '3,000–10,000 ETB',
      usdPrice: '$30–$100 USD',
      period: 'per year',
      description: 'Server space to store your website files',
    },
    {
      name: 'Maintenance',
      etbPrice: 'Quoted by scope',
      usdPrice: 'Quoted by scope',
      period: 'ongoing',
      description: 'Security updates, performance optimization, and technical support',
    },
  ];

  const benefits = [
    'Modern, high-performance design',
    'SEO-driven development',
    'Scalable and future-ready solutions',
    'Deep understanding of Ethiopian market',
    'Professional branding alignment',
    'Dedicated project support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with background image + glassmorphism */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-tech-blue/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-6 sm:p-8 lg:p-12 animate-fade-in-up">
            <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-4">Transparent Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Website <span className="text-[#FFB366]">Pricing</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Compare independent ETB ranges for Ethiopia-based projects and USD ranges for international work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Pricing cards on textured bg */}
      <section className="bg-section-b dark:bg-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative flex flex-col card-glass dark:bg-slate-800/80 rounded-2xl overflow-hidden animate-scale-in transition-all duration-300 md:last:col-span-2 md:last:mx-auto md:last:w-full md:last:max-w-xl lg:last:col-span-1 lg:last:max-w-none ${tier.recommended ? 'ring-2 ring-[#C2410C] shadow-xl' : 'hover:shadow-xl hover:-translate-y-1'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Coloured top stripe */}
                <div
                  className={`h-1.5 ${tier.recommended ? 'bg-gradient-to-r from-[#C2410C] to-[#9A3412]' : index === 2 ? 'bg-gradient-to-r from-tech-blue to-[#0069B3]' : 'bg-slate-300 dark:bg-slate-600'}`}
                />

                {/* Emphasize the recommended package without implying sales popularity. */}
                {tier.recommended && (
                  <div className="absolute top-4 end-4 bg-[#C2410C] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}

                <div className="flex flex-grow flex-col p-5 sm:p-7">
                  {/* Name + description */}
                  <div className="mb-5 pt-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{tier.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 grid gap-3 xl:grid-cols-2">
                    <div className="min-w-0 rounded-xl border border-orange-200 bg-orange-50/80 p-3 dark:border-orange-900/70 dark:bg-orange-950/25 sm:p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-orange-900 dark:text-orange-200">
                        {t('pricing.localLabel')}
                      </p>
                      <p dir="ltr" className="mt-2 text-left text-base font-bold tabular-nums tracking-tight text-orange-950 dark:text-white">
                        {tier.etbRange}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">ETB</p>
                    </div>
                    <div className="min-w-0 rounded-xl border border-sky-200 bg-sky-50/80 p-3 dark:border-sky-900/70 dark:bg-sky-950/25 sm:p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-900 dark:text-sky-200">
                        {t('pricing.internationalLabel')}
                      </p>
                      <p dir="ltr" className="mt-2 text-left text-base font-bold tabular-nums tracking-tight text-sky-950 dark:text-white">
                        {tier.usdRange}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">USD</p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 xl:col-span-2">
                      {t('pricing.rangeCaption')}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-7 flex-grow border-t border-slate-200 dark:border-slate-700 pt-5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <IconCheck
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.recommended ? 'text-brand-orange' : 'text-brand-blue dark:text-[#7FA8FF]'}`}
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to={`/contact?package=${encodeURIComponent(tier.name)}&etb=${encodeURIComponent(tier.etbRange)}&usd=${encodeURIComponent(tier.usdRange)}`}
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      tier.recommended
                        ? 'bg-[#C2410C] text-white hover:bg-[#9A3412] shadow-md hover:shadow-lg'
                        : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white border-2 border-slate-200 dark:border-slate-600 hover:border-brand-blue hover:text-brand-blue'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note below cards */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {t('pricing.currencyNote')} Domain registration, hosting, and maintenance are separate from development.
          </p>

          {/* Mobile comparison cards */}
          <div className="mt-10 space-y-3 md:hidden">
            {[
              { label: 'Starting price', values: pricingTiers.map((tier) => `${tier.etbStarting} ETB · ${tier.usdStarting} USD`) },
              { label: 'Custom design', values: ['Basic', 'Full brand', 'Fully custom'] },
              { label: 'Pages included', values: ['4–6', '8–15', 'By agreed scope'] },
              { label: 'SEO setup', values: ['Basic', 'Advanced', 'Advanced + strategy'] },
              { label: 'Support period', values: ['3 months', '6 months', '12 months'] },
              { label: 'E-commerce / APIs', values: ['Not included', 'Optional', 'Included'] },
            ].map((row) => (
              <article key={row.label} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white">{row.label}</h3>
                <dl className="mt-3 grid grid-cols-3 gap-3 text-xs">
                  {pricingTiers.map((tier, index) => (
                    <div key={tier.name}>
                      <dt className="font-semibold text-slate-500 dark:text-slate-400">{tier.name}</dt>
                      <dd className="mt-1 text-slate-800 dark:text-slate-100">{row.values[index]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          {/* Package comparison table */}
          <div className="mt-14 hidden overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-700 animate-fade-in-up md:block">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-start p-4 font-bold text-slate-900 dark:text-white">Compare packages</th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.name} className="p-4 font-bold text-slate-900 dark:text-white text-center">
                      {tier.name}
                      {tier.recommended && (
                        <span className="block text-[10px] font-bold text-brand-orange uppercase mt-1">
                          Recommended
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Starting price', values: pricingTiers.map((tier) => `${tier.etbStarting} ETB · ${tier.usdStarting} USD`) },
                  { label: 'Custom design', values: ['Basic', 'Full brand', 'Fully custom'] },
                  { label: 'Pages included', values: ['4–6', '8–15', 'By agreed scope'] },
                  { label: 'SEO setup', values: ['Basic', 'Advanced', 'Advanced + strategy'] },
                  { label: 'Support period', values: ['3 months', '6 months', '12 months'] },
                  { label: 'E-commerce / APIs', values: ['Not included', 'Optional', 'Included'] },
                ].map((row, ri) => (
                  <tr
                    key={row.label}
                    className={ri % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'}
                  >
                    <td className="p-4 font-semibold text-slate-700 dark:text-slate-300">{row.label}</td>
                    {row.values.map((val, vi) => (
                      <td key={vi} className="p-4 text-center text-slate-600 dark:text-slate-400">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 — Additional Costs (background image with glass cards) */}
      <section
        className="relative py-16 lg:py-20 overflow-hidden"
        style={{ backgroundImage: `url(${COSTS_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/88 to-tech-blue/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-3">Plan Ahead</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Additional Costs to Consider</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Beyond development, budget for these ongoing expenses</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {additionalCosts.map((cost, index) => (
              <div
                key={cost.name}
                className="glass rounded-2xl p-6 animate-scale-in hover:-translate-y-1 transition-all md:last:col-span-2 md:last:mx-auto md:last:w-full md:last:max-w-md xl:last:col-span-1 xl:last:max-w-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cost.name}</h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/65">{cost.period}</p>
                <dl className="mb-3 grid gap-3 xl:grid-cols-2">
                  <div className="min-w-0 rounded-lg bg-white/10 p-3">
                    <dt className="text-xs font-semibold text-white/65">ETB</dt>
                    <dd className="mt-1 text-sm font-bold text-white">{cost.etbPrice}</dd>
                  </div>
                  <div className="min-w-0 rounded-lg bg-white/10 p-3">
                    <dt className="text-xs font-semibold text-white/65">USD</dt>
                    <dd className="mt-1 text-sm font-bold text-white">{cost.usdPrice}</dd>
                  </div>
                </dl>
                <p className="text-white/70 text-sm leading-relaxed">{cost.description}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-white/70">
            {t('pricing.additionalCostsNote')}
          </p>
        </div>
      </section>

      {/* Section 5 — Why Choose Us (glass cards on section-c bg) */}
      <section className="bg-section-c dark:bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="divider-brand w-16 mx-auto mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Why Choose <span className="text-brand-orange">Sunshine Tech Solution</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We build websites that are strategically designed for growth — not just visually appealing
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`card-glass dark:bg-slate-800/80 rounded-xl p-5 flex items-center gap-3 animate-slide-in hover:-translate-y-0.5 transition-all ${index % 2 === 0 ? 'hover:border-brand-orange' : 'hover:border-brand-blue'}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 bg-brand-orange">
                  <IconCheck className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA (orange gradient) */}
      <section className="bg-section-a dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#C2410C] to-[#9A3412] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3">Next step</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to discuss your project?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Share what you need, and we can discuss the scope, estimate, and a suitable next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#9A3412] bg-white rounded-xl hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all"
              >
                Contact us
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-xl hover:bg-white/10 transition-all"
              >
                Explore project concepts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
