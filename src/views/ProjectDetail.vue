<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const route = useRoute();

// This would typically come from an API or store
const project = ref({
  id: "plantbase",
  title: "PlantBase",
  subtitle: "Plant Care Management System",
  description:
    "A comprehensive web application for plant enthusiasts to track and manage their indoor plants.",
  image:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
  tags: ["Vue.js", "TypeScript", "Node.js", "PostgreSQL"],
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
    {
      title: "Key Features",
      content:
        "Plant care scheduling, growth tracking, care history logging, plant identification, and customizable care instructions.",
    },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
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
});
</script>

<template>
  <div class="project-detail">
    <!-- Hero Section -->
    <section class="hero" :style="{ backgroundImage: `url(${project.image})` }">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>{{ project.title }}</h1>
          <p class="subtitle">{{ project.subtitle }}</p>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="content-container">
      <!-- Project Info -->
      <section class="project-info">
        <Card>
          <template #content>
            <div class="info-grid">
              <div class="info-item">
                <h3>Year</h3>
                <p>{{ project.year }}</p>
              </div>
              <div class="info-item">
                <h3>Role</h3>
                <p>{{ project.role }}</p>
              </div>
              <div class="info-item">
                <h3>Client</h3>
                <p>{{ project.client }}</p>
              </div>
            </div>
          </template>
        </Card>
      </section>

      <!-- Project Details -->
      <section class="project-details">
        <div
          v-for="detail in project.details"
          :key="detail.title"
          class="detail-section"
        >
          <Card>
            <template #title>
              <h2>{{ detail.title }}</h2>
            </template>
            <template #content>
              <p>{{ detail.content }}</p>
            </template>
          </Card>
        </div>
      </section>

      <!-- Project Gallery -->
      <section class="project-gallery">
        <h2>Gallery</h2>
        <div class="gallery-grid">
          <Card
            v-for="(image, index) in project.gallery"
            :key="index"
            class="gallery-item"
          >
            <template #header>
              <div
                class="gallery-image"
                :style="{ backgroundImage: `url(${image})` }"
              ></div>
            </template>
          </Card>
        </div>
      </section>

      <!-- Project Links -->
      <section class="project-links">
        <div class="buttons">
          <Button
            v-for="link in project.links"
            :key="link.title"
            :label="link.title"
            :icon="link.icon"
            class="p-button-outlined"
            @click="window.open(link.url, '_blank')"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-detail {
  margin-top: -2rem; // Compensate for container padding
}

.hero {
  height: 60vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 3rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 800px;

  h1 {
    font-size: 3rem;
    margin: 0 0 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .subtitle {
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
    opacity: 0.9;
  }
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-info {
  margin-bottom: 3rem;

  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: center;
  }

  .info-item {
    h3 {
      color: var(--primary-color);
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      font-size: 1.2rem;
      color: var(--text-color);
    }
  }
}

.project-details {
  .detail-section {
    margin-bottom: 2rem;

    h2 {
      color: var(--primary-color);
      margin: 0 0 1rem;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      line-height: 1.6;
      color: var(--text-color);
    }
  }
}

.project-gallery {
  margin: 3rem 0;

  h2 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .gallery-image {
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
}

.project-links {
  text-align: center;
  margin: 3rem 0;

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    :deep(.p-button) {
      min-width: 150px;
    }
  }
}

.tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  backdrop-filter: blur(4px);
}

@media (max-width: 768px) {
  .hero-content {
    h1 {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.2rem;
    }
  }

  .project-info {
    .info-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  .project-gallery {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }

  .project-links {
    .buttons {
      flex-direction: column;
    }
  }
}
</style>
