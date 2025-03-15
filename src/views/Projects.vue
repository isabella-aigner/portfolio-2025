<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { TransitionGroup } from "vue";
import { FilterItem } from "../models/FilterItem";

import ContactSection from "../components/ContactSection.vue";
import FullWidthHeader from "../components/FullWidthHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";
import FilterButton from "../components/FilterButton.vue";
import FilterGroup from "../components/FilterGroup.vue";

const { t } = useI18n();
const route = useRoute();

const selectedProject = ref(null);
const selectedFilter = ref<string | null>(null);

// Set initial filter from route query
onMounted(() => {
  const filterFromQuery = route.query.filter as string;
  if (filterFromQuery) {
    selectedFilter.value = filterFromQuery;
  }
});

const filterItems = ref<FilterItem[]>([
  {
    name: t("home.skillsList.frontend"),
    icon: "pi pi-desktop",
    code: "frontend",
  },
  {
    name: t("home.skillsList.uiux"),
    icon: "pi pi-palette",
    code: "uiux",
  },
  {
    name: t("home.skillsList.design"),
    icon: "pi pi-image",
    code: "design",
  },
]);

const projects = ref([
  {
    id: "plantbase",
    title: "PlantBase",
    subtitle: "Plant Care Management System",
    description:
      "A comprehensive web application for plant enthusiasts to track and manage their indoor plants.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL"],
    skills: ["frontend", "uiux", "responsive"],
    year: "2023",
    role: "Full Stack Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "PlantBase is a modern web application designed to help plant enthusiasts manage their indoor plants. The application provides detailed care instructions, watering schedules, and growth tracking capabilities.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built with Vue.js and TypeScript for the frontend, utilizing Composition API and type-safe development practices. The backend is powered by Node.js with a PostgreSQL database, ensuring robust data management and scalability.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    ],
    links: [
      { title: "Live Demo", url: "https://example.com", icon: "pi pi-external-link" },
      { title: "GitHub", url: "https://github.com", icon: "pi pi-github" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "A modern portfolio website built with Vue.js and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue", "TypeScript", "PrimeVue"],
    skills: ["frontend", "design", "responsive"],
    year: "2023",
    role: "Frontend Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "A modern and responsive portfolio website showcasing my work and experience.",
      },
      {
        title: "Technical Implementation",
        content:
          "Developed using Vue.js 3 with TypeScript and PrimeVue components. Features include dark mode, internationalization, and responsive design.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    ],
    links: [
      { title: "Live Demo", url: "https://example.com", icon: "pi pi-external-link" },
      { title: "GitHub", url: "https://github.com", icon: "pi pi-github" },
    ],
  },
]);

const filteredProjects = computed(() => {
  if (!selectedFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.skills.includes(selectedFilter.value!)
  );
});

const toggleProject = (project) => {
  selectedProject.value = selectedProject.value?.id === project.id ? null : project;
};

const getSkillName = (skillCode: string) => {
  const skill = filterItems.value.find((s) => s.code === skillCode);
  return skill ? skill.name : skillCode;
};
</script>

<template>
  <div class="projects">
    <FullWidthHeader
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
    >
      <h1>{{ t("projects.title") }}</h1>
      <p>Innovative solutions crafted with passion and precision</p>
    </FullWidthHeader>

    <ContentContainer>
      <!-- Filter Skills -->
      <ScrollReveal>
        <FilterGroup
          :filters="filterItems"
          :selectedFilter="selectedFilter"
          @toggledFilter="selectedFilter = $event"
        />
      </ScrollReveal>

      <TransitionGroup name="projects-grid" tag="div" class="projects-grid">
        <ScrollReveal
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :delay="index * 200"
          direction="up"
        >
          <Card
            class="project-card"
            :class="{ expanded: selectedProject?.id === project.id }"
          >
            <!-- Project Header -->
            <template #header>
              <div
                class="project-header"
                :style="{ backgroundImage: `url(${project.image})` }"
                @click="toggleProject(project)"
              >
                <div class="project-overlay">
                  <h3>{{ project.title }}</h3>
                  <p class="subtitle">{{ project.subtitle }}</p>
                </div>
              </div>
            </template>

            <!-- Project Content -->
            <template #content>
              <div class="project-content">
                <!-- Basic Info -->
                <div class="basic-info">
                  <p>{{ project.description }}</p>
                  <div class="skills">
                    <TransitionGroup name="tag">
                      <span
                        v-for="skill in project.skills"
                        :key="skill"
                        class="skill-tag"
                        :class="{ active: selectedFilter === skill }"
                        @click="toggleFilter(skill)"
                      >
                        <i :class="filterItems.find((s) => s.code === skill)?.icon"></i>
                        {{ getSkillName(skill) }}
                      </span>
                    </TransitionGroup>
                  </div>
                  <div class="tags">
                    <span v-for="tag in project.tags" :key="tag" class="tag">
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Expanded Content -->
                <Transition name="expand">
                  <div v-if="selectedProject?.id === project.id" class="expanded-content">
                    <!-- Project Info -->
                    <div class="info-grid">
                      <Transition name="fade-slide-up" appear>
                        <div class="info-item">
                          <h4>Year</h4>
                          <p>{{ project.year }}</p>
                        </div>
                      </Transition>
                      <Transition name="fade-slide-up" appear>
                        <div class="info-item" style="transition-delay: 100ms">
                          <h4>Role</h4>
                          <p>{{ project.role }}</p>
                        </div>
                      </Transition>
                      <Transition name="fade-slide-up" appear>
                        <div class="info-item" style="transition-delay: 200ms">
                          <h4>Client</h4>
                          <p>{{ project.client }}</p>
                        </div>
                      </Transition>
                    </div>

                    <!-- Project Details -->
                    <div class="details">
                      <TransitionGroup name="fade-slide-up">
                        <div
                          v-for="(detail, index) in project.details"
                          :key="detail.title"
                          class="detail-section"
                          :style="{ transitionDelay: `${index * 100}ms` }"
                        >
                          <h4>{{ detail.title }}</h4>
                          <p>{{ detail.content }}</p>
                        </div>
                      </TransitionGroup>
                    </div>

                    <!-- Gallery -->
                    <div class="gallery">
                      <h4>Gallery</h4>
                      <div class="gallery-grid">
                        <TransitionGroup name="gallery">
                          <div
                            v-for="(image, index) in project.gallery"
                            :key="index"
                            class="gallery-image"
                            :style="{
                              backgroundImage: `url(${image})`,
                              transitionDelay: `${index * 100}ms`,
                            }"
                          ></div>
                        </TransitionGroup>
                      </div>
                    </div>

                    <!-- Links -->
                    <div class="project-links">
                      <TransitionGroup name="fade-slide-up">
                        <Button
                          v-for="(link, index) in project.links"
                          :key="link.title"
                          :label="link.title"
                          :icon="link.icon"
                          class="p-button-outlined"
                          :style="{ transitionDelay: `${index * 100}ms` }"
                          @click="window.open(link.url, '_blank')"
                        />
                      </TransitionGroup>
                    </div>
                  </div>
                </Transition>
              </div>
            </template>
          </Card>
        </ScrollReveal>
      </TransitionGroup>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>
