// Illustrative project concepts; replace with approved client case studies when available.
export type ProjectSection = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  coverImage: string;
  highlights: string[];
  sections: ProjectSection[];
};

export const PROJECTS: readonly Project[] = [
  {
    slug: 'global-company-website',
    coverImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=70',
    title: 'International Company Website',
    summary: 'An illustrative concept for a responsive, multilingual website with clear navigation and search-friendly page structure.',
    industry: 'Web design',
    highlights: [
      'Responsive page layouts for desktop and mobile.',
      'Reusable interface patterns and accessible interactions.',
      'Content structure prepared for localization and right-to-left layouts.',
    ],
    sections: [
      { title: 'Concept', body: 'This example explores how an organization can introduce its services, expertise, and contact options through a clear website structure.' },
      { title: 'Possible approach', body: 'A project could begin with audience research and content planning, followed by responsive interface design, implementation, and accessibility testing.' },
      { title: 'What to tailor', body: 'The final language set, content, integrations, and acceptance criteria would be agreed with the organization before work begins.' },
    ],
  },
  {
    slug: 'customer-portal',
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=70',
    title: 'Customer Portal',
    summary: 'An illustrative portal concept for account access, document sharing, and support requests.',
    industry: 'Customer experience',
    highlights: [
      'Information architecture for account and support tasks.',
      'Role-aware interface patterns for sensitive workflows.',
      'Clear request and document status views.',
    ],
    sections: [
      { title: 'Concept', body: 'This example considers how a customer portal might bring common account, document, and service tasks together.' },
      { title: 'Possible approach', body: 'Discovery would map user roles and workflows, then define secure access requirements, interface states, and operational needs.' },
      { title: 'What to tailor', body: 'Authentication, data handling, integrations, and audit requirements depend on the organization and must be designed with its technical and compliance teams.' },
    ],
  },
  {
    slug: 'ecommerce-revamp',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=70',
    title: 'E-commerce Experience',
    summary: 'An illustrative commerce concept centered on product discovery, a clear checkout journey, and mobile-friendly layouts.',
    industry: 'Commerce',
    highlights: [
      'Product categories and filters designed for easy browsing.',
      'A checkout flow that communicates each step clearly.',
      'Responsive layouts for product and order information.',
    ],
    sections: [
      { title: 'Concept', body: 'This example shows a possible way to organize an online catalog and guide customers from product discovery toward checkout.' },
      { title: 'Possible approach', body: 'A real engagement would review the catalog, payment methods, delivery options, and customer support needs before selecting a platform.' },
      { title: 'What to tailor', body: 'Inventory, payment providers, taxes, shipping, and analytics should be confirmed for each business and market.' },
    ],
  },
  {
    slug: 'cloud-observability-foundation',
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=70',
    title: 'Cloud Observability Foundation',
    summary: 'An illustrative infrastructure concept for service-health dashboards, useful alerts, and operational runbooks.',
    industry: 'Cloud infrastructure',
    highlights: [
      'Dashboards organized around service health and operational needs.',
      'Alert criteria designed to support actionable response.',
      'Runbooks that document investigation and escalation steps.',
    ],
    sections: [
      { title: 'Concept', body: 'This example outlines an observability foundation that can help a team understand application and infrastructure behavior.' },
      { title: 'Possible approach', body: 'A project would first identify critical services, existing telemetry, response roles, and the signals needed for reliable operations.' },
      { title: 'What to tailor', body: 'Monitoring tools, data retention, alert thresholds, and escalation paths must reflect each system and its service commitments.' },
    ],
  },
  {
    slug: 'security-hardening',
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=70',
    title: 'Security Hardening Plan',
    summary: 'An illustrative security engagement covering assessment, prioritized recommendations, and a practical remediation plan.',
    industry: 'Cybersecurity',
    highlights: [
      'A scoped review of agreed applications and infrastructure.',
      'Findings prioritized by risk and remediation effort.',
      'Practical guidance for ownership and follow-up.',
    ],
    sections: [
      { title: 'Concept', body: 'This example describes a structured way to review security concerns without implying that a particular client system has been assessed.' },
      { title: 'Possible approach', body: 'The scope, permissions, testing methods, and reporting expectations would be agreed in writing before any assessment begins.' },
      { title: 'What to tailor', body: 'Applicable regulations, system boundaries, risk tolerance, and remediation capacity vary by organization.' },
    ],
  },
  {
    slug: 'smart-iot-dashboard',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70',
    title: 'Smart Systems Dashboard',
    summary: 'An illustrative IoT concept for device status, sensor readings, and operational alerts.',
    industry: 'IoT',
    highlights: [
      'Device and sensor information presented in context.',
      'Dashboard patterns for current status and historical trends.',
      'Alert workflows designed around operator responsibilities.',
    ],
    sections: [
      { title: 'Concept', body: 'This example explores how connected-device data could be made understandable to operations teams and decision-makers.' },
      { title: 'Possible approach', body: 'A real project would confirm device protocols, connectivity, data quality, user roles, and the actions required when readings change.' },
      { title: 'What to tailor', body: 'Hardware, network conditions, data storage, security controls, and notification channels should be validated for the deployment environment.' },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
