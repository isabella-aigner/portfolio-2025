type TmFunc = (key: string) => unknown;

export function getFeaturedProjects(tm: TmFunc) {
  const items = tm('home.featured') as Array<{ title: string; desc?: string }>;
  return [
    { size: 'large' as const, image: '/assets/projects/more/MOREBanner.jpg', alt: 'MORE', ...items[0] },
    { size: 'small' as const, image: '/assets/images/redlink-llm.jpg', alt: 'Whitepaper LLM', ...items[1] },
    { size: 'small' as const, image: '/assets/projects/plantbase/plantbase_mockup.jpg', alt: 'PlantBase', ...items[2] },
  ];
}

export function getCvRows(tm: TmFunc) {
  const rows = tm('home.cvRows') as Array<{
    testimonialText?: string;
    entryTitle?: string;
    entryDate?: string;
    entryLabel?: string;
    entryItems?: string[];
  }>;
  return [
    {
      testimonial: {
        compact: true,
        company: 'redlink GmbH',
        logo: '/assets/logos/logo-1.svg',
        logoAlt: 'redlink',
      },
      entry: {
        logo: '/assets/logos/logo-1.svg',
        logoAlt: 'redlink',
        title: rows[0]?.entryTitle,
        date: rows[0]?.entryDate,
        label: rows[0]?.entryLabel,
        items: rows[0]?.entryItems,
      },
    },
    {
      testimonial: {
        text: rows[1]?.testimonialText,
        companyText: 'valantic',
      },
      entry: {
        dotText: 'FH',
        dotFh: true,
        title: rows[1]?.entryTitle,
        date: rows[1]?.entryDate,
        label: rows[1]?.entryLabel,
        items: rows[1]?.entryItems,
      },
    },
    {
      testimonial: {
        text: rows[2]?.testimonialText,
        logos: [
          { src: '/assets/logos/logo-3.svg', alt: 'INVENT' },
          { src: '/assets/logos/logo-4.svg', alt: 'urlaubsbox' },
        ],
      },
      entry: {
        logos: [
          { src: '/assets/logos/logo-5.svg', alt: 'Roco' },
          { src: '/assets/logos/logo-3.svg', alt: 'INVENT', sm: true },
        ],
        title: rows[2]?.entryTitle,
        date: rows[2]?.entryDate,
        label: rows[2]?.entryLabel,
        items: rows[2]?.entryItems,
      },
    },
    {
      testimonial: {
        text: rows[3]?.testimonialText,
        logos: [
          { src: '/assets/logos/logo-5.svg', alt: 'Roco' },
          { src: '/assets/logos/logo-6.svg', alt: 'Fleischmann' },
        ],
      },
    },
  ];
}

export const logos = [
  "/assets/logos/logo-1.svg",
  "/assets/logos/logo-2.svg",
  "/assets/logos/logo-3.svg",
  "/assets/logos/logo-4.svg",
  "/assets/logos/logo-5.svg",
  "/assets/logos/logo-6.svg",
  "/assets/logos/logo-7.svg",
];

// Legacy static exports
export const featuredProjects = [
  {
    size: 'large' as const,
    image: '/assets/projects/more/MOREBanner.jpg',
    alt: 'MORE',
    title: 'Multimodale Gesundheitsforschung leicht gemacht mit MORE.',
    desc: 'Eine Web- und Mobile-App zur Erfassung, Verwaltung und Analyse multimodaler Daten für interdisziplinäre Studien.',
  },
  {
    size: 'small' as const,
    image: '/assets/images/redlink-llm.jpg',
    alt: 'Whitepaper LLM',
    title: 'Whitepaper zu LLM & smarter Suche.',
  },
  {
    size: 'small' as const,
    image: '/assets/projects/plantbase/plantbase_mockup.jpg',
    alt: 'PlantBase',
    title: 'PlantBase – smarte Pflanzenpflege.',
  },
];

export const cvRows = [
  {
    testimonial: {
      compact: true,
      company: 'redlink GmbH',
      logo: '/assets/logos/logo-1.svg',
      logoAlt: 'redlink',
    },
    entry: {
      logo: '/assets/logos/logo-1.svg',
      logoAlt: 'redlink',
      title: 'Frontend Developer, UI/UX & Grafik Design',
      date: 'April 2022 – Heute · redlink GmbH',
      label: 'Verantwortlichkeiten',
      items: [
        'Erstellung und Konzipierung von interaktiven Software-Lösungen',
        'Umsetzung, Testing und Weiterentwicklung von Applikationen',
        'Konzeption und Umsetzung von div. Marketing- und Salesspezifischen Unterlagen und Merch',
        'Unterstützung bei Inhouse Produktentwicklungen und Marketingmaßnahmen',
      ],
    },
  },
  {
    testimonial: {
      text: '„Isabella kombiniert fundierte Frontend-Expertise mit ausgeprägtem Engagement und professionellem Teamgeist. Ihre gewissenhafte Arbeit und Motivation machen sie zur idealen Verstärkung für jedes Projektteam."',
      companyText: 'valantic',
    },
    entry: {
      dotText: 'FH',
      dotFh: true,
      title: 'Ausbildung: MTD (Hagenberg)',
      date: 'Okt. 2018 – Jan. 2022 · FH Oberösterreich',
      label: 'Schwerpunkte',
      items: [
        'Nachgezogene Ausbildung, um die Technologiekompetenz aufzunehmen und zu schärfen.',
        'Schwerpunkte: Web- & Frontend-Entwicklung',
        'Weiters ausgebaut: Leidenschaft für 3D, Filmschnitt und Audiotechnik',
      ],
    },
  },
  {
    testimonial: {
      text: '„Mit kreativer Expertise, Zuverlässigkeit und ruhiger Ausstrahlung war Isabella eine wertvolle Unterstützung. Auch unter Zeitdruck lieferte sie präzise Ergebnisse und überzeugte durch ihre hilfsbereitere Art."',
      logos: [
        { src: '/assets/logos/logo-3.svg', alt: 'INVENT' },
        { src: '/assets/logos/logo-4.svg', alt: 'urlaubsbox' },
      ],
    },
    entry: {
      logos: [
        { src: '/assets/logos/logo-5.svg', alt: 'Roco' },
        { src: '/assets/logos/logo-3.svg', alt: 'INVENT', sm: true },
      ],
      title: 'Grafikdesign & Marketingmitarbeiterin',
      date: 'Feb. 2015 – April 2017',
      label: 'Verantwortlichkeiten',
      items: [
        'Modernisierung und Entwicklung eines neuen Corporate Designs und Umsetzung der Geschäftsdrucksorten',
        'Konzeption, Gestaltung, Produktion und Qualitätskontrolle von Druckwerken',
        'Erstellung von kundenspezifischen Produkten für Außendienst und Sales',
        'Bildretuschen, Illustrationen, Mock-Ups',
        'Konzeption und Gestaltung von Onlineinhalten wie z.B. Banner, Slider, Newsletter etc.',
      ],
    },
  },
  {
    testimonial: {
      text: '„Isabella erledigt Aufgaben effizient, verantwortungsvoll und auf höchstem Qualitätsniveau. Ihre vielseitige und gewissenhafte Arbeitsweise sowie ihre freundliche, offene Art machen sie zu einer wertvollen Teamkollegin."',
      logos: [
        { src: '/assets/logos/logo-5.svg', alt: 'Roco' },
        { src: '/assets/logos/logo-6.svg', alt: 'Fleischmann' },
      ],
    },
  },
];
