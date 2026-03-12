<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// ScrollTrigger is registered globally in main.ts; import kept for type usage
void ScrollTrigger;

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

let ctx: gsap.Context;

onMounted(async () => {
  await nextTick();
  ctx = gsap.context(() => {

    // --- Page header ---
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".cv-page-title", { y: 30, opacity: 0, duration: 0.7 }, 0)
      .from(".cv-page-subtitle", { y: 20, opacity: 0, duration: 0.6 }, 0.3)
      .from(".cv-page-header .cv-download-btn", { y: 16, opacity: 0, duration: 0.5, clearProps: "all" }, 0.45);

    // Bio
    gsap.from(".cv-bio-title", {
      scrollTrigger: { trigger: ".cv-bio-section", start: "top 88%" },
      y: 24, opacity: 0, duration: 0.7, ease: "power3.out",
    });
    gsap.from(".cv-bio-text", {
      scrollTrigger: { trigger: ".cv-bio-section", start: "top 82%" },
      y: 20, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.1,
    });

    // Timeline entries (work + edu)
    gsap.utils.toArray<Element>(".cv-entry").forEach((entry, i) => {
      gsap.from(entry, {
        scrollTrigger: { trigger: entry, start: "top 90%" },
        x: -28, opacity: 0, duration: 0.65,
        ease: "power3.out",
        delay: Math.min(i * 0.04, 0.25),
      });
    });

    // Soft skills
    gsap.from(".cv-soft-skill-card", {
      scrollTrigger: { trigger: ".cv-soft-skills-section", start: "top 88%" },
      y: 32, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.14,
    });

    // Skill level section heading
    gsap.from(".cv-skill-levels-head", {
      scrollTrigger: { trigger: ".cv-skill-levels-section", start: "top 88%" },
      y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
    });

    // Language dots — reveal with stagger
    gsap.from(".cv-lang-item", {
      scrollTrigger: { trigger: ".cv-lang-list", start: "top 88%" },
      y: 16, opacity: 0, duration: 0.55, ease: "power3.out", stagger: 0.12,
    });

    // Tool bars — animate width from 0
    gsap.utils.toArray<HTMLElement>(".cv-tool-bar-fill").forEach((bar) => {
      const targetWidth = bar.style.width || "0%";
      gsap.fromTo(bar,
        { width: "0%" },
        {
          scrollTrigger: { trigger: bar, start: "top 92%" },
          width: targetWidth,
          duration: 1.1,
          ease: "power3.out",
        }
      );
    });

    // Skill panels
    gsap.from(".cv-skill-panel", {
      scrollTrigger: { trigger: ".cv-skills-section", start: "top 88%" },
      y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
    });

  });
});

onUnmounted(() => {
  ctx?.revert();
});

const skillPanels = [
  {
    icon: "</>",
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
    icon: "⊞",
    title: "UI/UX-Design",
    desc: "Erstellung moderner, nutzerfreundlicher und performanter Weboberflächen mit Fokus auf Design und Usability.",
    tags: [
      "User Interface Design", "User Experience Design", "Wireframing",
      "Prototyping", "Adobe XD", "Figma", "Usability Testing", "Personas",
      "User Journeys", "Design Systems", "Responsive Design", "Material UI", "bolt.new",
    ],
  },
  {
    icon: "✦",
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
    icon: "❋",
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
    icon: "✦",
    title: "Qualitätsfokus & Auge für Detail",
    desc: "Höchste Ansprüche an Präzision und Sorgfalt, um exzellente Ergebnisse sicherzustellen.",
  },
  {
    icon: "💬",
    title: "Kommunikations- & Kritikfähigkeit",
    desc: "Offen, klar und konstruktiv kommunizieren, um Vertrauen zu stärken und kontinuierlich besser zu werden.",
  },
  {
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
      <div class="absolute top-0 left-0 pointer-events-none">
        <img src="/assets/images/bg.png" alt="" />
      </div>
      <div class="absolute top-[-50px] right-0 pointer-events-none">
        <img src="/assets/images/header-lines.svg" alt="" />
      </div>
      <div class="page-inner relative z-10">
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
            <div class="cv-soft-skill-icon">
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
            <div class="cv-skill-panel-header">
              <div class="cv-skill-panel-icon">{{ panel.icon }}</div>
              <h3 class="cv-skill-panel-title">{{ panel.title }}</h3>
              <p class="cv-skill-panel-desc">{{ panel.desc }}</p>
            </div>
            <div class="cv-skill-tags">
              <span v-for="tag in panel.tags" :key="tag" class="cv-skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
/* ---- Page Header ---- */
.cv-page-header {
  background: #0D1A2C;
  padding: 48px 0 44px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cv-page-header .cv-page-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.625rem;
  line-height: 1.15;
}

@media (max-width: 768px) {
  .cv-page-header { padding: 36px 0 32px; }
  .cv-page-header .cv-page-title { font-size: 2.25rem; }
}

.cv-page-header .cv-page-subtitle {
  font-size: 1.125rem;
  color: rgba(216,235,255,0.7);
  margin: 0 auto 1.75rem;
  max-width: 520px;
  line-height: 1.6;
}

.cv-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 8px;
  background: #429EC8;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.cv-download-btn:hover { opacity: 0.85; }

/* ---- Bio ---- */
.cv-bio-section { padding: 44px 0 48px; }

@media (max-width: 768px) {
  .cv-bio-section { padding: 32px 0 36px; }
}

.cv-bio-section .cv-bio-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 auto 1rem;
  line-height: 1.4;
  max-width: 820px;
  text-align: center;
}

.cv-bio-section .cv-bio-text {
  font-size: 1rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.75;
  margin: 0 auto 1.75rem;
  max-width: 820px;
}

/* ---- Timeline sections ---- */
.cv-timeline-section {
  background: #0D1A2C;
  padding: 70px 0 60px;
}

@media (max-width: 768px) {
  .cv-timeline-section { padding: 50px 0 40px; }
}

.cv-timeline-section--edu { background: #0a1420; }

.cv-timeline-section--edu .cv-entry-icon {
  box-shadow: 0 0 0 3px #0a1420;
}

.cv-timeline-section .cv-section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 40px;
}

@media (max-width: 768px) {
  .cv-section-heading { font-size: 1.5rem; margin-bottom: 28px; }
}

/* ---- Timeline list ---- */
.cv-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.cv-timeline::before {
  content: '';
  position: absolute;
  left: 21px;
  top: 44px;
  bottom: 20px;
  width: 2px;
  border-radius: 2px;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(150, 166, 198, 0.3) 0%,
    rgba(150, 166, 198, 0.2) 60%,
    transparent 100%
  );
}

/* ---- Single entry ---- */
.cv-entry {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-bottom: 20px;
  position: relative;
  z-index: 1;
}

.cv-entry:last-child { padding-bottom: 0; }

.cv-entry-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  background: #1D2B40;
  border: 1.5px solid rgba(150, 166, 198, 0.25);
  box-shadow: 0 0 0 3px #0D1A2C;
}

.cv-entry-icon--work {
  background: rgba(66, 158, 200, 0.12);
  border-color: rgba(66, 158, 200, 0.35);
  color: #429EC8;
}

.cv-entry-icon--edu {
  background: rgba(0, 140, 160, 0.2);
  border-color: rgba(0, 190, 210, 0.4);
  color: rgba(0, 210, 230, 0.9);
}

.cv-entry-card {
  flex: 1;
  background: #1D2B40;
  border-radius: 10px;
  padding: 18px 22px;
  margin-top: 4px;
  border: 1px solid rgba(150, 166, 198, 0.08);
  transition: border-color 0.2s;
}

.cv-entry-card:hover { border-color: rgba(66, 158, 200, 0.2); }

.cv-entry-position {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1.3;
}

.cv-entry-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-bottom: 4px;
}

.cv-entry-company,
.cv-entry-period {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.875rem;
  color: #839CB5;
}

.cv-entry-company svg,
.cv-entry-period svg { flex-shrink: 0; }

.cv-entry-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 12px 0 6px;
}

.cv-entry-details {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cv-entry-details li {
  font-size: 0.9rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.55;
}

/* ---- Expand button ---- */
.cv-expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  background: transparent;
  border: 1px solid rgba(216,235,255,0.2);
  border-radius: 100px;
  color: rgba(216,235,255,0.55);
  font-size: 0.9375rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  padding: 10px 24px;
  transition: border-color 0.2s, color 0.2s;
}

.cv-expand-btn:hover {
  border-color: #429EC8;
  color: #D8EBFF;
}

/* ---- Soft Skills ---- */
.cv-soft-skills-section {
  background: #122033;
  padding: 60px 0;
}

@media (max-width: 768px) {
  .cv-soft-skills-section { padding: 40px 0; }
}

.cv-soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .cv-soft-skills-grid { grid-template-columns: 1fr; }
}

.cv-soft-skill-card {
  background: #1D2B40;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgba(216, 235, 255, 0.06);
  transition: border-color 0.2s;
}

.cv-soft-skill-card:hover { border-color: rgba(216, 235, 255, 0.15); }

@media (max-width: 768px) {
  .cv-soft-skill-card { padding: 20px; gap: 14px; }
}

.cv-soft-skill-icon { font-size: 2rem; line-height: 1; flex-shrink: 0; }

.cv-soft-skill-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .cv-soft-skill-title { font-size: 1.25rem; }
}

.cv-soft-skill-desc {
  font-size: 1rem;
  color: rgba(216, 235, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

/* ---- Skill Levels ---- */
.cv-skill-levels-section {
  background: #0D1A2C;
  padding: 70px 0 80px;
}

@media (max-width: 768px) {
  .cv-skill-levels-section { padding: 50px 0 60px; }
}

.cv-skill-levels-section .cv-skill-levels-head { margin-bottom: 48px; }
.cv-skill-levels-section .cv-skill-levels-head .section-h2 { margin-top: 8px; }

.cv-skill-levels-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 900px) {
  .cv-skill-levels-grid { grid-template-columns: 1fr; gap: 40px; }
}

.cv-skill-levels-col-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(150, 166, 198, 0.12);
}

.cv-lang-list { display: flex; flex-direction: column; gap: 20px; }
.cv-lang-item { display: flex; flex-direction: column; gap: 10px; }
.cv-lang-meta { display: flex; justify-content: space-between; align-items: baseline; }

.cv-lang-name { font-size: 0.9375rem; font-weight: 600; color: #D8EBFF; }
.cv-lang-level { font-size: 0.8125rem; color: #839CB5; }

.cv-lang-dots { display: flex; gap: 6px; }

.cv-lang-dot {
  width: 28px;
  height: 6px;
  border-radius: 3px;
  background: rgba(150, 166, 198, 0.15);
  transition: background 0.2s;
}

.cv-lang-dot--active {
  background: linear-gradient(90deg, #429EC8, #4A6FA5);
}

.cv-tool-list { display: flex; flex-direction: column; gap: 18px; }
.cv-tool-item { display: flex; flex-direction: column; gap: 8px; }
.cv-tool-meta { display: flex; justify-content: space-between; align-items: baseline; }

.cv-tool-name { font-size: 0.9375rem; font-weight: 500; color: #D8EBFF; }
.cv-tool-pct {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #839CB5;
  font-variant-numeric: tabular-nums;
}

.cv-tool-bar-track {
  height: 6px;
  border-radius: 3px;
  background: rgba(150, 166, 198, 0.12);
  overflow: hidden;
}

.cv-tool-bar-fill {
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, var(--bar-color-dim, #1a3a5c), var(--bar-color, #429EC8));
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ---- Skills / Kompetenzen ---- */
.cv-skills-section {
  background: #122033;
  padding: 70px 0 100px;
}

@media (max-width: 768px) {
  .cv-skills-section { padding: 50px 0 60px; }
}

.cv-skills-section .cv-skills-head { margin-bottom: 40px; }
.cv-skills-section .cv-skills-head .section-h2 { margin-top: 8px; }

.cv-skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .cv-skills-grid { grid-template-columns: 1fr; }
}

.cv-skill-panel {
  background: rgb(37, 51, 73);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 768px) {
  .cv-skill-panel { padding: 20px; gap: 18px; }
}

.cv-skill-panel-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.cv-skill-panel-icon { font-size: 2rem; line-height: 1; color: rgba(216, 235, 255, 0.85); }

.cv-skill-panel-title {
  font-size: 1.875rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .cv-skill-panel-title { font-size: 1.375rem; }
}

.cv-skill-panel-desc {
  font-size: 1rem;
  color: rgba(216, 235, 255, 0.7);
  line-height: 1.5;
  margin: 0;
}

.cv-skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

.cv-skill-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  border-radius: 100px;
  background: rgba(150,150,194,0.12);
  border: 1px solid rgba(150,150,194,0.25);
  color: #9696C6;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
