// Privacy page view
// Contains the privacy policy content and contact affordances.
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: `When you use our contact form, we collect your name, email address, and the message you send us. We do not collect any other personal information automatically. We do not use cookies for tracking, and we do not have user accounts on this website.`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information you provide solely to respond to your inquiry or project request. Your contact details are never sold, rented, or shared with third parties for marketing purposes. We retain your message only as long as necessary to respond to it.`,
    },
    {
      title: 'Third-Party Services',
      content: `This website uses Google Fonts (for typography) and Unsplash (for images). These services may log your IP address as part of their standard operation. We use no advertising networks, analytics trackers, or social media pixels on this website.`,
    },
    {
      title: 'Data Security',
      content: `Our website does not store your personal data on our servers. Contact form submissions are delivered directly via email using your default mail client (mailto links). WhatsApp communications are protected by WhatsApp's end-to-end encryption.`,
    },
    {
      title: 'Your Rights',
      content: `You have the right to request that we delete any personal information you have shared with us. To make such a request, please email us at sunshinetechsolution4@gmail.com. We will respond within 5 business days.`,
    },
    {
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last updated. Continued use of this website after changes constitutes your acceptance of the updated policy.`,
    },
  ];

  return (
    <div className="bg-page-warm dark:bg-slate-900 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-tech-blue py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold text-orange-300 uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/70 text-lg">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="card-glass dark:bg-slate-800/80 rounded-2xl p-8 mb-8 animate-fade-in-up">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              At <strong className="text-brand-orange">Sunshine Tech Solution</strong>, we respect your privacy and are
              committed to protecting your personal information. This policy explains what information we collect, how
              we use it, and your rights regarding that information.
            </p>
          </div>

          {/* Policy sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className="card-glass dark:bg-slate-800/80 rounded-2xl p-7 animate-scale-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${idx % 2 === 0 ? 'bg-brand-orange' : 'bg-brand-blue'}`}
                  >
                    {idx + 1}
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-8 bg-gradient-to-br from-[#FF7A00] to-[#C85A00] rounded-2xl p-7 text-white text-center animate-scale-in">
            <h3 className="text-xl font-bold mb-2">Questions About This Policy?</h3>
            <p className="text-white/80 text-sm mb-5">Contact us and we'll be happy to explain anything further.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:sunshinetechsolution4@gmail.com"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-[#FF7A00] bg-white rounded-xl hover:bg-slate-50 transition-all"
              >
                Email Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white border-2 border-white/40 rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Page
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-brand-blue dark:text-[#7FA8FF] hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
