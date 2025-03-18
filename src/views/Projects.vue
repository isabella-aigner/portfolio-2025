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
    name: t("home.skillsList.uiux"),
    icon: "pi pi-palette",
    code: "uiux",
  },
  {
    name: t("home.skillsList.frontend"),
    icon: "pi pi-desktop",
    code: "frontend",
  },
  {
    name: t("home.skillsList.backend"),
    icon: "pi pi-database",
    code: "backend",
  },
  {
    name: t("home.skillsList.mobile"),
    icon: "pi pi-mobile",
    code: "mobile",
  },
  {
    name: t("home.skillsList.design"),
    icon: "pi pi-image",
    code: "design",
  },
  {
    name: t("home.skillsList.print"),
    icon: "pi pi-book",
    code: "print",
  },
  {
    name: t("home.skillsList.product"),
    icon: "pi pi-box",
    code: "product",
  },
]);

const projects = ref<ProjectItem[]>([
  {
    id: "redlinkGPT",
    title: t("projects.projectList.redlinkGPT.title"),
    subtitle: t("projects.projectList.redlinkGPT.subtitle"),
    description: t("projects.projectList.redlinkGPT.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["Figma", "Prototyping", "HTML", "CSS", "VanillaJs"],
    filterTags: ["uiux", "frontend", "product"],
    year: "2025   ",
    role: `${t("projects.roles.brandDesign")}, ${t("projects.roles.uiuxDesigner")}, ${t(
      "projects.roles.productDevelopment"
    )}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.redlinkGPT.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.redlinkGPT.technicalDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop-more.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://redlink.ai/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
    galleryGrid: "full",
  },
  {
    id: "moreStudyManager",
    title: t("projects.projectList.moreStudyManager.title"),
    subtitle: t("projects.projectList.moreStudyManager.subtitle"),
    description: t("projects.projectList.moreStudyManager.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: [
      "UI/UX Design",
      "Adobe XD",
      "Prototyping",
      "Vue.js",
      "Vite",
      "Vitest",
      "Tailwind CSS",
      "Primevue",
      "Kotlin",
      "Swift",
    ],
    filterTags: ["uiux", "design", "frontend", "mobile"],
    year: "2023",
    role: `${t("projects.roles.brandDesign")}, ${t("projects.roles.uiuxDesigner")}, ${t(
      "projects.roles.frontendDeveloper"
    )}, ${t("projects.roles.mobileDeveloper")}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.moreStudyManager.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.moreStudyManager.technicalDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop-more.jpg",
    ],
    links: [
      {
        title: "LGB Website",
        url: "https://dhp.lbg.ac.at/more/",
        icon: "pi pi-external-link",
        type: "external",
      },
      {
        title: "Github",
        url: "https://github.com/MORE-Platform",
        icon: "pi pi-github",
        type: "external",
      },
    ],
    galleryGrid: "full",
  },
  {
    id: "redlinkWebsite",
    title: t("projects.projectList.redlinkWebsite.title"),
    subtitle: t("projects.projectList.redlinkWebsite.subtitle"),
    description: t("projects.projectList.redlinkWebsite.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["nuxt", "nuxt.js", "nuxt content", "CSS", "HTML"],
    filterTags: ["uiux", "frontend", "backend"],
    year: "2022",
    role: `${t("projects.roles.uiuxDesigner")}, ${t(
      "projects.roles.fullStackDeveloper"
    )}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.redlinkWebsite.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.redlinkWebsite.technicalDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop-more.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://redlink.at/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
    galleryGrid: "full",
  },
  {
    id: "dachsteinTicketshop",
    title: t("projects.projectList.dachsteinTicketshop.title"),
    subtitle: t("projects.projectList.dachsteinTicketshop.subtitle"),
    description: t("projects.projectList.dachsteinTicketshop.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["Pimcore", "VanillaJS", "CSS", "HTML", "PHP"],
    filterTags: ["frontend"],
    year: "2020",
    role: t("projects.roles.frontendDeveloper"),
    client: t("projects.clients.internshipProject"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.dachsteinTicketshop.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.dachsteinTicketshop.technicalDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
      "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop-more.jpg",
    ],
    galleryGrid: "full",
  },
  {
    id: "plantbase",
    title: t("projects.projectList.plantbase.title"),
    subtitle: t("projects.projectList.plantbase.subtitle"),
    description: t("projects.projectList.plantbase.description"),
    image: "./src/assets/img/projects/web/plantbase/plantbase_mockup.jpg",
    tags: [
      "UI/UX Design",
      "Adobe XD",
      "Prototyping",
      "Vue.js",
      "TypeScript",
      "Twig",
      "Symphony",
      "PHP",
      "MySQL",
    ],
    filterTags: ["uiux", "frontend", "backend"],
    year: "2020",
    role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.developer")}`,
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
    id: "gameShop",
    title: t("projects.projectList.gameShop.title"),
    subtitle: t("projects.projectList.gameShop.subtitle"),
    description: t("projects.projectList.gameShop.description"),
    image: "./src/assets/img/projects/web/gameShop/mockup_small1.jpg",
    tags: ["UI/UX Design", "Adobe XD", "Prototyping"],
    filterTags: ["uiux"],
    year: "2019",
    role: `${t("projects.roles.uiuxDesigner")}`,
    client: t("projects.clients.studyProject"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.gameShop.overviewDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/gameShop/mockup.jpg",
      "./src/assets/img/projects/web/gameShop/mockup_all.jpg",
    ],
    galleryGrid: "full",
  },
  {
    id: "steuerkanzleiKaufmann",
    title: t("projects.projectList.steuerkanzleiKaufmann.title"),
    subtitle: t("projects.projectList.steuerkanzleiKaufmann.subtitle"),
    description: t("projects.projectList.steuerkanzleiKaufmann.description"),
    image: "./src/assets/img/projects/web/steuerkanzleiKaufmann/mockup.jpg",
    tags: ["UI/UX Design", "Adobe XD"],
    filterTags: ["uiux"],
    year: "2018",
    role: t("projects.roles.uiuxDesigner"),
    client: t("projects.clients.internshipProject"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.steuerkanzleiKaufmann.overviewDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/steuerkanzleiKaufmann/mockup.jpg",
      "./src/assets/img/projects/web/steuerkanzleiKaufmann/unterseiten.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.kaufmann-steuerkanzlei.de/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
    galleryGrid: "full",
  },
]);

const filteredProjects = computed(() => {
  if (!selectedFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.filterTags.includes(selectedFilter.value!)
  );
});

const toggleProject = (project: ProjectItem) => {
  selectedProject.value = selectedProject.value?.id === project.id ? null : project;

  let scrollToElementId = selectedProject.value ? selectedProject.value.id : project.id;

  if (selectedProject.value) {
    document
      .getElementById(`${scrollToElementId}-content`)
      ?.scrollIntoView({ behavior: "smooth" });
  } else {
    document
      .getElementById(`${scrollToElementId}-header`)
      ?.scrollIntoView({ behavior: "smooth" });
  }
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

      <TransitionGroup
        name="projects-grid"
        tag="div"
        class="grid"
        :class="[selectedProject ? 'grid-cols-1' : 'grid-cols-2']"
      >
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
