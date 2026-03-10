<script setup lang="ts">
import { useRouter } from "vue-router";
import HeroSection from "../components/HeroSection.vue";

const router = useRouter();

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
        <div class="cv-cols">
          <!-- Left: Testimonials -->
          <div class="cv-testimonials">
            <div class="testimonial-card testimonial-logo-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-company">redlink</p>
              <img src="/assets/logos/logo-1.svg" alt="redlink" class="testimonial-logo" />
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-text">„Isabella kombiniert fundierte Frontend-Expertise mit ausgeprägtem Engagement und professionellem Teamgeist."</p>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-text">„Mit kreativer Expertise, Zuverlässigkeit und ruhiger Ausstrahlung war Isabella eine wertvolle Unterstützung im Team."</p>
            </div>
            <div class="testimonial-card">
              <div class="testimonial-stars">★★★★★</div>
              <p class="testimonial-text">„Isabella erledigt Aufgaben effizient, verantwortungsvoll und auf höchstem Qualitätsniveau."</p>
            </div>
          </div>
          <!-- Right: Timeline -->
          <div class="cv-timeline">
            <div class="cv-entry">
              <div class="cv-entry-dot"></div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Frontend Developer, UI/UX &amp; Grafik Design</h3>
                <div class="cv-entry-date">📅 April 2022 – Heute · redlink GmbH</div>
                <p class="cv-entry-label">Verantwortlichkeiten</p>
                <p class="cv-entry-text">Erstellung und Konzipierung von interaktiven Software-Lösungen. Umsetzung, Testing und Weiterentwicklung von Applikationen mit Vue.js, TypeScript und modernen Web-Technologien.</p>
              </div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-dot"></div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Ausbildung: MTD (Hagenberg)</h3>
                <div class="cv-entry-date">📅 Okt. 2018 – Jan. 2022 · FH Oberösterreich</div>
                <p class="cv-entry-label">Schwerpunkte</p>
                <p class="cv-entry-text">Nachgezogene Ausbildung, um die Technologiekompetenz zu schärfen. Schwerpunkte: Web- &amp; Frontend-Entwicklung, UI/UX-Design.</p>
              </div>
            </div>
            <div class="cv-entry">
              <div class="cv-entry-dot"></div>
              <div class="cv-entry-details">
                <h3 class="cv-entry-title">Grafikdesign &amp; Marketingmitarbeiterin</h3>
                <div class="cv-entry-date">📅 Feb. 2015 – April 2017</div>
                <p class="cv-entry-label">Verantwortlichkeiten</p>
                <p class="cv-entry-text">Modernisierung und Entwicklung eines neuen Corporate Designs. Umsetzung der Geschäftsdrucksorten, Konzeption und Gestaltung von Printmedien und Webdesign.</p>
              </div>
            </div>
            <button class="btn-outline" @click="router.push('/career')">
              Lebenslauf einsehen <span class="arrow">→</span>
            </button>
          </div>
        </div>
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
            <h3 class="skill-panel-title">{{ panel.title }}</h3>
            <p class="skill-panel-desc">{{ panel.desc }}</p>
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
