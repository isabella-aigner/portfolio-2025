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
    name: t("home.skillsList.photography"),
    icon: "pi pi-images",
    code: "photo",
  },
  {
    name: t("home.skillsList.audio"),
    icon: "pi pi-volume-up",
    code: "audio",
  },
  {
    name: t("home.skillsList.illustration"),
    icon: "pi pi-pencil",
    code: "illustration",
  },
  {
    name: t("home.skillsList.creativeWriting"),
    icon: "pi pi-align-left",
    code: "writing",
  },
]);

const projects = ref<ProjectItem[]>([
  {
    id: "soundDesignSnippets",
    title: t("projects.freeProjectList.soundDesignSnippets.title"),
    description: t("projects.freeProjectList.soundDesignSnippets.description"),
    image:
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800&h=600",
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    year: "???",
    role: "Audio Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "Soundscape is an interactive audio experience that allows users to create and manipulate ambient soundscapes in real-time.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built using the Web Audio API for sound processing and synthesis, with a Vue.js frontend for the interactive interface.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800",
    ],
    audio: [
      {
        title: "100% und mehr Abspann",
        link: "./src/assets/audio/audioSnippets/abspann.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Showree Begleitung",
        link: "./src/assets/audio/audioSnippets/final.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Soundaufnahme Morgenroutine",
        link: "./src/assets/audio/audioSnippets/morning-routine.mp3",
        type: "audio/mpeg",
      },
    ],
    video: [
      {
        title: "The Dealer Sounddesign Konzept",
        link: "./src/assets/audio/audioSnippets/theDealer.mp4",
        poster:
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800&h=600",
      },
    ],
  },
  {
    id: "subitorato",
    title: t("projects.freeProjectList.subitorato.title"),
    description: t("projects.freeProjectList.subitorato.description"),
    image:
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800&h=600",
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    year: "2011",
    role: "Audio Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "Soundscape is an interactive audio experience that allows users to create and manipulate ambient soundscapes in real-time.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built using the Web Audio API for sound processing and synthesis, with a Vue.js frontend for the interactive interface.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800",
    ],
    audio: [
      {
        title: "Demo Track",
        link: "./src/assets/audio/subitorato/subitorato.mp3",
        type: "audio/mpeg",
      },
    ],
  },
  {
    id: "meerdesLebens",
    title: t("projects.freeProjectList.meerdesLebens.title"),
    description: t("projects.freeProjectList.meerdesLebens.description"),
    image:
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800&h=600",
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    year: "???",
    role: "Audio Developer",
    client: "Personal Project",
    details: [
      {
        title: "Geschichte",
        content:
          "Soundscape is an interactive audio experience that allows users to create and manipulate ambient soundscapes in real-time.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built using the Web Audio API for sound processing and synthesis, with a Vue.js frontend for the interactive interface.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800",
    ],
    audio: [
      {
        title: "Audio Snippet",
        link: "./src/assets/audio/meerLeben/meerLeben.mp3",
        type: "audio/mpeg",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography Portfolio",
    subtitle: "Visual Stories Through Lens",
    description:
      "A curated collection of photographs capturing moments, landscapes, and stories.",
    image:
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Photography", "Visual Arts", "Digital Editing"],
    skills: ["design"],
    year: "2023",
    role: "Photographer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "A photography portfolio showcasing various styles and subjects, from landscape to portrait photography.",
      },
      {
        title: "Technical Details",
        content:
          "Shot with professional DSLR equipment and processed using advanced photo editing techniques.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
    ],
    links: [
      { title: "View Gallery", url: "https://example.com", icon: "pi pi-external-link" },
      { title: "Instagram", url: "https://instagram.com", icon: "pi pi-instagram" },
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
