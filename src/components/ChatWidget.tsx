// Floating chat widget component.
// Provides quick WhatsApp contact and support interactions.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconPhone } from './icons';

const WA_NUMBER = '251983708869';
const COMPANY_EMAIL = 'sunshinetechsolution4@gmail.com';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [activeTopic, setActiveTopic] = useState('');

  const commonTopics = [
    {
      id: 'services',
      title: 'Services offered',
      summary: 'Learn what solutions we can build for your business.',
      answer:
        'We provide web design, custom software development, IT infrastructure, IoT systems, and cybersecurity services tailored for startups and growing organizations.',
    },
    {
      id: 'pricing',
      title: 'Payment options',
      summary: 'See how pricing and proposals work.',
      answer:
        'We offer transparent package pricing and custom quotes. Payments can be arranged by invoice, bank transfer, or local payment methods during project onboarding.',
    },
    {
      id: 'timeline',
      title: 'Delivery times',
      summary: 'Typical timelines for websites and software.',
      answer:
        'Website projects commonly launch in 2–4 weeks. Larger software or security engagements are scheduled after discovery, with clear milestones and delivery estimates.',
    },
    {
      id: 'languages',
      title: 'Language support',
      summary: 'Know which languages your site can support.',
      answer:
        'Yes, we support multilingual websites and apps, including Afaan Oromoo, Amharic, Español, Français, Arabic, and RTL-ready layouts.',
    },
    {
      id: 'security',
      title: 'Security help',
      summary: 'Ask about cybersecurity and infrastructure support.',
      answer:
        'We handle cybersecurity posture reviews, hardening, and secure infrastructure setup so your web app and cloud environment are protected.',
    },
  ];

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const text = encodeURIComponent(
      `Hi! I'm ${name.trim() || 'a visitor'} reaching out from your website.\n\n${message.trim()}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setMessage('');
    }, 4000);
  }

  return (
    <>
      {/* ── Chat panel ───────────────────────────── */}
      {open && (
        <div
          className="fixed bottom-24 end-4 z-[60] w-[calc(100vw-2rem)] max-w-sm sm:max-w-sm max-h-[80vh] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-scale-in"
          role="dialog"
          aria-label="Chat with our team"
        >
          {/* Header — solid brand */}
          <div className="bg-tech-blue p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                STS
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Sunshine Tech Support</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/80 text-xs">Typically replies within 1 hour</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-lg leading-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 dark:bg-slate-900 flex-grow overflow-y-auto min-h-0">
            {/* Greeting bubble */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 text-sm text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 mb-4 leading-relaxed">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                👋 Welcome to Sunshine Tech Support
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Get quick answers to common questions, or send us a message if you want a custom quote.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Quick topics
                </p>
                <span className="text-xs text-slate-400 dark:text-slate-500">Tap to expand</span>
              </div>
              <div className="space-y-2">
                {commonTopics.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTopic(activeTopic === item.id ? '' : item.id)}
                    className="w-full rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 text-left transition hover:border-brand-orange hover:bg-brand-orange/5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">{item.title}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.summary}</p>
                      </div>
                      <span className="text-brand-orange text-xs font-semibold">
                        {activeTopic === item.id ? 'Hide' : 'Show'}
                      </span>
                    </div>
                    {activeTopic === item.id ? (
                      <p className="mt-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{item.answer}</p>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {sent ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-3 text-center text-sm text-green-700 dark:text-green-300 font-medium">
                ✅ Opening WhatsApp… Our team will reply shortly!
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#FF7A00] transition-colors"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What can we help you with?"
                  rows={3}
                  required
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#FF7A00] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 text-sm font-semibold text-white bg-[#FF7A00] rounded-xl hover:bg-[#E66D00] transition-all"
                >
                  💬 Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Footer — direct contact links and CTA */}
          <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 space-y-3">
            <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>Need more help?</span>
              <Link to="/contact" className="font-semibold text-brand-orange hover:text-[#E66D00]">
                Contact us
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a
                href={`tel:+${WA_NUMBER}`}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-[#FF7A00] transition-colors"
              >
                <IconPhone className="h-3.5 w-3.5" />
                Call us
              </a>
              <span className="text-slate-200 dark:text-slate-600">|</span>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-[#007ACC] transition-colors"
              >
                <IconMail className="h-3.5 w-3.5" />
                Email us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating button ──────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 end-4 z-[60] w-14 h-14 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center animate-chat-bounce bg-brand-orange"
        aria-label={open ? 'Close chat' : 'Chat with us'}
        aria-expanded={open}
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}

        {/* Notification dot when closed */}
        {!open && (
          <span
            className="absolute -top-1 -end-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"
            aria-hidden="true"
          />
        )}
      </button>
    </>
  );
}
