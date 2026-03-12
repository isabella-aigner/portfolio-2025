<script setup lang="ts">
import { ref, computed, ComputedRef, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";

const { t } = useI18n();
const router = useRouter();
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

const filterItems: ComputedRef<FilterItem[]> = computed(() => ([
    { name: "UI/UX Design",           icon: "pi pi-palette",  code: "uiux"     },
    { name: "Frontend Development",   icon: "pi pi-desktop",  code: "frontend" },
    { name: "Backend Development",    icon: "pi pi-database", code: "backend"  },
    { name: "App Development",        icon: "pi pi-mobile",   code: "mobile"   },
    { name: "Grafik- & Branddesign",  icon: "pi pi-image",    code: "grafic"   },
    { name: "Printproduktion",        icon: "pi pi-book",     code: "print"    },
    { name: "Verpackungsdesign",      icon: "pi pi-box",      code: "packaging"},
    { name: "Produktentwicklung",     icon: "pi pi-wallet",   code: "product"  },
]));

const projects: ComputedRef<ProjectItem[]> = computed(() => ([
    {
        id: "redlinkGPT",
        title: t("projects.projectList.redlinkGPT.title"),
        subtitle: t("projects.projectList.redlinkGPT.subtitle"),
        description: t("projects.projectList.redlinkGPT.description"),
        image: "./assets/projects/redlinkGPT/mock.jpg",
        tags: ["Figma","Prototyping","HTML","CSS","VanillaJs","Adobe InDesign","Adobe Photoshop","Adobe Illustrator"],
        filterTags: ["product","uiux","frontend","grafic","print"],
        year: "2025",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}, ${t("projects.roles.brandDev")}, ${t("projects.roles.graficDesign")}`,
        client: t("projects.clients.companyWork"),
        details: [{ title: t("projects.projectList.redlinkGPT.uspTitle"), content: t("projects.projectList.redlinkGPT.uspDesc") }],
        gallery: ["./assets/projects/redlinkGPT/unterseiten.jpg","./assets/projects/redlinkGPT/redlinkgpt-chat-assistant.jpg","./assets/projects/redlinkGPT/redlinkgpt-support-ticket.jpg","./assets/projects/redlinkGPT/redlinkgpt-reisekosten-terminbuchung.jpg","./assets/projects/redlinkGPT/redlinkGpt-zweier.jpg"],
        links: [{ title: "Website", url: "https://redlink.ai/", icon: "pi pi-external-link", type: "external" }],
        galleryGrid: "full",
    },
    {
        id: "moreStudyManager",
        title: t("projects.projectList.moreStudyManager.title"),
        subtitle: t("projects.projectList.moreStudyManager.subtitle"),
        description: t("projects.projectList.moreStudyManager.description"),
        image: "./assets/projects/more/more-visual-prev.png",
        tags: [t('projects.tags.brandDev'),"Adobe XD","Prototyping","Vue.js","Vite","Vitest","Tailwind CSS","Primevue","Kotlin","Swift"],
        filterTags: ["uiux","frontend","mobile","grafic"],
        year: "2023",
        role: `${t("projects.roles.brandDev")}, ${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}, ${t("projects.roles.mobileDev")}`,
        client: t("projects.clients.companyWork"),
        gallery: ["./assets/projects/more/more-banner-2.jpg","./assets/projects/more/more-mockup.jpg","./assets/projects/more/more-visual-prev-2.png","./assets/projects/more/more-mobiles.jpg"],
        links: [{ title: "Website", url: "https://more-platform.at/index.html", icon: "pi pi-external-link", type: "external" },{ title: "LGB Website", url: "https://dhp.lbg.ac.at/more/", icon: "pi pi-external-link", type: "external" },{ title: "Github", url: "https://github.com/MORE-Platform", icon: "pi pi-github", type: "external" }],
        galleryGrid: "full",
    },
    {
        id: "redlinkat",
        title: t("projects.projectList.redlinkat.title"),
        subtitle: t("projects.projectList.redlinkat.subtitle"),
        description: t("projects.projectList.redlinkat.description"),
        image: "./assets/projects/redlinkat/redlinkat.jpg",
        tags: [t("projects.tags.redesign"),t("projects.tags.corporateDesign"),t("projects.tags.brandGuidlines"),t("projects.tags.merch"),"Adobe XD","Adobe InDesign","Adobe Photoshop","Adobe Illustrator","nuxt.js","nuxt content","VanillaJS","CSS","HTML"],
        filterTags: ["uiux","frontend","backend","grafic","print"],
        year: "2022–2025",
        role: `${t("projects.roles.graficDesign")}, ${t("projects.roles.brandDev")}, ${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.developer")}`,
        client: t("projects.clients.companyWork"),
        gallery: ["./assets/projects/redlinkat/redlinkat2.jpg","./assets/projects/redlinkat/redlink-geschaeftsdrucksorten-give-aways.jpg","./assets/projects/redlinkat/redlink-flyer.jpg","./assets/projects/redlinkat/rollup-zweier.jpg","./assets/projects/redlinkat/redlink-weihnachtseinladung.jpg","./assets/projects/redlinkat/Redlink-10-jahresfeier-Einladung.jpg","./assets/projects/redlinkat/hackathon-2.jpg"],
        links: [{ title: "Website", url: "https://redlink.at/", icon: "pi pi-external-link", type: "external" }],
        galleryGrid: "full",
    },
    {
        id: "redlinkWhitepaper",
        title: t("projects.projectList.redlinkatWhitepaper.title"),
        subtitle: t("projects.projectList.redlinkatWhitepaper.subtitle"),
        description: t("projects.projectList.redlinkatWhitepaper.description"),
        image: "./assets/projects/redlinkAt-whitepaper/redlink-llm-whitepaper-front.jpg",
        tags: ["Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["product","grafic","print"],
        year: "2023–2024",
        role: `${t("projects.roles.graficDesign")}`,
        client: t("projects.clients.companyWork"),
        details: [{ title: t("projects.projectList.redlinkatWhitepaper.goodSearchUXTitle"), content: t("projects.projectList.redlinkatWhitepaper.goodSearchUX") },{ title: t("projects.projectList.redlinkatWhitepaper.llmTitle"), content: t("projects.projectList.redlinkatWhitepaper.llm") }],
        gallery: ["./assets/projects/redlinkAt-whitepaper/good-search-ux-2.jpg","./assets/projects/redlinkAt-whitepaper/redlink-llm.jpg"],
        links: [{ title: t("projects.projectList.redlinkatWhitepaper.goodSearchUXTitle"), url: "https://redlink.at/solutions/search", icon: "pi pi-external-link", type: "external" },{ title: t("projects.projectList.redlinkatWhitepaper.llmTitleShort"), url: "https://redlink.at/solutions/llm", icon: "pi pi-external-link", type: "external" }],
        galleryGrid: "full",
    },
    {
        id: "dachsteinTicketshop",
        title: t("projects.projectList.dachsteinTicketshop.title"),
        subtitle: t("projects.projectList.dachsteinTicketshop.subtitle"),
        description: t("projects.projectList.dachsteinTicketshop.description"),
        image: "./assets/projects/dachsteinTicketshop/ticketshop_dreier.jpg",
        tags: ["Pimcore","Stylelab","VanillaJS","CSS","HTML","PHP"],
        filterTags: ["frontend"],
        year: "2021",
        role: t("projects.roles.frontendDev"),
        client: t("projects.clients.internshipProject"),
        gallery: ["./assets/projects/dachsteinTicketshop/ticketshop_dreier.jpg","./assets/projects/dachsteinTicketshop/ticketshop-more.jpg"],
        galleryGrid: "full",
    },
    {
        id: "plantbase",
        title: t("projects.projectList.plantbase.title"),
        subtitle: t("projects.projectList.plantbase.subtitle"),
        description: t("projects.projectList.plantbase.description"),
        image: "./assets/projects/plantbase/plantbase_mockup.jpg",
        tags: ["Adobe XD","Prototyping","Vue.js","Twig","JavaScript","Symphony","PHP","MySQL","Xamp"],
        filterTags: ["product","uiux","frontend","backend"],
        year: "2020",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.fullstackDev")}`,
        client: t("projects.clients.studyProject"),
        gallery: ["./assets/projects/plantbase/plantbase_mockup.jpg","./assets/projects/plantbase/unterseiten01.jpg","./assets/projects/plantbase/unterseiten02.jpg"],
        galleryGrid: "full",
    },
    {
        id: "gameShop",
        title: t("projects.projectList.gameShop.title"),
        subtitle: t("projects.projectList.gameShop.subtitle"),
        description: t("projects.projectList.gameShop.description"),
        image: "./assets/projects/gameShop/mockup_small1.jpg",
        tags: ["Adobe XD","Prototyping"],
        filterTags: ["uiux"],
        year: "2019",
        role: `${t("projects.roles.uiuxDesigner")}`,
        client: t("projects.clients.studyProject"),
        gallery: ["./assets/projects/gameShop/mockup.jpg","./assets/projects/gameShop/mockup_all.jpg"],
        galleryGrid: "full",
    },
    {
        id: "steuerkanzleiKaufmann",
        title: t("projects.projectList.steuerkanzleiKaufmann.title"),
        subtitle: t("projects.projectList.steuerkanzleiKaufmann.subtitle"),
        description: t("projects.projectList.steuerkanzleiKaufmann.description"),
        image: "./assets/projects/steuerkanzleiKaufmann/mockup.jpg",
        tags: ["Adobe XD","Prototyping","HTML","CSS","VanillaJs"],
        filterTags: ["uiux","frontend"],
        year: "2018",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}`,
        client: t("projects.clients.internshipProject"),
        gallery: ["./assets/projects/steuerkanzleiKaufmann/mockup.jpg","./assets/projects/steuerkanzleiKaufmann/unterseiten.jpg"],
        links: [{ title: "Website", url: "https://www.kaufmann-steuerkanzlei.de/", icon: "pi pi-external-link", type: "external" }],
        galleryGrid: "full",
    },
    {
        id: "invent",
        title: t("projects.projectList.invent.title"),
        subtitle: t("projects.projectList.invent.subtitle"),
        description: t("projects.projectList.invent.description"),
        image: "./assets/projects/invent/geschaeftsdrucksorten.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.corporateDesign"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["grafic","print"],
        year: "2016–2017",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.companyWork"),
        gallery: ["./assets/projects/invent/geschaeftsdrucksorten-2.jpg","./assets/projects/invent/folder-mock.jpg","./assets/projects/invent/magazin-web.jpg"],
        galleryGrid: "full",
    },
    {
        id: "roco",
        title: t("projects.projectList.roco.title"),
        subtitle: t("projects.projectList.roco.subtitle"),
        description: t("projects.projectList.roco.description"),
        image: "./assets/projects/roco/kataloge.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.corporateDesign"),t("projects.tags.photography"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["grafic","print","packaging"],
        year: "2015–2016",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.companyWork"),
        gallery: ["./assets/projects/roco/roco-kataloge-mock.jpg","./assets/projects/roco/roco-verpackungen.jpg","./assets/projects/roco/inserat-messestand.jpg"],
        galleryGrid: "full",
        links: [{ title: "Website", url: "https://www.roco.cc/", icon: "pi pi-external-link", type: "external" }],
    },
    {
        id: "wiberg",
        title: t("projects.projectList.wiberg.title"),
        subtitle: t("projects.projectList.wiberg.subtitle"),
        description: t("projects.projectList.wiberg.description"),
        image: "./assets/projects/wiberg/cocktailheft_small.jpg",
        tags: [t("projects.tags.graficDesign"),"Adobe InDesign","Adobe InCopy","Adobe Illustrator"],
        filterTags: ["grafic","print"],
        year: "2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.internshipProject"),
        gallery: ["./assets/projects/wiberg/kataloge-mock.jpg","./assets/projects/wiberg/cocktailheft_inserat_huettengaudi.jpg"],
        galleryGrid: "full",
        links: [{ title: "Website", url: "https://www.wiberg.eu/de", icon: "pi pi-external-link", type: "external" }],
    },
    {
        id: "inspiranto",
        title: t("projects.projectList.inspiranto.title"),
        subtitle: t("projects.projectList.inspiranto.subtitle"),
        description: t("projects.projectList.inspiranto.description"),
        image: "./assets/projects/inspiranto/schmiede-heft.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.illustration"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["grafic","print"],
        year: "2014–2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.internshipProject"),
        gallery: ["./assets/projects/inspiranto/schmiede-mock.jpg","./assets/projects/inspiranto/xjagd_slider.jpg"],
        galleryGrid: "full",
        links: [{ title: "Website", url: "https://www.inspiranto.com/", icon: "pi pi-external-link", type: "external" }],
    },
    {
        id: "hajimaru",
        title: t("projects.projectList.hajimaru.title"),
        subtitle: t("projects.projectList.hajimaru.subtitle"),
        description: t("projects.projectList.hajimaru.description"),
        image: "./assets/projects/hajimaru/geschaeftsdrucksorten.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.brandDev"),t("projects.tags.corporateDesign"),t("projects.tags.illustration"),t("projects.tags.campaignDesign"),t("projects.tags.packagingDesgin"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["product","grafic","print","packaging"],
        year: "2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        gallery: ["./assets/projects/hajimaru/cafe-drawings.jpg","./assets/projects/hajimaru/geschaeftsdrucksorten-eventfolder.jpg","./assets/projects/hajimaru/speisekarte-verpackung.jpg","./assets/projects/hajimaru/aufhang-pakate-inserat.jpg"],
        galleryGrid: "full",
    },
    {
        id: "tube",
        title: t("projects.projectList.tube.title"),
        subtitle: t("projects.projectList.tube.subtitle"),
        description: t("projects.projectList.tube.description"),
        image: "./assets/projects/tube/busStop.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.brandDev"),t("projects.tags.corporateDesign"),t("projects.tags.typoDev"),t("projects.tags.illustration"),t("projects.tags.campaignDesign"),t("projects.tags.merch"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["product","grafic","print"],
        year: "2014",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        details: [{ title: t("projects.detailTitle.philosophy"), content: t("projects.projectList.tube.philosophyDesc") },{ title: t("projects.detailTitle.usp"), content: t("projects.projectList.tube.uspDesc") },{ title: t("projects.detailTitle.targetGroup"), content: t("projects.projectList.tube.targetGroupDesc") }],
        gallery: ["./assets/projects/tube/geschaeftsdrucksorten-mock.jpg","./assets/projects/tube/folder-mock.jpg","./assets/projects/tube/plakate-mock.jpg","./assets/projects/tube/merch.jpg","./assets/projects/tube/oeffi-design.jpg","./assets/projects/tube/alice-design.jpg","./assets/projects/tube/schillder-design.jpg"],
        galleryGrid: "full",
    },
    {
        id: "landespreis2014",
        title: t("projects.projectList.landespreis2014.title"),
        subtitle: t("projects.projectList.landespreis2014.subtitle"),
        description: t("projects.projectList.landespreis2014.description"),
        image: "./assets/projects/landespreis2014/citilight_plakat.jpg",
        tags: [t("projects.tags.graficDesign"),t("projects.tags.brandDev"),t("projects.tags.illustration"),t("projects.tags.campaignDesign"),"Adobe InDesign","Adobe Illustrator","Adobe Photoshop"],
        filterTags: ["grafic","print"],
        year: "2014",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        gallery: ["./assets/projects/landespreis2014/einladung-eintrittskarte.jpg","./assets/projects/landespreis2014/folder.jpg","./assets/projects/landespreis2014/postkarte-inserate-urkunde.jpg","./assets/projects/landespreis2014/aussen-mock.jpg"],
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
    const scrollId = isOpen ? project.id : project.id;
    setTimeout(() => {
        document.getElementById(`${scrollId}-header`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, isOpen ? 0 : 50);
};
</script>

<template>
    <div class="projects-page">

        <!-- Page Header — text only, no image -->
        <section class="proj-page-header">
            <div class="absolute top-0 left-0 pointer-events-none">
                <img src="/assets/images/bg.png" alt="" />
            </div>
            <div class="absolute top-[-50px] right-0 pointer-events-none">
                <img src="/assets/images/header-lines.svg" alt="" />
            </div>
            <div class="page-inner relative z-10">
                <h1 class="proj-page-title">Meine Projekte</h1>
                <p class="proj-page-subtitle">Einblicke in kreative und technische Arbeiten aus Webentwicklung, UI/UX-Design und Grafikdesign.</p>
            </div>
        </section>

        <!-- Filter Bubbles -->
        <section class="proj-filters-section">
            <div class="page-inner">
                <div class="proj-filter-pills">
                    <button
                        class="proj-filter-pill"
                        :class="{ active: !selectedFilter }"
                        @click="toggleFilter(null)">
                        Alle
                    </button>
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
                <!-- 2-col grid; collapses to 1-col when a card is expanded so expanded card goes full-width -->
                <TransitionGroup name="proj-list" tag="div" class="proj-grid">

                    <div
                        v-for="project in filteredProjects"
                        :key="project.id"
                        class="proj-card"
                        :class="{ 'is-open': selectedProject?.id === project.id }"
                        :id="`${project.id}-header`"
                        @click="selectedProject?.id !== project.id && toggleProject(project)"
                        :style="selectedProject?.id !== project.id ? 'cursor: pointer' : ''">

                        <!-- ── COLLAPSED STATE (image + info + arrow) ── -->
                        <template v-if="selectedProject?.id !== project.id">
                            <div class="proj-card-img">
                                <img :src="project.image" :alt="project.title" />
                            </div>

                            <div class="proj-card-body">
                                <span class="proj-card-year">{{ project.year }}</span>
                                <h2 class="proj-card-title">{{ project.title }}</h2>
                                <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
                                <div class="proj-card-categories">
                                    <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">
                                        {{ getFilterName(tag) }}
                                    </span>
                                </div>
                                <div class="proj-card-tools">
                                    <span v-for="tool in project.tags.slice(0, 6)" :key="tool" class="proj-tool-tag">{{ tool }}</span>
                                    <span v-if="project.tags.length > 6" class="proj-tool-tag proj-tool-more">+{{ project.tags.length - 6 }}</span>
                                </div>
                            </div>

                            <div class="proj-card-footer">
                                <button class="proj-toggle-btn" @click.stop="toggleProject(project)">
                                    <span>Details ansehen</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </template>

                        <!-- ── EXPANDED STATE (images left · text right) ── -->
                        <template v-else>
                            <div class="proj-exp-wrap">

                                <!-- Left: gallery images -->
                                <div class="proj-exp-images">
                                    <img
                                        v-for="(img, i) in project.gallery"
                                        :key="i"
                                        :src="img"
                                        :alt="`${project.title} – Bild ${i + 1}`" />
                                </div>

                                <!-- Right: all text + close -->
                                <div class="proj-exp-text">
                                    <div class="proj-exp-header">
                                        <span class="proj-card-year">{{ project.year }}</span>
                                        <h2 class="proj-card-title">{{ project.title }}</h2>
                                        <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
                                    </div>

                                    <div class="proj-card-categories">
                                        <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">{{ getFilterName(tag) }}</span>
                                    </div>

                                    <p v-if="project.description" class="proj-exp-desc">{{ project.description }}</p>

                                    <!-- Detail sections -->
                                    <div v-if="project.details" class="proj-expand-details">
                                        <div v-for="detail in project.details" :key="detail.title" class="proj-detail-block">
                                            <h4 class="proj-detail-title">{{ detail.title }}</h4>
                                            <p class="proj-detail-text">{{ detail.content }}</p>
                                        </div>
                                    </div>

                                    <!-- Meta: Jahr / Rolle / Auftraggeber -->
                                    <div class="proj-expand-meta">
                                        <div v-if="project.year" class="proj-meta-item">
                                            <span class="proj-meta-label">Jahr</span>
                                            <span class="proj-meta-value">{{ project.year }}</span>
                                        </div>
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

                                    <!-- External links -->
                                    <div v-if="project.links?.length" class="proj-expand-links">
                                        <a
                                            v-for="link in project.links"
                                            :key="link.title"
                                            :href="link.url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="proj-link-btn"
                                            @click.stop>
                                            {{ link.title }} →
                                        </a>
                                    </div>

                                    <!-- Close button -->
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
