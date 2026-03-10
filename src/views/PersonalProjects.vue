<script setup lang="ts">
import { ref, computed, onMounted, ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";

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

const filterItems: ComputedRef<FilterItem[]> = computed(() => ([
    { name: t("home.skillsList.photography"), icon: "pi pi-camera",    code: "photo"        },
    { name: t("home.skillsList.audio"),       icon: "pi pi-volume-up", code: "audio"        },
    { name: t("home.skillsList.illustration"),icon: "pi pi-palette",   code: "illustration" },
    { name: t("home.skillsList.3d"),          icon: "pi pi-box",       code: "3d"           },
    { name: t("home.skillsList.game"),        icon: "pi pi-desktop",   code: "game"         },
    { name: t("home.skillsList.freeDesign"),  icon: "pi pi-image",     code: "design"       },
]));

const projects: ComputedRef<ProjectItem[]> = computed(() => ([
    {
        id: "makro",
        title: t('projects.freeProjectList.makro.title'),
        subtitle: t('projects.freeProjectList.makro.subtitle'),
        description: t('projects.freeProjectList.makro.description'),
        image: "./assets/freeProjects/fotografie/makro/makro_small02.jpg",
        tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing'), t('projects.tags.visualArts')],
        filterTags: ["photo"],
        gallery: ["./assets/freeProjects/fotografie/makro/macro.jpg"],
        galleryGrid: "full",
    },
    {
        id: "hausMaschine",
        title: t('projects.freeProjectList.hausMaschine.title'),
        subtitle: t('projects.freeProjectList.hausMaschine.subtitle'),
        description: t('projects.freeProjectList.hausMaschine.description'),
        image: "./assets/freeProjects/fotografie/hausMaschine/objekt2.jpg",
        tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing'), t('projects.tags.visualArts'), t('projects.tags.crafting')],
        filterTags: ["photo"],
        gallery: ["./assets/freeProjects/fotografie/hausMaschine/fotoserie2.jpg"],
        galleryGrid: "full",
    },
    {
        id: "3d",
        title: t('projects.freeProjectList.3dPlayground.title'),
        description: t('projects.freeProjectList.3dPlayground.description'),
        image: "./assets/freeProjects/3d/fraktale01.jpg",
        tags: ["3D Modelling", "3D Sculpting", "Autodesk Maya", "ZBrush", t('projects.tags.visualArts')],
        filterTags: ["3d"],
        gallery: ["./assets/freeProjects/3d/fraktale-mock.jpg","./assets/freeProjects/3d/hexeninsel.jpg","./assets/freeProjects/3d/render-qf2.jpg"],
        galleryGrid: "full",
    },
    {
        id: "soundDesignSnippets",
        title: t("projects.freeProjectList.soundDesignSnippets.title"),
        description: t("projects.freeProjectList.soundDesignSnippets.description"),
        image: "./assets/freeProjects/audio/audioSnippets/theDealer-preview.JPG",
        tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Cubase"],
        filterTags: ["audio"],
        audio: [
            { title: "100% und mehr Abspann",    link: "./assets/freeProjects/audio/audioSnippets/abspann.mp3",         type: "audio/mpeg" },
            { title: "Showreel Begleitung",      link: "./assets/freeProjects/audio/audioSnippets/final.mp3",           type: "audio/mpeg" },
            { title: "Soundaufnahme Morgenroutine", link: "./assets/freeProjects/audio/audioSnippets/morning-routine.mp3", type: "audio/mpeg" },
        ],
        video: [
            { title: "The Dealer Sounddesign Konzept", link: "./assets/freeProjects/audio/audioSnippets/theDealer.mp4", poster: "./assets/freeProjects/audio/audioSnippets/theDealer-preview.JPG" },
        ],
    },
    {
        id: "iris",
        title: t("projects.freeProjectList.iris.title"),
        description: t("projects.freeProjectList.iris.description"),
        image: "./assets/freeProjects/game/iris/Iris_Intro_Single.jpg",
        tags: ["Unity", "3D Modelling", "Autodesk Maya", t('projects.tags.illustration'), t('projects.tags.visualArts')],
        filterTags: ["game", "3d", "illustration", "audio"],
        details: [{ title: t('projects.detailTitle.setting'), content: t('projects.freeProjectList.iris.settingDesc') }],
        video: [
            { title: t('projects.freeProjectList.iris.videoStart'), link: "./assets/freeProjects/game/iris/start-short.mp4",  poster: "./assets/freeProjects/game/iris/iris-menu.jpg" },
            { title: t('projects.freeProjectList.iris.videoAlarm'), link: "./assets/freeProjects/game/iris/wecker-short.mp4", poster: "./assets/freeProjects/game/iris/iris-menu.jpg" },
        ],
        gallery: ["./assets/freeProjects/game/iris/iris-illustrations.jpg","./assets/freeProjects/game/iris/iris-level.jpg"],
        galleryGrid: "full",
        links: [{ title: t('projects.links.gamejolt'), url: "https://gamejolt.com/games/iris/540740", icon: "pi pi-external-link", type: "external" }],
    },
    {
        id: "illu",
        title: t("projects.freeProjectList.illu.title"),
        description: t("projects.freeProjectList.illu.description"),
        image: "./assets/freeProjects/illustration/illu/dragon.jpg",
        tags: [t('projects.tags.visualArts'), t('projects.tags.illustration'), t('projects.tags.roetel'), t('projects.tags.grafit'), t('projects.tags.buntstifte'), t('projects.tags.aquarell'), t('projects.tags.tusche'), "Copic Marker", "Paper Art", "Adobe Photoshop"],
        filterTags: ["illustration"],
        gallery: ["./assets/freeProjects/illustration/illu/illus-1.jpg","./assets/freeProjects/illustration/illu/illus-2.jpg","./assets/freeProjects/illustration/illu/sketches.jpg","./assets/freeProjects/illustration/illu/dragon-paperart.jpg"],
        galleryGrid: "full",
    },
    {
        id: "dummyMagazin",
        title: t('projects.freeProjectList.dummyMagazin.title'),
        description: t('projects.freeProjectList.dummyMagazin.description'),
        image: "./assets/freeProjects/design/dummyMagazin/dummy-magazin.jpg",
        tags: [t('projects.tags.graficDesign'), t('projects.tags.infografic'), t('projects.tags.printProduction'), "Adobe Illustrator", "Adobe InDesign","Adobe Photoshop"],
        filterTags: ["design"],
        gallery: ["./assets/freeProjects/design/dummyMagazin/dummy-mockup1.jpg","./assets/freeProjects/design/dummyMagazin/dummy-mockup2.jpg"],
        galleryGrid: "full",
    },
    {
        id: "capoeira",
        title: t('projects.freeProjectList.capoeira.title'),
        subtitle: t('projects.freeProjectList.capoeira.subtitle'),
        description: t('projects.freeProjectList.capoeira.description'),
        image: "./assets/freeProjects/fotografie/capoeira/capoeira04.jpg",
        tags: [t('projects.tags.photography'), t('projects.tags.studioPhotography'), t('projects.tags.digitalEditing')],
        filterTags: ["photo"],
        gallery: ["./assets/freeProjects/fotografie/capoeira/capoeira-row1.jpg","./assets/freeProjects/fotografie/capoeira/capoeira-row2.jpg"],
        galleryGrid: "full",
    },
    {
        id: "microfobius",
        title: t('projects.freeProjectList.microfobius.title'),
        description: t('projects.freeProjectList.microfobius.description'),
        image: "./assets/freeProjects/infografics/microfobius/futuristic-city-wallpaper-38.jpg",
        tags: [t('projects.tags.infografic'), "Adobe Illustrator"],
        filterTags: ["design"],
        gallery: ["./assets/freeProjects/infografics/microfobius/logo-mock.jpg","./assets/freeProjects/infografics/microfobius/republic-1.jpg"],
        galleryGrid: "full",
    },
    {
        id: "nevilleBrody",
        title: t('projects.freeProjectList.nevilleBrody.title'),
        description: t('projects.freeProjectList.nevilleBrody.description'),
        image: "./assets/freeProjects/design/nevilleBrody/nevillebrody.jpg",
        tags: [t('projects.tags.printProduction'), "Adobe Illustrator", "Adobe InDesign"],
        filterTags: ["design"],
        gallery: ["./assets/freeProjects/design/nevilleBrody/neville-brody-plakate.jpg","./assets/freeProjects/design/nevilleBrody/nevillebrody.jpg"],
        galleryGrid: "full",
    },
    {
        id: "vectorIllu",
        title: t("projects.freeProjectList.vectorIllu.title"),
        description: t("projects.freeProjectList.vectorIllu.description"),
        image: "./assets/freeProjects/illustration/vectorIllustration/cat02.jpg",
        tags: ["Vector", t('projects.tags.illustration'), t('projects.tags.visualArts'), "Adobe Illustrator"],
        filterTags: ["illustration"],
        gallery: ["./assets/freeProjects/illustration/vectorIllustration/howToTrainYourDragon.jpg","./assets/freeProjects/illustration/vectorIllustration/cat-illustration.jpg","./assets/freeProjects/illustration/vectorIllustration/cat-illustration2.jpg","./assets/freeProjects/illustration/vectorIllustration/human.jpg"],
        galleryGrid: "full",
    },
    {
        id: "republic",
        title: t('projects.freeProjectList.republic.title'),
        description: t('projects.freeProjectList.republic.description'),
        image: "./assets/freeProjects/fotografie/republic/republic_qf.jpg",
        tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing')],
        filterTags: ["photo"],
        gallery: ["./assets/freeProjects/fotografie/republic/republic_qf.jpg","./assets/freeProjects/fotografie/republic/republic-mock.jpg"],
        galleryGrid: "full",
    },
    {
        id: "subitorato",
        title: t("projects.freeProjectList.subitorato.title"),
        description: t("projects.freeProjectList.subitorato.description"),
        image: "./assets/freeProjects/audio/subitorato/cover.jpg",
        tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Cubase"],
        filterTags: ["audio"],
        role: t('projects.roles.audioDev'),
        client: t('projects.clients.studyProject'),
        gallery: ["./assets/freeProjects/audio/subitorato/bildkomposition-mock.jpg"],
        galleryGrid: 'full',
        audio: [{ title: t('projects.detailTitle.demoTrack'), link: "./assets/freeProjects/audio/subitorato/subitorato.mp3", type: "audio/mpeg" }],
    },
    {
        id: "meerdesLebens",
        title: t("projects.freeProjectList.meerdesLebens.title"),
        description: t("projects.freeProjectList.meerdesLebens.description"),
        image: "./assets/freeProjects/audio/meerDesLebens/cover.jpg",
        tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Audacity"],
        filterTags: ["audio"],
        audio: [{ link: "./assets/freeProjects/audio/meerDesLeben/meerLeben.mp3", type: "audio/mpeg" }],
    },
    {
        id: "landscapePhotography",
        title: t('projects.freeProjectList.landscapePhotography.title'),
        description: t('projects.freeProjectList.landscapePhotography.description'),
        image: "./assets/freeProjects/fotografie/landscape/prag.jpg",
        tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing')],
        filterTags: ["photo"],
        gallery: ["./assets/freeProjects/fotografie/landscape/norway-mock.jpg","./assets/freeProjects/fotografie/landscape/prag.jpg"],
        galleryGrid: "full",
    },
    {
        id: "mediaInfoGrafic2016",
        title: t('projects.freeProjectList.mediaInfoGrafik2016.title'),
        description: t('projects.freeProjectList.mediaInfoGrafik2016.description'),
        image: "./assets/freeProjects/infografics/mediaInfoGrafik2016/cover.jpg",
        tags: [t('projects.tags.infografic'), "Adobe Illustrator"],
        filterTags: ["design"],
        gallery: ["./assets/freeProjects/infografics/mediaInfoGrafik2016/infografik2.jpg"],
        galleryGrid: "full",
    },
    {
        id: "nintendoMessestand",
        title: t('projects.freeProjectList.nintendoMessestand.title'),
        description: t('projects.freeProjectList.nintendoMessestand.description'),
        image: "./assets/freeProjects/messestand/nintendo/cover.png",
        tags: [t('projects.tags.messe'), "SketchUp"],
        filterTags: ["design"],
        gallery: ["./assets/freeProjects/messestand/nintendo/nintendo-messestand.jpg"],
        galleryGrid: "full",
    },
]));

const filteredProjects = computed(() => {
    if (!selectedFilter.value) return projects.value;
    return projects.value.filter(p => p.filterTags.includes(selectedFilter.value!));
});

const getFilterName = (code: string) =>
    filterItems.value.find(f => f.code === code)?.name || code;

const toggleProject = (project: ProjectItem) => {
    const isOpen = selectedProject.value?.id === project.id;
    selectedProject.value = isOpen ? null : project;
    setTimeout(() => {
        document.getElementById(`${project.id}-header`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, isOpen ? 0 : 50);
};

/* True if the expanded card has any media to show on the left */
const hasLeftMedia = (project: ProjectItem) =>
    !!(project.gallery?.length || project.video?.length);
</script>

<template>
    <div class="projects-page">

        <!-- Page Header -->
        <section class="proj-page-header">
            <div class="page-inner">
                <span class="section-tag">🎨 Playground</span>
                <h1 class="proj-page-title">Persönliche Projekte</h1>
                <p class="proj-page-subtitle">Kreative Experimente, Hobbyprojekte und persönliche Arbeiten aus Fotografie, Illustration, Audio und mehr.</p>
            </div>
        </section>

        <!-- Filter Bubbles -->
        <section class="proj-filters-section">
            <div class="page-inner">
                <div class="proj-filter-pills">
                    <button class="proj-filter-pill" :class="{ active: !selectedFilter }" @click="toggleFilter(null)">Alle</button>
                    <button
                        v-for="filter in filterItems"
                        :key="filter.code"
                        class="proj-filter-pill"
                        :class="{ active: selectedFilter === filter.code }"
                        @click="toggleFilter(filter.code)">
                        {{ filter.name }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Project Grid -->
        <section class="proj-list-section">
            <div class="page-inner">
                <TransitionGroup name="proj-list" tag="div" class="proj-grid">

                    <div
                        v-for="project in filteredProjects"
                        :key="project.id"
                        class="proj-card"
                        :class="{ 'is-open': selectedProject?.id === project.id }"
                        :id="`${project.id}-header`">

                        <!-- ── COLLAPSED STATE ── -->
                        <template v-if="selectedProject?.id !== project.id">
                            <div class="proj-card-img">
                                <img :src="project.image" :alt="project.title" />
                            </div>
                            <div class="proj-card-body">
                                <h2 class="proj-card-title">{{ project.title }}</h2>
                                <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
                                <div class="proj-card-categories">
                                    <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">{{ getFilterName(tag) }}</span>
                                </div>
                                <div class="proj-card-tools">
                                    <span v-for="tool in project.tags.slice(0, 6)" :key="tool" class="proj-tool-tag">{{ tool }}</span>
                                    <span v-if="project.tags.length > 6" class="proj-tool-tag proj-tool-more">+{{ project.tags.length - 6 }}</span>
                                </div>
                            </div>
                            <div class="proj-card-footer">
                                <button class="proj-toggle-btn" @click="toggleProject(project)">
                                    <span>Details ansehen</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </template>

                        <!-- ── EXPANDED STATE (images/media left · text right) ── -->
                        <template v-else>
                            <div class="proj-exp-wrap" :class="{ 'proj-exp-wrap--text-only': !hasLeftMedia(project) }">

                                <!-- Left: gallery + video -->
                                <div v-if="hasLeftMedia(project)" class="proj-exp-images">
                                    <img
                                        v-for="(img, i) in project.gallery"
                                        :key="`img-${i}`"
                                        :src="img"
                                        :alt="`${project.title} – Bild ${i + 1}`" />
                                    <div v-for="(vid, i) in project.video" :key="`vid-${i}`" class="proj-exp-video">
                                        <p v-if="vid.title" class="proj-video-title">{{ vid.title }}</p>
                                        <video controls :src="vid.link" :poster="vid.poster"></video>
                                    </div>
                                </div>

                                <!-- Right: all text -->
                                <div class="proj-exp-text">
                                    <div class="proj-exp-header">
                                        <h2 class="proj-card-title">{{ project.title }}</h2>
                                        <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
                                    </div>

                                    <div class="proj-card-categories">
                                        <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">{{ getFilterName(tag) }}</span>
                                    </div>

                                    <p v-if="project.description" class="proj-exp-desc">{{ project.description }}</p>

                                    <div v-if="project.details" class="proj-expand-details">
                                        <div v-for="detail in project.details" :key="detail.title" class="proj-detail-block">
                                            <h4 class="proj-detail-title">{{ detail.title }}</h4>
                                            <p class="proj-detail-text">{{ detail.content }}</p>
                                        </div>
                                    </div>

                                    <!-- Meta -->
                                    <div v-if="project.role || project.client" class="proj-expand-meta">
                                        <div v-if="project.role" class="proj-meta-item">
                                            <span class="proj-meta-label">Rolle</span>
                                            <span class="proj-meta-value">{{ project.role }}</span>
                                        </div>
                                        <div v-if="project.client" class="proj-meta-item">
                                            <span class="proj-meta-label">Auftraggeber</span>
                                            <span class="proj-meta-value">{{ project.client }}</span>
                                        </div>
                                    </div>

                                    <!-- All tool tags -->
                                    <div class="proj-expand-tech">
                                        <span v-for="tag in project.tags" :key="tag" class="proj-tech-tag">{{ tag }}</span>
                                    </div>

                                    <!-- Audio players -->
                                    <div v-if="project.audio?.length" class="proj-exp-audio">
                                        <div v-for="(track, i) in project.audio" :key="i" class="proj-audio-item">
                                            <p v-if="track.title" class="proj-audio-title">{{ track.title }}</p>
                                            <audio controls :src="track.link"></audio>
                                        </div>
                                    </div>

                                    <!-- Links -->
                                    <div v-if="project.links?.length" class="proj-expand-links">
                                        <a
                                            v-for="link in project.links"
                                            :key="link.title"
                                            :href="link.url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="proj-link-btn">
                                            {{ link.title }} →
                                        </a>
                                    </div>

                                    <button class="proj-toggle-btn proj-toggle-close" @click="toggleProject(project)">
                                        <span>Schließen</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </template>

                    </div>
                </TransitionGroup>
            </div>
        </section>

    </div>
</template>
