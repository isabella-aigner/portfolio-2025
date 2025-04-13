<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import { SkillItem } from "../models/SkillItem";

import ContactCard from "../components/ContactCard.vue";
import PageHeader from "../components/PageHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";

const { t } = useI18n();
const router = useRouter();

const navigateToProjects = (skillCode: string) => {
  if (skillCode === "creative") {
    router.push("/personal-projects");
  } else {
    router.push({
      path: "/projects",
      query: { filter: skillCode },
    });
  }
};

const skills: ComputedRef<SkillItem[]> = computed(() => ([
  {
    name: t("home.skillsList.frontend"),
    icon: "pi pi-desktop",
    code: "frontend",
    background:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "Vue.js",
      "Vite",
      "Webpack",
      "Vitest",
      "Pimcore",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3/SCSS",
      "node.js",
      "TailwindCSS",
      "Bootstrap",
      "Primevue",
      "Twig",
      "Stylelab",
      "Symphony",
      "PHP",
      "Playwright",
      "REST APIs",
      "Web Components",
      "Pinia",
      "ESLint & Prettier",
      "Jira",
      "Git",
      "Docker",
      "Agile/Scrum",
    ],
  },
  {
    name: t("home.skillsList.uiux"),
    icon: "pi pi-palette",
    code: "uiux",
    background:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing",
      "Prototyping",
      "Adobe XD",
      "Figma",
      "Design Systems",
      "Material UI",
      "Usability Testing",
      "Personas",
      "User Journeys",
      "Responsive Design",
      "bolt.new",
    ],
  },
  {
    name: t("home.skillsList.design"),
    icon: "pi pi-image",
    code: "design",
    background:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "Adobe Creative Suite",
      "Brand Design",
      t("home.skillElements.colorTheory"),
      t("home.skillElements.layoutDesign"),
      t("home.skillElements.visualDesignPrinciples"),
      t("home.skillElements.logoDesign"),
      "Brand Guidelines",
      "Printdesign",
      "Webdesign",
      t("home.skillElements.typographyAndImagery"),
      "Corporate Identity",
      "Corporate Design",
      t("home.skillElements.conceptDevelopment"),
      t("home.skillElements.productDevelopment"),
    ],
  },
  {
    name: t("home.skillsList.creativeSkills"),
    icon: "pi pi-heart",
    code: "creative",
    background:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "3D Sculpting",
      t("home.skillElements.musicComposition"),
      "Illustration",
      "DYI Crafts",
      t("home.skillElements.creativeWriting"),
      t("home.skillElements.makingMusic"),
      t("home.skillElements.photography"),
      t("home.skillElements.imageEditing"),
      t("home.skillElements.vectorGraficDesign"),
      "Generative Art",
      t("home.skillElements.calligraphy"),
      t("home.skillElements.jewelryDesign"),
      "Game Design",
      "Painting",
      "Storytelling & Worldbuilding",
    ],
  },
]));

const softSkills: ComputedRef<string[]> = computed(() => ([
  t("home.softSkills.conflictResolutionSkills"),
  t("home.softSkills.communicationSkills"),
  t("home.softSkills.socialSensitivity"),
  t("home.softSkills.criticalThinking"),
  t("home.softSkills.adaptability"),
  t("home.softSkills.structuredAndIndependentWork"),
  t("home.softSkills.empathyAndActiveListening"),
  t("home.softSkills.selfManagement"),
  t("home.softSkills.goalOrientationAndResultFocus"),
  t("home.softSkills.creativeThinking"),
  t("home.softSkills.designThinking"),
  t("home.softSkills.willingnessToLearn"),
  t("home.softSkills.curiosity"),
  t("home.softSkills.attentionToDetailAndPrecision"),
  t("home.softSkills.logicalAndAnalyticalThinking"),
  t("home.softSkills.receptivenessToCriticism"),
  t("home.softSkills.disciplineAndReliability"),
]));
</script>

<template>
  <div id="home" class="home">
    <PageHeader
      :title="t('home.headerTitle')"
      :claim="t('home.headerSubtitle')"
      image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
    />

    <ContentContainer>
      <section class="skills section">
        <ScrollReveal>
          <h2 class="text-center font-bold m-6 text-xl">{{ t("home.skills") }}</h2>
        </ScrollReveal>

        <!-- Main Skills -->
        <div class="grid grid-cols-2">
          <ScrollReveal
            v-for="(skill, index) in skills"
            :key="skill.name"
            :delay="index * 100"
            direction="up"
          >
            <Card class="skill-card" @click="navigateToProjects(skill.code)">
              <template #header>
                <div
                  class="skill-header"
                  :style="{ backgroundImage: `url(${skill.background})` }"
                >
                  <div class="skill-overlay">
                    <i :class="skill.icon"></i>
                  </div>
                </div>
              </template>
              <template #title>
                {{ skill.name }}
              </template>
              <template #content>
                <div class="skill-items">
                  <span v-for="item in skill.items" :key="item" class="skill-item">
                    {{ item }}
                  </span>
                </div>
              </template>
            </Card>
          </ScrollReveal>
        </div>

        <!-- Additional Skills -->
        <div class="additional-skills">
          <ScrollReveal direction="right" :delay="200">
            <Card>
              <template #title>
                <div class="section-title">
                  <i class="pi pi-users"></i>
                  <span>{{ t('home.softSkillTitle') }}</span>
                </div>
              </template>
              <template #content>
                <div class="skill-items">
                  <span v-for="skill in softSkills" :key="skill" class="skill-item tool">
                    {{ skill }}
                  </span>
                </div>
              </template>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <ContactCard />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .hero {
    h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }

  .grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
