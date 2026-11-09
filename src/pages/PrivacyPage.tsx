// Privacy page view
// Contains the privacy policy content and contact affordances.
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: `This website does not submit or store contact form details on its server. The form prepares an email draft in your email application; information is sent to us only if you choose to send that email. Your browser may store your language and theme preferences locally.`,
    },
    {
      title: 'How We Use Your Information',
      content: `If you send us an email or contact us through WhatsApp, we use the information in that communication to respond to your inquiry. Email and messaging providers process information under their own privacy terms. Contact us to ask about information you have sent us.`,
    },
    {
      title: 'Third-Party Services',
      content: `The website loads fonts from Google Fonts and some images from Unsplash. Your browser may make requests to those services when loading a page. No advertising or analytics service is intentionally embedded in this site.`,
    },
    {
      title: 'Data Security',
      content: `The contact form creates a mailto draft in your browser and does not transmit the form contents to this website. If you send the draft, your email provider and our email service will process it. WhatsApp messages are processed by WhatsApp when you choose to use that service.`,
    },
    {
      title: 'Your Rights',
      content: `You can contact us at sunshinetechsolution4@gmail.com with questions or requests concerning information you have sent us. Any request will be handled in accordance with applicable requirements.`,
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
          <p className="text-white/70 text-lg">Last updated: November 9, 2026</p>
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
          <div className="mt-8 bg-gradient-to-br from-[#C2410C] to-[#9A3412] rounded-2xl p-7 text-white text-center animate-scale-in">
            <h3 className="text-xl font-bold mb-2">Questions About This Policy?</h3>
            <p className="text-white/80 text-sm mb-5">Contact us and we'll be happy to explain anything further.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:sunshinetechsolution4@gmail.com"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-[#9A3412] bg-white rounded-xl hover:bg-slate-50 transition-all"
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
