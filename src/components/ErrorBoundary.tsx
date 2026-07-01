// Top-level error boundary for route-specific crash recovery.
// Wrap pages and route branches so failures stay contained.
import React from 'react';
import { Link } from 'react-router-dom';

type ErrorBoundaryProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    return { hasError: true, error: error instanceof Error ? error : new Error('Unknown error') };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Keep user experience stable; logging helps debugging in development.
    // eslint-disable-next-line no-console
    console.error('Route crashed:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="mx-auto max-w-screen-2xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold text-rose-700">Error</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
          {this.props.title ?? 'Something went wrong'}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {this.props.subtitle ?? 'This page failed to load. You can keep using the site and try again.'}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Go to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Contact us
          </Link>
        </div>

        {this.state.error ? (
          <details className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white/70 p-6 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-none">
            <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-50">
              Technical details
            </summary>
            <pre className="mt-4 overflow-auto whitespace-pre-wrap leading-relaxed">{this.state.error.message}</pre>
          </details>
        ) : null}
      </section>
    );
  }
}
