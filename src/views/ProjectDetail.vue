<script setup lang="ts">
import { ref } from 'vue'

// This would typically come from an API or store
const project = ref({
  id: 'plantbase',
  title: 'PlantBase',
  subtitle: 'Plant Care Management System',
  description: 'A comprehensive web application for plant enthusiasts to track and manage their indoor plants.',
  image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
  tags: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  year: '2023',
  role: 'Full Stack Developer',
  client: 'Personal Project',
  details: [
    {
      title: 'Project Overview',
      content: 'PlantBase is a modern web application designed to help plant enthusiasts manage their indoor plants. The application provides detailed care instructions, watering schedules, and growth tracking capabilities.'
    },
    {
      title: 'Technical Implementation',
      content: 'Built with Vue.js and TypeScript for the frontend, utilizing Composition API and type-safe development practices. The backend is powered by Node.js with a PostgreSQL database, ensuring robust data management and scalability.'
    },
    {
      title: 'Key Features',
      content: 'Plant care scheduling, growth tracking, care history logging, plant identification, and customizable care instructions.'
    }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800'
  ],
  links: [
    { title: 'Live Demo', url: 'https://example.com', icon: 'pi pi-external-link' },
    { title: 'GitHub', url: 'https://github.com', icon: 'pi pi-github' }
  ]
})

const openLink = (url: string) => {
  window.open(url, '_blank')
}
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
        <div v-for="detail in project.details" :key="detail.title" class="detail-section">
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
          <Card v-for="(image, index) in project.gallery" :key="index" class="gallery-item">
            <template #header>
              <div class="gallery-image" :style="{ backgroundImage: `url(${image})` }"></div>
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
            @click="openLink(link.url)"
          />
        </div>
      </section>
    </div>
  </div>
</template>