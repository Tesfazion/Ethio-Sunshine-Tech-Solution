// Static project case study data.
// Update this file to add or edit portfolio projects shown on the projects pages.
export type ProjectMetric = { label: string; value: string };
export type ProjectLink = { label: string; href: string };
export type ProjectSection = { title: string; body: string };
export type ProjectTestimonial = { quote: string; author: string; role: string; company: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  tags?: string[];
  industry?: string;
  duration?: string;
  result?: string;
  coverImage?: string;
  metrics?: ProjectMetric[];
  highlights: string[];
  sections: ProjectSection[];
  links?: ProjectLink[];
  testimonial?: ProjectTestimonial;
};

export const PROJECTS: readonly Project[] = [
  {
    slug: 'global-company-website',
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=70',
    title: 'Global Company Website',
    summary:
      'A fast, multilingual, SEO-ready website designed to convert visitors into customers — launched in 4 weeks.',
    year: '2026',
    tags: [],
    industry: 'Technology',
    duration: '4 weeks',
    result: 'Launched in 4 weeks with 5 languages and 98/100 PageSpeed score',
    metrics: [
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Languages', value: '5' },
      { label: 'Launch Time', value: '4 weeks' },
      { label: 'Accessibility', value: 'WCAG AA' },
    ],
    highlights: [
      'Responsive, accessible UI with modern motion and micro-interactions.',
      'International-ready layout with full RTL and multi-locale support.',
      'SEO metadata + structured data for better search engine discovery.',
    ],
    sections: [
      {
        title: 'Overview',
        body: 'We created a premium, international landing experience that is fast, accessible, and ready to scale. The goal was a website that feels global while speaking directly to both Ethiopian and international audiences.',
      },
      {
        title: 'What We Delivered',
        body: 'A complete design system, multilingual content in 5 languages, performance-first images, and a modular structure that can expand into full pages and case studies without rearchitecting.',
      },
      {
        title: 'Results & Impact',
        body: 'Achieved a 98/100 PageSpeed score, full WCAG AA accessibility compliance, and a sub-2-second load time globally. The site now serves as the primary lead generation channel for the business.',
      },
    ],
    links: [{ label: 'Email for demo', href: 'mailto:sunshinetechsolution4@gmail.com' }],
    testimonial: {
      quote:
        'The team delivered exactly what we envisioned — a fast, multilingual site that represents our brand globally. Truly professional from start to finish.',
      author: 'Tesfatseyon M.',
      role: 'Founder',
      company: 'Sunshine Tech Solution',
    },
  },
  {
    slug: 'customer-portal',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=70',
    title: 'Customer Portal',
    summary:
      'A secure portal for account onboarding, document sharing, and support requests — reducing email back-and-forth by 70%.',
    year: '2026',
    tags: [],
    industry: 'Finance & Services',
    duration: '6 weeks',
    result: 'Reduced support emails by 70% and onboarding time by 40%',
    metrics: [
      { label: 'Active Users', value: '1,000+' },
      { label: 'Support Load', value: '−70%' },
      { label: 'Onboarding Time', value: '−40%' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
    highlights: [
      'Role-based access control protecting sensitive client data.',
      'Audit-ready activity logs for compliance requirements.',
      'Clean dashboard UX designed for non-technical users.',
    ],
    sections: [
      {
        title: 'Challenge',
        body: 'The client was managing onboarding, support tickets, and document sharing entirely through email. This led to lost files, missed requests, and a slow customer experience.',
      },
      {
        title: 'Solution',
        body: 'A modular, role-based portal with secure authentication, document upload, and a support ticketing system. Everything is trackable and auditable from a central dashboard.',
      },
      {
        title: 'Outcome',
        body: "Support email volume dropped by 70%. Customer onboarding time was cut by 40%. The client's team now handles twice the workload without additional headcount.",
      },
    ],
    testimonial: {
      quote:
        'The portal completely changed how we work with clients. What used to take days of emails now happens in minutes. Our customers love it too.',
      author: 'Hana Girma',
      role: 'Operations Manager',
      company: 'Addis Financial Services',
    },
  },
  {
    slug: 'ecommerce-revamp',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=70',
    title: 'E\u2011commerce Revamp',
    summary:
      'A conversion-focused redesign with performance improvements — resulting in a 35% increase in completed purchases.',
    year: '2025',
    tags: [],
    industry: 'Retail',
    duration: '5 weeks',
    result: '35% increase in conversion rate within 60 days of launch',
    metrics: [
      { label: 'Conversion Rate', value: '+35%' },
      { label: 'Page Load', value: '−55%' },
      { label: 'Bounce Rate', value: '−28%' },
      { label: 'Mobile Sales', value: '+60%' },
    ],
    highlights: [
      'Improved search and filtering UX — users find products 3× faster.',
      'Streamlined checkout flow reduced cart abandonment by 28%.',
      'Performance-first image loading cut page load time in half.',
    ],
    sections: [
      {
        title: 'The Problem',
        body: "The client's existing store was slow, mobile-unfriendly, and had a confusing checkout flow. Over 60% of visitors left without buying — most of them on mobile devices.",
      },
      {
        title: 'Our Approach',
        body: 'We conducted a full UX audit, redesigned the product discovery experience, and rebuilt checkout from scratch with mobile-first layouts, trust signals, and fewer steps.',
      },
      {
        title: 'Measured Results',
        body: 'Conversion rate climbed 35% in the first 60 days. Mobile revenue increased by 60%. The client reported their best sales quarter since launching.',
      },
    ],
    testimonial: {
      quote:
        "Our online sales jumped dramatically after the redesign. Customers are actually completing purchases now instead of leaving. Best investment we've made.",
      author: 'Solomon Bekele',
      role: 'Co-Founder',
      company: 'EthioMart Online',
    },
  },
  {
    slug: 'cloud-observability-foundation',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=70',
    title: 'Cloud Observability Foundation',
    summary:
      'Logging, metrics, and alerts that helped the client detect incidents 5× faster and cut unplanned downtime by 80%.',
    year: '2025',
    tags: [],
    industry: 'Technology',
    duration: '3 weeks',
    result: 'Incident detection time reduced from hours to minutes',
    metrics: [
      { label: 'Incident Detection', value: '5× faster' },
      { label: 'Downtime', value: '−80%' },
      { label: 'Alert Noise', value: '−65%' },
      { label: 'MTTR', value: '−70%' },
    ],
    highlights: [
      'Clear dashboards for both engineering and business stakeholders.',
      'Alert rules tuned to reduce noise and prevent alert fatigue.',
      'Runbooks for predictable, documented incident response.',
    ],
    sections: [
      {
        title: 'Goal',
        body: 'Build confidence in production through centralized monitoring, smart alerting, and shared operational visibility across the engineering team.',
      },
      {
        title: 'Implementation',
        body: 'We deployed structured logging, custom metric dashboards, and alert policies with clear escalation paths. Runbooks were written for the most common incident types.',
      },
      {
        title: 'Result',
        body: 'Mean time to detect (MTTD) dropped from hours to under 10 minutes. Unplanned downtime fell by 80%. The on-call team now responds with confidence instead of guesswork.',
      },
    ],
  },
  {
    slug: 'security-hardening',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=70',
    title: 'Security Hardening Sprint',
    summary:
      'A practical security upgrade for a growing web app — closing 14 critical vulnerabilities and achieving industry-standard compliance.',
    year: '2025',
    tags: [],
    industry: 'Healthcare',
    duration: '2 weeks',
    result: 'Closed 14 critical vulnerabilities; passed compliance audit',
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '14' },
      { label: 'Security Score', value: 'A+' },
      { label: 'Audit Result', value: 'Passed' },
      { label: 'Sprint Duration', value: '2 weeks' },
    ],
    highlights: [
      'Security headers, CSP, and baseline hardening applied across all endpoints.',
      'Risk assessment with prioritized, actionable fix list.',
      'Actionable roadmap for maintaining long-term security posture.',
    ],
    sections: [
      {
        title: 'Assessment',
        body: 'We reviewed server configuration, application dependencies, authentication flows, and the OWASP Top 10 checklist. 14 critical and 22 medium-severity issues were identified.',
      },
      {
        title: 'Fixes Applied',
        body: 'All 14 critical issues were resolved including insecure headers, broken access controls, and exposed API endpoints. Medium issues were documented with a phased remediation plan.',
      },
      {
        title: 'Handover',
        body: 'The client received a detailed security report, a monitoring setup to catch future regressions, and a 6-month roadmap for continued improvement.',
      },
    ],
    testimonial: {
      quote:
        'We had a compliance audit coming up and Sunshine Tech got us audit-ready in 2 weeks. Professional, thorough, and delivered exactly what they promised.',
      author: 'Dr. Tigist Haile',
      role: 'Medical Director',
      company: 'Haile Health Center',
    },
  },
  {
    slug: 'smart-iot-dashboard',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70',
    title: 'Smart IoT Dashboard',
    summary:
      'A real-time dashboard visualizing 200+ sensors — reducing field inspection time by 60% and preventing 3 major equipment failures.',
    year: '2024',
    tags: [],
    industry: 'Manufacturing & Logistics',
    duration: '7 weeks',
    result: 'Prevented 3 equipment failures; 60% reduction in field inspections',
    metrics: [
      { label: 'Sensors Monitored', value: '200+' },
      { label: 'Field Inspections', value: '−60%' },
      { label: 'Failures Prevented', value: '3' },
      { label: 'Uptime', value: '99.7%' },
    ],
    highlights: [
      'Real-time device health monitoring across 200+ sensors.',
      'Simple, readable charts designed for field teams and management.',
      'SMS + email alerts when sensor readings leave safe ranges.',
    ],
    sections: [
      {
        title: 'Use Case',
        body: 'A manufacturing client needed visibility into equipment health across multiple sites. Manual inspections were costly, delayed, and often caught issues only after damage had already occurred.',
      },
      {
        title: 'Dashboard & Alerts',
        body: 'We built a real-time dashboard showing sensor readings, device status, and historical trends. Automatic alerts notify the right people when readings go out of range — before failures happen.',
      },
      {
        title: 'Impact',
        body: 'Three major equipment failures were predicted and prevented in the first 3 months. Field inspection costs dropped by 60%. The client estimates $40,000+ ETB saved in repair costs.',
      },
    ],
  },
] as const;

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
