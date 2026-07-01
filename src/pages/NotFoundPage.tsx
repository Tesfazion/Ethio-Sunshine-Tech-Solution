// 404 page view
// Shown when a route does not match; includes quick navigation actions.
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="text-sm font-semibold text-emerald-700">{t('notFound.eyebrow')}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
        {t('notFound.title')}
      </h1>
      <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">{t('notFound.subtitle')}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          {t('notFound.home')}
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
        >
          {t('actions.getQuote')}
        </Link>
      </div>
    </section>
  );
}
