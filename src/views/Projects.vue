<script setup lang="ts">
import { useHead, useSeoMeta } from "@unhead/vue";
import { ref, computed, ComputedRef, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { ProjectItem } from "../models/ProjectItem";
import SubpageHeader from "../components/SubpageHeader.vue";
import ProjectFilterPill from "../components/ProjectFilterPill.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { filterItems as rawFilterItems, getProjects } from "../data/projects.data";

const { t } = useI18n();
const router = useRouter();

useHead({
  title: "Projekte – Isabella Aigner",
  link: [{ rel: "canonical", href: "https://isabellaaigner.at/projects" }],
});
useSeoMeta({
  description: "Ausgewählte Kundenprojekte von Isabella Aigner im Bereich Frontend-Entwicklung, UI/UX-Design und Grafikdesign.",
  ogTitle: "Projekte – Isabella Aigner",
  ogDescription: "Ausgewählte Kundenprojekte von Isabella Aigner im Bereich Frontend-Entwicklung, UI/UX-Design und Grafikdesign.",
  ogUrl: "https://isabellaaigner.at/projects",
  ogImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
  ogType: "website",
  ogLocale: "de_AT",
  twitterCard: "summary_large_image",
  twitterTitle: "Projekte – Isabella Aigner",
  twitterDescription: "Ausgewählte Kundenprojekte von Isabella Aigner im Bereich Frontend-Entwicklung, UI/UX-Design und Grafikdesign.",
  twitterImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
});
const route = useRoute();

const selectedProject = ref<ProjectItem | null>(null);
const selectedFilter = ref<string | null>(null);

onMounted(() => {
    const filterFromQuery = route.query.filter as string;
    if (filterFromQuery) {
        selectedFilter.value = filterFromQuery;
    }
});

const toggleFilter = (filterId: string | null) => {
    if (filterId) router.replace({ query: { ...route.query, filter: filterId } });
    else {
        const query = { ...route.query };
        delete query.filter;
        router.replace({ query });
    }
    selectedFilter.value = filterId;
};

const filterItems: ComputedRef<typeof rawFilterItems> = computed(() => rawFilterItems);

const projects: ComputedRef<ProjectItem[]> = computed(() => getProjects(t));

const filteredProjects = computed(() => {
    if (!selectedFilter.value) return projects.value;
    return projects.value.filter(p => p.filterTags.includes(selectedFilter.value!));
});

const toggleProject = (project: ProjectItem) => {
    const isOpen = selectedProject.value?.id === project.id;
    selectedProject.value = isOpen ? null : project;
    const scrollId = isOpen ? project.id : project.id;
    setTimeout(() => {
        document.getElementById(`${scrollId}-header`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, isOpen ? 0 : 50);
};
</script>

<template>
    <div class="projects-page">

        <!-- Page Header -->
        <SubpageHeader
            title="Meine Projekte"
            subtitle="Einblicke in kreative und technische Arbeiten aus Webentwicklung, UI/UX-Design und Grafikdesign."
        />

        <!-- Filter Bubbles -->
        <section class="proj-filters-section">
            <div class="page-inner">
                <div class="proj-filter-pills">
                    <ProjectFilterPill label="Alle" :active="!selectedFilter" @click="toggleFilter(null)" />
                    <ProjectFilterPill
                        v-for="filter in filterItems"
                        :key="filter.code"
                        :label="filter.name"
                        :active="selectedFilter === filter.code"
                        @click="toggleFilter(filter.code)"
                    />
                </div>
            </div>
        </section>

        <!-- Project Grid -->
        <section class="proj-list-section">
            <div class="page-inner">
                <TransitionGroup name="proj-list" tag="div" class="proj-grid">
                    <ProjectCard
                        v-for="project in filteredProjects"
                        :key="project.id"
                        :project="project"
                        :is-open="selectedProject?.id === project.id"
                        :filter-items="filterItems"
                        :selected-filter="selectedFilter"
                        :clickable-card="true"
                        @toggle="toggleProject"
                    />
                </TransitionGroup>
            </div>
        </section>

    </div>
</template>
