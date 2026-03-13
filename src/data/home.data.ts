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

export const logos = [
  "/assets/logos/logo-1.svg",
  "/assets/logos/logo-2.svg",
  "/assets/logos/logo-3.svg",
  "/assets/logos/logo-4.svg",
  "/assets/logos/logo-5.svg",
  "/assets/logos/logo-6.svg",
  "/assets/logos/logo-7.svg",
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
        'Konzeption, Gestaltung, Produktion und Qualitätskontrolle von Druckwerken wie Firmenbroschüren, Plakate, Inserate, Gutscheine, Einleger, Flyer, etc.',
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
