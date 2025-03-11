<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { TransitionGroup } from "vue";
import ContactSection from "../components/ContactSection.vue";
import FullWidthHeader from "../components/FullWidthHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";

const { t } = useI18n();

const selectedProject = ref(null);
const selectedFilter = ref<string | null>(null);

const skills = ref([
  {
    name: t("home.skillsList.frontend"),
    icon: "pi pi-desktop",
    code: "frontend",
  },
  {
    name: t("home.skillsList.uiux"),
    icon: "pi pi-palette",
    code: "uiux",
  },
  {
    name: t("home.skillsList.responsive"),
    icon: "pi pi-mobile",
    code: "responsive",
  },
  {
    name: t("home.skillsList.design"),
    icon: "pi pi-image",
    code: "design",
  },
]);

const projects = ref([
  {
    id: "plantbase",
    title: "PlantBase",
    subtitle: "Plant Care Management System",
    description:
      "A comprehensive web application for plant enthusiasts to track and manage their indoor plants.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL"],
    skills: ["frontend", "uiux", "responsive"],
    year: "2023",
    role: "Full Stack Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "PlantBase is a modern web application designed to help plant enthusiasts manage their indoor plants. The application provides detailed care instructions, watering schedules, and growth tracking capabilities.",
      },
      {
        title: "Technical Implementation",
        content:
          "Built with Vue.js and TypeScript for the frontend, utilizing Composition API and type-safe development practices. The backend is powered by Node.js with a PostgreSQL database, ensuring robust data management and scalability.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    ],
    links: [
      {
        title: "Live Demo",
        url: "https://example.com",
        icon: "pi pi-external-link",
      },
      { title: "GitHub", url: "https://github.com", icon: "pi pi-github" },
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    subtitle: "Personal Portfolio",
    description: "A modern portfolio website built with Vue.js and TypeScript.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    tags: ["Vue", "TypeScript", "PrimeVue"],
    skills: ["frontend", "design", "responsive"],
    year: "2023",
    role: "Frontend Developer",
    client: "Personal Project",
    details: [
      {
        title: "Project Overview",
        content:
          "A modern and responsive portfolio website showcasing my work and experience.",
      },
      {
        title: "Technical Implementation",
        content:
          "Developed using Vue.js 3 with TypeScript and PrimeVue components. Features include dark mode, internationalization, and responsive design.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    ],
    links: [
      {
        title: "Live Demo",
        url: "https://example.com",
        icon: "pi pi-external-link",
      },
      { title: "GitHub", url: "https://github.com", icon: "pi pi-github" },
    ],
  },
]);

const filteredProjects = computed(() => {
  if (!selectedFilter.value) return projects.value;
  return projects.value.filter((project) =>
    project.skills.includes(selectedFilter.value!),
  );
});

const toggleProject = (project) => {
  selectedProject.value =
    selectedProject.value?.id === project.id ? null : project;
};

const toggleFilter = (skillCode: string) => {
  selectedFilter.value = selectedFilter.value === skillCode ? null : skillCode;
};

const getSkillName = (skillCode: string) => {
  const skill = skills.value.find((s) => s.code === skillCode);
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
      <div class="filter-tags">
        <TransitionGroup name="tag">
          <Button
            v-for="skill in skills"
            :key="skill.code"
            :label="skill.name"
            :icon="skill.icon"
            :class="{ active: selectedFilter === skill.code }"
            class="p-button-outlined filter-tag"
            @click="toggleFilter(skill.code)"
          />
        </TransitionGroup>
      </div>

      <TransitionGroup name="projects-grid" tag="div" class="projects-grid">
        <Card
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
          :class="{ expanded: selectedProject?.id === project.id }"
        >
          <!-- Project Header -->
          <template #header>
            <div
              class="project-header"
              :style="{ backgroundImage: `url(${project.image})` }"
              @click="toggleProject(project)"
            >
              <div class="project-overlay">
                <h3>{{ project.title }}</h3>
                <p class="subtitle">{{ project.subtitle }}</p>
              </div>
            </div>
          </template>

          <!-- Project Content -->
          <template #content>
            <div class="project-content">
              <!-- Basic Info -->
              <div class="basic-info">
                <p>{{ project.description }}</p>
                <div class="skills">
                  <TransitionGroup name="tag">
                    <span
                      v-for="skill in project.skills"
                      :key="skill"
                      class="skill-tag"
                      :class="{ active: selectedFilter === skill }"
                      @click="toggleFilter(skill)"
                    >
                      <i
                        :class="skills.find((s) => s.code === skill)?.icon"
                      ></i>
                      {{ getSkillName(skill) }}
                    </span>
                  </TransitionGroup>
                </div>
                <div class="tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Expanded Content -->
              <Transition name="expand">
                <div
                  v-if="selectedProject?.id === project.id"
                  class="expanded-content"
                >
                  <!-- Project Info -->
                  <div class="info-grid">
                    <Transition name="fade-slide-up" appear>
                      <div class="info-item">
                        <h4>Year</h4>
                        <p>{{ project.year }}</p>
                      </div>
                    </Transition>
                    <Transition name="fade-slide-up" appear>
                      <div class="info-item" style="transition-delay: 100ms">
                        <h4>Role</h4>
                        <p>{{ project.role }}</p>
                      </div>
                    </Transition>
                    <Transition name="fade-slide-up" appear>
                      <div class="info-item" style="transition-delay: 200ms">
                        <h4>Client</h4>
                        <p>{{ project.client }}</p>
                      </div>
                    </Transition>
                  </div>

                  <!-- Project Details -->
                  <div class="details">
                    <TransitionGroup name="fade-slide-up">
                      <div
                        v-for="(detail, index) in project.details"
                        :key="detail.title"
                        class="detail-section"
                        :style="{ transitionDelay: `${index * 100}ms` }"
                      >
                        <h4>{{ detail.title }}</h4>
                        <p>{{ detail.content }}</p>
                      </div>
                    </TransitionGroup>
                  </div>

                  <!-- Gallery -->
                  <div class="gallery">
                    <h4>Gallery</h4>
                    <div class="gallery-grid">
                      <TransitionGroup name="gallery">
                        <div
                          v-for="(image, index) in project.gallery"
                          :key="index"
                          class="gallery-image"
                          :style="{
                            backgroundImage: `url(${image})`,
                            transitionDelay: `${index * 100}ms`,
                          }"
                        ></div>
                      </TransitionGroup>
                    </div>
                  </div>

                  <!-- Links -->
                  <div class="project-links">
                    <TransitionGroup name="fade-slide-up">
                      <Button
                        v-for="(link, index) in project.links"
                        :key="link.title"
                        :label="link.title"
                        :icon="link.icon"
                        class="p-button-outlined"
                        :style="{ transitionDelay: `${index * 100}ms` }"
                        @click="window.open(link.url, '_blank')"
                      />
                    </TransitionGroup>
                  </div>
                </div>
              </Transition>
            </div>
          </template>
        </Card>
      </TransitionGroup>

      <ContactSection />
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
.projects {
  h1 {
    margin-bottom: 2rem;
    text-align: center;
    color: var(--primary-color);
  }
}

.filter-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  .filter-tag {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &.active {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }

    &:hover {
      transform: translateY(-2px);
    }

    i {
      margin-right: 0.5rem;
    }
  }
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.projects-grid-move {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  transform-origin: center;
  width: 100%;

  &.expanded {
    max-width: 1200px;
    margin: 0 auto;
    transform: scale(1);
  }

  &:not(.expanded):hover {
    transform: translateY(-5px);
  }

  :deep(.p-card-header) {
    padding: 0;
  }

  :deep(.p-card-content) {
    padding-top: 1.5rem;
  }
}

.project-header {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transform: translateZ(0);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 111, 165, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 1rem;

  h3 {
    color: white;
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    transform: translateY(0);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .subtitle {
    color: white;
    margin: 0.5rem 0 0;
    opacity: 0.9;
    transform: translateY(0);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.project-card:hover .project-overlay {
  background: rgba(74, 111, 165, 0.95);

  h3 {
    transform: translateY(-5px);
  }

  .subtitle {
    transform: translateY(-5px);
  }
}

.project-content {
  .basic-info {
    p {
      margin: 0 0 1rem;
      color: var(--text-color);
      line-height: 1.5;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 2000px;
  opacity: 1;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.tag-move {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-enter-active,
.tag-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.tag-enter-from,
.tag-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.gallery-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.gallery-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.expanded-content {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--surface-border);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  .info-item {
    h4 {
      color: var(--primary-color);
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
    }
  }
}

.details {
  margin-bottom: 2rem;

  .detail-section {
    margin-bottom: 1.5rem;

    h4 {
      color: var(--primary-color);
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0;
      line-height: 1.6;
    }
  }
}

.gallery {
  margin-bottom: 2rem;

  h4 {
    color: var(--primary-color);
    margin: 0 0 1rem;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .gallery-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateZ(0);

    &:hover {
      transform: scale(1.02);
    }
  }
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: center;

  :deep(.p-button) {
    min-width: 120px;
  }
}

.skills {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.skill-tag {
  background: white;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &.active {
    background: var(--primary-color);
    color: white;
  }
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-links {
    flex-direction: column;
  }
}
</style>
