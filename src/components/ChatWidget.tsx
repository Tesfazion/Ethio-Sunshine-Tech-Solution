// Floating chat widget component.
// Provides quick WhatsApp contact and support interactions.
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconPhone } from './icons';

const WA_NUMBER = '251983708869';
const COMPANY_EMAIL = 'sunshinetechsolution4@gmail.com';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [handoffAttempted, setHandoffAttempted] = useState(false);
  const [activeTopic, setActiveTopic] = useState('');
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (open) {
      hasOpenedRef.current = true;
      messageInputRef.current?.focus();
    } else if (hasOpenedRef.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), a[href]'
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

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
      answer: 'Project prices are indicative. The final scope, price, and payment terms are agreed in a written proposal.',
    },
    {
      id: 'timeline',
      title: 'Delivery times',
      summary: 'Typical timelines for websites and software.',
      answer: 'The delivery schedule depends on the agreed scope and availability. We confirm milestones in the proposal.',
    },
    {
      id: 'languages',
      title: 'Language support',
      summary: 'Know which languages your site can support.',
      answer: 'Language requirements, including right-to-left layouts, can be discussed and scoped for each project.',
    },
    {
      id: 'security',
      title: 'Security help',
      summary: 'Ask about cybersecurity and infrastructure support.',
      answer: 'Security assessment, hardening, and infrastructure work can be discussed and scoped for your systems.',
    },
  ];

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const text = encodeURIComponent(
      `Hi! I'm ${name.trim() || 'a visitor'} reaching out from your website.\n\n${message.trim()}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setHandoffAttempted(true);
  }

  return (
    <>
      {/* ── Chat panel ───────────────────────────── */}
      {open && (
        <div
          id="chat-panel"
          className="fixed bottom-24 end-4 z-[60] w-[calc(100vw-2rem)] max-w-sm sm:max-w-sm max-h-[80vh] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-scale-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
          ref={dialogRef}
          onKeyDown={handleDialogKeyDown}
        >
          {/* Header — solid brand */}
          <div className="bg-tech-blue p-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                STS
              </div>
              <div>
                <h2 id="chat-title" className="font-bold text-white text-sm leading-tight">Sunshine Tech Support</h2>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-white/80 text-xs">Contact us by WhatsApp or email</span>
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
                    aria-expanded={activeTopic === item.id}
                    aria-controls={`chat-topic-${item.id}`}
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
                      <p id={`chat-topic-${item.id}`} className="mt-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{item.answer}</p>
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            {handoffAttempted ? (
              <div className="space-y-3">
                <p className="rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-sky-950 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-100" role="status" aria-live="polite">
                  If WhatsApp opened in a new tab, send your message there. If it did not, use the email or phone links below.
                </p>
                <button type="button" onClick={() => setHandoffAttempted(false)} className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700">
                  Edit message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-3">
                <label htmlFor="chat-name" className="sr-only">Your name (optional)</label>
                <input
                  id="chat-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name (optional)"
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#C2410C] transition-colors"
                />
                <label htmlFor="chat-message" className="sr-only">Message</label>
                <textarea
                  id="chat-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  ref={messageInputRef}
                  placeholder="What can we help you with?"
                  rows={3}
                  required
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-[#C2410C] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 text-sm font-semibold text-white bg-[#C2410C] rounded-xl hover:bg-[#9A3412] transition-all"
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
              <Link to="/contact" className="font-semibold text-brand-orange hover:text-[#9A3412]">
                Contact us
              </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a
                href={`tel:+${WA_NUMBER}`}
                className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-[#C2410C] transition-colors"
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
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 end-4 z-[60] w-14 h-14 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center justify-center animate-chat-bounce bg-brand-orange"
        aria-label={open ? 'Close chat' : 'Chat with us'}
        aria-expanded={open}
        aria-controls="chat-panel"
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
