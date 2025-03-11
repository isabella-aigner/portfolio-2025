<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { TransitionGroup } from 'vue'
import ContactSection from '../components/ContactSection.vue'
import FullWidthHeader from '../components/FullWidthHeader.vue'
import ContentContainer from '../components/ContentContainer.vue'

const { t } = useI18n()

const selectedProject = ref(null)
const selectedFilter = ref<string | null>(null)
const galleryVisible = ref(false)
const selectedImage = ref<string | null>(null)
const currentImageIndex = ref(0)

const skills = ref([
  { 
    name: t('home.skillsList.frontend'), 
    icon: 'pi pi-desktop',
    code: 'frontend'
  },
  { 
    name: t('home.skillsList.uiux'), 
    icon: 'pi pi-palette',
    code: 'uiux'
  },
  { 
    name: t('home.skillsList.responsive'), 
    icon: 'pi pi-mobile',
    code: 'responsive'
  },
  { 
    name: t('home.skillsList.design'), 
    icon: 'pi pi-image',
    code: 'design'
  }
])

const projects = ref([
  {
    id: 'soundscape',
    title: 'Soundscape',
    subtitle: 'Interactive Audio Experience',
    description: 'An interactive audio project exploring ambient soundscapes and musical composition.',
    image: 'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Web Audio API', 'Vue.js', 'TypeScript', 'Interactive Audio'],
    skills: ['frontend', 'design'],
    year: '2023',
    role: 'Audio Developer',
    client: 'Personal Project',
    details: [
      {
        title: 'Project Overview',
        content: 'Soundscape is an interactive audio experience that allows users to create and manipulate ambient soundscapes in real-time.'
      },
      {
        title: 'Technical Implementation',
        content: 'Built using the Web Audio API for sound processing and synthesis, with a Vue.js frontend for the interactive interface.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800'
    ],
    audio: {
      src: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
      title: 'Demo Track'
    },
    links: [
      { title: 'Live Demo', url: 'https://example.com', icon: 'pi pi-external-link' },
      { title: 'GitHub', url: 'https://github.com', icon: 'pi pi-github' }
    ]
  },
  {
    id: 'cinematic',
    title: 'Cinematic',
    subtitle: 'Short Film Collection',
    description: 'A collection of experimental short films exploring visual storytelling and cinematography.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Video Production', 'Cinematography', 'Editing'],
    skills: ['design'],
    year: '2023',
    role: 'Filmmaker',
    client: 'Personal Project',
    details: [
      {
        title: 'Project Overview',
        content: 'A series of experimental short films that explore different aspects of visual storytelling and cinematographic techniques.'
      },
      {
        title: 'Technical Details',
        content: 'Shot on professional equipment and edited using industry-standard software, with a focus on composition and color grading.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
    ],
    video: {
      src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800&h=600'
    },
    links: [
      { title: 'Watch Films', url: 'https://example.com', icon: 'pi pi-external-link' },
      { title: 'Behind the Scenes', url: 'https://example.com/bts', icon: 'pi pi-camera' }
    ]
  },
  {
    id: 'photography',
    title: 'Photography Portfolio',
    subtitle: 'Visual Stories Through Lens',
    description: 'A curated collection of photographs capturing moments, landscapes, and stories.',
    image: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800&h=600',
    tags: ['Photography', 'Visual Arts', 'Digital Editing'],
    skills: ['design'],
    year: '2023',
    role: 'Photographer',
    client: 'Personal Project',
    details: [
      {
        title: 'Project Overview',
        content: 'A photography portfolio showcasing various styles and subjects, from landscape to portrait photography.'
      },
      {
        title: 'Technical Details',
        content: 'Shot with professional DSLR equipment and processed using advanced photo editing techniques.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800'
    ],
    links: [
      { title: 'View Gallery', url: 'https://example.com', icon: 'pi pi-external-link' },
      { title: 'Instagram', url: 'https://instagram.com', icon: 'pi pi-instagram' }
    ]
  }
])

const filteredProjects = computed(() => {
  if (!selectedFilter.value) return projects.value
  return projects.value.filter(project => 
    project.skills.includes(selectedFilter.value!)
  )
})

const toggleProject = (project) => {
  selectedProject.value = selectedProject.value?.id === project.id ? null : project
}

const toggleFilter = (skillCode: string) => {
  selectedFilter.value = selectedFilter.value === skillCode ? null : skillCode
}

const getSkillName = (skillCode: string) => {
  const skill = skills.value.find(s => s.code === skillCode)
  return skill ? skill.name : skillCode
}

const showGallery = (project) => {
  if (project.gallery && project.gallery.length > 0) {
    selectedProject.value = project
    selectedImage.value = project.gallery[0]
    currentImageIndex.value = 0
    galleryVisible.value = true
  }
}

const nextImage = () => {
  if (!selectedProject.value?.gallery) return
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.gallery.length
  selectedImage.value = selectedProject.value.gallery[currentImageIndex.value]
}

const previousImage = () => {
  if (!selectedProject.value?.gallery) return
  currentImageIndex.value = currentImageIndex.value === 0 
    ? selectedProject.value.gallery.length - 1 
    : currentImageIndex.value - 1
  selectedImage.value = selectedProject.value.gallery[currentImageIndex.value]
}
</script>

<template>
  <div class="personal-projects">
    <FullWidthHeader image="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=2000">
      <h1>{{ t('personalProjects.title') }}</h1>
      <p>Where creativity meets passion - exploring art, sound, and visual storytelling</p>
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
      
      <TransitionGroup 
        name="projects-grid" 
        tag="div" 
        class="projects-grid"
      >
        <Card 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="project-card"
          :class="{ 'expanded': selectedProject?.id === project.id }"
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
                      <i :class="skills.find(s => s.code === skill)?.icon"></i>
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
                <div v-if="selectedProject?.id === project.id" class="expanded-content">
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

                  <!-- Audio Player -->
                  <div v-if="project.audio" class="audio-section">
                    <h4>Audio Preview</h4>
                    <div class="audio-player">
                      <p class="audio-title">{{ project.audio.title }}</p>
                      <audio controls :src="project.audio.src">
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>

                  <!-- Video Player -->
                  <div v-if="project.video" class="video-section">
                    <h4>Video Preview</h4>
                    <div class="video-player">
                      <video 
                        controls 
                        :src="project.video.src"
                        :poster="project.video.poster"
                      >
                        Your browser does not support the video element.
                      </video>
                    </div>
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
                            transitionDelay: `${index * 100}ms`
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
                        @click="link.title === 'View Gallery' ? showGallery(project) : window.open(link.url, '_blank')"
                      />
                    </TransitionGroup>
                  </div>
                </div>
              </Transition>
            </div>
          </template>
        </Card>
      </TransitionGroup>

      <!-- Gallery Modal -->
      <Dialog 
        v-model:visible="galleryVisible"
        modal
        :dismissableMask="true"
        :style="{ width: '90vw', maxWidth: '1200px' }"
        class="gallery-dialog"
      >
        <template #header>
          <div class="gallery-dialog-header">
            <h3>{{ selectedProject?.title }} Gallery</h3>
            <span class="image-counter" v-if="selectedProject?.gallery">
              {{ currentImageIndex + 1 }} / {{ selectedProject.gallery.length }}
            </span>
          </div>
        </template>
        
        <div class="gallery-dialog-content">
          <Button
            icon="pi pi-chevron-left"
            class="gallery-nav-button prev"
            @click="previousImage"
            :disabled="!selectedProject?.gallery?.length"
          />
          
          <div class="gallery-image-container">
            <img 
              :src="selectedImage" 
              :alt="selectedProject?.title"
              class="gallery-dialog-image"
            />
          </div>
          
          <Button
            icon="pi pi-chevron-right"
            class="gallery-nav-button next"
            @click="nextImage"
            :disabled="!selectedProject?.gallery?.length"
          />
        </div>

        <template #footer>
          <div class="gallery-thumbnails">
            <div 
              v-for="(image, index) in selectedProject?.gallery"
              :key="index"
              class="gallery-thumbnail"
              :class="{ active: currentImageIndex === index }"
              :style="{ backgroundImage: `url(${image})` }"
              @click="currentImageIndex = index; selectedImage = image"
            ></div>
          </div>
        </template>
      </Dialog>

      <ContactSection />
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
.personal-projects {
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

.audio-section {
  margin: 2rem 0;

  h4 {
    color: var(--primary-color);
    margin: 0 0 1rem;
  }

  .audio-player {
    background: var(--surface-ground);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;

    .audio-title {
      margin-bottom: 1rem;
      font-weight: 500;
    }

    audio {
      width: 100%;
      max-width: 500px;
    }
  }
}

.video-section {
  margin: 2rem 0;

  h4 {
    color: var(--primary-color);
    margin: 0 0 1rem;
  }

  .video-player {
    background: var(--surface-ground);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;

    video {
      width: 100%;
      max-width: 800px;
      border-radius: 4px;
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

.gallery-dialog {
  :deep(.p-dialog-header) {
    padding-bottom: 0;
  }

  :deep(.p-dialog-content) {
    padding: 0;
    background: var(--surface-ground);
  }

  :deep(.p-dialog-footer) {
    padding-top: 0;
  }
}

.gallery-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h3 {
    margin: 0;
    color: var(--primary-color);
  }

  .image-counter {
    color: var(--text-color);
    font-size: 0.9rem;
  }
}

.gallery-dialog-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: var(--surface-ground);
  padding: 2rem;
}

.gallery-image-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 2rem;
}

.gallery-dialog-image {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 4px;
}

.gallery-nav-button {
  position: relative;
  z-index: 2;
  background: white;
  border: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: white;
      color: var(--text-color);
      transform: none;
    }
  }
}

.gallery-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 1rem;
  background: var(--surface-ground);
  border-radius: 0 0 4px 4px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: var(--surface-ground);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 3px;
  }
}

.gallery-thumbnail {
  flex: 0 0 100px;
  height: 60px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
  }

  &.active {
    border-color: var(--primary-color);
  }
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .project-links {
    flex-direction: column;
  }

  .audio-player,
  .video-player {
    padding: 1rem;
  }

  .gallery-dialog-content {
    padding: 1rem;
  }

  .gallery-nav-button {
    width: 2.5rem;
    height: 2.5rem;
  }

  .gallery-thumbnail {
    flex: 0 0 80px;
    height: 50px;
  }
}
</style>