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
import { skillPanels, softSkillCards } from "../data/shared.data";
import { experienceEntries, educationEntries, languages, toolLevels } from "../data/career.data";

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
