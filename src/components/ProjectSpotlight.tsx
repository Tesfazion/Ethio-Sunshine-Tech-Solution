// Reusable project spotlight card component.
// Use this for illustrative project listings and concept calls-to-action.
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
            <span className="inline-block text-xs font-bold text-white bg-slate-900/80 px-3 py-1 rounded-full mb-3">
              {project.industry}
            </span>
          )}
        </div>
      </div>

      {/* Content panel */}
      <div className={cn('p-8 lg:p-10 flex flex-col justify-center', reverse && 'lg:order-1')}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-blue dark:text-[#7FA8FF]">
          Illustrative concept
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{project.summary}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-brand-orange rounded-xl hover:bg-[#9A3412] transition-all w-fit"
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
