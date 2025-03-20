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
    id: "redlinkGPTPrint",
    title: t("projects.projectList.redlinkGPTPrint.title"),
    subtitle: t("projects.projectList.redlinkGPTPrint.subtitle"),
    description: t("projects.projectList.redlinkGPTPrint.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["Figma", "Prototyping", "HTML", "CSS", "VanillaJs"],
    filterTags: ["design", "product"],
    year: "2025   ",
    role: `${t("projects.roles.design")}, ${t("projects.roles.brandDesign")}, ${t(
      "projects.roles.productDevelopment"
    )}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.redlinkGPTPrint.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.redlinkGPTPrint.technicalDesc"),
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
    id: "redlinkPrint",
    title: t("projects.projectList.rdlinkPrint.title"),
    subtitle: t("projects.projectList.rdlinkPrint.subtitle"),
    description: t("projects.projectList.rdlinkPrint.description"),
    image: "./src/assets/img/projects/web/dachsteinTicketshop/ticketshop_dreier.jpg",
    tags: ["Figma", "Prototyping", "HTML", "CSS", "VanillaJs"],
    filterTags: ["design", "product"],
    year: "2025   ",
    role: `${t("projects.roles.design")}, ${t("projects.roles.brandDesign")}, ${t(
      "projects.roles.productDevelopment"
    )}`,
    client: t("projects.clients.companyWork"),
    details: [
      {
        title: t("projects.detailTitle.projectOverview"),
        content: t("projects.projectList.rdlinkPrint.overviewDesc"),
      },
      {
        title: t("projects.detailTitle.technicalImplementation"),
        content: t("projects.projectList.rdlinkPrint.technicalDesc"),
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
        content: t("projects.projectList.ivnent.overviewDesc"),
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
      t("projects.tags.brandDesign"),
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
      "./src/assets/img/projects/grafic/wiberg/yes-vegan.jpg",
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
      t("projects.tags.brandDesign"),
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
      "./src/assets/img/projects/grafic/inspiranto/schmiede-heft.jpg",
      "./src/assets/img/projects/grafic/inspiranto/schmiede-plakat.jpg",
      "./src/assets/img/projects/grafic/inspiranto/xjagd_illus.jpg",
      "./src/assets/img/projects/grafic/inspiranto/sjagd_slider.jpg",
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
      t("projects.tags.packagingDesign"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.studyProject"),
    details: [
      {
        title: t("projects.detailTitle.overviewDesc"),
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
      "./src/assets/img/projects/grafic/hajimaru/inserate.jpg",
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
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.internshipProject"),
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
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-eintrittskarten.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-flyer.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/alice-busstop.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/schiller-busstop.jpg",
      "./src/assets/img/projects/grafic/tube/veranstaltungen/schillder-eintrittskarten.jpg",
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
    image: "./src/assets/img/projects/grafic/untersbergbahn/gondel-blau.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.brandDesign"),
      t("projects.tags.illustration"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print"],
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
      "./src/assets/img/projects/grafic/untersbergbahn/visitnekarte-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/visitenkarte-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/briefpapier.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/broschuere.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bild-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/bild-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-02.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-01.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/innen-03.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/flyer.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/postkarten.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/gondel-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/bogenplakat-blau.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/bogenplakat-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/bogenplakat-both.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/busstation.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/busdesign-gruen.jpg",
      "./src/assets/img/projects/grafic/untersbergbahn/veranstaltungen/busdesign-blau.jpg",
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
    id: "heartBeat",
    title: t("projects.projectList.heratBeat.title"),
    subtitle: t("projects.projectList.heratBeat.subtitle"),
    description: t("projects.projectList.heratBeat.description"),
    image: "./src/assets/img/projects/grafic/heratBeat/business-cards.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.brandDesign"),
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
      "./src/assets/img/projects/grafic/heratBeat/business-cards.jpg",
      "./src/assets/img/projects/grafic/heratBeat/business-cards2.jpg",
      "./src/assets/img/projects/grafic/heratBeat/briefpapier.jpg",
      "./src/assets/img/projects/grafic/heratBeat/speisekarte-2.jpg",
      "./src/assets/img/projects/grafic/heratBeat/speisekarte.jpg",
      "./src/assets/img/projects/grafic/heratBeat/aussenansicht.jpg",
      "./src/assets/img/projects/grafic/heratBeat/innenansicht.jpg",
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
    id: "cruiseMissilesRoyality",
    title: t("projects.projectList.cruiseMissilesRoyality.title"),
    subtitle: t("projects.projectList.cruiseMissilesRoyality.subtitle"),
    description: t("projects.projectList.cruiseMissilesRoyality.description"),
    image: "./src/assets/img/projects/grafic/cruiseMissilesRoyalityt/offen2.jpg",
    tags: [
      t("projects.tags.graficDesign"),
      t("projects.tags.packagingDesign"),
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe Photoshop",
    ],
    filterTags: ["design", "print"],
    year: "2015",
    role: t("projects.roles.graficDesign"),
    client: t("projects.clients.internshipProject"),
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
