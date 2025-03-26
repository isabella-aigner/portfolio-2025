<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";

import ContactSection from "../components/ContactCard.vue";
import FullWidthHeader from "../components/FullWidthHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";
import FilterGroup from "../components/FilterGroup.vue";
import ProjectCard from "../components/ProjectCard.vue";
import GalleryModal from "../components/GalleryModal.vue";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const selectedProject = ref < ProjectItem | null > (null);
const selectedFilter = ref < string | null > (null);

// Set initial filter from route query
onMounted(() => {
    const filterFromQuery = route.query.filter as string;
    if (filterFromQuery) {
        selectedFilter.value = filterFromQuery;
        console.log("onmounted: selectedFilter: ", selectedFilter.value);
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

const filterItems = ref < FilterItem[] > ([{
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
        name: t("home.skillsList.packaging"),
        icon: "pi pi-box",
        code: "packaging",
    },
    {
        name: t("home.skillsList.product"),
        icon: "pi pi-wallet",
        code: "product",
    },
]);

const projects = ref < ProjectItem[] > ([{
        id: "redlinkGPT",
        title: t("projects.projectList.redlinkGPT.title"),
        subtitle: t("projects.projectList.redlinkGPT.subtitle"),
        description: t("projects.projectList.redlinkGPT.description"),
        image: "./assets/projects/redlinkGPT/mock.jpg",
        tags: [
            "Figma",
            "Prototyping",
            "HTML",
            "CSS",
            "VanillaJs",
            "Adobe InDesign",
            "Adobe Photoshop",
            "Adobe Illustrator",
        ],
        filterTags: ["uiux", "frontend", "design", "print", "product"],
        year: "2025",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}, ${t(
      "projects.roles.brandDev"
    )}, ${t("projects.roles.productDev")}, ${t("projects.roles.graficDesign")}, ${t(
      "projects.roles.brandDev"
    )}`,
        client: t("projects.clients.companyWork"),
        details: [{
                title: t("projects.detailTitle.projectOverview"),
                content: t("projects.projectList.redlinkGPT.overviewDesc"),
            },
            {
                title: t("projects.detailTitle.usp"),
                content: t("projects.projectList.redlinkGPT.appDesc"),
            },
        ],
        gallery: [
            "./assets/projects/redlinkGPT/unterseiten.jpg",
            "./assets/projects/redlinkGPT/redlinkgpt-chat-assistant.jpg",
            "./assets/projects/redlinkGPT/redlinkgpt-support-ticket.jpg",
            "./assets/projects/redlinkGPT/redlinkgpt-reisekosten-terminbuchung.jpg",
            "./assets/projects/redlinkGPT/redlinkGpt-zweier.jpg"
        ],
        links: [{
            title: "Website",
            url: "https://redlink.ai/",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
        galleryGrid: "full",
    },
    {
        id: "moreStudyManager",
        title: t("projects.projectList.moreStudyManager.title"),
        subtitle: t("projects.projectList.moreStudyManager.subtitle"),
        description: t("projects.projectList.moreStudyManager.description"),
        image: "./assets/projects/more/more-visual-prev.png",
        tags: [
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
        filterTags: ["uiux", "design", "frontend", "mobile", "product"],
        year: "2023",
        role: `${t("projects.roles.brandDev")}, ${t("projects.roles.uiuxDesigner")}, ${t(
      "projects.roles.frontendDev"
    )}, ${t("projects.roles.mobileDev")}`,
        client: t("projects.clients.companyWork"),
        details: [{
                title: t("projects.detailTitle.projectOverview"),
                content: t("projects.projectList.moreStudyManager.overviewDesc"),
            },
            {
                title: t("projects.detailTitle.technicalImplementation"),
                content: t("projects.projectList.moreStudyManager.technicalDesc"),
            },
        ],
        gallery: [
            "./assets/projects/more/more-banner-2.jpg",
            "./assets/projects/more/more-mockup.jpg",
            "./assets/projects/more/more-visual-prev-2.png",
            "./assets/projects/more/more-mobiles.jpg",
        ],
        links: [{
                title: "Website",
                url: "https://more-platform.at/index.html",
                icon: "pi pi-external-link",
                type: "external",
            },
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
        id: "redlinkat",
        title: t("projects.projectList.redlinkat.title"),
        subtitle: t("projects.projectList.redlinkat.subtitle"),
        description: t("projects.projectList.redlinkat.description"),
        image: "./assets/projects/redlinkat/redlinkat.jpg",
        tags: [
            t("projects.tags.redesign"),
            "Corporate Design",
            "Corborate Deisgn Guidlines",
            t("projects.tags.merch"),
            "Adobe XD",
            "Adobe InDesign",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "nuxt.js",
            "nuxt content",
            "VanillaJS",
            "CSS",
            "HTML",
        ],
        filterTags: ["uiux", "frontend", "backend", "design", "print"],
        year: "2022-2025",
        role: `${t("projects.roles.graficDesign")}, ${t("projects.roles.brandDev")}, ${t(
      "projects.roles.uiuxDesigner"
    )}, ${t("projects.roles.developer")}`,
        client: t("projects.clients.companyWork"),
        gallery: [
            "./assets/projects/redlinkat/redlinkat2.jpg",
            "./assets/projects/redlinkat/redlink-geschaeftsdrucksorten-give-aways.jpg",
            "./assets/projects/redlinkat/redlink-flyer.jpg",
            "./assets/projects/redlinkat/rollup-zweier.jpg",
            "./assets/projects/redlinkat/redlink-weihnachtseinladung.jpg",
            "./assets/projects/redlinkat/Redlink-10-jahresfeier-Einladung.jpg",
            "./assets/projects/redlinkat/hackathon-2.jpg",
        ],
        links: [{
            title: "Website",
            url: "https://redlink.at/",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
        galleryGrid: "full",
    },
    {
        id: "redlinkWhiteppaer",
        title: t("projects.projectList.redlinkatWhitepaper.title"),
        subtitle: t("projects.projectList.redlinkatWhitepaper.subtitle"),
        description: t("projects.projectList.redlinkatWhitepaper.description"),
        image: "./assets/projects/redlinkat-whitepaper/redlink-llm-whitepaper-front.jpg",
        tags: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
        filterTags: ["design", "print", "product"],
        year: "2023-2024",
        role: `${t("projects.roles.graficDesign")}, ${t("projects.roles.developer")}`,
        client: t("projects.clients.companyWork"),
        details: [{
                title: t("projects.projectList.redlinkatWhitepaper.goodSearchUXTitle"),
                content: t("projects.projectList.redlinkatWhitepaper.goodSearchUX"),
            },
            {
                title: t("projects.projectList.redlinkatWhitepaper.llmTitle"),
                content: t("projects.projectList.redlinkatWhitepaper.llm"),
            },
        ],
        gallery: [
            "./assets/projects/redlinkat-whitepaper/good-search-ux-2.jpg",
            "./assets/projects/redlinkat-whitepaper/redlink-llm.jpg",
        ],
        links: [{
                title: t("projects.projectList.redlinkatWhitepaper.goodSearchUXTitle"),
                url: "https://redlink.at/solutions/search",
                icon: "pi pi-external-link",
                type: "external",
            },
            {
                title: t("projects.projectList.redlinkatWhitepaper.llmTitleShort"),
                url: "https://redlink.at/solutions/llm",
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
        image: "./assets/projects/dachsteinTicketshop/ticketshop_dreier.jpg",
        tags: ["Pimcore", "Stylelab", "VanillaJS", "CSS", "HTML", "PHP"],
        filterTags: ["frontend"],
        year: "2021",
        role: t("projects.roles.frontendDev"),
        client: t("projects.clients.internshipProject"),
        details: [{
                title: t("projects.detailTitle.projectOverview"),
                content: t("projects.projectList.dachsteinTicketshop.overviewDesc"),
            },
            {
                title: t("projects.detailTitle.technicalImplementation"),
                content: t("projects.projectList.dachsteinTicketshop.technicalDesc"),
            },
        ],
        gallery: [
            "./assets/projects/dachsteinTicketshop/ticketshop_dreier.jpg",
            "./assets/projects/dachsteinTicketshop/ticketshop-more.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "plantbase",
        title: t("projects.projectList.plantbase.title"),
        subtitle: t("projects.projectList.plantbase.subtitle"),
        description: t("projects.projectList.plantbase.description"),
        image: "./assets/projects/plantbase/plantbase_mockup.jpg",
        tags: [
            "Adobe XD",
            "Prototyping",
            "Vue.js",
            "Twig",
            "JavaScript",
            "Symphony",
            "PHP",
            "MySQL",
            "Xamp"
        ],
        filterTags: ["uiux", "frontend", "backend"],
        year: "2020",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.fullstackDev")}`,
        client: t("projects.clients.studyProject"),
        details: [{
                title: t("projects.detailTitle.projectOverview"),
                content: t("projects.projectList.plantbase.overviewDesc"),
            },
            {
                title: t("projects.detailTitle.technicalImplementation"),
                content: t("projects.projectList.plantbase.techincalDesc"),
            },
        ],
        gallery: [
            "./assets/projects/plantbase/plantbase_mockup.jpg",
            "./assets/projects/plantbase/unterseiten01.jpg",
            "./assets/projects/plantbase/unterseiten02.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "gameShop",
        title: t("projects.projectList.gameShop.title"),
        subtitle: t("projects.projectList.gameShop.subtitle"),
        description: t("projects.projectList.gameShop.description"),
        image: "./assets/projects/gameShop/mockup_small1.jpg",
        tags: ["Adobe XD", "Prototyping"],
        filterTags: ["uiux"],
        year: "2019",
        role: `${t("projects.roles.uiuxDesigner")}`,
        client: t("projects.clients.studyProject"),
        details: [{
            title: t("projects.detailTitle.projectOverview"),
            content: t("projects.projectList.gameShop.overviewDesc"),
        }, ],
        gallery: [
            "./assets/projects/gameShop/mockup.jpg",
            "./assets/projects/gameShop/mockup_all.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "steuerkanzleiKaufmann",
        title: t("projects.projectList.steuerkanzleiKaufmann.title"),
        subtitle: t("projects.projectList.steuerkanzleiKaufmann.subtitle"),
        description: t("projects.projectList.steuerkanzleiKaufmann.description"),
        image: "./assets/projects/steuerkanzleiKaufmann/mockup.jpg",
        tags: ["Adobe XD", "Prototyping", "HTML", "CSS", "VanillaJs"],
        filterTags: ["uiux", "frontend"],
        year: "2018",
        role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}`,
        client: t("projects.clients.internshipProject"),
        details: [{
            title: t("projects.detailTitle.projectOverview"),
            content: t("projects.projectList.steuerkanzleiKaufmann.overviewDesc"),
        }, ],
        gallery: [
            "./assets/projects/steuerkanzleiKaufmann/mockup.jpg",
            "./assets/projects/steuerkanzleiKaufmann/unterseiten.jpg",
        ],
        links: [{
            title: "Website",
            url: "https://www.kaufmann-steuerkanzlei.de/",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
        galleryGrid: "full",
    },
    {
        id: "invent",
        title: t("projects.projectList.invent.title"),
        subtitle: t("projects.projectList.invent.subtitle"),
        description: t("projects.projectList.invent.description"),
        image: "./assets/projects/invent/geschaeftsdrucksorten.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2016-2017",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.companyWork"),
        details: [{
            title: t("projects.detailTitle.projectOverview"),
            content: t("projects.projectList.invent.overviewDesc"),
        }, ],
        gallery: [
            "./assets/projects/invent/geschaeftsdrucksorten-2.jpg",
            "./assets/projects/invent/folder-mock.jpg",
            "./assets/projects/invent/magazin-web.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "roco",
        title: t("projects.projectList.roco.title"),
        subtitle: t("projects.projectList.roco.subtitle"),
        description: t("projects.projectList.roco.description"),
        image: "./assets/projects/roco/kataloge.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2015-2016",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.companyWork"),
        gallery: [
            "./assets/projects/roco/roco-kataloge-mock.jpg",
            "./assets/projects/roco/roco-verpackungen.jpg",
            "./assets/projects/roco/inserat-messestand.jpg",
            "./assets/projects/roco/illustrations-mock.jpg",
        ],
        galleryGrid: "full",
        links: [{
            title: "Website",
            url: "https://www.roco.cc/",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
    },
    {
        id: "wiberg",
        title: t("projects.projectList.wiberg.title"),
        subtitle: t("projects.projectList.wiberg.subtitle"),
        description: t("projects.projectList.wiberg.description"),
        image: "./assets/projects/wiberg/cocktailheft_small.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            "Adobe InDesign",
            "Adobe InCopy",
            "Adobe Illustrator",
        ],
        filterTags: ["design", "print"],
        year: "2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.internshipProject"),
        gallery: [
            "./assets/projects/wiberg/kataloge-mock.jpg",
            "./assets/projects/wiberg/cocktailheft_inserat_huettengaudi.jpg",
        ],
        galleryGrid: "full",
        links: [{
            title: "Website",
            url: "https://www.wiberg.eu/de",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
    },
    {
        id: "inspiranto",
        title: t("projects.projectList.inspiranto.title"),
        subtitle: t("projects.projectList.inspiranto.subtitle"),
        description: t("projects.projectList.inspiranto.description"),
        image: "./assets/projects/inspiranto/schmiede-heft.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.illustration"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print"],
        year: "2014-2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.internshipProject"),
        gallery: [
            "./assets/projects/inspiranto/schmiede-mock.jpg",
            "./assets/projects/inspiranto/xjagd_slider.jpg",
        ],
        galleryGrid: "full",
        links: [{
            title: "Website",
            url: "https://www.inspiranto.com/",
            icon: "pi pi-external-link",
            type: "external",
        }, ],
    },
    {
        id: "hajimaru",
        title: t("projects.projectList.hajimaru.title"),
        subtitle: t("projects.projectList.hajimaru.subtitle"),
        description: t("projects.projectList.hajimaru.description"),
        image: "./assets/projects/hajimaru/geschaeftsdrucksorten.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            t("projects.tags.illustration"),
            t("projects.tags.campaignDesign"),
            t("projects.tags.packagingDesgin"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "packaging", "product"],
        year: "2015",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        details: [{
            title: t("projects.detailTitle.projectOverview"),
            content: t("projects.projectList.hajimaru.overviewDesc"),
        }, ],
        gallery: [
            "./assets/projects/hajimaru/cafe-drawings.jpg",
            "./assets/projects/hajimaru/geschaeftsdrucksorten-eventfolder.jpg",
            "./assets/projects/hajimaru/speisekarte-verpackung.jpg",
            "./assets/projects/hajimaru/aufhang-pakate-inserat.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "tube",
        title: t("projects.projectList.tube.title"),
        subtitle: t("projects.projectList.tube.subtitle"),
        description: t("projects.projectList.tube.description"),
        image: "./assets/projects/tube/busStop.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            t("projects.tags.typoDev"),
            t("projects.tags.illustration"),
            t("projects.tags.campaignDesign"),
            t("projects.tags.merch"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2014",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        details: [{
                title: t("projects.detailTitle.philosophy"),
                content: t("projects.projectList.tube.philosophyDesc"),
            },
            {
                title: t("projects.detailTitle.usp"),
                content: t("projects.projectList.tube.uspDesc"),
            },
            {
                title: t("projects.detailTitle.targetGroup"),
                content: t("projects.projectList.tube.targetGroupDesc"),
            },
        ],
        gallery: [
            "./assets/projects/tube/geschaeftsdrucksorten-mock.jpg",
            "./assets/projects/tube/folder-mock.jpg",
            "./assets/projects/tube/plakate-mock.jpg",
            "./assets/projects/tube/merch.jpg",
            "./assets/projects/tube/oeffi-design.jpg",
            "./assets/projects/tube/alice-design.jpg",
            "./assets/projects/tube/schillder-design.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "landespreis2014",
        title: t("projects.projectList.landespreis2014.title"),
        subtitle: t("projects.projectList.landespreis2014.subtitle"),
        description: t("projects.projectList.landespreis2014.description"),
        image: "./assets/projects/landespreis2014/citilight_plakat.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            t("projects.tags.illustration"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2014",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        gallery: [
            "./assets/projects/landespreis2014/einladung-eintrittskarte.jpg",
            "./assets/projects/landespreis2014/folder.jpg",
            "./assets/projects/landespreis2014/postkarte-inserate-urkunde.jpg",
            "./assets/projects/landespreis2014/aussen-mock.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "untersbergbahn",
        title: t("projects.projectList.untersbergbahn.title"),
        subtitle: t("projects.projectList.untersbergbahn.subtitle"),
        description: t("projects.projectList.untersbergbahn.description"),
        image: "./assets/projects/untersbergbahn/innen-01.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            t("projects.tags.illustration"),
            t("projects.tags.campaignDesign"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2013",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        details: [{
                title: t("projects.detailTitle.philosophy"),
                content: t("projects.projectList.tube.philosophyDesc"),
            },
            {
                title: t("projects.detailTitle.usp"),
                content: t("projects.projectList.tube.uspDesc"),
            },
            {
                title: t("projects.detailTitle.targetGroup"),
                content: t("projects.projectList.tube.targetGroupDesc"),
            },
        ],
        gallery: [
            "./assets/projects/untersbergbahn/bilder.jpg",
            "./assets/projects/untersbergbahn/geschaeftsdrucksorten.jpg",
            "./assets/projects/untersbergbahn/broschuere.jpg",
            "./assets/projects/untersbergbahn/innenraum.jpg",
            "./assets/projects/untersbergbahn/busstop-flyer-postkarte.jpg",
            "./assets/projects/untersbergbahn/oeffis.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "heartBeat",
        title: t("projects.projectList.heratBeat.title"),
        subtitle: t("projects.projectList.heratBeat.subtitle"),
        description: t("projects.projectList.heratBeat.description"),
        image: "./assets/projects/heartbeat/business-cards.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.brandDesign"),
            t("projects.tags.illustration"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2013",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.internshipProject"),
        details: [{
                title: t("projects.detailTitle.philosophy"),
                content: t("projects.projectList.heartBeat.philosophyDesc"),
            },
            {
                title: t("projects.detailTitle.targetGroup"),
                content: t("projects.projectList.heartBeat.targetGroupDesc"),
            },
            {
                title: t("projects.detailTitle.service"),
                content: t("projects.projectList.heartBeat.serviceDesc"),
            },
        ],
        gallery: [
            "./assets/projects/heartbeat/cafe-mocks.jpg",
            "./assets/projects/heartbeat/geschaeftsdrucksorten.jpg",
            "./assets/projects/heartbeat/folder.jpg",
        ],
        galleryGrid: "full",
    },
    {
        id: "cruiseMissilesRoyality",
        title: t("projects.projectList.cruiseMissilesRoyality.title"),
        subtitle: t("projects.projectList.cruiseMissilesRoyality.subtitle"),
        description: t("projects.projectList.cruiseMissilesRoyality.description"),
        image: "./assets/projects/cruiseMissilesRoyality/offen2.jpg",
        tags: [
            t("projects.tags.graficDesign"),
            t("projects.tags.packagingDesgin"),
            t("projects.tags.promo"),
            "Adobe InDesign",
            "Adobe Illustrator",
            "Adobe Photoshop",
        ],
        filterTags: ["design", "print", "product"],
        year: "2013",
        role: t("projects.roles.graficDesign"),
        client: t("projects.clients.studyProject"),
        details: [{
            title: t("projects.detailTitle.philosophy"),
            content: t("projects.projectList.cruiseMissilesRoyality.overviewDesc"),
        }, ],
        gallery: [
            "./assets/projects/cruiseMissilesRoyality/mock1.jpg",
            "./assets/projects/cruiseMissilesRoyality/mock2.jpg",
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

const toggleProject = (project: ProjectItem | null) => {
    selectedProject.value = selectedProject.value?.id === project?.id ? null : project;

    let scrollToElementId = selectedProject.value ? selectedProject.value.id : project?.id;
    let timeoutCount = selectedProject.value ? 150 : 300;

    setTimeout(() => {
        document
            .getElementById(`${scrollToElementId}-header`)?.scrollIntoView({ behavior: "smooth" })
    }, timeoutCount)
}

/*
const getSkillName = (skillCode: string) => {
  const skill = filterItems.value.find((s) => s.code === skillCode);
  return skill ? skill.name : skillCode;
};
*/

const isModalVisible = ref < boolean > (false);
</script>

<template>
    <div class="projects">
    
        <FullWidthHeader image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000">
    
            <h1>{{ t("projects.title") }}</h1>
    
            <p>Innovative solutions crafted with passion and precision</p>
    
        </FullWidthHeader>
    
    
    
        <ContentContainer>
    
            <!-- Filter Skills -->
    
            <ScrollReveal>
    
                <FilterGroup :filters="filterItems" :selected-filter="selectedFilter" @toggled-filter="toggleFilter($event)" />
    
            </ScrollReveal>
    
    
    
            <TransitionGroup name="projects-grid" tag="div" class="grid" :class="[selectedProject ? 'grid-cols-1' : 'grid-cols-2']">
    
                <ScrollReveal v-for="(project, index) in filteredProjects" :key="project.id" :delay="index * 100" direction="up">
    
                    <ProjectCard :project="project" :is-selected="selectedProject?.id === project.id" :selected-filter="selectedFilter" :filter-items="filterItems" @toggled-project="toggleProject(project)" @open-gallery-modal="
    
                  () => {
    
                    console.log('open gallery modal emit was called: ');
    
                    isModalVisible = true;
    
                  }
    
                " />
    
                </ScrollReveal>
    
            </TransitionGroup>
    
    
    
            <ScrollReveal>
    
                <ContactSection />
    
            </ScrollReveal>
    
        </ContentContainer>
    
    </div>
    
    
    
    <GalleryModal v-if="selectedProject" :is-visible="isModalVisible" :selected-project="selectedProject" @close-gallery-modal="isModalVisible = false" />
</template>
