// Site metadata and contact details.
// Update company phone, email, and social links here for global use.
export type SocialLink = {
  label: string;
  href: string;
  kind: 'github' | 'website';
};

export const SITE = {
  email: 'sunshinetechsolution4@gmail.com',
  personalEmail: 'tesfatseyon69@gmail.com',
  phone: '+251983708869',
  phone2: '+251704300069',
  location: 'Addis Abeba, Ethiopia',
  timezone: 'Africa/Nairobi',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Tesfazion', kind: 'github' },
    { label: 'Portfolio Repo', href: 'https://github.com/Tesfazion/Tesfa-portfolio', kind: 'website' },
  ] satisfies SocialLink[],
} as const;
