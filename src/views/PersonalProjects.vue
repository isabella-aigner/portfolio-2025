<script setup lang="ts">
import { useHead, useSeoMeta } from "@unhead/vue";
import { ref, computed, onMounted, ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

useHead({ title: "Persönliche Projekte – Isabella Aigner" });

useSeoMeta({
  description: "Persönliche Projekte und kreative Experimente von Isabella Aigner – Illustration, Generative Art, Schmuckdesign, 3D Sculpting und mehr.",
  ogTitle: "Persönliche Projekte – Isabella Aigner",
  ogDescription: "Persönliche Projekte und kreative Experimente von Isabella Aigner – Illustration, Generative Art, Schmuckdesign und mehr.",
  ogUrl: "https://isabellaaigner.at/personal-projects",
  ogImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
  ogType: "website",
  ogLocale: "de_AT",
  twitterCard: "summary_large_image",
  twitterTitle: "Persönliche Projekte – Isabella Aigner",
  twitterDescription: "Persönliche Projekte und kreative Experimente von Isabella Aigner.",
  twitterImage: "https://isabellaaigner.at/assets/images/og-image.jpg",
});
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";
import SubpageHeader from "../components/SubpageHeader.vue";
import ProjectFilterPill from "../components/ProjectFilterPill.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { getFilterItems, getProjects } from "../data/personal-projects.data";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

const selectedProject = ref<ProjectItem | null>(null);
const selectedFilter = ref<string | null>(null);

onMounted(() => {
    const filterFromQuery = route.query.filter as string;
    if (filterFromQuery) selectedFilter.value = filterFromQuery;
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

const filterItems: ComputedRef<FilterItem[]> = computed(() => getFilterItems(t));

const projects: ComputedRef<ProjectItem[]> = computed(() => getProjects(t));

const filteredProjects = computed(() => {
    if (!selectedFilter.value) return projects.value;
    return projects.value.filter(p => p.filterTags.includes(selectedFilter.value!));
});

const toggleProject = (project: ProjectItem) => {
    const isOpen = selectedProject.value?.id === project.id;
    selectedProject.value = isOpen ? null : project;
    setTimeout(() => {
        document.getElementById(`${project.id}-header`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, isOpen ? 0 : 50);
};
</script>

<template>
    <div class="projects-page">

        <!-- Page Header -->
        <SubpageHeader
            title="Persönliche Projekte"
            subtitle="Kreative Projekte aus Fotografie, Illustration, 3D, Audio und mehr."
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
                        @toggle="toggleProject"
                    />
                </TransitionGroup>
            </div>
        </section>

    </div>
</template>
