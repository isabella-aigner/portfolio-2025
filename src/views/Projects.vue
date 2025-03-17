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
import FilterGroup from "../components/FilterGroup.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { ProjectItem } from "../models/ProjectItem";

const { t } = useI18n();
const route = useRoute();

const selectedProject = ref<ProjectItem | null>(null);
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

const projects = ref<ProjectItem[]>([
  {
    id: "plantbase",
    title: t("projects.projectList.plantbase.title"),
    subtitle: t("projects.projectList.plantbase.subtitle"),
    description: t("projects.projectList.plantbase.description"),
    image: "./src/assets/img/projects/web/plantbase/plantbase_mockup.jpg",
    tags: [
      "UI/UX Design",
      "Adobe XD",
      "Vue.js",
      "TypeScript",
      "Twig",
      "Symphony",
      "PHP",
      "MySQL",
    ],
    filterTags: ["uiux", "frontend"],
    year: "2020",
    role: t("projects.projectList.plantbase.role"),
    client: t("projects.clients.studyProject"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.plantbase.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.plantbase.techincalDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/plantbase/plantbase_mockup.jpg",
      "./src/assets/img/projects/web/plantbase/unterseiten01.jpg",
      "./src/assets/img/projects/web/plantbase/unterseiten02.jpg",
    ],
    galleryGrid: "full",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "A modern portfolio website built with Vue.js and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue", "TypeScript", "PrimeVue"],
    filterTags: ["frontend", "design", "responsive"],
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
    project.filterTags.includes(selectedFilter.value!)
  );
});

const toggleProject = (project: ProjectItem) => {
  console.log("toggleProject", project);
  console.log("sleected", selectedProject.value);

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
          :selected-filter="selectedFilter"
          @toggled-filter="selectedFilter = $event"
        />
      </ScrollReveal>

      <TransitionGroup name="projects-grid" tag="div" class="projects-grid">
        <ScrollReveal
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :delay="index * 200"
          direction="up"
        >
          <ProjectCard
            :project="project"
            :is-selected="selectedProject?.id === project.id"
            :selected-filter="selectedFilter"
            :filter-items="filterItems"
            @toggled-project="toggleProject(project)"
          />
        </ScrollReveal>
      </TransitionGroup>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>
