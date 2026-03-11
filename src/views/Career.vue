<script setup lang="ts">
import { ref, computed } from "vue";

const showAllExperience = ref(false);
const showAllEducation = ref(false);

const INITIAL_EXP = 6;
const INITIAL_EDU = 4;

const experienceEntries = [
  {
    position: "Frontend-Entwicklerin, UI/UX-Designerin, Marketing & Design",
    company: "Redlink GmbH, Salzburg",
    period: "April 2022 – heute",
    label: "Verantwortlichkeiten",
    details: [
      "Erstellung und Konzipierung von interaktiven Software-Lösungen",
      "Umsetzung, Testing und Weiterentwicklung von Applikationen",
      "Umsetzung der Inhouse Produktentwicklung und Marketingmaßnahmen",
    ],
  },
  {
    position: "Praktikum im Bereich Web-Development, Frontend",
    company: "Elements New Media Solutions, Salzburg",
    period: "Feb. 2021 – Aug. 2021",
    label: "Verantwortlichkeiten/Fokus",
    details: [
      "Weiterentwicklungen, Support für bestehende Kunden",
      "Umsetzungen von Designs für Neukunden",
      "Verwendete Sprachen: HTML, CSS, JavaScript/jQuery, Bootstrap, PHP, JSON",
    ],
  },
  {
    position: "Empfangs- & Service-Mitarbeiter:in & Kundenbetreuung",
    company: "Rotax Maxdome, Linz",
    period: "Juli 2018 – Sept. 2018",
    details: ["Empfang & Kundenbetreuung, Unterstützung bei Events in der Karthalle."],
  },
  {
    position: "Verkauf & Service",
    company: "Bäckerei Winkler, Gallneukirchen",
    period: "Juli 2018 – Sept. 2018",
    details: ["Bäckerei Verkaufsmitarbeiter & Service im Café."],
  },
  {
    position: "Servicemitarbeiterin im Eventbereich",
    company: "MAG Personal GmbH, Linz",
    period: "April 2018 – Sept. 2018",
    details: ["Servicemitarbeiterin bei Veranstaltungen, z. B. Hochzeiten und Firmenfeiern."],
  },
  {
    position: "Grafik & Design, Internes Marketing",
    company: "INVENT Marketing und Tourismus GmbH, Linz",
    period: "Okt. 2016 – April 2017",
    label: "Verantwortlichkeiten",
    details: [
      "Corporate Design Entwicklung, Dirk Always Betreuung",
      "Klassischer Druck (Printproduktion & Verpackungsgestaltung, Messedesign)",
      "Umsetzung kundenpezifischer Projekte",
      "Bildbearbeitung & retuschieren, Web Image Aufbereitung (Facebook, Newsletter, etc.)",
      "Wartung von Homepage-Inhalte und der Downloadbereiche via FTP",
    ],
  },
  {
    position: "Grafik & Design, Internes Marketing",
    company: "Roco Modelleisenbahn Holding GmbH, Bergheim",
    period: "Mai 2015 – Juli 2016",
    label: "Verantwortlichkeiten",
    details: [
      "Corporate Design Entwicklung, Dirk Always Betreuung",
      "Klassischer Druck (Printproduktion & Verpackungsgestaltung, Messedesign)",
      "Bildbearbeitung & retuschieren, Web Image Aufbereitung (Katalog, Homepage ...)",
      "Wartung von Homepage-Inhalte und der Downloadbereiche via CMS",
      "Grafische Illustrationen, Ladebilder & Iconisierung",
      "Externe Kommunikation mit Druckereien",
    ],
  },
  {
    position: "Praktikum Grafik & Design, Interne Marketingabteilung",
    company: "Wiberg GmbH, Salzburg",
    period: "Feb. 2015 – April 2015",
    details: ["Mitarbeit an Verpackungsdesigns und Werbematerialien."],
  },
  {
    position: "Praktikum im Bereich Web-Development und -Design",
    company: "Atikon EDV & Marketing GmbH, Linz",
    period: "Jänner 2018 – März 2018",
    details: ["Erstellung von Weblayouts und Entwicklung von Webkomponenten."],
  },
  {
    position: "Urlaubsvertretung, Grafik & Design",
    company: "Maya Inspiranto Werbeagentur, Salzburg",
    period: "Juli 2014 – Sept. 2014",
    details: ["Design und Layoutarbeiten für Kundenprojekte."],
  },
  {
    position: "Berufspraktikum, Grafik & Design",
    company: "Maya Inspiranto Werbeagentur, Salzburg",
    period: "Juli 2013 – Sept. 2013",
    details: ["Design und Layoutarbeiten für Kundenprojekte."],
  },
  {
    position: "Teilzeitmitarbeiterin im Verkauf und Café",
    company: "Bäckerei und Konditorei Flückner, Salzburg Gnigl",
    period: "Aug. 2012 – März 2013",
    details: [],
  },
  {
    position: "Ferialmitarbeiterin, Eisverkauf und Service",
    company: "Café-Restaurant & Pizzeria Papageno, St. Gilgen",
    period: "Mai 2012 – Juli 2012",
    details: [],
  },
  {
    position: "Schnupperpraktika Grafik & Design",
    company: "Herkules-Artworks Linz · Maya Inspiranto Salzburg",
    period: "Jän. 2012 – März 2012",
    details: [],
  },
  {
    position: "Klavier Dinnermusik",
    company: "Gasthof zur Post, Faistenau",
    period: "2003 – 2007",
    details: [],
  },
];

const educationEntries = [
  {
    title: "Fachhochschule Hagenberg, Medientechnik und Design (BAKK)",
    subtitle: "Bachelor of Science",
    period: "Sept. 2018 – Jan. 2022",
    label: "Schwerpunkte",
    details: [
      "Webentwicklung & Design",
      "Film, Audio, 3D, Motion Graphics",
      "Online Marketing Basics",
    ],
  },
  {
    title: "Illuskills Wien",
    subtitle: "Zertifikat: Medienillustration",
    period: "Sept. 2017 – Juli 2018",
    label: "Berufsbegleitend",
    details: ["Berufsbegleitende Ausbildung im Bereich Medienillustration"],
  },
  {
    title: "bit Schulungscenter, Linz",
    subtitle: "Web Editing Basics",
    period: "Sept. 2017 – Dez. 2017",
    details: ["ECDL Web Editing (HTML5, CSS3, Responsive), ECDL Powerpoint Advance"],
  },
  {
    title: "Werbe-Design-Academie (WDA), WIFI Salzburg",
    subtitle: "Kommunikationsdesign",
    period: "Okt. 2010 – Juni 2014",
    label: "Diplom",
    details: [
      "Modellentwicklung Ausbildungs-, Akademie- & Kompetenzbeweise",
      "Kompetenzen: Print, Corporate Design, Packaging Design, Fotografie",
    ],
  },
  {
    title: "FiT – Frauen in Handwerk und Technik, BFI Salzburg",
    subtitle: "Neuorientierung",
    period: "Nov. 2011 – Feb. 2012",
    details: [],
  },
  {
    title: "Fachhochschule Salzburg Urstein, MultiMediaArt",
    subtitle: "Kein Abschluss",
    period: "Okt. 2008 – Dez. 2010",
    details: ["Spezialisierung: Audio/Audiotechnik | Kompetenzen: Multimedia, Audiotechnik, 3D, Film"],
  },
  {
    title: "Orff-Institut, Salzburg",
    subtitle: "Überbrückung",
    period: "Nov. 2007 – Juni 2008",
    details: ["Außerordentliche Hörerin elementare Musik- und Tanzpädagogin"],
  },
  {
    title: "Bundesrealstufengymnasium (Musischer Zweig), Salzburg",
    subtitle: "Matura",
    period: "Sept. 2003 – Juni 2007",
    details: [],
  },
  {
    title: "Volks- und Hauptschulausbildung, Faistenau",
    subtitle: "Grundschulausbildung",
    period: "Sept. 1995 – Juni 2003",
    details: [],
  },
];

const visibleExperience = computed(() =>
  showAllExperience.value ? experienceEntries : experienceEntries.slice(0, INITIAL_EXP)
);
const visibleEducation = computed(() =>
  showAllEducation.value ? educationEntries : educationEntries.slice(0, INITIAL_EDU)
);

const skillPanels = [
  {
    title: "Frontend Development",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "CSS", "HTML", "TailwindCSS", "Bootstrap", "Javascript", "VanillaJS",
      "TypeScript", "Twig", "Vue.js", "Vue CLI", "Webpack", "Vite", "Vitest",
      "node.js", "nuxt.js", "express.js", "Symphony", "PHP", "Playwright",
      "Typo3", "Stylelab", "Pimcore", "Pinia", "Web Components", "REST APIs",
      "EsLint & Prettier", "Git", "Docker", "Jira", "Agile/Scrum",
    ],
  },
  {
    title: "UI/UX-Design",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "User Interface Design", "User Experience Design", "Wireframing",
      "Prototyping", "Adobe XD", "Figma", "Usability Testing", "Personas",
      "User Journeys", "Design Systems", "Responsive Design", "Material UI", "bolt.new",
    ],
  },
  {
    title: "Grafik- & Branddesign",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "Adobe Creative Suite", "Visual Design Prinzipien", "Brand Guidelines",
      "Corporate Design", "Corporate Identity", "Layoutdesign",
      "Typografie & Bildsprache", "Printdesign", "Webdesign", "Logodesign",
      "Konzeptentwicklung", "Produktentwicklung",
    ],
  },
  {
    title: "Leidenschaften & Creative Skills",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "3D Sculpting", "Musikkomposition", "Musizieren", "Kreatives Schreiben",
      "Kalligrafie", "Fotografie", "Illustration", "Painting",
      "Vektorgrafik-Design", "Bildbearbeitung", "Generative Art",
      "Schmuckdesign", "DYI Crafts", "Game Design", "Storytelling & Worldbuilding",
      "Prompt Engineering",
    ],
  },
];

const softSkillCards = [
  {
    accentBg: "rgba(255,230,168,0.15)",
    icon: "✦",
    title: "Qualitätsfokus & Auge für Detail",
    desc: "Höchste Ansprüche an Präzision und Sorgfalt, um exzellente Ergebnisse sicherzustellen.",
  },
  {
    accentBg: "rgba(126,255,204,0.15)",
    icon: "💬",
    title: "Kommunikations- & Kritikfähigkeit",
    desc: "Offen, klar und konstruktiv kommunizieren, um Vertrauen zu stärken und kontinuierlich besser zu werden.",
  },
  {
    accentBg: "rgba(245,135,255,0.15)",
    icon: "💡",
    title: "Lernbereitschaft & Kreatives Denken",
    desc: "Neue Ansätze entwickeln und kontinuierlich Wissen erweitern, um innovative Lösungen zu schaffen.",
  },
];

const languages = [
  { name: "Deutsch", level: "Muttersprache", score: 5 },
  { name: "Englisch", level: "B2 – C1", score: 4 },
  { name: "Französisch", level: "Grundkenntnisse", score: 1 },
];

const toolLevels = [
  { name: "Figma", pct: 95, color: "#F587FF", colorDim: "#5a1a6b" },
  { name: "Adobe Illustrator", pct: 90, color: "#F37021", colorDim: "#6b2a0a" },
  { name: "Adobe Photoshop", pct: 85, color: "#429EC8", colorDim: "#1a3a5c" },
  { name: "VS Code", pct: 92, color: "#7EFFCC", colorDim: "#0a4a36" },
  { name: "Vue.js", pct: 88, color: "#7EFFCC", colorDim: "#0a4a36" },
  { name: "CSS / SCSS", pct: 95, color: "#429EC8", colorDim: "#1a3a5c" },
  { name: "TypeScript", pct: 78, color: "#429EC8", colorDim: "#1a3a5c" },
  { name: "Adobe InDesign", pct: 85, color: "#F37021", colorDim: "#6b2a0a" },
];
</script>

<template>
  <div class="cv-page">

    <!-- Page Header -->
    <section class="cv-page-header">
      <div class="page-inner">
        <span class="section-tag">💼 Werdegang</span>
        <h1 class="cv-page-title">Werdegang</h1>
        <p class="cv-page-subtitle">Meine Reise: Design, Code und Kreativität</p>
        <a class="cv-download-btn" href="/cv-isabella-aigner.pdf" target="_blank" rel="noopener noreferrer">
          Lebenslauf herunterladen
        </a>
      </div>
    </section>

    <!-- Bio -->
    <section class="cv-bio-section">
      <div class="page-inner">
        <h2 class="cv-bio-title">Design &amp; Development – meine Leidenschaft für digitale Erlebnisse</h2>
        <p class="cv-bio-text">
          Mit einer Leidenschaft für Design und Technologie kombiniere ich kreative und technische Expertise,
          um innovative Lösungen zu entwickeln. Als Designerin und Entwicklerin gestalte ich visuelle Erlebnisse,
          die sowohl ästhetisch ansprechend als auch funktional sind. Meine Projekte reichen von klassischem
          Printdesign und -produktion, Branding, Corporate Design bis hin zu UX/UI-Design und komplexen technischen
          Entwicklungen, bei denen ich moderne Technologien und kreative Ansätze miteinander vereine. Mit einem
          starken Fokus auf Benutzererfahrung und Usability optimiere ich digitale Produkte und bringe sie auf
          das nächste Level.
        </p>
      </div>
    </section>

    <!-- Arbeitserfahrung -->
    <section class="cv-timeline-section">
      <div class="page-inner">
        <h2 class="cv-section-heading">Arbeitserfahrung</h2>

        <div class="cv-timeline cv-timeline--work">
          <div
            v-for="(entry, i) in visibleExperience"
            :key="entry.company + i"
            class="cv-entry"
          >
            <div class="cv-entry-icon cv-entry-icon--work">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7H4C2.9 7 2 7.9 2 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" fill="currentColor" opacity="0.9"/>
                <path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
            </div>
            <div class="cv-entry-card">
              <h3 class="cv-entry-position">{{ entry.position }}</h3>
              <div class="cv-entry-meta">
                <span class="cv-entry-company">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  {{ entry.company }}
                </span>
                <span class="cv-entry-period">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                  {{ entry.period }}
                </span>
              </div>
              <template v-if="entry.details && entry.details.length">
                <p v-if="entry.label" class="cv-entry-label">{{ entry.label }}</p>
                <ul class="cv-entry-details">
                  <li v-for="d in entry.details" :key="d">{{ d }}</li>
                </ul>
              </template>
            </div>
          </div>
        </div>

        <button
          v-if="experienceEntries.length > INITIAL_EXP"
          class="cv-expand-btn"
          @click="showAllExperience = !showAllExperience"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            :style="{ transform: showAllExperience ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          {{ showAllExperience ? 'Weniger anzeigen' : `${experienceEntries.length - INITIAL_EXP} weitere anzeigen` }}
        </button>
      </div>
    </section>

    <!-- Ausbildung -->
    <section class="cv-timeline-section cv-timeline-section--edu">
      <div class="page-inner">
        <h2 class="cv-section-heading">Ausbildung</h2>

        <div class="cv-timeline cv-timeline--edu">
          <div
            v-for="(entry, i) in visibleEducation"
            :key="entry.title + i"
            class="cv-entry"
          >
            <div class="cv-entry-icon cv-entry-icon--edu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
              </svg>
            </div>
            <div class="cv-entry-card">
              <h3 class="cv-entry-position">{{ entry.title }}</h3>
              <div class="cv-entry-meta">
                <span class="cv-entry-company">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                  {{ entry.subtitle }}
                </span>
                <span class="cv-entry-period">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                  {{ entry.period }}
                </span>
              </div>
              <template v-if="entry.details && entry.details.length">
                <p v-if="entry.label" class="cv-entry-label">{{ entry.label }}</p>
                <ul class="cv-entry-details">
                  <li v-for="d in entry.details" :key="d">{{ d }}</li>
                </ul>
              </template>
            </div>
          </div>
        </div>

        <button
          v-if="educationEntries.length > INITIAL_EDU"
          class="cv-expand-btn"
          @click="showAllEducation = !showAllEducation"
        >
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            :style="{ transform: showAllEducation ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }"
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          {{ showAllEducation ? 'Weniger anzeigen' : `${educationEntries.length - INITIAL_EDU} weitere anzeigen` }}
        </button>
      </div>
    </section>

    <!-- Soft Skills -->
    <section class="cv-soft-skills-section">
      <div class="page-inner">
        <div class="cv-soft-skills-grid">
          <div
            v-for="card in softSkillCards"
            :key="card.title"
            class="cv-soft-skill-card"
          >
            <div class="cv-soft-skill-icon" :style="{ background: card.accentBg }">
              {{ card.icon }}
            </div>
            <div>
              <h3 class="cv-soft-skill-title">{{ card.title }}</h3>
              <p class="cv-soft-skill-desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skill Levels -->
    <section class="cv-skill-levels-section">
      <div class="page-inner">
        <div class="cv-skill-levels-head">
          <span class="section-tag">📊 Kenntnisstand</span>
          <h2 class="section-h2">Skill Levels</h2>
        </div>

        <div class="cv-skill-levels-grid">

          <!-- Languages -->
          <div class="cv-skill-levels-col">
            <h3 class="cv-skill-levels-col-title">Sprachkenntnisse</h3>
            <div class="cv-lang-list">
              <div v-for="lang in languages" :key="lang.name" class="cv-lang-item">
                <div class="cv-lang-meta">
                  <span class="cv-lang-name">{{ lang.name }}</span>
                  <span class="cv-lang-level">{{ lang.level }}</span>
                </div>
                <div class="cv-lang-dots">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="cv-lang-dot"
                    :class="{ 'cv-lang-dot--active': n <= lang.score }"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="cv-skill-levels-col">
            <h3 class="cv-skill-levels-col-title">Tools & Technologien</h3>
            <div class="cv-tool-list">
              <div v-for="tool in toolLevels" :key="tool.name" class="cv-tool-item">
                <div class="cv-tool-meta">
                  <span class="cv-tool-name">{{ tool.name }}</span>
                  <span class="cv-tool-pct">{{ tool.pct }}%</span>
                </div>
                <div class="cv-tool-bar-track">
                  <div
                    class="cv-tool-bar-fill"
                    :style="{ width: tool.pct + '%', '--bar-color': tool.color, '--bar-color-dim': tool.colorDim }"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Skills / Kompetenzen -->
    <section class="cv-skills-section">
      <div class="page-inner">
        <div class="cv-skills-head">
          <span class="section-tag">🤝 Mein Techstack</span>
          <h2 class="section-h2">Meine Kernkompetenzen</h2>
        </div>
        <div class="cv-skills-grid">
          <div v-for="panel in skillPanels" :key="panel.title" class="cv-skill-panel">
            <h3 class="cv-skill-panel-title">{{ panel.title }}</h3>
            <p class="cv-skill-panel-desc">{{ panel.desc }}</p>
            <div class="cv-skill-tags">
              <span v-for="tag in panel.tags" :key="tag" class="cv-skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
