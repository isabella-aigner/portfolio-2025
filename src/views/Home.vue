<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import HeroSection from "../components/HeroSection.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// ScrollTrigger is registered globally in main.ts; import kept for type usage
void ScrollTrigger;

const router = useRouter();

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

const logos = [
  "/assets/logos/logo-1.svg",
  "/assets/logos/logo-2.svg",
  "/assets/logos/logo-3.svg",
  "/assets/logos/logo-4.svg",
  "/assets/logos/logo-5.svg",
  "/assets/logos/logo-6.svg",
  "/assets/logos/logo-7.svg",
];

let ctx: gsap.Context;

onMounted(async () => {
  await nextTick();
  ctx = gsap.context(() => {

    // --- Hero entrance ---
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from(".hero-img", { x: -60, opacity: 0, duration: 1.1 }, 0)
      .from(".hero-text h1 .block", {
        y: 28, opacity: 0, duration: 0.8, stagger: 0.14,
      }, 0.2)
      .from(".hero-subtitle", { y: 16, opacity: 0, duration: 0.7 }, 0.75)
      .from(".hero-cta-btn", { y: 14, opacity: 0, duration: 0.6 }, 0.95)
      .from(".hero-btn", { x: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, 0.8);

    // --- Shared scroll reveal helper ---
    const reveal = (targets: string, vars?: gsap.TweenVars, triggerEl?: string) => {
      gsap.from(targets, {
        scrollTrigger: {
          trigger: triggerEl ?? targets,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 36,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        ...vars,
      });
    };

    // --- Stats ---
    reveal(".stats-section .section-tag", { y: 16, duration: 0.5 }, ".stats-section");
    reveal(".stat-card", { stagger: 0.12 }, ".stats-row");

    // --- Projects ---
    reveal(".projects-header .section-tag", { y: 16, duration: 0.5 }, ".projects-section");
    reveal(".proj-large", { x: -30, y: 0, duration: 0.9 }, ".projects-grid");
    reveal(".proj-small", { y: 30, duration: 0.8, stagger: 0.14 }, ".proj-right-col");

    // --- Logos marquee strip ---
    gsap.from(".logos-section", {
      scrollTrigger: { trigger: ".logos-section", start: "top 90%" },
      opacity: 0, duration: 0.8, ease: "power2.out",
    });

    // --- Soft skills ---
    reveal(".soft-skill-card", { stagger: 0.15 }, ".soft-skills-section");

    // --- CV timeline ---
    reveal(".cv-head .section-tag", { y: 16, duration: 0.5 }, ".cv-section");
    reveal(".cv-head .section-h2", { y: 20, duration: 0.6 }, ".cv-section");
    gsap.utils.toArray<Element>(".cv-timeline-row").forEach((row, i) => {
      gsap.from(row, {
        scrollTrigger: { trigger: row, start: "top 88%" },
        x: -24, opacity: 0, duration: 0.7,
        ease: "power3.out",
        delay: i * 0.05,
      });
    });

    // --- Core skill tiles ---
    reveal(".core-skill-tile", { y: 20, stagger: 0.1, duration: 0.6 }, ".core-skills-tiles");

    // --- Skill panels ---
    reveal(".skill-panel", { y: 30, stagger: 0.12, duration: 0.7 }, ".skills-grid");

    // --- Contact ---
    reveal(".contact-head .section-tag", { y: 16, duration: 0.5 }, ".contact-section");
    reveal(".contact-head .section-h2", { y: 20, duration: 0.6 }, ".contact-head");
    reveal(".contact-form-wrap", { x: -24, y: 0, duration: 0.8 }, ".contact-cols");
    reveal(".contact-img-wrap", { x: 24, y: 0, duration: 0.8 }, ".contact-cols");
  });
});

onUnmounted(() => {
  ctx?.revert();
});

const handleContactSubmit = () => {
  const el = document.querySelector("#contact-form") as HTMLFormElement;
  const data = new FormData(el);
  const subject = encodeURIComponent("Kontaktanfrage Portfolio");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:isabella.aigner@gmail.com?subject=${subject}&body=${body}`;
};
</script>

<template>
  <div id="home" class="home">

    <!-- Hero -->
    <HeroSection title="Isabella Aigner" :dynamic-text="[]" />

    <!-- Stats -->
    <section class="stats-section">
      <div class="page-inner">
        <span class="section-tag">💼 Berufserfahrung</span>
        <div class="stats-row">
          <div class="stat-card">
            <span class="stat-num">7+</span>
            <span class="stat-lbl">Grafik Design</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">3+</span>
            <span class="stat-lbl">Frontend-Dev</span>
          </div>
          <div class="stat-card">
            <span class="stat-num">3+</span>
            <span class="stat-lbl">UI/UX-Design</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects-section">
      <div class="page-inner">
        <div class="projects-header">
          <span class="section-tag">💼 Projekte</span>
          <button class="btn-outline btn-outline-sm" @click="router.push('/projects')">
            Alle Projekte einsehen <span class="arrow">→</span>
          </button>
        </div>

        <div class="projects-grid">
          <div class="proj-card proj-large" @click="router.push('/projects')">
            <div class="proj-img-wrap">
              <img src="/assets/projects/more/MOREBanner.jpg" alt="MORE" />
            </div>
            <div class="proj-body">
              <h3 class="proj-title">Multimodale Gesundheitsforschung leicht gemacht mit MORE.</h3>
              <p class="proj-desc">Eine Web- und Mobile-App zur Erfassung, Verwaltung und Analyse multimodaler Daten für interdisziplinäre Studien.</p>
            </div>
          </div>

          <div class="proj-right-col">
            <div class="proj-card proj-small" @click="router.push('/projects')">
              <div class="proj-img-wrap">
                <img src="/assets/images/redlink-llm.jpg" alt="Whitepaper LLM" />
              </div>
              <div class="proj-body">
                <h3 class="proj-title">Whitepaper zu LLM &amp; smarter Suche.</h3>
              </div>
            </div>
            <div class="proj-card proj-small" @click="router.push('/projects')">
              <div class="proj-img-wrap">
                <img src="/assets/projects/plantbase/plantbase_mockup.jpg" alt="PlantBase" />
              </div>
              <div class="proj-body">
                <h3 class="proj-title">PlantBase – smarte Pflanzenpflege.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Marquee -->
    <section class="logos-section">
      <div class="logos-fade logos-fade-left"></div>
      <div class="logos-track">
        <div class="logos-strip">
          <img v-for="src in logos" :key="'a-' + src" :src="src" alt="company logo" class="logo-item" />
          <img v-for="src in logos" :key="'b-' + src" :src="src" alt="company logo" class="logo-item" />
          <img v-for="src in logos" :key="'c-' + src" :src="src" alt="company logo" class="logo-item" />
        </div>
      </div>
      <div class="logos-fade logos-fade-right"></div>
    </section>

    <!-- Soft Skills Cards -->
    <section class="soft-skills-section">
      <div class="page-inner">
        <div class="soft-skills-grid">
          <div v-for="card in softSkillCards" :key="card.title" class="soft-skill-card">
            <div class="soft-skill-icon">{{ card.icon }}</div>
            <div class="soft-skill-text">
              <h3 class="soft-skill-title">{{ card.title }}</h3>
              <p class="soft-skill-desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CV / Lebenslauf Preview -->
    <section class="cv-section">
      <div class="page-inner">
        <div class="cv-head">
          <span class="section-tag">💼 Lebenslauf</span>
          <h2 class="section-h2">Professionelle Erfahrung</h2>
        </div>

        <div class="cv-timeline-rows">
          <!-- Row 1: redlink — compact testimonial -->
          <div class="cv-timeline-row">
            <div class="cv-row-aside">
              <div class="testimonial-card testimonial-card--compact">
                <div class="testimonial-stars">★★★★★</div>
                <span class="testimonial-company">redlink GmbH</span>
                <img src="/assets/logos/logo-1.svg" alt="redlink" class="testimonial-logo" />
              </div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-dot">
                <img src="/assets/logos/logo-1.svg" alt="redlink" class="cv-dot-logo" />
              </div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Frontend Developer, UI/UX &amp; Grafik Design</h3>
                <div class="cv-entry-date">📅 April 2022 – Heute · redlink GmbH</div>
                <p class="cv-entry-label">Verantwortlichkeiten</p>
                <ul class="cv-entry-list">
                  <li>Erstellung und Konzipierung von interaktiven Software-Lösungen</li>
                  <li>Umsetzung, Testing und Weiterentwicklung von Applikationen</li>
                  <li>Konzeption und Umsetzung von div. Marketing- und Salesspezifischen Unterlagen und Merch</li>
                  <li>Unterstützung bei Inhouse Produktentwicklungen und Marketingmaßnahmen</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 2: valantic testimonial + MTD entry -->
          <div class="cv-timeline-row">
            <div class="cv-row-aside">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-text">„Isabella kombiniert fundierte Frontend-Expertise mit ausgeprägtem Engagement und professionellem Teamgeist. Ihre gewissenhafte Arbeit und Motivation machen sie zur idealen Verstärkung für jedes Projektteam."</p>
                <span class="testimonial-company-text">valantic</span>
              </div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-dot cv-entry-dot--fh">
                <span class="cv-dot-text">FH</span>
              </div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Ausbildung: MTD (Hagenberg)</h3>
                <div class="cv-entry-date">📅 Okt. 2018 – Jan. 2022 · FH Oberösterreich</div>
                <p class="cv-entry-label">Schwerpunkte</p>
                <ul class="cv-entry-list">
                  <li>Nachgezogene Ausbildung, um die Technologiekompetenz aufzunehmen und zu schärfen.</li>
                  <li>Schwerpunkte: Web- &amp; Frontend-Entwicklung</li>
                  <li>Weiters ausgebaut: Leidenschaft für 3D, Filmschnitt und Audiotechnik</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 3: INVENT/urlaubsbox testimonial + Grafik entry (Roco + INVENT) -->
          <div class="cv-timeline-row">
            <div class="cv-row-aside">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-text">„Mit kreativer Expertise, Zuverlässigkeit und ruhiger Ausstrahlung war Isabella eine wertvolle Unterstützung. Auch unter Zeitdruck lieferte sie präzise Ergebnisse und überzeugte durch ihre hilfsbereitere Art."</p>
                <div class="testimonial-logos">
                  <img src="/assets/logos/logo-3.svg" alt="INVENT" class="testimonial-logo" />
                  <img src="/assets/logos/logo-4.svg" alt="urlaubsbox" class="testimonial-logo" />
                </div>
              </div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-dot-stack">
                <div class="cv-entry-dot">
                  <img src="/assets/logos/logo-5.svg" alt="Roco" class="cv-dot-logo" />
                </div>
                <div class="cv-entry-dot cv-entry-dot--sm">
                  <img src="/assets/logos/logo-3.svg" alt="INVENT" class="cv-dot-logo" />
                </div>
              </div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Grafikdesign &amp; Marketingmitarbeiterin</h3>
                <div class="cv-entry-date">📅 Feb. 2015 – April 2017</div>
                <p class="cv-entry-label">Verantwortlichkeiten</p>
                <ul class="cv-entry-list">
                  <li>Modernisierung und Entwicklung eines neuen Corporate Designs und Umsetzung der Geschäftsdrucksorten</li>
                  <li>Konzeption, Gestaltung, Produktion und Qualitätskontrolle von Druckwerken wie Firmenbroschüren, Plakate, Inserate, Gutscheine, Einleger, Flyer, etc.</li>
                  <li>Erstellung von kundenspezifischen Produkten für Außendienst und Sales</li>
                  <li>Bildretuschen, Illustrationen, Mock-Ups</li>
                  <li>Konzeption und Gestaltung von Onlineinhalten wie z.B. Banner, Slider, Newsletter etc.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 4: Roco/Fleischmann testimonial (standalone) -->
          <div class="cv-timeline-row">
            <div class="cv-row-aside">
              <div class="testimonial-card">
                <div class="testimonial-stars">★★★★★</div>
                <p class="testimonial-text">„Isabella erledigt Aufgaben effizient, verantwortungsvoll und auf höchstem Qualitätsniveau. Ihre vielseitige und gewissenhafte Arbeitsweise sowie ihre freundliche, offene Art machen sie zu einer wertvollen Teamkollegin."</p>
                <div class="testimonial-logos">
                  <img src="/assets/logos/logo-5.svg" alt="Roco" class="testimonial-logo" />
                  <img src="/assets/logos/logo-6.svg" alt="Fleischmann" class="testimonial-logo" />
                </div>
              </div>
            </div>
            <div class="cv-entry cv-entry--empty"></div>
          </div>
        </div>

        <button class="btn-outline" @click="router.push('/career')">
          Lebenslauf einsehen <span class="arrow">→</span>
        </button>
      </div>
    </section>

    <!-- Skills / Competencies -->
    <section class="skills-section">
      <div class="page-inner">
        <div class="skills-head">
          <span class="section-tag">🤝 Mein Techstack</span>
          <h2 class="section-h2">Meine Kernkompetenzen</h2>
        </div>
        <!-- Core skill tiles -->
        <div class="core-skills-tiles">
          <div class="core-skill-tile">
            <img src="/assets/images/skill-vue.png" alt="Vue.js" />
          </div>
          <div class="core-skill-tile">
            <img src="/assets/images/skill-vite.png" alt="Vite" />
          </div>
          <div class="core-skill-tile">
            <img src="/assets/images/skill-frontend.png" alt="Frontend Dev" />
          </div>
          <div class="core-skill-tile">
            <img src="/assets/images/skill-figma.png" alt="Figma" />
          </div>
          <div class="core-skill-tile">
            <img src="/assets/images/skill-adobe.png" alt="Adobe CC" />
          </div>
        </div>
        <!-- Competencies overview -->
        <h3 class="skills-sub-heading">Kompetenzen im Überblick</h3>
        <div class="skills-grid">
          <div v-for="panel in skillPanels" :key="panel.title" class="skill-panel">
            <div class="skill-panel-header">
              <div class="skill-panel-icon">{{ panel.icon }}</div>
              <h3 class="skill-panel-title">{{ panel.title }}</h3>
              <p class="skill-panel-desc">{{ panel.desc }}</p>
            </div>
            <div class="skill-tags">
              <span v-for="tag in panel.tags" :key="tag" class="skill-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contact" class="contact-section">
      <div class="page-inner">
        <div class="contact-head">
          <span class="section-tag">💬 Hast du Fragen oder Ideen? Lass uns reden! 🚀</span>
          <h2 class="section-h2">Jetzt kontaktieren!</h2>
        </div>
        <div class="contact-cols">
          <div class="contact-form-wrap">
            <form id="contact-form" @submit.prevent="handleContactSubmit">
              <div class="form-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Vorname Nachname" required />
              </div>
              <div class="form-group">
                <label>E-Mail</label>
                <input name="email" type="email" placeholder="E-Mail Adresse" required />
              </div>
              <div class="form-group">
                <label>Nachricht</label>
                <textarea name="message" placeholder="Was möchtest du mir sagen?" required></textarea>
              </div>
              <button type="submit" class="contact-btn">Nachricht senden →</button>
            </form>
          </div>
          <div class="contact-img-wrap">
            <img src="/assets/images/contact-form-bg.jpg" alt="Isabella Aigner" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
/* ---- Stats ---- */
.stats-section {
  background: #0D1A2C;
  padding: 110px 0 0;
}

.stats-section .stats-row {
  display: flex;
  gap: 20px;
  margin-top: 21px;
}

@media (max-width: 768px) {
  .stats-section { padding-top: 60px; }
  .stats-section .stats-row { flex-direction: column; }
}

.stat-card {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0D1A2C;
  border: 1px solid rgba(216,235,255,0.1);
  border-radius: 8px;
  padding: 24px 30px;
}

.stat-card .stat-num {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  white-space: nowrap;
}

.stat-card .stat-lbl {
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
}

@media (max-width: 768px) {
  .stat-card .stat-num { font-size: 2rem; }
  .stat-card .stat-lbl { font-size: 1.25rem; }
}

/* ---- Featured Projects ---- */
.projects-section {
  background: #0D1A2C;
  padding: 110px 0 0;
}

.projects-section .projects-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .projects-section { padding-top: 60px; }
}

.projects-grid {
  display: grid;
  grid-template-columns: 59.4fr 37.3fr;
  gap: 41px;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: 1fr; }
}

.proj-right-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* Home featured proj-card (scoped to home section) */
.home .proj-card {
  background: #122033;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.home .proj-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.home .proj-card .proj-img-wrap {
  overflow: hidden;
}

.home .proj-card .proj-img-wrap img {
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.home .proj-card:hover .proj-img-wrap img {
  transform: scale(1.03);
}

.home .proj-card.proj-large .proj-img-wrap img { height: 388px; }
.home .proj-card.proj-small .proj-img-wrap img { height: 204px; }

@media (max-width: 768px) {
  .home .proj-card.proj-large .proj-img-wrap img { height: 220px; }
  .home .proj-card.proj-small .proj-img-wrap img { height: 160px; }
}

.home .proj-card .proj-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.home .proj-card .proj-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.home .proj-card.proj-small .proj-title { font-size: 1.25rem; }

.home .proj-card .proj-desc {
  font-size: 1rem;
  color: #D8EBFF;
  margin: 0;
  line-height: 1.6;
}

/* ---- Logo Marquee ---- */
.logos-section {
  position: relative;
  overflow: hidden;
  background: #0D1A2C;
  padding: 60px 0;
  margin-top: 110px;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .logos-section { margin-top: 60px; padding: 36px 0; }
}

.logos-track {
  display: flex;
  width: 100%;
  overflow: hidden;
  align-items: center;
}

.logos-strip {
  display: flex;
  align-items: center;
  gap: 60px;
  white-space: nowrap;
  animation: logoScroll 40s linear infinite;
  will-change: transform;
  flex-shrink: 0;
}

@keyframes logoScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-33.333%); }
}

.logo-item {
  height: 30px;
  width: auto;
  flex-shrink: 0;
  object-fit: contain;
  opacity: 0.75;
  filter: brightness(0) invert(1);
  transition: opacity 0.2s;
}

.logo-item:hover { opacity: 1; }

.logos-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 180px;
  z-index: 2;
  pointer-events: none;
}

@media (max-width: 768px) {
  .logos-fade { width: 60px; }
}

.logos-fade-left {
  left: 0;
  background: linear-gradient(to right, #0D1A2C 40%, transparent);
}

.logos-fade-right {
  right: 0;
  background: linear-gradient(to left, #0D1A2C 40%, transparent);
}

/* ---- Soft Skills Cards ---- */
.soft-skills-section {
  background: #0D1A2C;
  padding: 110px 0 0;
}

@media (max-width: 768px) {
  .soft-skills-section { padding-top: 60px; }
}

.soft-skills-section .soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

@media (max-width: 900px) {
  .soft-skills-section .soft-skills-grid { grid-template-columns: 1fr; }
}

@media (min-width: 601px) and (max-width: 900px) {
  .soft-skills-section .soft-skills-grid { grid-template-columns: repeat(2, 1fr); }
}

.soft-skill-card {
  background: #1D2B40;
  border: 1px solid rgba(216,235,255,0.06);
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (max-width: 768px) {
  .soft-skill-card { padding: 20px; gap: 14px; }
}

.soft-skill-card .soft-skill-icon {
  font-size: 2rem;
  line-height: 1;
  flex-shrink: 0;
}

.soft-skill-card .soft-skill-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.soft-skill-card .soft-skill-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

@media (max-width: 768px) {
  .soft-skill-card .soft-skill-title { font-size: 1.25rem; }
}

.soft-skill-card .soft-skill-desc {
  font-size: 1rem;
  color: rgba(216,235,255,0.7);
  margin: 0;
  line-height: 1.6;
}

/* ---- Skills / Competencies ---- */
.skills-section {
  background: #0D1A2C;
  padding: 110px 0;
}

@media (max-width: 768px) {
  .skills-section { padding: 60px 0; }
}

.skills-section .skills-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 40px;
}

.skills-section .skills-head .section-h2 { font-size: 2.5rem; }

.skills-section .skills-sub-heading {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin: 50px 0 24px;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .skills-section .skills-head .section-h2 { font-size: 1.875rem; }
  .skills-section .skills-sub-heading { font-size: 1.375rem; margin: 32px 0 16px; }
}

.skills-section .skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .skills-section .skills-grid { grid-template-columns: 1fr; }
}

.skill-panel {
  background: rgb(37, 51, 73);
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (max-width: 768px) {
  .skill-panel { padding: 20px; gap: 18px; }
}

.skill-panel .skill-panel-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.skill-panel .skill-panel-icon {
  font-size: 2rem;
  line-height: 1;
  color: rgba(216, 235, 255, 0.85);
}

.skill-panel .skill-panel-title {
  font-size: 1.875rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .skill-panel .skill-panel-title { font-size: 1.375rem; }
}

.skill-panel .skill-panel-desc {
  font-size: 1rem;
  color: rgba(216, 235, 255, 0.7);
  margin: 0;
  line-height: 1.5;
}

.skill-panel .skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tag {
  background: rgba(150,150,194,0.12);
  color: #9696C6;
  border: 1px solid rgba(150,150,194,0.25);
  border-radius: 100px;
  padding: 4px 14px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* ---- Core Skill Tiles ---- */
.core-skills-tiles {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .core-skills-tiles { gap: 12px; }
}

.core-skill-tile {
  flex: 1;
  min-width: 160px;
  background: rgb(31, 46, 66);
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 210 / 360;
  max-height: 360px;
}

.core-skill-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .core-skill-tile {
    min-width: 140px;
    aspect-ratio: auto;
    height: 200px;
  }
}

@media (max-width: 600px) {
  .core-skill-tile {
    flex: 1 1 calc(50% - 12px);
    max-width: calc(50% - 6px);
    height: auto;
    padding: 12px;
  }
  .core-skill-tile img { height: auto; object-fit: contain; }
  .core-skill-tile:last-child { flex-grow: 0; }
}

/* ---- CV Preview on Home ---- */
.cv-section {
  background: #0D1A2C;
  padding: 110px 0 0;
}

@media (max-width: 768px) {
  .cv-section { padding-top: 60px; }
}

.cv-section .cv-head {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 40px;
}

.cv-section .cv-timeline-rows {
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .cv-section .cv-timeline-rows { gap: 24px; }
}

.cv-section .cv-timeline-row {
  display: grid;
  grid-template-columns: 380fr 772fr;
  gap: 40px;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .cv-section .cv-timeline-row { grid-template-columns: 1fr; }
  .cv-section .cv-timeline-row .cv-row-aside { display: none; }
}

.cv-section .cv-row-aside {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2px;
}

.cv-section .btn-outline { align-self: flex-start; }

.cv-section .cv-timeline-row:not(:last-child) .cv-entry:not(.cv-entry--empty)::before {
  content: '';
  position: absolute;
  left: 21px;
  top: 22px;
  bottom: calc(-36px);
  width: 2px;
  background: linear-gradient(to bottom, rgba(150, 166, 198, 0.25) 60%, transparent);
  z-index: 0;
}

.cv-section .cv-entry {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 32px;
  position: relative;
  z-index: 1;
}

.cv-section .cv-entry:last-of-type { padding-bottom: 0; }

.cv-section .cv-entry--empty {
  visibility: hidden;
  pointer-events: none;
  min-height: 0;
  padding-bottom: 0;
}

.cv-section .cv-entry .cv-entry-dot {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #1D2B40;
  border: 1.5px solid rgba(150, 166, 198, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
  z-index: 2;
  position: relative;
}

.cv-section .cv-entry .cv-entry-dot--fh {
  background: rgba(0, 140, 160, 0.2);
  border-color: rgba(0, 190, 210, 0.4);
}

.cv-section .cv-entry .cv-entry-dot--sm {
  width: 36px;
  height: 36px;
  padding: 7px;
}

.cv-section .cv-entry .cv-entry-dot-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.cv-section .cv-entry .cv-dot-logo {
  width: 100%;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.85;
}

.cv-section .cv-entry .cv-dot-text {
  font-size: 0.6875rem;
  font-weight: 700;
  color: rgba(0, 210, 230, 0.9);
  letter-spacing: 0.05em;
}

.cv-section .cv-entry .cv-entry-details {
  flex: 1;
  padding-top: 2px;
}

.cv-section .cv-entry .cv-entry-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 6px;
  line-height: 1.3;
}

.cv-section .cv-entry .cv-entry-date {
  font-size: 0.8125rem;
  color: #839CB5;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.cv-section .cv-entry .cv-entry-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px;
}

.cv-section .cv-entry .cv-entry-list {
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.cv-section .cv-entry .cv-entry-list li {
  font-size: 0.875rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.55;
  margin-bottom: 5px;
}

.cv-section .cv-entry .cv-entry-list li:last-child { margin-bottom: 0; }

/* Testimonial cards */
.testimonial-card {
  background: rgb(37, 51, 73);
  border-radius: 8px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.testimonial-card--compact { gap: 8px; }

.testimonial-card .testimonial-stars {
  color: #F59E0B;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.testimonial-card .testimonial-company {
  font-size: 1rem;
  font-weight: 600;
  color: #D8EBFF;
  margin: 0;
  opacity: 0.85;
}

.testimonial-card .testimonial-company-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #D8EBFF;
  letter-spacing: 0.02em;
}

.testimonial-card .testimonial-logos {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.testimonial-card .testimonial-logo {
  height: 22px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.testimonial-card .testimonial-text {
  font-size: 0.9375rem;
  color: #D8EBFF;
  margin: 0;
  line-height: 1.6;
  font-style: italic;
  opacity: 0.9;
}

/* ---- Contact Form ---- */
#contact.contact-section {
  background: #0D1A2C;
  padding: 0 0 110px;
  scroll-margin-top: 70px;
  max-width: none;
  margin-left: unset;
  margin-right: unset;
}

@media (max-width: 768px) {
  #contact.contact-section { padding-bottom: 60px; }
}

#contact.contact-section .contact-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 60px;
  padding: 110px 0 0;
}

@media (max-width: 768px) {
  #contact.contact-section .contact-head { padding-top: 60px; margin-bottom: 36px; }
}

#contact.contact-section .contact-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
}

@media (max-width: 900px) {
  #contact.contact-section .contact-cols { grid-template-columns: 1fr; }
}

#contact.contact-section .contact-form-wrap {
  background: #253349;
  border-radius: 4px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #contact.contact-section .contact-form-wrap { padding: 24px 20px; }
}

#contact.contact-section .contact-form-wrap form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

#contact.contact-section .form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#contact.contact-section .form-group label {
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(216,235,255,0.75);
}

#contact.contact-section .form-group input,
#contact.contact-section .form-group textarea {
  background: #D9ECFF;
  border: none;
  border-radius: 6px;
  padding: 16px 17px;
  color: #1F2E42;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  width: 100%;
  transition: opacity 0.2s;
}

#contact.contact-section .form-group input::placeholder,
#contact.contact-section .form-group textarea::placeholder {
  color: rgba(31,46,66,0.55);
}

#contact.contact-section .form-group input:focus,
#contact.contact-section .form-group textarea:focus {
  opacity: 0.9;
}

#contact.contact-section .form-group textarea {
  resize: vertical;
  min-height: 141px;
}

#contact.contact-section .contact-btn {
  width: 100%;
  margin-top: 8px;
  padding: 14px 24px;
  background: linear-gradient(180deg, #EBF3FA 0%, #DFEDFA 100%);
  color: #1F2E42;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s;
}

#contact.contact-section .contact-btn:hover { opacity: 0.88; }

#contact.contact-section .contact-img-wrap {
  border-radius: 20px;
  overflow: hidden;
}

#contact.contact-section .contact-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  #contact.contact-section .contact-img-wrap { height: 300px; }
}
</style>
