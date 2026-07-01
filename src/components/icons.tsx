// Shared icon components for the website.
// Add new icon components here and reuse them across the UI.
export type IconProps = { className?: string };

export function IconSun({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" className="stroke-current" strokeWidth="1.6" />
      <path d="M12 2.75v2.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 18.75v2.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M21.25 12h-2.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.25 12h-2.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18.5 5.5l-1.77 1.77" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.27 16.73 5.5 18.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18.5 18.5l-1.77-1.77" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.27 7.27 5.5 5.5" className="stroke-current" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 14.8A8.6 8.6 0 0 1 9.2 3a7.2 7.2 0 1 0 11.8 11.8z"
        className="stroke-current"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 9l6 6 6-6" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSparkles({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2l1.2 4.3c.3 1 1.1 1.8 2.1 2.1l4.3 1.2-4.3 1.2c-1 .3-1.8 1.1-2.1 2.1L12 17.2l-1.2-4.3c-.3-1-1.1-1.8-2.1-2.1L4.4 9.6l4.3-1.2c1-.3 1.8-1.1 2.1-2.1L12 2z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 3l.4 1.4c.1.5.5.9 1 1L7.8 6l-1.4.4c-.5.1-.9.5-1 1L5 8.8l-.4-1.4c-.1-.5-.5-.9-1-1L2.2 6l1.4-.4c.5-.1.9-.5 1-1L5 3z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 18.5h9.1a4.4 4.4 0 0 0 .6-8.7A5.8 5.8 0 0 0 6.2 9.7 3.8 3.8 0 0 0 7.5 18.5z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDevices({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h9a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 16 16H7a2.5 2.5 0 0 1-2.5-2.5v-7z" className="stroke-current" strokeWidth="1.5" />
      <path d="M9 20h6" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16v4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCode({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 18l-6-6 6-6" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6l6 6-6 6" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4l-4 16" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 7.5h11A2.5 2.5 0 0 1 20 10v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17v-7a2.5 2.5 0 0 1 2.5-2.5z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 9l7 5 7-5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9.5 6.5l1.2-2.2a1.8 1.8 0 0 1 2.7-.5l2 1.6c.7.6.9 1.6.4 2.4l-1.1 1.9a12.7 12.7 0 0 0 5.2 5.2l1.9-1.1c.8-.5 1.8-.3 2.4.4l1.6 2a1.8 1.8 0 0 1-.5 2.7l-2.2 1.2c-1 .6-2.3.5-3.2-.1-6.8-4.3-12.2-9.7-16.5-16.5-.6-.9-.7-2.2-.1-3.2z"
        className="stroke-current"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11z"
        className="stroke-current"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 10.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" className="stroke-current" strokeWidth="1.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" className="stroke-current" strokeWidth="1.5" />
      <path d="M12 7v5l3 2" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGitHub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.6 5 .4.4.8 1.1.8 2.2v3.2c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z"
        className="fill-current"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity="0.92"
      />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20 6L9 17l-5-5" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 18l-6.2 3.3L7 14.2 2 9.3l6.9-1L12 2z"
        className="fill-current"
      />
    </svg>
  );
}

export function IconShoppingBag({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 8h12l-1.2 11H7.2L6 8z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeartPulse({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21s-6.5-4.2-8.5-8.5C1.8 9.2 3.6 5.5 7 5.5c1.8 0 3.2 1 5 2.8C13.8 6.5 15.2 5.5 17 5.5c3.4 0 5.2 3.7 3.5 7-2 4.3-8.5 8.5-8.5 8.5z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 9v4l2 1.5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGraduation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5z" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 12v4.5c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5V12" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 10v5" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconChartBar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 20V10" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 20V4" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 20v-7" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuilding({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 20V8l8-4 8 4v12" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 20v-5h6v5" className="stroke-current" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" className="stroke-current" strokeWidth="1.5" />
      <path d="M3 12h18M12 3c2.5 2.8 4 6.2 4 9s-1.5 6.2-4 9M12 3c-2.5 2.8-4 6.2-4 9s1.5 6.2 4 9" className="stroke-current" strokeWidth="1.5" />
    </svg>
  );
}
