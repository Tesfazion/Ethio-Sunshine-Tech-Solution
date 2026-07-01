import { Link } from 'react-router-dom';
import { IconCheck, IconStar } from '../components/icons';
import { useI18n } from '../i18n';

const HERO_BG = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80';
const COSTS_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80';

export default function PricingPage() {
  const { t } = useI18n();

  const pricingTiers = [
    {
      name: 'Basic Website',
      originalPrice: '15,000 - 30,000',
      discount: 5,
      discountedPrice: '14,250 - 28,500',
      description: 'Perfect for small businesses and individuals who need a simple online presence',
      features: [
        'Essential pages (Home, About, Services, Contact)',
        'Basic design layout',
        'Mobile-friendly structure',
        'Domain registration included',
        'Basic SEO setup',
        '3 months support',
      ],
      recommended: false,
      color: 'border-slate-300 dark:border-slate-700',
    },
    {
      name: 'Standard Business',
      originalPrice: '30,000 - 80,000',
      discount: 10,
      discountedPrice: '27,000 - 72,000',
      description: 'Designed for businesses that want to build credibility and compete effectively',
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
      originalPrice: '80,000 - 200,000+',
      discount: 13,
      discountedPrice: '69,600 - 174,000+',
      description: 'Built for scalability, performance, and complex functionality',
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
      price: '1,000 - 2,500 ETB',
      period: 'per year',
      description: 'Your website address (e.g., yourbusiness.com)',
    },
    {
      name: 'Web Hosting',
      price: '3,000 - 10,000 ETB',
      period: 'per year',
      description: 'Server space to store your website files',
    },
    {
      name: 'Maintenance',
      price: 'Varies',
      period: 'ongoing',
      description: 'Security updates, performance optimization, technical support',
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
      {/* Section 1 — Limited-time banner */}
      <section className="text-white" style={{ background: 'linear-gradient(to right, #FF7A00, #E66D00)' }}>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 animate-pulse-glow">
            <div className="flex items-center justify-center gap-2">
              <IconStar className="h-5 w-5" />
              <p className="text-lg font-bold uppercase tracking-wider">Limited Time Offer</p>
              <IconStar className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold">Special Discounts - Valid for 2 Months Only!</p>
            <p className="text-sm opacity-90">Save up to 13% on all website packages</p>
          </div>
        </div>
      </section>

      {/* Section 2 — Hero with background image + glassmorphism */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-tech-blue/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl p-8 lg:p-12 animate-fade-in-up">
            <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-4">Transparent Pricing</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Website <span className="text-[#FFB366]">Pricing</span> in Ethiopia
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Transparent pricing for professional websites. Choose the package that fits your business and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Pricing cards on textured bg */}
      <section className="bg-section-b dark:bg-slate-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 items-start">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative flex flex-col card-glass dark:bg-slate-800/80 rounded-2xl overflow-hidden animate-scale-in transition-all duration-300 ${tier.recommended ? 'ring-2 ring-[#FF7A00] shadow-xl lg:scale-[1.03]' : 'hover:shadow-xl hover:-translate-y-1'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Coloured top stripe */}
                <div
                  className={`h-1.5 ${tier.recommended ? 'bg-gradient-to-r from-[#FF7A00] to-[#E66D00]' : index === 2 ? 'bg-gradient-to-r from-tech-blue to-[#0069B3]' : 'bg-slate-300 dark:bg-slate-600'}`}
                />

                {/* Most Popular badge */}
                {tier.recommended && (
                  <div className="absolute top-4 end-4 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                    <IconStar className="h-3 w-3 fill-current" /> Most Popular
                  </div>
                )}

                {/* Discount badge */}
                {tier.discount > 0 && (
                  <div className="absolute top-4 start-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full animate-float-gentle">
                    Save {tier.discount}%
                  </div>
                )}

                <div className="p-7 flex flex-col flex-grow">
                  {/* Name + description */}
                  <div className="mb-5 pt-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{tier.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {tier.discount > 0 && (
                      <p className="text-sm text-slate-400 dark:text-slate-500 line-through mb-1">
                        {tier.originalPrice} ETB
                      </p>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-black ${tier.recommended ? 'text-brand-orange' : 'text-brand-blue dark:text-[#7FA8FF]'}`}
                      >
                        {tier.discountedPrice}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">ETB</span>
                    </div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">One-time investment</p>
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
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      tier.recommended
                        ? 'bg-[#FF7A00] text-white hover:bg-[#E66D00] shadow-md hover:shadow-lg'
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
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
            * Prices include a free initial consultation. Domain and hosting costs are additional — see below.
          </p>

          {/* Package comparison table */}
          <div className="mt-14 overflow-x-auto rounded-2xl border-2 border-slate-200 dark:border-slate-700 animate-fade-in-up">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-start p-4 font-bold text-slate-900 dark:text-white">Compare packages</th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.name} className="p-4 font-bold text-slate-900 dark:text-white text-center">
                      {tier.name}
                      {tier.recommended && (
                        <span className="block text-[10px] font-bold text-brand-orange uppercase mt-1">Most popular</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Starting price (ETB)', values: ['14,250', '27,000', '69,600'] },
                  { label: 'Custom design', values: ['Basic', 'Full brand', 'Fully custom'] },
                  { label: 'Pages included', values: ['4–6', '8–15', 'Unlimited'] },
                  { label: 'SEO setup', values: ['Basic', 'Advanced', 'Advanced + strategy'] },
                  { label: 'Support period', values: ['3 months', '6 months', '12 months'] },
                  { label: 'E-commerce / APIs', values: ['—', 'Optional', 'Included'] },
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
          <div className="grid gap-6 md:grid-cols-3">
            {additionalCosts.map((cost, index) => (
              <div
                key={cost.name}
                className="glass rounded-2xl p-6 animate-scale-in hover:-translate-y-1 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cost.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-[#FFB366]">{cost.price}</span>
                  <span className="text-white/60 text-sm">{cost.period}</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{cost.description}</p>
              </div>
            ))}
          </div>
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
          <div className="bg-gradient-to-br from-[#FF7A00] to-[#C85A00] rounded-2xl p-8 lg:p-12 shadow-2xl">
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3">Limited Time</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Build Your Digital Future?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Take advantage of our limited-time discount offers. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#FF7A00] bg-white rounded-xl hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-xl hover:bg-white/10 transition-all"
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
