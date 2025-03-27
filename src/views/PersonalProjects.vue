<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";
import { FilterItem } from "../models/FilterItem";

import ContactSection from "../components/ContactCard.vue";
import FullWidthHeader from "../components/FullWidthHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";
import FilterGroup from "../components/FilterGroup.vue";
import ProjectCard from "../components/ProjectCard.vue";
import { ProjectItem } from "../models/ProjectItem";

const { t } = useI18n();
const route = useRoute();
const router = useRouter();

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
  {
    name: t("home.skillsList.creativeWriting"),
    icon: "pi pi-align-left",
    code: "writing",
  },
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
]);

const projects = ref<ProjectItem[]>([
  {
    id: "makro",
    title: t('projects.freeProjectList.makro.title'),
    subtitle: t('projects.freeProjectList.makro.subtitle'),
    description: t('projects.freeProjectList.makro.description'),
    image:
      "./assets/freeProjects/fotografie/makro/makro_small02.jpg",
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing'), t('projects.tags.visualArts')],
    filterTags: ["photo"],
    role: t('projects.roles.photographer'),
    client: t('projects.clients.studyProject'),
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
    tags: [t('projects.tags.photography'), t('projects.tags.digitalEditing')],
    filterTags: ["photo"],
    role: t('projects.roles.photographer'),
    client: t('projects.clients.studyProject'),
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
    tags: [t('projects.tags.visualArts'), "3D Modelling", "3D Sculpting", "Autodesk Maya", "ZBrush"],
    filterTags: ["3d"],
    role: t('projects.roles.3dArtist'),
    client: t('projects.clients.personalProject'),
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
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    role: t("projects.roles.audioDev"),
    client: t('projects.clients.personalProject'),
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
        poster:
          "./assets/freeProjects/audio/audioSnippets/theDealer-preview.jpg",
      },
    ],
  },
  {
    id: "iris",
    title: t("projects.freeProjectList.iris.title"),
    description: t("projects.freeProjectList.iris.description"),
    image: "./assets/freeProjects/game/iris/Iris_Intro_Single.jpg",
    tags: ["Unity", "3D Modelling", "Autodesk Maya", t('projects.tags.visualArts'), t('projects.tags.illustration')],
    filterTags: ["game", "3d", "illustration", "audio"],
    role: `${t("projects.roles.audioDev")}, ${t("projects.roles.gameDev")}, ${t("projects.roles.illustration")}`,
    client: t('projects.clients.personalProject'),
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
    role: `${t("projects.roles.illustration")}`,
    client: t('projects.clients.personalProject'),
    gallery: [
      "./assets/freeProjects/illustration/illu/illus-1.jpg",
      "./assets/freeProjects/illustration/illu/illus-2.jpg",
      "./assets/freeProjects/illustration/illu/sketches.jpg",
      "./assets/freeProjects/illustration/illu/dragon-paperart.jpg"
    ],
    galleryGrid: "full",
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
    role: t('projects.roles.photographer'),
    client: t('projects.clients.studyProject'),
    gallery: [
      "./assets/freeProjects/fotografie/capoeira/capoeira-row1.jpg",
      "./assets/freeProjects/fotografie/capoeira/capoeira-row2.jpg",
    ],
    galleryGrid: "full"
  },
  {
    id: "vectorIllu",
    title: t("projects.freeProjectList.vectorIllu.title"),
    description: t("projects.freeProjectList.vectorIllu.description"),
    image: "./assets/freeProjects/illustration/vectorIllustration/cat02.jpg",
    tags: ["Vector", t('projects.tags.visualArts'), t('projects.tags.illustration'), "Adobe Illustrator"],
    filterTags: ["illustration"],
    role: `${t("projects.roles.illustration")}`,
    client: t('projects.clients.personalProject'),
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
    role: t('projects.roles.photographer'),
    client: t('projects.clients.studyProject'),
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
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    role: t('projects.roles.audioDev'),
    client: t('projects.clients.studyProject'),
    details: [
      {
        title: t('projects.detailDtail.concept'),
        content: t('projects.freeProjectList.subitorato.conceptDesc')      
      },
    ],
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
    tags: [t("projects.tags.recording"), "Cubase"],
    filterTags: ["audio"],
    role: t('projects.roles.audioDev'),
    client: t('projects.clients.personalProject'),
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
    role: t('projects.roles.photographer'),
    client: t('projects.clients.freeProject'),
    gallery: [
      "./assets/freeProjects/fotografie/landscape/norway-mock.jpg",
      "./assets/freeProjects/fotografie/landscape/prag.jpg",
    ],
    galleryGrid: "full"
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

const toggleFilter = (filterId: string | null) => {
  if (filterId) router.replace({ query: { ...route.query, filter: filterId } });
  else {
    const query = { ...route.query };
    delete query.filter;
    router.replace({ query });
  }
  selectedFilter.value = filterId;
};

/*
const getSkillName = (skillCode: string) => {
  const skill = filterItems.value.find((s) => s.code === skillCode);
  return skill ? skill.name : skillCode;
};*/
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
          />
        </ScrollReveal>
      </TransitionGroup>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>
