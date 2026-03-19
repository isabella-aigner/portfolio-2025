<script setup lang="ts">
import { useHead, useSeoMeta } from "@unhead/vue";
import { computed, onMounted, onUnmounted, nextTick } from "vue";
import { useI18n } from "vue-i18n";
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
import { getSkillPanels, getSoftSkillCards } from "../data/shared.data";
import { getExperienceEntries, getEducationEntries, getLanguages, toolLevels } from "../data/career.data";

const { t, tm } = useI18n();

useHead({ title: "Lebenslauf & Karriere – Isabella Aigner" });
useSeoMeta({
  description: "Beruflicher Werdegang, Ausbildung, Soft Skills und Kompetenzen von Isabella Aigner – Frontend-Entwicklerin und UI/UX-Designerin mit Erfahrung bei Redlink GmbH.",
  ogTitle: "Lebenslauf & Karriere – Isabella Aigner",
  ogDescription: "Beruflicher Werdegang, Ausbildung und Kompetenzen von Isabella Aigner – Frontend-Entwicklerin, UI/UX-Designerin und Grafikdesignerin.",
  ogUrl: "https://isabellaaigner.at/career",
  ogImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
  ogType: "website",
  ogLocale: "de_AT",
  twitterCard: "summary_large_image",
  twitterTitle: "Lebenslauf & Karriere – Isabella Aigner",
  twitterDescription: "Beruflicher Werdegang, Ausbildung und Kompetenzen von Isabella Aigner – Frontend-Entwicklerin und UI/UX-Designerin.",
  twitterImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
});

const skillPanels = computed(() => getSkillPanels(tm));
const softSkillCards = computed(() => getSoftSkillCards(tm));
const languages = computed(() => getLanguages(tm));

const experienceMapped = computed(() => getExperienceEntries(tm).map(e => ({
  heading: e.position, sub: e.company, period: e.period, label: e.label, details: e.details,
})));

const educationMapped = computed(() => getEducationEntries(tm).map(e => ({
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
      :title="t('career.title')"
      :subtitle="t('career.claim')"
      cta-href="/cv-isabella-aigner.pdf"
      :cta-label="t('career.download')"
      :cta-external="true"
    />


    <!-- Bio -->
    <CvBio
      :title="t('career.bioTitle')"
      :text="t('career.bioText')"
    />

    <CvTimelineSection
      :heading="t('career.workHeading')"
      :entries="experienceMapped"
      variant="work"
      :initial-count="6"
    />

    <CvTimelineSection
      :heading="t('career.eduHeading')"
      :entries="educationMapped"
      variant="edu"
      :initial-count="4"
    />

    <!-- Soft Skills -->
    <section class="cv-soft-skills-section bg-[#122033] py-[60px] max-md:py-[40px]">
      <div class="page-inner">
        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-5">
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
    <section class="cv-skill-levels-section bg-[#0D1A2C] pt-[70px] pb-[80px] max-md:pt-[50px] max-md:pb-[60px]">
      <div class="page-inner">
        <div class="cv-skill-levels-head mb-[48px]">
          <span class="section-tag">{{ t('career.skillLevelTag') }}</span>
          <h2 class="section-h2 !mt-2">{{ t('career.skillLevelHeading') }}</h2>
        </div>

        <div class="grid grid-cols-[1fr_2fr] gap-[48px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-[40px]">

          <!-- Languages -->
          <div>
            <h3 class="text-[1.125rem] font-semibold text-white m-0 mb-7 pb-3 border-b border-[rgba(150,166,198,0.12)]">{{ t('career.languagesCol') }}</h3>
            <div class="cv-lang-list flex flex-col gap-5">
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
          <div>
            <h3 class="text-[1.125rem] font-semibold text-white m-0 mb-7 pb-3 border-b border-[rgba(150,166,198,0.12)]">{{ t('career.toolsCol') }}</h3>
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
    <section class="cv-skills-section bg-[#122033] pt-[70px] pb-[100px] max-md:pt-[50px] max-md:pb-[60px]">
      <div class="page-inner">
        <div class="mb-[40px]">
          <span class="section-tag">{{ t('career.techTag') }}</span>
          <h2 class="section-h2 !mt-2">{{ t('career.techHeading') }}</h2>
        </div>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-5">
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
