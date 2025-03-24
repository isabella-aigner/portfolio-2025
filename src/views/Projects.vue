<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { TransitionGroup } from "vue";
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

const selectedProject = ref<ProjectItem | null>(null);
const selectedFilter = ref<string | null>(null);

// Set initial filter from route query
onMounted(() => {
  const filterFromQuery = route.query.filter as string;
  if (filterFromQuery) {
    selectedFilter.value = filterFromQuery;
    console.log("onmounted: selectedFilter: ", selectedFilter.value);
  }
});

const toggleFilter = (filterId: string) => {
  if (filterId) router.replace({ query: { ...route.query, filter: filterId } });
  else {
    const query = { ...route.query };
    delete query.filter;
    router.replace({ query });
  }
  selectedFilter.value = filterId;
};

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

const projects = ref<ProjectItem[]>([
  {
    id: "redlinkGPT",
    title: t("projects.projectList.redlinkGPT.title"),
    subtitle: t("projects.projectList.redlinkGPT.subtitle"),
    description: t("projects.projectList.redlinkGPT.description"),
    image: "./src/assets/img/projects/web/redlinkGPT/mock.jpg",
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
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.redlinkGPT.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.usp"),
        content: t("projects.projectList.redlinkGPT.appDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/web/redlinkGPT/unterseiten.jpg",
      "./src/assets/img/projects/web/redlinkGPT/redlinkgpt-chat-assistant.jpg",
      "./src/assets/img/projects/web/redlinkGPT/redlinkgpt-support-ticket.jpg",
      "./src/assets/img/projects/web/redlinkGPT/redlinkgpt-reisekosten-terminbuchung.jpg",
      "./src/assets/img/projects/grafic/redlinkGPT/redlinkGPT-Flyer.jpg",
      "./src/assets/img/projects/grafic/redlinkGPT/redlinkgpt-6seiter.jpg",
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
    image: "./src/assets/img/projects/web/more/more-visual-prev.png",
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
      "./src/assets/img/projects/web/more/more-banner-2.jpg",
      "./src/assets/img/projects/web/more/more-visual-prev-2.png",
      "./src/assets/img/projects/web/more/more-mobiles.jpg",
    ],
    links: [
      {
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
    image: "./src/assets/img/projects/web/redlinkat/redlinkat.jpg",
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
      "./src/assets/img/projects/web/redlinkat/redlinkat2.jpg",
      "./src/assets/img/projects/grafic/redlinkat/redlink-geschaeftsdrucksorten-give-aways.jpg",
      "./src/assets/img/projects/grafic/redlinkat/redlink-flyer.jpg",
      "./src/assets/img/projects/grafic/redlinkat/rollup-zweier.jpg",
      "./src/assets/img/projects/grafic/redlinkat/redlink-weihnachtseinladung.jpg",
      "./src/assets/img/projects/grafic/redlinkat/Redlink-10-jahresfeier-Einladung.jpg",
      "./src/assets/img/projects/grafic/redlinkat/hackathon-2.jpg",
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
    id: "redlinkWhiteppaer",
    title: t("projects.projectList.redlinkatWhitepaper.title"),
    subtitle: t("projects.projectList.redlinkatWhitepaper.subtitle"),
    description: t("projects.projectList.redlinkatWhitepaper.description"),
    image:
      "./src/assets/img/projects/grafic/redlinkatWhitepaper/redlink-llm-whitepaper-front.jpg",
    tags: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    filterTags: ["design", "print", "product"],
    year: "2022-2024",
    role: `${t("projects.roles.graficDesign")}, ${t("projects.roles.developer")}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.projectList.redlinkatWhitepaper.goodSearchUXTitle"),
        content: t("projects.projectList.redlinkatWhitepaper.goodSearchUX"),
      },
      {
        title: t("projects.projectList.redlinkatWhitepaper.llmTitle"),
        content: t("projects.projectList.redlinkatWhitepaper.llm"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/grafic/redlinkatWhitepaper/good-search-ux-2.jpg",
      "./src/assets/img/projects/grafic/redlinkatWhitepaper/redlink-llm.jpg",
    ],
    links: [
      {
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
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["Pimcore", "VanillaJS", "CSS", "HTML", "PHP"],
    filterTags: ["frontend"],
    year: "2020",
    role: t("projects.roles.frontendDev"),
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
    role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.fullstackDev")}`,
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
    tags: ["Adobe XD", "Prototyping"],
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
    tags: ["Adobe XD", "Prototyping", "HTML", "CSS", "VanillaJs"],
    filterTags: ["uiux", "frontend"],
    year: "2018",
    role: `${t("projects.roles.uiuxDesigner")}, ${t("projects.roles.frontendDev")}`,
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
  {
    id: "invent",
    title: t("projects.projectList.invent.title"),
    subtitle: t("projects.projectList.invent.subtitle"),
    description: t("projects.projectList.invent.description"),
    image: "./src/assets/img/projects/grafic/invent/geschaeftsdrucksorten.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.brandDesign"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print", "product"],
    year: "2017",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.invent.overviewDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/grafic/invent/geschaeftsdrucksorten.jpg",
      "./src/assets/img/projects/grafic/invent/folder.jpg",
      "./src/assets/img/projects/grafic/invent/booklet-kundenwerbung.jpg",
      "./src/assets/img/projects/grafic/invent/web2.jpg",
      "./src/assets/img/projects/grafic/invent/banderolen_small.jpg",
      "./src/assets/img/projects/grafic/invent/einkaufsfolder_small.jpg",
      "./src/assets/img/projects/grafic/invent/gutscheinheft.jpg",
    ],
  },
  {
    id: "roco",
    title: t("projects.projectList.roco.title"),
    subtitle: t("projects.projectList.roco.subtitle"),
    description: t("projects.projectList.roco.description"),
    image: "./src/assets/img/projects/grafic/roco/kataloge.jpg",
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
      "./src/assets/img/projects/grafic/roco/kataloge.jpg",
      "./src/assets/img/projects/grafic/roco/roco-kataloge.jpg",
      "./src/assets/img/projects/grafic/roco/minitank-katalge.jpg",
      "./src/assets/img/projects/grafic/roco/roco-next-generation.jpg",
      "./src/assets/img/projects/grafic/roco/roco-verpackung.jpg",
      "./src/assets/img/projects/grafic/roco/web_fb.jpg",
      "./src/assets/img/projects/grafic/roco/anzeigen.jpg",
      "./src/assets/img/projects/grafic/roco/mini_messetand.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.roco.cc/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
  },
  {
    id: "wiberg",
    title: t("projects.projectList.wiberg.title"),
    subtitle: t("projects.projectList.wiberg.subtitle"),
    description: t("projects.projectList.wiberg.description"),
    image: "./src/assets/img/projects/grafic/wiberg/cocktailheft_small.jpg",
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
      "./src/assets/img/projects/grafic/wiberg/sortimentskatalog.jpg",
      "./src/assets/img/projects/grafic/wiberg/yes-vegan_small1.jpg",
      "./src/assets/img/projects/grafic/wiberg/yes-vegan_small2.jpg",
      "./src/assets/img/projects/grafic/wiberg/seminareinladung.jpg",
      "./src/assets/img/projects/grafic/wiberg/inserate.jpg",
      "./src/assets/img/projects/grafic/wiberg/gutschein.jpg",
      "./src/assets/img/projects/grafic/wiberg/cocktailheft.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.wiberg.eu/de",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
  },
  {
    id: "inspiranto",
    title: t("projects.projectList.inspiranto.title"),
    subtitle: t("projects.projectList.inspiranto.subtitle"),
    description: t("projects.projectList.inspiranto.description"),
    image: "./src/assets/img/projects/grafic/inspiranto/schmiede-heft.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.illustration"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.internshipProject"),
    gallery: [
      "./src/assets/img/projects/grafic/inspiranto/schmiede-heft_small.jpg",
      "./src/assets/img/projects/grafic/inspiranto/schmiede-plakat.jpg",
      "./src/assets/img/projects/grafic/inspiranto/xjagd_illus.jpg",
      "./src/assets/img/projects/grafic/inspiranto/xjagd_slider.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.inspiranto.com/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
  },
  {
    id: "hajimaru",
    title: t("projects.projectList.hajimaru.title"),
    subtitle: t("projects.projectList.hajimaru.subtitle"),
    description: t("projects.projectList.hajimaru.description"),
    image: "./src/assets/img/projects/grafic/hajimaru/geschaeftsdrucksorten.jpg",
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
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.hajimaru.overviewDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/grafic/hajimaru/cafe1.jpg",
      "./src/assets/img/projects/grafic/hajimaru/cafe4.jpg",
      "./src/assets/img/projects/grafic/hajimaru/cafe3.jpg",
      "./src/assets/img/projects/grafic/hajimaru/visitenkarten.jpg",
      "./src/assets/img/projects/grafic/hajimaru/geschaeftsdrucksorten.jpg",
      "./src/assets/img/projects/grafic/hajimaru/veranstaltung.jpg",
      "./src/assets/img/projects/grafic/hajimaru/speisekarte.jpg",
      "./src/assets/img/projects/grafic/hajimaru/verpackungen.jpg",
      "./src/assets/img/projects/grafic/hajimaru/beschilderungen.jpg",
      "./src/assets/img/projects/grafic/hajimaru/plakate.jpg",
      "./src/assets/img/projects/grafic/hajimaru/plakate2.jpg",
      "./src/assets/img/projects/grafic/hajimaru/inserat.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.inspiranto.com/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
  },
  {
    id: "tube",
    title: t("projects.projectList.tube.title"),
    subtitle: t("projects.projectList.tube.subtitle"),
    description: t("projects.projectList.tube.description"),
    image: "./src/assets/img/projects/grafic/tube/busstop.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.brandDesign"),
      t("projects.tags.illustration"),
      t("projects.tags.campaignDesign"),
      t("projects.tags.merch"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print", "product"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.studyProject"),
    details: [
      {
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
      "./src/assets/img/projects/grafic/tube/business-cards.jpg",
      "./src/assets/img/projects/grafic/tube/geschaeftsdrucksorten.jpg",
      "./src/assets/img/projects/grafic/tube/folder.jpg",
      "./src/assets/img/projects/grafic/tube/eintrittskarten.jpg",
      "./src/assets/img/projects/grafic/tube/tshirts_2.jpg",
      "./src/assets/img/projects/grafic/tube/flyerstaender.jpg",
      "./src/assets/img/projects/grafic/tube/wristband.jpg",
      "./src/assets/img/projects/grafic/tube/taschen.jpg",
      "./src/assets/img/projects/grafic/tube/busstop.jpg",
      "./src/assets/img/projects/grafic/tube/plakate.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-eintrittskarte.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-flyer.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-busstop.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/schiller-busstop.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/schillder-eintrittskarte.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/schiller-flyer.jpg",
    ],
    links: [
      {
        title: "Website",
        url: "https://www.inspiranto.com/",
        icon: "pi pi-external-link",
        type: "external",
      },
    ],
  },
  {
    id: "untersbergbahn",
    title: t("projects.projectList.untersbergbahn.title"),
    subtitle: t("projects.projectList.untersbergbahn.subtitle"),
    description: t("projects.projectList.untersbergbahn.description"),
    image: "./src/assets/img/projects/grafic/untersbergbahn/innen-01.jpg",
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
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.studyProject"),
    details: [
      {
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
      "./src/assets/img/projects/grafic/untersbergbahn/visitenkarte-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/visitenkarte-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/briefpapier.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/broschuere.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bild-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bild-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-02.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-01.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-03.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/flyer.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/postkarten.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/gondel-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bogenplakat-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bogenplakat-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bogenplakat-both.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/busstation.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/busdesign-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/busdesign-blau.jpg",
    ],
  },
  {
    id: "heartBeat",
    title: t("projects.projectList.heratBeat.title"),
    subtitle: t("projects.projectList.heratBeat.subtitle"),
    description: t("projects.projectList.heratBeat.description"),
    image: "./src/assets/img/projects/grafic/heartbeat/business-cards.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.brandDesign"),
      t("projects.tags.illustration"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print", "product"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.internshipProject"),
    gallery: [
      "./src/assets/img/projects/grafic/heartbeat/business-cards.jpg",
      "./src/assets/img/projects/grafic/heartbeat/business-cards-2.jpg",
      "./src/assets/img/projects/grafic/heartbeat/briefpapier.jpg",
      "./src/assets/img/projects/grafic/heartbeat/speisekarte-2.jpg",
      "./src/assets/img/projects/grafic/heartbeat/speisekarte.jpg",
      "./src/assets/img/projects/grafic/heartbeat/aussenansicht.jpg",
      "./src/assets/img/projects/grafic/heartbeat/innenansicht.jpg",
    ],
  },
  {
    id: "cruiseMissilesRoyality",
    title: t("projects.projectList.cruiseMissilesRoyality.title"),
    subtitle: t("projects.projectList.cruiseMissilesRoyality.subtitle"),
    description: t("projects.projectList.cruiseMissilesRoyality.description"),
    image: "./src/assets/img/projects/grafic/cruiseMissilesRoyality/offen2.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.packagingDesgin"),
      t("projects.tags.promo"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print", "product"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.studyProject"),
    details: [
      {
        title: t("projects.detailTitle.philosophy"),
        content: t("projects.projectList.cruiseMissilesRoyality.overviewDesc"),
      },
    ],
    gallery: [
      "./src/assets/img/projects/grafic/cruiseMissilesRoyality/geschlossen.jpg",
      "./src/assets/img/projects/grafic/cruiseMissilesRoyality/offen1.jpg",
      "./src/assets/img/projects/grafic/cruiseMissilesRoyality/offen2.jpg",
      "./src/assets/img/projects/grafic/cruiseMissilesRoyality/offen3.jpg",
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

const isModalVisible = ref<boolean>(false);
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
          @toggled-filter="toggleFilter($event)"
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
            @open-gallery-modal="
              () => {
                console.log('open gallery modal emit was called: ');
                isModalVisible = true;
              }
            "
          />
        </ScrollReveal>
      </TransitionGroup>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>

  <GalleryModal
    v-if="selectedProject"
    :is-visible="isModalVisible"
    :selected-project="selectedProject"
    @close-gallery-modal="isModalVisible = false"
  />
</template>
