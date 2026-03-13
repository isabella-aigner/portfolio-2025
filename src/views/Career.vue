<script setup lang="ts">
import { computed, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// ScrollTrigger is registered globally in main.ts; import kept for type usage
void ScrollTrigger;
import SubpageHeader from "../components/SubpageHeader.vue";
import CvBio from "../components/CvBio.vue";
import CvTimelineSection from "../components/CvTimelineSection.vue";
import CvLangItem from "../components/CvLangItem.vue";
import SoftSkillCard from "../components/SoftSkillCard.vue";
import SkillPanel from "../components/SkillPanel.vue";
import ToolSkillBar from "../components/ToolSkillBar.vue";


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

const experienceMapped = computed(() => experienceEntries.map(e => ({
  heading: e.position, sub: e.company, period: e.period, label: e.label, details: e.details,
})));

const educationMapped = computed(() => educationEntries.map(e => ({
  heading: e.title, sub: e.subtitle, period: e.period, label: e.label, details: e.details,
})));

let ctx: gsap.Context;

onMounted(async () => {
  await nextTick();
  ctx = gsap.context(() => {

    // --- Page header ---
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".subpage-title", { y: 30, opacity: 0, duration: 0.7 }, 0)
      .from(".subpage-subtitle", { y: 20, opacity: 0, duration: 0.6 }, 0.3)
      .from(".subpage-cta", { y: 16, opacity: 0, duration: 0.5, clearProps: "all" }, 0.45);

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
    gsap.utils.toArray<Element>(".cv-career-entry").forEach((entry, i) => {
      gsap.from(entry, {
        scrollTrigger: { trigger: entry, start: "top 90%" },
        x: -28, opacity: 0, duration: 0.65,
        ease: "power3.out",
        delay: Math.min(i * 0.04, 0.25),
      });
    });

    // Soft skills
    gsap.from(".soft-skill-card", {
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
    gsap.from(".skill-panel", {
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
    <SubpageHeader
      title="Werdegang"
      subtitle="Meine Reise: Design, Code und Kreativität"
      cta-href="/cv-isabella-aigner.pdf"
      cta-label="Lebenslauf herunterladen"
      :cta-external="true"
    />


    <!-- Bio -->
    <CvBio
      title="Design & Development – meine Leidenschaft für digitale Erlebnisse"
      text="Mit einer Leidenschaft für Design und Technologie kombiniere ich kreative und technische Expertise, um innovative Lösungen zu entwickeln. Als Designerin und Entwicklerin gestalte ich visuelle Erlebnisse, die sowohl ästhetisch ansprechend als auch funktional sind. Meine Projekte reichen von klassischem Printdesign und -produktion, Branding, Corporate Design bis hin zu UX/UI-Design und komplexen technischen Entwicklungen, bei denen ich moderne Technologien und kreative Ansätze miteinander vereine. Mit einem starken Fokus auf Benutzererfahrung und Usability optimiere ich digitale Produkte und bringe sie auf das nächste Level."
    />

    <!-- Arbeitserfahrung -->
    <CvTimelineSection
      heading="Arbeitserfahrung"
      :entries="experienceMapped"
      variant="work"
      :initial-count="6"
    />

    <!-- Ausbildung -->
    <CvTimelineSection
      heading="Ausbildung"
      :entries="educationMapped"
      variant="edu"
      :initial-count="4"
    />

    <!-- Soft Skills -->
    <section class="cv-soft-skills-section">
      <div class="page-inner">
        <div class="cv-soft-skills-grid">
          <SoftSkillCard
            v-for="card in softSkillCards"
            :key="card.title"
            :icon="card.icon"
            :title="card.title"
            :desc="card.desc"
          />
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
              <CvLangItem
                v-for="lang in languages"
                :key="lang.name"
                :name="lang.name"
                :level="lang.level"
                :score="lang.score"
              />
            </div>
          </div>

          <!-- Tools -->
          <div class="cv-skill-levels-col">
            <h3 class="cv-skill-levels-col-title">Tools & Technologien</h3>
              <div class="cv-tool-list">
                <ToolSkillBar
                  v-for="tool in toolLevels"
                  :key="tool.name"
                  :name="tool.name"
                  :pct="tool.pct"
                  :color="tool.color"
                  :color-dim="tool.colorDim"
                />
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
          <SkillPanel
            v-for="panel in skillPanels"
            :key="panel.title"
            :icon="panel.icon"
            :title="panel.title"
            :desc="panel.desc"
            :tags="panel.tags"
          />
        </div>
      </div>
    </section>

  </div>
</template>

<style>
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

</style>
