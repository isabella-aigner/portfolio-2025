<script setup lang="ts">
import { computed, onMounted, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
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
import { getSkillPanels, getSoftSkillCards } from "../data/shared.data";
import { getFeaturedProjects, getCvRows, logos } from "../data/home.data";

const { t, tm } = useI18n();
const router = useRouter();

const skillPanels = computed(() => getSkillPanels(tm));
const softSkillCards = computed(() => getSoftSkillCards(tm));
const featuredProjects = computed(() => getFeaturedProjects(tm));
const cvRows = computed(() => getCvRows(tm));
const stats = computed(() => tm('home.stats') as Array<{ num: string; label: string }>);

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
    <HeroSection />

    <!-- Stats -->
    <section class="stats-section bg-[#0D1A2C] pt-[110px] max-md:pt-[60px]">
      <div class="page-inner">
        <span class="section-tag">{{ t('home.statsTag') }}</span>
        <div class="stats-row flex gap-5 mt-[21px] max-md:flex-col">
          <StatCard
            v-for="stat in stats"
            :key="stat.num + stat.label"
            :num="stat.num"
            :label="stat.label"
          />
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects-section bg-[#0D1A2C] pt-[110px] max-md:pt-[60px]">
      <div class="page-inner">
        <div class="projects-header flex items-center justify-between mb-[21px] gap-4 flex-wrap">
          <span class="section-tag">{{ t('home.projectsTag') }}</span>
          <AppButton size="sm" @click="router.push('/projects')">
            {{ t('home.allProjects') }} <span class="arrow">→</span>
          </AppButton>
        </div>
        <div class="projects-grid grid grid-cols-[59.4fr_37.3fr] gap-[41px] max-[900px]:grid-cols-1">
          <FeaturedProjectCard
            v-bind="featuredProjects[0]"
            @click="router.push('/projects')"
          />
          <div class="proj-right-col flex flex-col gap-[40px]">
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
    <section class="soft-skills-section bg-[#0D1A2C] pt-[110px] max-md:pt-[60px]">
      <div class="page-inner">
        <div class="soft-skills-grid grid grid-cols-1 min-[601px]:grid-cols-2 min-[901px]:grid-cols-3 gap-[15px]">
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
    <section class="cv-section bg-[#0D1A2C] pt-[110px] max-md:pt-[60px]">
      <div class="page-inner">
        <div class="cv-head flex flex-col gap-4 mb-[40px]">
          <span class="section-tag">{{ t('home.cvTag') }}</span>
          <h2 class="section-h2">{{ t('home.cvHeading') }}</h2>
        </div>

        <div class="cv-timeline-rows flex flex-col gap-9 mb-[30px] max-md:gap-6">
          <CvTimelineItem
            v-for="(row, i) in cvRows"
            :key="i"
            :testimonial="row.testimonial"
            :entry="row.entry"
            :is-last="i === cvRows.length - 1"
          />
        </div>

        <AppButton href="/career">
          {{ t('home.viewCareer') }} <span class="arrow">→</span>
        </AppButton>
      </div>
    </section>

    <!-- Skills / Competencies -->
    <section class="skills-section bg-[#0D1A2C] py-[110px] max-md:py-[60px]">
      <div class="page-inner">
        <div class="skills-head flex flex-col items-start gap-4 mb-[40px]">
          <span class="section-tag">{{ t('home.techTag') }}</span>
          <h2 class="section-h2 !text-[2.5rem] max-md:!text-[1.875rem]">{{ t('home.techHeading') }}</h2>
        </div>
        <!-- Core skill tiles -->
        <div class="core-skills-tiles flex gap-5 max-md:gap-3 flex-wrap">
          <CoreSkillTile src="/assets/images/skill-vue.png" alt="Vue.js" />
          <CoreSkillTile src="/assets/images/skill-vite.png" alt="Vite" />
          <CoreSkillTile src="/assets/images/skill-frontend.png" alt="Frontend Dev" />
          <CoreSkillTile src="/assets/images/skill-figma.png" alt="Figma" />
          <CoreSkillTile src="/assets/images/skill-adobe.png" alt="Adobe CC" />
        </div>
        <!-- Competencies overview -->
        <h3 class="text-[2rem] max-md:text-[1.375rem] font-semibold text-white mt-[50px] mb-6 max-md:mt-8 max-md:mb-4 leading-[1.2]">{{ t('home.techSubHeading') }}</h3>
        <div class="skills-grid grid grid-cols-2 max-md:grid-cols-1 gap-5">
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
