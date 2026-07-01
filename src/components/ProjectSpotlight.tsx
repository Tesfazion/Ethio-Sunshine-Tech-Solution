import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';
import { cn } from '../lib/cn';

type Props = {
  project: Project;
  reverse?: boolean;
  readCaseStudyLabel: string;
  className?: string;
};

export default function ProjectSpotlight({ project, reverse = false, readCaseStudyLabel, className }: Props) {
  return (
    <article
      className={cn(
        'grid lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300',
        className
      )}
    >
      {/* Image panel */}
      <div className={cn('relative min-h-[280px] lg:min-h-[400px]', reverse && 'lg:order-2')}>
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-orange" />
        )}
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="absolute bottom-0 start-0 end-0 p-6">
          {project.industry && (
            <span className="inline-block text-xs font-bold text-white bg-brand-orange px-3 py-1 rounded-full mb-3">
              {project.industry}
            </span>
          )}
          {project.result && <p className="text-white font-semibold text-sm">✦ {project.result}</p>}
        </div>
      </div>

      {/* Content panel */}
      <div className={cn('p-8 lg:p-10 flex flex-col justify-center', reverse && 'lg:order-1')}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-bold text-brand-blue dark:text-[#7FA8FF]">{project.year}</span>
          {project.duration && (
            <>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{project.duration}</span>
            </>
          )}
        </div>

        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{project.summary}</p>

        {project.metrics?.length ? (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {project.metrics.slice(0, 3).map((m) => (
              <div
                key={m.label}
                className="bg-slate-50 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 rounded-xl p-3 text-center"
              >
                <p className="text-lg font-bold text-brand-orange leading-none">{m.value}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>
        ) : null}

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-orange rounded-xl hover:bg-[#E66D00] transition-all w-fit"
        >
          {readCaseStudyLabel}
          <span className="arrow-dir" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
