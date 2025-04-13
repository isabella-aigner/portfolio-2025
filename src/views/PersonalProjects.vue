<script setup lang="ts">
import { ref, computed, onMounted, ComputedRef } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";
import { ImageItem } from "../models/ImageItem";
import { useIsMobile } from '../composables/useIsModbile';

import ContactSection from "../components/ContactCard.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";
import FilterGroup from "../components/FilterGroup.vue";
import ProjectCard from "../components/ProjectCard.vue";
import HeaderSlider from "../components/HeaderSlider.vue";



const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const { isMobile } = useIsMobile()

const selectedProject = ref<ProjectItem | null>(null);
const selectedFilter = ref<string | null>(null);

// Set initial filter from route query
onMounted(() => {
  const filterFromQuery = route.query.filter as string;
  if (filterFromQuery) {
    selectedFilter.value = filterFromQuery;
  }
});

const sliderImages: ComputedRef<ImageItem[]> = computed(() => [
  {
    imgLink: `./assets/header/${isMobile.value ? 'mobile' : 'desktop'}/iris.jpg`,
    altText: t('headerAltText.republic')
  },
  {
    imgLink: `./assets/header/${isMobile.value ? 'mobile' : 'desktop'}/republic.jpg`,
    altText: t('headerAltText.republic')
  },
  {
    imgLink: `./assets/header/${isMobile.value ? 'mobile' : 'desktop'}/rouka.jpg`,
    altText: t('headerAltText.rouka')
  },
  {
    imgLink: `./assets/header/${isMobile.value ? 'mobile' : 'desktop'}/prag.jpg`,
    altText: t('headerAltText.prag')
  },
])

const filterItems: ComputedRef<FilterItem[]> = computed(() => ([
  {
    name: t("home.skillsList.photography"),
    icon: "pi pi-camera",
    code: "photo",
  },
  {
    name: t("home.skillsList.audio"),
    icon: "pi pi-volume-up",
    code: "audio",
  },
  {
    name: t("home.skillsList.illustration"),
    icon: "pi pi-palette",
    code: "illustration",
  },
  /*
  {
    name: t("home.skillsList.creativeWriting"),
    icon: "pi pi-book",
    code: "writing",
  },
  */
  {
    name: t("home.skillsList.3d"),
    icon: "pi pi-box",
    code: "3d",
  },
  {
    name: t("home.skillsList.game"),
    icon: "pi pi-desktop",
    code: "game",
  },
  {
    name: t("home.skillsList.freeDesign"),
    icon: "pi pi-image",
    code: "design",
  },
]));

const projects: ComputedRef<ProjectItem[]> = computed(() =>([
  {
    id: "makro",
    title: t('projects.freeProjectList.makro.title'),
    subtitle: t('projects.freeProjectList.makro.subtitle'),
    description: t('projects.freeProjectList.makro.description'),
    image:
      "./assets/freeProjects/fotografie/makro/makro_small02.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing'), t('projects.tags.visualArts')],
    filterTags: ["photo"],
    gallery: [
      "./assets/freeProjects/fotografie/makro/macro.jpg",
    ],
    galleryGrid: "full"
  },    
  {
    id: "hausMaschine",
    title: t('projects.freeProjectList.hausMaschine.title'),
    subtitle: t('projects.freeProjectList.hausMaschine.subtitle'),
    description: t('projects.freeProjectList.hausMaschine.description'),
    image:
      "./assets/freeProjects/fotografie/hausMaschine/objekt2.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing'), t('projects.tags.visualArts'), t('projects.tags.crafting')],
    filterTags: ["photo"],
    gallery: [
      "./assets/freeProjects/fotografie/hausMaschine/fotoserie2.jpg",
    ],
    galleryGrid: "full"
  },  
  {
    id: "3d",
    title: t('projects.freeProjectList.3dPlayground.title'),
    description: t('projects.freeProjectList.3dPlayground.description'),
    image: "./assets/freeProjects/3d/fraktale01.jpg",
    tags: ["3D Modelling", "3D Sculpting", "Autodesk Maya", "ZBrush", t('projects.tags.visualArts')],
    filterTags: ["3d"],
    gallery: [
      "./assets/freeProjects/3d/fraktale-mock.jpg",
      "./assets/freeProjects/3d/hexeninsel.jpg",
      "./assets/freeProjects/3d/render-qf2.jpg"
    ],
    galleryGrid: "full",
  },
  {
    id: "soundDesignSnippets",
    title: t("projects.freeProjectList.soundDesignSnippets.title"),
    description: t("projects.freeProjectList.soundDesignSnippets.description"),
    image:
      "./assets/freeProjects/audio/audioSnippets/theDealer-preview.JPG",
    tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Cubase"],
    filterTags: ["audio"],
    audio: [
      {
        title: "100% und mehr Abspann",
        link: "./assets/freeProjects/audio/audioSnippets/abspann.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Showree Begleitung",
        link: "./assets/freeProjects/audio/audioSnippets/final.mp3",
        type: "audio/mpeg",
      },
      {
        title: "Soundaufnahme Morgenroutine",
        link: "./assets/freeProjects/audio/audioSnippets/morning-routine.mp3",
        type: "audio/mpeg",
      },
    ],
    video: [
      {
        title: "The Dealer Sounddesign Konzept",
        link: "./assets/freeProjects/audio/audioSnippets/theDealer.mp4",
        poster: "./assets/freeProjects/audio/audioSnippets/theDealer-preview.JPG",
      },
    ],
  },
  {
    id: "iris",
    title: t("projects.freeProjectList.iris.title"),
    description: t("projects.freeProjectList.iris.description"),
    image: "./assets/freeProjects/game/iris/Iris_Intro_Single.jpg",
    tags: ["Unity", "3D Modelling", "Autodesk Maya",  t('projects.tags.illustration'), t('projects.tags.visualArts')],
    filterTags: ["game", "3d", "illustration", "audio"],
    details: [
      {
        title: t('projects.detailTitle.setting'),
        content: t('projects.freeProjectList.iris.settingDesc')      
      },
    ],
    video: [
      {
        title: t('projects.freeProjectList.iris.videoStart'),
        link: "./assets/freeProjects/game/iris/start-short.mp4",
        poster: "./assets/freeProjects/game/iris/iris-menu.jpg",
      },
      {
        title: t('projects.freeProjectList.iris.videoAlarm'),
        link: "./assets/freeProjects/game/iris/wecker-short.mp4",
        poster: "./assets/freeProjects/game/iris/iris-menu.jpg",
      },
    ],
    gallery: [
      "./assets/freeProjects/game/iris/iris-illustrations.jpg",
      "./assets/freeProjects/game/iris/iris-level.jpg",
    ],
    galleryGrid: "full",
    links: [
      {
        title: t('projects.links.gamejolt'),
        url: "https://gamejolt.com/games/iris/540740",
        icon: "pi pi-external-link",
        type: "external",
      }, 
    ],
  },
  {
    id: "illu",
    title: t("projects.freeProjectList.illu.title"),
    description: t("projects.freeProjectList.illu.description"),
    image: "./assets/freeProjects/illustration/illu/dragon.jpg",
    tags: [t('projects.tags.visualArts'), t('projects.tags.illustration'), t('projects.tags.roetel'), t('projects.tags.grafit'), t('projects.tags.buntstifte'), t('projects.tags.aquarell'), t('projects.tags.tusche'), "Copic Marker", "Paper Art", "Adobe Photoshop"],
    filterTags: ["illustration"],
    gallery: [
      "./assets/freeProjects/illustration/illu/illus-1.jpg",
      "./assets/freeProjects/illustration/illu/illus-2.jpg",
      "./assets/freeProjects/illustration/illu/sketches.jpg",
      "./assets/freeProjects/illustration/illu/dragon-paperart.jpg"
    ],
    galleryGrid: "full",
  },
  {
    id: "dummyMagazin",
    title: t('projects.freeProjectList.dummyMagazin.title'),
    description: t('projects.freeProjectList.dummyMagazin.description'),
    image: "./assets/freeProjects/design/dummyMagazin/dummy-magazin.jpg",
    tags: [t('projects.tags.graficDesign'), t('projects.tags.infografic'), t('projects.tags.printProduction'), "Adobe Illustrator", "Adobe InDesign","Adobe Photoshop"],
    filterTags: ["design"],
    gallery: [
      "./assets/freeProjects/design/dummyMagazin/dummy-mockup1.jpg",
      "./assets/freeProjects/design/dummyMagazin/dummy-mockup2.jpg",
    ],
    galleryGrid: "full"
  }, 
  {
    id: "capoeira",
    title: t('projects.freeProjectList.capoeira.title'),
    subtitle: t('projects.freeProjectList.capoeira.subtitle'),
    description: t('projects.freeProjectList.capoeira.description'),
    image:
      "./assets/freeProjects/fotografie/capoeira/capoeira04.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.studioPhotography'), t('projects.tags.digitalEditing')],
    filterTags: ["photo"],
    gallery: [
      "./assets/freeProjects/fotografie/capoeira/capoeira-row1.jpg",
      "./assets/freeProjects/fotografie/capoeira/capoeira-row2.jpg",
    ],
    galleryGrid: "full"
  },
  {
    id: "microfobius",
    title: t('projects.freeProjectList.microfobius.title'),
    description: t('projects.freeProjectList.microfobius.description'),
    image:
      "./assets/freeProjects/infografics/microfobius/futuristic-city-wallpaper-38.jpg",
    tags: [t('projects.tags.infografic'), "Adobe Illustrator"],
    filterTags: ["design"],
    gallery: [
      "./assets/freeProjects/infografics/microfobius/logo-mock.jpg",
      "./assets/freeProjects/infografics/microfobius/republic-1.jpg",
    ],
    galleryGrid: "full"
  },
  {
    id: "nevilleBrody",
    title: t('projects.freeProjectList.nevilleBrody.title'),
    description: t('projects.freeProjectList.nevilleBrody.description'),
    image: "./assets/freeProjects/design/nevilleBrody/nevillebrody.jpg",
    tags: [t('projects.tags.printProduction'), "Adobe Illustrator", "Adobe InDesign"],
    filterTags: ["design"],
    gallery: [
      "./assets/freeProjects/design/nevilleBrody/neville-brody-plakate.jpg",
      "./assets/freeProjects/design/nevilleBrody/nevillebrody.jpg",
    ],
    galleryGrid: "full"
  },   
  {
    id: "vectorIllu",
    title: t("projects.freeProjectList.vectorIllu.title"),
    description: t("projects.freeProjectList.vectorIllu.description"),
    image: "./assets/freeProjects/illustration/vectorIllustration/cat02.jpg",
    tags: ["Vector", t('projects.tags.illustration'), t('projects.tags.visualArts'), "Adobe Illustrator"],
    filterTags: ["illustration"],
    gallery: [
      "./assets/freeProjects/illustration/vectorIllustration/howToTrainYourDragon.jpg",
      "./assets/freeProjects/illustration/vectorIllustration/cat-illustration.jpg",
      "./assets/freeProjects/illustration/vectorIllustration/cat-illustration2.jpg",
      "./assets/freeProjects/illustration/vectorIllustration/human.jpg"
    ],
    galleryGrid: "full",
  },
  {
    id: "republic",
    title: t('projects.freeProjectList.republic.title'),
    description: t('projects.freeProjectList.republic.description'),
    image:
      "./assets/freeProjects/fotografie/republic/republic_qf.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing')],
    filterTags: ["photo"],
    gallery: [
      "./assets/freeProjects/fotografie/republic/republic_qf.jpg",
      "./assets/freeProjects/fotografie/republic/republic-mock.jpg",
    ],
    galleryGrid: "full"
  },
  {
    id: "subitorato",
    title: t("projects.freeProjectList.subitorato.title"),
    description: t("projects.freeProjectList.subitorato.description"),
    image:
      "./assets/freeProjects/audio/subitorato/cover.jpg",
    tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Cubase"],
    filterTags: ["audio"],
    role: t('projects.roles.audioDev'),
    client: t('projects.clients.studyProject'),
    gallery: [
      "./assets/freeProjects/audio/subitorato/bildkomposition-mock.jpg",
    ],
    galleryGrid: 'full',
    audio: [
      {
        title: t('projects.detailTitle.demoTrack'),
        link: "./assets/freeProjects/audio/subitorato/subitorato.mp3",
        type: "audio/mpeg",
      },
    ],
  },
  {
    id: "meerdesLebens",
    title: t("projects.freeProjectList.meerdesLebens.title"),
    description: t("projects.freeProjectList.meerdesLebens.description"),
    image:
      "./assets/freeProjects/audio/meerDesLebens/cover.jpg",
    tags: [t("projects.tags.recording"), t("projects.tags.audioProd"), "Audacity"],
    filterTags: ["audio"],
    audio: [
      {
        link: "./assets/freeProjects/audio/meerDesLeben/meerLeben.mp3",
        type: "audio/mpeg",
      },
    ],
  },
  {
    id: "landscapePhotography",
    title: t('projects.freeProjectList.landscapePhotography.title'),
    description: t('projects.freeProjectList.landscapePhotography.description'),
    image:
      "./assets/freeProjects/fotografie/landscape/prag.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing')],
    filterTags: ["photo"],
    gallery: [
      "./assets/freeProjects/fotografie/landscape/norway-mock.jpg",
      "./assets/freeProjects/fotografie/landscape/prag.jpg",
    ],
    galleryGrid: "full"
  },  
  {
    id: "mediaInfoGrafic2016",
    title: t('projects.freeProjectList.mediaInfoGrafik2016.title'),
    description: t('projects.freeProjectList.mediaInfoGrafik2016.description'),
    image:
      "./assets/freeProjects/infografics/mediaInfoGrafik2016/cover.jpg",
    tags: [t('projects.tags.infografic'), "Adobe Illustrator"],
    filterTags: ["design"],
    gallery: [
      "./assets/freeProjects/infografics/mediaInfoGrafik2016/infografik2.jpg",
    ],
    galleryGrid: "full"
  },
  {
    id: "nintendoMessestand",
    title: t('projects.freeProjectList.nintendoMessestand.title'),
    description: t('projects.freeProjectList.nintendoMessestand.description'),
    image:
      "./assets/freeProjects/messestand/nintendo/cover.png",
    tags: [t('projects.tags.messe'), "SketchUp"],
    filterTags: ["design"],
    gallery: [
      "./assets/freeProjects/messestand/nintendo/nintendo-messestand.jpg",
    ],
    galleryGrid: "full"
  },  
]));

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

const toggleFilter = (filterId: string | null) => {
  if (filterId) router.replace({ query: { ...route.query, filter: filterId } });
  else {
    const query = { ...route.query };
    delete query.filter;
    router.replace({ query });
  }
  selectedFilter.value = filterId;
};
</script>

<template>
  <div class="projects">
    <HeaderSlider 
      class="mb-20"
      :title="t('projects.headerFreeTitle')"
      :description="t('projects.headerFreeSubtitle')"
      :imageList="sliderImages"
      />

    <ContentContainer>
      <!-- Filter Skills -->
      <ScrollReveal>
        <FilterGroup
          style-modifier="max-w-2xl"
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
          :delay="index * 50"
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
