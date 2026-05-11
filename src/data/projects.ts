export type ProjectMetric = { label: string; value: string };

export type ProjectLink = { label: string; href: string };

export type ProjectSection = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags: string[];
  metrics?: ProjectMetric[];
  highlights: string[];
  sections: ProjectSection[];
  links?: ProjectLink[];
};

export const PROJECTS: readonly Project[] = [
  {
    slug: 'global-company-website',
    title: 'Global Company Website',
    summary: 'A fast, multilingual, SEO-ready website designed to convert visitors into customers.',
    year: '2026',
    tags: ['Brand', 'UX', 'UI', 'Performance', 'SEO', 'i18n'],
    metrics: [
      { label: 'Core Web Vitals', value: 'Optimized' },
      { label: 'Locales', value: '5' },
      { label: 'Theme', value: 'Light/Dark' },
    ],
    highlights: [
      'Responsive, accessible UI with modern motion and micro-interactions.',
      'International-ready layout with RTL support.',
      'SEO metadata + structured data for better discovery.',
    ],
    sections: [
      {
        title: 'Overview',
        body: 'We created a premium, international landing experience that is fast, accessible, and easy to extend as the company grows.',
      },
      {
        title: 'What we delivered',
        body: 'A design system, multilingual content, performance optimizations, and a structure that can scale into multiple pages and case studies.',
      },
      {
        title: 'Next steps',
        body: 'Add real client case studies, testimonials, and analytics to measure conversions and iterate quickly.',
      },
    ],
    links: [{ label: 'Email for demo', href: 'mailto:sunshinetechsolution4@gmail.com' }],
  },
  {
    slug: 'customer-portal',
    title: 'Customer Portal',
    summary: 'A secure portal for account onboarding, document sharing, and support requests.',
    year: '2026',
    tags: ['Web App', 'Security', 'Auth', 'Dashboard'],
    metrics: [{ label: 'Users', value: '1k+' }, { label: 'SLA', value: '24/7' }],
    highlights: ['Role-based access control.', 'Audit-ready activity logs.', 'Clean dashboard UX for non-technical users.'],
    sections: [
      { title: 'Challenge', body: 'Unify onboarding, support, and document workflows into one secure experience.' },
      { title: 'Solution', body: 'A modular portal with authentication, permissions, and a friendly UI that reduces support load.' },
      { title: 'Outcome', body: 'Faster onboarding and fewer back-and-forth emails—everything is trackable in one place.' },
    ],
  },
  {
    slug: 'ecommerce-revamp',
    title: 'E‑commerce Revamp',
    summary: 'A conversion-focused redesign with performance improvements and better product discovery.',
    year: '2025',
    tags: ['E‑commerce', 'UX', 'Performance', 'Analytics'],
    highlights: ['Improved search and filtering UX.', 'Cleaner checkout flow.', 'Performance-first images and UI.'],
    sections: [
      { title: 'Research', body: 'We reviewed user journeys and removed friction points across product discovery and checkout.' },
      { title: 'Design', body: 'A modern UI with consistent spacing, typography, and trust-building details.' },
      { title: 'Delivery', body: 'A responsive build that loads fast and remains easy to maintain.' },
    ],
  },
  {
    slug: 'cloud-observability-foundation',
    title: 'Cloud Observability Foundation',
    summary: 'Logging, metrics, and alerts that help teams detect issues early and respond faster.',
    year: '2025',
    tags: ['Cloud', 'DevOps', 'Monitoring', 'Reliability'],
    highlights: ['Clear dashboards for business and engineering.', 'Alert rules tuned to reduce noise.', 'Runbooks for predictable incident response.'],
    sections: [
      { title: 'Goal', body: 'Build confidence in production through monitoring, alerting, and visibility.' },
      { title: 'Implementation', body: 'Dashboards, alert policies, and workflow improvements for on-call reliability.' },
      { title: 'Result', body: 'Fewer outages and quicker troubleshooting with shared operational context.' },
    ],
  },
  {
    slug: 'security-hardening',
    title: 'Security Hardening Sprint',
    summary: 'A practical security upgrade for web apps: headers, auth checks, and best-practice configurations.',
    year: '2025',
    tags: ['Security', 'Hardening', 'Best Practices'],
    highlights: ['Security headers and baseline hardening.', 'Risk assessment with prioritized fixes.', 'Actionable roadmap for long-term security posture.'],
    sections: [
      { title: 'Assessment', body: 'We reviewed configuration, dependencies, and common web security risks.' },
      { title: 'Fixes', body: 'Implemented quick wins and documented recommendations for deeper improvements.' },
      { title: 'Handover', body: 'Provided a clear checklist and rollout plan to keep the system secure over time.' },
    ],
  },
  {
    slug: 'smart-iot-dashboard',
    title: 'Smart IoT Dashboard',
    summary: 'A dashboard to visualize sensor readings and device status in real time.',
    year: '2024',
    tags: ['IoT', 'Dashboard', 'Real-time', 'Data'],
    highlights: ['Device health monitoring.', 'Simple charts and status views.', 'Designed for field teams and managers.'],
    sections: [
      { title: 'Use case', body: 'Monitor device uptime and sensor data to catch issues before they affect operations.' },
      { title: 'UI', body: 'A clean dashboard that is readable on laptops and tablets.' },
      { title: 'Impact', body: 'Better visibility and faster response time to device incidents.' },
    ],
  },
] as const;

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
