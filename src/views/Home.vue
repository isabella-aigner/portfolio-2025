<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import HeroSection from "../components/HeroSection.vue";
import StatCard from "../components/StatCard.vue";
import SoftSkillCard from "../components/SoftSkillCard.vue";
import SkillPanel from "../components/SkillPanel.vue";
import LogoMarquee from "../components/LogoMarquee.vue";
import FeaturedProjectCard from "../components/FeaturedProjectCard.vue";
import CvTimelineItem from "../components/CvTimelineItem.vue";
import CoreSkillTile from "../components/CoreSkillTile.vue";
import ContactSection from "../components/ContactSection.vue";
import AppButton from "../components/AppButton.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// ScrollTrigger is registered globally in main.ts; import kept for type usage
void ScrollTrigger;
import { skillPanels, softSkillCards } from "../data/shared.data";
import { featuredProjects, logos, cvRows } from "../data/home.data";

const router = useRouter();

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
      .from(".app-btn--primary", { y: 14, opacity: 0, duration: 0.6 }, 0.95)
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
          <StatCard num="7+" label="Grafik Design" />
          <StatCard num="3+" label="Frontend-Dev" />
          <StatCard num="3+" label="UI/UX-Design" />
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects-section">
      <div class="page-inner">
        <div class="projects-header">
          <span class="section-tag">💼 Projekte</span>
          <AppButton size="sm" @click="router.push('/projects')">
            Alle Projekte einsehen <span class="arrow">→</span>
          </AppButton>
        </div>
        <div class="projects-grid">
          <FeaturedProjectCard
            v-bind="featuredProjects[0]"
            @click="router.push('/projects')"
          />
          <div class="proj-right-col">
            <FeaturedProjectCard
              v-for="project in featuredProjects.slice(1)"
              :key="project.title"
              v-bind="project"
              @click="router.push('/projects')"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Marquee -->
    <LogoMarquee :logos="logos" />

    <!-- Soft Skills Cards -->
    <section class="soft-skills-section">
      <div class="page-inner">
        <div class="soft-skills-grid">
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

    <!-- CV / Lebenslauf Preview -->
    <section class="cv-section">
      <div class="page-inner">
        <div class="cv-head">
          <span class="section-tag">💼 Lebenslauf</span>
          <h2 class="section-h2">Professionelle Erfahrung</h2>
        </div>

        <div class="cv-timeline-rows">
          <CvTimelineItem
            v-for="(row, i) in cvRows"
            :key="i"
            :testimonial="row.testimonial"
            :entry="row.entry"
          />
        </div>

        <AppButton href="/career">
          Lebenslauf einsehen <span class="arrow">→</span>
        </AppButton>
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
          <CoreSkillTile src="/assets/images/skill-vue.png" alt="Vue.js" />
          <CoreSkillTile src="/assets/images/skill-vite.png" alt="Vite" />
          <CoreSkillTile src="/assets/images/skill-frontend.png" alt="Frontend Dev" />
          <CoreSkillTile src="/assets/images/skill-figma.png" alt="Figma" />
          <CoreSkillTile src="/assets/images/skill-adobe.png" alt="Adobe CC" />
        </div>
        <!-- Competencies overview -->
        <h3 class="skills-sub-heading">Kompetenzen im Überblick</h3>
        <div class="skills-grid">
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

    <!-- Contact Form -->
    <ContactSection />

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

.cv-section .cv-entry:last-of-type { padding-bottom: 0; }
</style>
