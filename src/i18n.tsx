import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type LocaleCode = 'en' | 'am' | 'fr' | 'es' | 'ar';

type LocaleMeta = {
  code: LocaleCode;
  label: string;
  dir: 'ltr' | 'rtl';
};

export const LOCALES: readonly LocaleMeta[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'am', label: 'አማርኛ', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
] as const;

interface Messages {
  [key: string]: string | Messages;
}

const MESSAGES: Record<LocaleCode, Messages> = {
  en: {
    brand: {
      name: 'Sunshine Tech Solution',
      tagline: 'International product, cloud, and security partner',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    actions: {
      getQuote: 'Get a proposal',
      viewWork: 'View capabilities',
      send: 'Send message',
    },
    hero: {
      badge: 'Global Delivery · Modern Engineering · 5+ Years',
      title: 'Your technology partner for web, software & security',
      subtitle:
        'We design, build, and secure digital products for organizations worldwide — strong engineering, clear communication, and support that continues after launch.',
      highlight: 'Light, modern, international',
      note: 'Trusted delivery for web, mobile, cloud, and cybersecurity.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services designed for modern teams',
      subtitle:
        'From strategy to delivery, we combine design, engineering, and security to ship work you can be proud of.',
      ctaTitle: 'Need a tailored plan?',
      ctaSubtitle: 'Tell us your goals and we’ll respond with a clear next step.',
      web: {
        title: 'Web Design & UI Engineering',
        description: 'Modern, responsive interfaces with accessibility and performance built in.',
      },
      software: {
        title: 'Software Development',
        description: 'Full‑stack web and mobile apps with clean architecture and rapid iteration.',
      },
      infrastructure: {
        title: 'IT Infrastructure',
        description: 'Networks, systems, and observability—stable foundations for growing businesses.',
      },
      iot: {
        title: 'IoT & Smart Systems',
        description: 'Connect devices, collect data, and build reliable real‑time experiences.',
      },
      security: {
        title: 'Cybersecurity',
        description: 'Security posture, hardening, and best practices across apps and infrastructure.',
      },
    },
    solutions: {
      eyebrow: 'Why teams choose us',
      title: 'International quality, local care',
      bullets: {
        one: 'Design-first delivery with strong engineering',
        two: 'Clear communication and predictable timelines',
        three: 'Security and performance as defaults',
        four: 'Systems built to support multiple languages and RTL',
      },
    },
    engagement: {
      eyebrow: 'Engagement',
      title: 'Flexible ways to work together',
      subtitle: 'Choose the engagement model that fits your timeline, budget, and level of support.',
      models: {
        delivery: {
          title: 'Fixed‑scope delivery',
          description: 'Clear scope, milestones, and a predictable timeline—ideal for websites, MVPs, and launches.',
        },
        team: {
          title: 'Dedicated team',
          description: 'Extend your team with design, engineering, and QA—weekly sprints and transparent updates.',
        },
        review: {
          title: 'Security & performance review',
          description: 'Audit, hardening, and optimization with an actionable roadmap and quick wins.',
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, answered',
      subtitle: 'A few common topics to help you get started.',
      items: {
        one: { q: 'How fast can you start?', a: 'Typically within 1–2 weeks depending on scope and availability.' },
        two: {
          q: 'Do you work internationally?',
          a: 'Yes—remote-first delivery across time zones and languages, including RTL.',
        },
        three: {
          q: 'What does the handover include?',
          a: 'Source code, documentation, and deployment notes. Ongoing support is optional.',
        },
        four: {
          q: 'Can you sign NDAs or SLAs?',
          a: 'Yes. We can work under NDAs and define service levels based on your needs.',
        },
      },
    },
    projects: {
      featured: {
        eyebrow: 'Projects',
        title: 'Selected work & capabilities',
        subtitle: 'A few examples of how we design, build, and secure products for modern teams.',
        viewAll: 'View all projects',
      },
      dashboard: {
        title: 'Project dashboard',
        subtitle: 'A quick view of capabilities and delivery patterns.',
        cards: {
          one: { label: 'Delivery model', value: 'Remote-first' },
          two: { label: 'Quality', value: 'Design + engineering' },
          three: { label: 'Availability', value: 'Africa / Europe' },
        },
      },
      page: {
        eyebrow: 'Projects',
        title: 'Projects and case studies',
        subtitle: 'A growing set of projects—built with international-quality UX, engineering, and security.',
      },
      filterAll: 'All',
      readCaseStudy: 'Read case study',
      caseStudy: 'Case study',
      ctaTitle: 'Want similar results?',
      ctaSubtitle: 'Send a short brief and we’ll propose the best next step.',
      highlights: 'Highlights',
      metrics: 'Metrics',
      links: 'Links',
      backToProjects: 'Back to projects',
      notFound: {
        eyebrow: 'Not found',
        title: 'Project not found',
        subtitle: 'The project you requested does not exist (or the link is incorrect).',
      },
      nextStep: {
        title: 'Next step',
        subtitle: 'Tell us what you want to build and we’ll respond with a clear plan.',
      },
    },
    cta: {
      eyebrow: 'Next',
      title: 'Ready to build something great?',
      subtitle: 'Share your goals and we’ll respond with a timeline, estimate, and a clear plan.',
      viewProjects: 'View projects',
    },
    about: {
      eyebrow: 'About',
      title: 'International quality, built with care',
      subtitle:
        'We’re a product, cloud, and security partner—focused on modern UX, strong engineering, and reliable delivery across time zones.',
      cards: {
        one: {
          eyebrow: 'Principle',
          title: 'Design-first',
          body: 'We start with users and outcomes—then build the system around clarity and trust.',
        },
        two: {
          eyebrow: 'Practice',
          title: 'Engineering excellence',
          body: 'Clean architecture, maintainable code, and performance as a baseline—not a luxury.',
        },
        three: {
          eyebrow: 'Default',
          title: 'Security built-in',
          body: 'Hardening, best practices, and risk reduction as part of every delivery.',
        },
        four: {
          eyebrow: 'Global',
          title: 'International-ready',
          body: 'Multilingual UX and RTL support designed from day one.',
        },
        five: {
          eyebrow: 'Delivery',
          title: 'Transparent process',
          body: 'Predictable milestones, clear communication, and fast feedback loops.',
        },
        six: {
          eyebrow: 'Growth',
          title: 'Built to scale',
          body: 'Systems that evolve—new pages, new products, and new markets without rewrites.',
        },
      },
      story: {
        eyebrow: 'Story',
        title: 'A modern partner for modern teams',
        body: 'We help teams ship product experiences they can be proud of—fast, reliable, and measurable. From landing pages to platforms, we prioritize quality, clarity, and long-term maintainability.',
      },
      founder: {
        eyebrow: 'Founder',
        title: 'Founder-led quality',
        body: 'As a founder-led team, we care deeply about outcomes: clarity, reliability, and the details that make a brand feel premium.',
        cta: 'Work with us',
      },
      team: {
        eyebrow: 'Team',
        title: 'Founder & engineering team',
        subtitle: 'A small, focused team built for quality—design, engineering, and delivery.',
        founder: {
          role: 'Founder & CEO',
          name: 'Tesfa',
          body: 'Vision, delivery quality, and customer success—end to end.',
        },
        developer: {
          role: 'Lead Developer',
          name: 'Sunshine Engineering',
          body: 'Architecture, performance, and clean code—built to scale.',
        },
      },
    },
    notFound: {
      eyebrow: '404',
      title: 'Page not found',
      subtitle: 'The page you’re looking for doesn’t exist. Use the links below to continue.',
      home: 'Back to home',
    },
    stats: {
      projects: 'Projects delivered',
      clients: 'Client satisfaction',
      response: 'Avg. response time',
      hours: 'Delivery time zone coverage',
    },
    process: {
      eyebrow: 'How we work',
      title: 'A simple, transparent process',
      step1: { title: 'Discover', desc: 'Goals, users, scope, and success metrics.' },
      step2: { title: 'Design', desc: 'UX flows, UI system, and prototypes that feel premium.' },
      step3: { title: 'Build', desc: 'Modern stack, clean code, tests, and measurable performance.' },
      step4: { title: 'Launch', desc: 'Release, monitoring, iteration, and continuous improvement.' },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell us what you want to build',
      subtitle: 'Share a short brief and we’ll respond with the best next step—timeline, estimate, and a clear plan.',
      name: 'Name',
      email: 'Email',
      brief: 'Project brief',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'name@example.com',
      briefPlaceholder: 'What are you building? What outcomes matter most?',
      success:
        'Thanks! Your email app should open so you can send the message. If it didn’t, email us at sunshinetechsolution4@gmail.com.',
      info: {
        emailTitle: 'Email',
        phoneTitle: 'Phone',
        locationTitle: 'Location',
        locationValue: 'Addis Abeba, Ethiopia',
        timezoneTitle: 'Time zone',
        timezoneValue: 'Africa / Europe friendly',
      },
    },
    footer: {
      rights: '© 2026 Sunshine Tech Solution. All rights reserved.',
      line: 'Built for global audiences — multilingual and RTL-ready.',
    },
    language: {
      label: 'Language',
    },
    a11y: {
      skip: 'Skip to content',
      toggleMenu: 'Toggle menu',
      toggleTheme: 'Toggle theme',
    },
  },
  am: {
    brand: {
      name: 'ሳንሻይን ቴክ ሶሉሽን',
      tagline: 'ዓለም አቀፍ የምርት፣ የደመና እና የደህንነት አጋር',
    },
    nav: {
      home: 'መነሻ',
      services: 'አገልግሎቶች',
      projects: 'ፕሮጀክቶች',
      about: 'ስለ እኛ',
      contact: 'አግኙን',
    },
    actions: {
      getQuote: 'ዋጋ ጥያቄ ያድርጉ',
      viewWork: 'ችሎታችንን ይመልከቱ',
      send: 'መልእክት ላክ',
    },
    hero: {
      badge: 'ዘመናዊ · ታማኝ · ዓለም አቀፍ',
      title: 'ፈጣን ይገንቡ። በጥበብ ይጀምሩ። በዓለም ይስፋፉ።',
      subtitle: 'ለዓለም አቀፍ ደንበኞች የሚመች ዲጂታል ምርት እንዲወጣ እንዲጠበቅ እና እንዲያድግ እንረዳለን—ጥሩ UX፣ ጠንካራ ኢንጂነሪንግ፣ ውጤታማ መለኪያዎች።',
      highlight: 'ቀለል ያለ፣ ዘመናዊ፣ ዓለም አቀፍ',
      note: 'ለድር፣ ለሞባይል፣ ለደመና እና ለሳይበር ደህንነት የታመነ አፈፃፀም።',
    },
    services: {
      eyebrow: 'እኛ ምን እናደርጋለን',
      title: 'ለዘመናዊ ቡድኖች የተዘጋጁ አገልግሎቶች',
      subtitle: 'ከስትራቴጂ እስከ አፈፃፀም ድረስ፣ ዲዛይንን ኢንጂነሪንግን እና ደህንነትን አንድ እናደርጋለን።',
      web: { title: 'የድር ዲዛይን እና UI', description: 'ተደራሽነት እና ፍጥነት ያለው ዘመናዊ ድር ዲዛይን።' },
      software: { title: 'ሶፍትዌር ልማት', description: 'በጥራት የተሠራ የድር/ሞባይል መተግበሪያ እና ፈጣን ኢተሬሽን።' },
      infrastructure: { title: 'የIT መሠረተ ልማት', description: 'ኔትወርክ፣ ሲስተም እና ኦብዘርቫቢሊቲ—ታመን መሠረት።' },
      iot: { title: 'IoT እና ብልህ ሲስተሞች', description: 'መሳሪያዎችን ያገናኙ፣ ዳታ ይሰብስቡ፣ ታመን ሪያል‑ታይም ልምድ ይገንቡ።' },
      security: { title: 'ሳይበር ደህንነት', description: 'መከላከያ፣ ማጠናከር እና ምርጥ ልምዶች በመተግበሪያ እና መሠረተ ልማት ላይ።' },
    },
    solutions: {
      eyebrow: 'ለምን ይመርጡናል',
      title: 'ዓለም አቀፍ ጥራት፣ አካባቢያዊ እንክብካቤ',
      bullets: {
        one: 'ዲዛይን‑በመጀመሪያ የሚመራ እና ጠንካራ ኢንጂነሪንግ',
        two: 'ግልጽ ግንኙነት እና ተጠናክሮ የሚታወቅ ጊዜ ሰሌዳ',
        three: 'ደህንነት እና ፍጥነት እንደ ነባሪ',
        four: 'ብዙ ቋንቋ እና RTL የሚደግፉ ሲስተሞች',
      },
    },
    engagement: {
      eyebrow: 'ትብብር',
      title: 'ተለዋዋጭ የስራ መንገዶች',
      subtitle: 'ጊዜዎን፣ በጀትዎን እና የድጋፍ ደረጃዎን የሚስበር የትብብር መልኩን ይምረጡ።',
      models: {
        delivery: {
          title: 'ቋሚ ወሰን አቅርቦት',
          description: 'ግልጽ ወሰን፣ መርሃ ግብር እና ተተኪ ጊዜ—ለድር ጣቢያዎች፣ MVP እና ማስጀመሮች ተስማሚ።',
        },
        team: {
          title: 'ተወሰነ ቡድን',
          description: 'የዲዛይን፣ የኢንጂነሪንግ እና QA ችሎታዎችን በመጨመር ቡድንዎን ያበረታቱ—የሳምንት ስፕሪንቶች እና ግልጽ ማዘመኛ።',
        },
        review: {
          title: 'የደህንነት እና የፍጥነት ግምገማ',
          description: 'ኦዲት፣ ማጠናከር እና ማመቻቸት ከተግባራዊ እቅድ ጋር—ፈጣን ማሻሻያዎችን ጨምሮ።',
        },
      },
    },
    faq: {
      eyebrow: 'ተደጋጋሚ ጥያቄዎች',
      title: 'ጥያቄዎች፣ መልሶች',
      subtitle: 'መጀመር የሚረዱ አንዳንድ የተደጋጋሚ ጉዳዮች።',
      items: {
        one: { q: 'መጀመር በምን ፍጥነት ይቻላል?', a: 'በአብዛኛው ከወሰን እና ከተደራሽነት ጋር በተያያዘ በ1–2 ሳምንት ውስጥ።' },
        two: { q: 'ከውጭ አገር ጋር ትሰሩ?', a: 'አዎ—በርቀት በመስራት እና በጊዜ ቀጠናዎች/ቋንቋዎች (RTLን ጨምሮ) በመተባበር።' },
        three: { q: 'ማስረከቡ ምን ያካትታል?', a: 'ምንጭ ኮድ፣ ሰነድ እና የመስመር ላይ መድረሻ/መሰፈሪያ መመሪያዎች። ቀጣይ ድጋፍ አማራጭ ነው።' },
        four: { q: 'NDA ወይም SLA መፈረም ትችላላችሁ?', a: 'አዎ። NDA እና የአገልግሎት ደረጃ ስምምነት (SLA) እንደፍላጎትዎ ማስማማት እንችላለን።' },
      },
    },
    stats: {
      projects: 'የተጠናቀቁ ፕሮጀክቶች',
      clients: 'የደንበኛ እርካታ',
      response: 'አማካይ የምላሽ ጊዜ',
      hours: 'የስራ ሰዓት ክልል ሽፋን',
    },
    process: {
      eyebrow: 'እንዴት እንሰራ',
      title: 'ቀላል እና ግልጽ ሂደት',
      step1: { title: 'መለያየት', desc: 'ግብ፣ ተጠቃሚ፣ ወሰን እና መለኪያዎች።' },
      step2: { title: 'ዲዛይን', desc: 'UX ፍሰት፣ UI ሲስተም እና ፕሮቶታይፕ።' },
      step3: { title: 'ግንባታ', desc: 'ዘመናዊ ቴክኖሎጂ፣ ንጹህ ኮድ እና አፈፃፀም።' },
      step4: { title: 'መጀመር', desc: 'ማቅረብ፣ ክትትል እና ቀጣይ ማሻሻያ።' },
    },
    contact: {
      eyebrow: 'አግኙን',
      title: 'ምን መገንባት እንደሚፈልጉ ያንገሩን',
      subtitle: 'አጭር መግለጫ ይላኩ፤ ተመጣጣኝ እርምጃ፣ ጊዜ ግምት እና ግልጽ እቅድ እንመልሳለን።',
      name: 'ስም',
      email: 'ኢሜይል',
      brief: 'የፕሮጀክት መግለጫ',
      namePlaceholder: 'ሙሉ ስምዎ',
      emailPlaceholder: 'name@example.com',
      briefPlaceholder: 'ምን እየገነቡ ነው? ዋና ውጤት ምንድን ነው?',
      success: 'እናመሰግናለን! መልእክቱን ለመላክ የኢሜይል መተግበሪያዎ መክፈት አለበት። ካልተከፈተ ወደ sunshinetechsolution4@gmail.com ይጻፉልን።',
      info: {
        emailTitle: 'ኢሜይል',
        phoneTitle: 'ስልክ',
        locationTitle: 'አካባቢ',
        locationValue: 'አዲስ አበባ, ኢትዮጵያ',
        timezoneTitle: 'የጊዜ ክልል',
        timezoneValue: 'አፍሪካ / አውሮፓ ለሚመች',
      },
    },
    footer: {
      rights: '© 2026 ኢትዮ‑ሳንሻይን ቴክ ሶሉሽን። መብት በሙሉ የተጠበቀ።',
      line: 'ለዓለም አቀፍ ተጠቃሚዎች—ብዙ ቋንቋ እና RTL ዝግጁ።',
    },
    language: {
      label: 'ቋንቋ',
    },
    a11y: {
      skip: 'ወደ ዋናው ይዘት ዝለል',
      toggleMenu: 'ምናሌ ክፈት/ዝጋ',
      toggleTheme: 'ገጽታ ቀይር',
    },
  },
  fr: {
    brand: { name: 'Sunshine Tech Solution', tagline: 'Partenaire international produit, cloud et sécurité' },
    nav: { home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', contact: 'Contact' },
    actions: { getQuote: 'Demander une proposition', viewWork: 'Voir nos atouts', send: 'Envoyer' },
    hero: {
      badge: 'Moderne · Fiable · Global',
      title: 'Construisez plus vite. Lancez mieux. Déployez à l’international.',
      subtitle:
        'Nous concevons, développons et sécurisons des produits digitaux pour des organisations du monde entier — UX soignée, ingénierie solide, résultats mesurables.',
      highlight: 'Clair, moderne, international',
      note: 'Web, mobile, cloud et cybersécurité — livraison de confiance.',
    },
    services: {
      eyebrow: 'Nos services',
      title: 'Des services pour les équipes modernes',
      subtitle:
        'De la stratégie à la livraison, nous combinons design, ingénierie et sécurité pour livrer un travail premium.',
      web: { title: 'Web design & UI', description: 'Interfaces modernes, accessibles et performantes.' },
      software: {
        title: 'Développement logiciel',
        description: 'Applications web/mobile full‑stack, itération rapide.',
      },
      infrastructure: {
        title: 'Infrastructure IT',
        description: 'Réseaux, systèmes et observabilité — bases stables.',
      },
      iot: {
        title: 'IoT & systèmes intelligents',
        description: 'Connecter, collecter et créer des expériences temps réel.',
      },
      security: { title: 'Cybersécurité', description: 'Durcissement et bonnes pratiques sur apps et infra.' },
    },
    solutions: {
      eyebrow: 'Pourquoi nous',
      title: 'Qualité internationale, attention locale',
      bullets: {
        one: 'Approche design‑first avec ingénierie solide',
        two: 'Communication claire et délais prévisibles',
        three: 'Sécurité et performance par défaut',
        four: 'Multi‑langue et compatibilité RTL',
      },
    },
    engagement: {
      eyebrow: 'Engagement',
      title: 'Des modes de collaboration flexibles',
      subtitle: 'Choisissez le modèle adapté à votre calendrier, budget et niveau de support.',
      models: {
        delivery: {
          title: 'Livraison à périmètre fixe',
          description: 'Périmètre clair, jalons, et calendrier prévisible — idéal pour sites web, MVP et lancements.',
        },
        team: {
          title: 'Équipe dédiée',
          description: 'Renforcez votre équipe avec design, ingénierie et QA — sprints hebdo et suivi transparent.',
        },
        review: {
          title: 'Revue sécurité & performance',
          description: 'Audit, durcissement et optimisation avec une feuille de route actionnable et des quick wins.',
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions, réponses',
      subtitle: 'Quelques sujets fréquents pour bien démarrer.',
      items: {
        one: {
          q: 'À quelle vitesse pouvez‑vous démarrer ?',
          a: 'En général sous 1 à 2 semaines selon le périmètre et la disponibilité.',
        },
        two: {
          q: 'Travaillez‑vous à l’international ?',
          a: 'Oui — livraison remote‑first, collaboration multi‑fuseaux et multi‑langues, y compris RTL.',
        },
        three: {
          q: 'Que comprend la livraison ?',
          a: 'Code source, documentation et notes de déploiement. Le support continu est optionnel.',
        },
        four: {
          q: 'Pouvez‑vous signer des NDA ou SLA ?',
          a: 'Oui. Nous pouvons travailler sous NDA et définir des niveaux de service selon vos besoins.',
        },
      },
    },
    stats: {
      projects: 'Projets livrés',
      clients: 'Satisfaction client',
      response: 'Temps de réponse',
      hours: 'Couverture horaire',
    },
    process: {
      eyebrow: 'Méthode',
      title: 'Un processus simple et transparent',
      step1: { title: 'Découvrir', desc: 'Objectifs, utilisateurs, périmètre, métriques.' },
      step2: { title: 'Designer', desc: 'Parcours UX, système UI, prototypes premium.' },
      step3: { title: 'Construire', desc: 'Stack moderne, code propre, tests, performance.' },
      step4: { title: 'Lancer', desc: 'Mise en prod, monitoring, itérations.' },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlez‑nous de votre projet',
      subtitle:
        'Envoyez un bref descriptif et nous reviendrons avec la meilleure prochaine étape — planning, estimation et plan clair.',
      name: 'Nom',
      email: 'Email',
      brief: 'Brief projet',
      namePlaceholder: 'Votre nom complet',
      emailPlaceholder: 'nom@exemple.com',
      briefPlaceholder: 'Que construisez‑vous ? Quels résultats sont prioritaires ?',
      success:
        'Merci ! Votre application e‑mail devrait s’ouvrir pour envoyer le message. Sinon, écrivez‑nous à sunshinetechsolution4@gmail.com.',
      info: {
        emailTitle: 'Email',
        phoneTitle: 'Téléphone',
        locationTitle: 'Localisation',
        locationValue: 'Addis Abeba, Éthiopie',
        timezoneTitle: 'Fuseau horaire',
        timezoneValue: 'Adapté Afrique / Europe',
      },
    },
    footer: { rights: '© 2026 Sunshine Tech Solution. Tous droits réservés.', line: 'Multilingue et RTL‑ready.' },
    language: { label: 'Langue' },
    a11y: { skip: 'Aller au contenu', toggleMenu: 'Basculer le menu', toggleTheme: 'Basculer le thème' },
  },
  es: {
    brand: { name: 'Sunshine Tech Solution', tagline: 'Socio internacional de producto, nube y seguridad' },
    nav: { home: 'Inicio', services: 'Servicios', projects: 'Proyectos', about: 'Acerca de', contact: 'Contacto' },
    actions: { getQuote: 'Pedir propuesta', viewWork: 'Ver capacidades', send: 'Enviar' },
    hero: {
      badge: 'Moderno · Confiable · Global',
      title: 'Construye más rápido. Lanza mejor. Escala globalmente.',
      subtitle:
        'Diseñamos, desarrollamos y protegemos productos digitales para organizaciones de todo el mundo: gran UX, ingeniería sólida y resultados medibles.',
      highlight: 'Ligero, moderno, internacional',
      note: 'Entrega confiable para web, móvil, nube y ciberseguridad.',
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Servicios para equipos modernos',
      subtitle: 'Combinamos diseño, ingeniería y seguridad para entregar con calidad internacional.',
      web: { title: 'Diseño web y UI', description: 'Interfaces modernas, responsivas y accesibles.' },
      software: {
        title: 'Desarrollo de software',
        description: 'Apps full‑stack con arquitectura limpia e iteración rápida.',
      },
      infrastructure: {
        title: 'Infraestructura IT',
        description: 'Redes, sistemas y observabilidad para crecer con estabilidad.',
      },
      iot: {
        title: 'IoT y sistemas inteligentes',
        description: 'Conecta dispositivos, recopila datos y entrega en tiempo real.',
      },
      security: {
        title: 'Ciberseguridad',
        description: 'Endurecimiento y buenas prácticas en apps e infraestructura.',
      },
    },
    solutions: {
      eyebrow: 'Por qué nosotros',
      title: 'Calidad internacional, trato cercano',
      bullets: {
        one: 'Entrega guiada por diseño y buena ingeniería',
        two: 'Comunicación clara y tiempos predecibles',
        three: 'Seguridad y rendimiento por defecto',
        four: 'Soporte multilenguaje y RTL',
      },
    },
    engagement: {
      eyebrow: 'Colaboración',
      title: 'Formas flexibles de trabajar',
      subtitle: 'Elige el modelo que se ajusta a tu tiempo, presupuesto y nivel de soporte.',
      models: {
        delivery: {
          title: 'Entrega de alcance fijo',
          description: 'Alcance claro, hitos y calendario predecible—ideal para sitios web, MVP y lanzamientos.',
        },
        team: {
          title: 'Equipo dedicado',
          description: 'Amplía tu equipo con diseño, ingeniería y QA—sprints semanales y actualizaciones claras.',
        },
        review: {
          title: 'Revisión de seguridad y rendimiento',
          description: 'Auditoría, hardening y optimización con una hoja de ruta accionable y mejoras rápidas.',
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas y respuestas',
      subtitle: 'Algunas dudas comunes para ayudarte a comenzar.',
      items: {
        one: {
          q: '¿Qué tan rápido pueden empezar?',
          a: 'Normalmente en 1–2 semanas, según el alcance y la disponibilidad.',
        },
        two: {
          q: '¿Trabajan internacionalmente?',
          a: 'Sí—entrega remota, colaboración por zonas horarias e idiomas, incluyendo RTL.',
        },
        three: {
          q: '¿Qué incluye la entrega?',
          a: 'Código fuente, documentación y notas de despliegue. El soporte continuo es opcional.',
        },
        four: {
          q: '¿Pueden firmar NDA o SLA?',
          a: 'Sí. Podemos trabajar con NDA y definir niveles de servicio según tus necesidades.',
        },
      },
    },
    stats: {
      projects: 'Proyectos entregados',
      clients: 'Satisfacción',
      response: 'Tiempo de respuesta',
      hours: 'Cobertura horaria',
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Un proceso simple y transparente',
      step1: { title: 'Descubrir', desc: 'Objetivos, usuarios, alcance y métricas.' },
      step2: { title: 'Diseñar', desc: 'UX, sistema UI y prototipos premium.' },
      step3: { title: 'Construir', desc: 'Stack moderno, código limpio, tests y rendimiento.' },
      step4: { title: 'Lanzar', desc: 'Entrega, monitoreo y mejora continua.' },
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntanos qué quieres construir',
      subtitle: 'Comparte un breve resumen y responderemos con el mejor siguiente paso.',
      name: 'Nombre',
      email: 'Email',
      brief: 'Resumen del proyecto',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'nombre@ejemplo.com',
      briefPlaceholder: '¿Qué estás construyendo? ¿Qué resultados importan más?',
      success:
        '¡Gracias! Se abrirá tu app de correo para enviar el mensaje. Si no, escríbenos a sunshinetechsolution4@gmail.com.',
      info: {
        emailTitle: 'Email',
        phoneTitle: 'Teléfono',
        locationTitle: 'Ubicación',
        locationValue: 'Addis Abeba, Etiopía',
        timezoneTitle: 'Zona horaria',
        timezoneValue: 'Compatible África / Europa',
      },
    },
    footer: {
      rights: '© 2026 Sunshine Tech Solution. Todos los derechos reservados.',
      line: 'Multilenguaje y RTL listo.',
    },
    language: { label: 'Idioma' },
    a11y: { skip: 'Saltar al contenido', toggleMenu: 'Alternar menú', toggleTheme: 'Cambiar tema' },
  },
  ar: {
    brand: { name: 'صن شاين تك سوليوشن', tagline: 'شريك عالمي للمنتجات والسحابة والأمن' },
    nav: { home: 'الرئيسية', services: 'الخدمات', projects: 'المشاريع', about: 'من نحن', contact: 'تواصل' },
    actions: { getQuote: 'اطلب عرضاً', viewWork: 'عرض القدرات', send: 'إرسال' },
    hero: {
      badge: 'حديث · موثوق · عالمي',
      title: 'ابنِ أسرع. أطلق أذكى. توسّع عالمياً.',
      subtitle:
        'نصمّم ونطوّر ونؤمّن المنتجات الرقمية لمنظمات حول العالم — تجربة مستخدم راقية، هندسة قوية، ونتائج قابلة للقياس.',
      highlight: 'خفيف، حديث، عالمي',
      note: 'تسليم موثوق للويب والموبايل والسحابة والأمن السيبراني.',
    },
    services: {
      eyebrow: 'ماذا نقدم',
      title: 'خدمات مصممة لفرق حديثة',
      subtitle: 'نمزج التصميم والهندسة والأمن لتقديم جودة عالمية.',
      web: { title: 'تصميم الويب وواجهة المستخدم', description: 'واجهات حديثة وسريعة ومتاحة للجميع.' },
      software: { title: 'تطوير البرمجيات', description: 'تطبيقات ويب/موبايل كاملة مع بنية نظيفة وسرعة تنفيذ.' },
      infrastructure: { title: 'بنية تحتية لتقنية المعلومات', description: 'شبكات وأنظمة ورصد — أساس ثابت للنمو.' },
      iot: { title: 'إنترنت الأشياء', description: 'ربط الأجهزة وجمع البيانات وبناء تجارب فورية.' },
      security: { title: 'الأمن السيبراني', description: 'تعزيز الأمان وأفضل الممارسات للتطبيقات والبنية التحتية.' },
    },
    solutions: {
      eyebrow: 'لماذا نحن',
      title: 'جودة دولية واهتمام محلي',
      bullets: {
        one: 'تسليم يقوده التصميم مع هندسة قوية',
        two: 'تواصل واضح وجداول زمنية متوقعة',
        three: 'الأمان والأداء بشكل افتراضي',
        four: 'دعم متعدد اللغات وتوافق RTL',
      },
    },
    engagement: {
      eyebrow: 'التعاون',
      title: 'طرق مرنة للعمل معاً',
      subtitle: 'اختر نموذج التعاون الذي يناسب الجدول الزمني والميزانية ومستوى الدعم.',
      models: {
        delivery: {
          title: 'تسليم بنطاق ثابت',
          description: 'نطاق واضح ومعالم وجدول زمني متوقع—مثالي للمواقع وMVP والإطلاقات.',
        },
        team: {
          title: 'فريق مخصص',
          description: 'وسّع فريقك بالتصميم والهندسة وQA—سبرنتات أسبوعية وتحديثات شفافة.',
        },
        review: {
          title: 'مراجعة الأمان والأداء',
          description: 'تدقيق وتقوية وتحسين مع خارطة طريق قابلة للتنفيذ ومكاسب سريعة.',
        },
      },
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة وأجوبة',
      subtitle: 'مواضيع شائعة لمساعدتك على البدء.',
      items: {
        one: { q: 'كم بسرعة يمكنكم البدء؟', a: 'عادة خلال 1–2 أسبوع حسب النطاق والتوفر.' },
        two: { q: 'هل تعملون دولياً؟', a: 'نعم—تسليم عن بُعد والتعاون عبر المناطق الزمنية واللغات، بما في ذلك RTL.' },
        three: { q: 'ماذا يشمل التسليم؟', a: 'الكود المصدري والتوثيق وملاحظات النشر. الدعم المستمر اختياري.' },
        four: {
          q: 'هل يمكنكم توقيع NDA أو SLA؟',
          a: 'نعم. يمكننا العمل بموجب NDA وتحديد مستويات الخدمة وفق احتياجاتك.',
        },
      },
    },
    stats: { projects: 'مشاريع منجزة', clients: 'رضا العملاء', response: 'زمن الاستجابة', hours: 'تغطية زمنية' },
    process: {
      eyebrow: 'المنهجية',
      title: 'عملية بسيطة وشفافة',
      step1: { title: 'اكتشاف', desc: 'الأهداف، المستخدمون، النطاق، ومقاييس النجاح.' },
      step2: { title: 'تصميم', desc: 'تجارب UX، نظام UI، ونماذج أولية راقية.' },
      step3: { title: 'بناء', desc: 'تقنيات حديثة، كود نظيف، اختبارات، وأداء.' },
      step4: { title: 'إطلاق', desc: 'إصدار ومراقبة وتحسين مستمر.' },
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'أخبرنا ماذا تريد أن تبني',
      subtitle: 'أرسل ملخصاً وسنعود بخطة وخطوة تالية واضحة.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      brief: 'ملخص المشروع',
      namePlaceholder: 'اسمك الكامل',
      emailPlaceholder: 'name@example.com',
      briefPlaceholder: 'ماذا تبني؟ ما النتائج الأكثر أهمية؟',
      success:
        'شكراً! من المفترض أن يفتح تطبيق البريد لإرسال الرسالة. إن لم يحدث، راسلنا على sunshinetechsolution4@gmail.com.',
      info: {
        emailTitle: 'البريد الإلكتروني',
        phoneTitle: 'الهاتف',
        locationTitle: 'الموقع',
        locationValue: 'أديس أبابا، إثيوبيا',
        timezoneTitle: 'المنطقة الزمنية',
        timezoneValue: 'مناسب لأفريقيا / أوروبا',
      },
    },
    footer: { rights: '© 2026 إثيو‑صن شاين تك سوليوشن. جميع الحقوق محفوظة.', line: 'متعدد اللغات وجاهز لـ RTL.' },
    language: { label: 'اللغة' },
    a11y: { skip: 'تخطي إلى المحتوى', toggleMenu: 'تبديل القائمة', toggleTheme: 'تبديل المظهر' },
  },
};

function normalizeLocale(value: string): LocaleCode | null {
  const lower = value.trim().toLowerCase();
  const code = lower.split('-')[0] as LocaleCode;
  return LOCALES.some((l) => l.code === code) ? code : null;
}

function getInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem('locale');
  if (saved) {
    const normalized = normalizeLocale(saved);
    if (normalized) return normalized;
  }

  const navigatorLang = window.navigator.languages?.[0] ?? window.navigator.language ?? 'en';
  return normalizeLocale(navigatorLang) ?? 'en';
}

function getFromMessages(messages: Messages, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (!acc || typeof acc !== 'object') return undefined;
    return (acc as Record<string, unknown>)[part];
  }, messages);
}

export type I18nContextValue = {
  locale: LocaleCode;
  dir: 'ltr' | 'rtl';
  locales: readonly LocaleMeta[];
  setLocale: (code: LocaleCode) => void;
  t: (key: string) => string;
  formatNumber: (value: number, options?: Intl.NumberFormatOptions) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(() => getInitialLocale());

  const dir = useMemo(() => LOCALES.find((l) => l.code === locale)?.dir ?? 'ltr', [locale]);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', code);
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const value = getFromMessages(MESSAGES[locale], key);
      if (typeof value === 'string') return value;
      const fallback = getFromMessages(MESSAGES.en, key);
      if (typeof fallback === 'string') return fallback;
      return key;
    },
    [locale]
  );

  const formatNumber = useCallback(
    (value: number, options?: Intl.NumberFormatOptions) => new Intl.NumberFormat(locale, options).format(value),
    [locale]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [dir, locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dir,
      locales: LOCALES,
      setLocale,
      t,
      formatNumber,
    }),
    [dir, formatNumber, locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
