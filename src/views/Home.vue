<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ContactSection from "../components/ContactSection.vue";
import PageHeader from "../components/PageHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";

const { t } = useI18n();

const skills = ref([
  {
    name: t("home.skillsList.frontend"),
    icon: "pi pi-desktop",
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
    ],
  },
  {
    name: t("home.skillsList.uiux"),
    icon: "pi pi-palette",
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
      "Personas & User Journeys",
      "Responsive Design",
    ],
  },
  {
    name: t("home.skillsList.design"),
    icon: "pi pi-image",
    background:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "Adobe Creative Suite",
      "Brand Design",
      "Color Theory",
      "Layout Design",
      "Visual Design Principles",
      "Logo-Design",
      "Brand Guidlines",
      "Printdesign",
      "Webdesign",
      "Typografie & Bildsprache",
      "Corporate Identity",
      "Corporate Design",
      "Konzeptentwicklung",
      "Produktentwicklung",
    ],
  },
  {
    name: "Leidenschaften & Creative Skills",
    icon: "pi pi-star",
    background:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800&h=600",
    items: [
      "3D Sculpting",
      "Musikkomposition",
      "Illustration",
      "DYI Crafts",
      "Kreatives Schreiben",
      "Musizieren",
      "Fotografie",
      "Bildbearbeitung",
      "Vektorgrafik-Design",
      "Generative Art",
      "Kalligrafie",
      "Schmuckdesign",
      "Game Design",
      "Painting",
      "Storrytelling & Worldbuilding",
    ],
  },
]);

const tools = ref([
  "Git",
  "VS Code",
  "Docker",
  "Jira",
  "npm/yarn",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "GitHub Actions",
]);

const softSkills = ref([
  "Agile/Scrum",
  "Konfliktlösungsfähigkeit",
  "Kommunikationsfähigkeit",
  "Soziale Sensibilität",
  "Sehr gute Teamfähigkeit",
  "Kritisches Denken",
  "Adaptabilität",
  "Strukturiertes & Selbstständiges Arbeiten",
  "Empathie & aktives Zuhören",
  "Selbstmanagement",
  "Zielrientierung & Ergebnisfokus",
  "Kreatives Denken",
  "Design Thinking",
  "Lernbereitschaft & Neugierde",
  "Detailorientierung & Präzision",
  "Logisches & analytisches Denken",
  "Kritik- & Reflexionsfähigkeit",
  "Konsturktives Feedback geben & annehmen",
  "Disziplin & Verlässlichkeit",
]);
</script>

<template>
  <div class="home">
    <PageHeader
      title="Isabella Aigner"
      claim="Frontend Developer & UI/UX Designer crafting beautiful digital experiences"
      image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200"
    />

    <ContentContainer>
      <section class="skills section">
        <h2 class="text-center">{{ t("home.skills") }}</h2>

        <!-- Main Skills -->
        <div class="grid grid-cols-2">
          <Card v-for="skill in skills" :key="skill.name" class="skill-card">
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
        </div>

        <!-- Additional Skills -->
        <div class="additional-skills">
          <Card>
            <template #title>
              <div class="section-title">
                <i class="pi pi-users"></i>
                <span>Soft Skills</span>
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
        </div>
      </section>

      <ContactSection />
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
.hero {
  text-align: center;
  padding: 4rem 0;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-color);
  }
}

.skill-card {
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  :deep(.p-card-header) {
    padding: 0;
  }

  :deep(.p-card-title) {
    color: var(--primary-color);
    font-size: 1.25rem;
    margin: 1rem 0;
  }
}

.skill-header {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.skill-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 111, 165, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  i {
    font-size: 2.5rem;
    color: white;
  }
}

.skill-card:hover {
  .skill-overlay {
    background: rgba(74, 111, 165, 0.95);
  }
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill-item {
  background: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.tool {
    background: var(--primary-color);
    color: white;
  }

  &.soft-skill {
    background: white;
    border-color: var(--secondary-color);
    color: var(--secondary-color);
  }
}

.additional-skills {
  margin-top: 3rem;
  display: grid;
  gap: 2rem;

  .section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);

    i {
      font-size: 1.25rem;
    }
  }
}

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
