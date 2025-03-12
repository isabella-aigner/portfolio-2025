<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContactSection from '../components/ContactSection.vue'
import FullWidthHeader from '../components/FullWidthHeader.vue'
import ContentContainer from '../components/ContentContainer.vue'
import ScrollReveal from '../components/ScrollReveal.vue'

const { t } = useI18n()

const downloadCV = () => {
  // Replace this URL with the actual URL to your CV
  const cvUrl = '/cv-isabella-aigner.pdf'
  window.open(cvUrl, '_blank')
}
</script>

<template>
  <div class="career">
    <FullWidthHeader image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000">
      <h1>{{ t('career.title') }}</h1>
      <p>Building the future through code and design - one project at a time</p>
    </FullWidthHeader>
    
    <ContentContainer>
      <ScrollReveal>
        <Card class="intro-card">
          <template #content>
            <p>{{ t('career.intro') }}</p>
            <div class="location">
              <i class="pi pi-map-marker"></i>
              <span>Salzburg, Austria</span>
            </div>
          </template>
        </Card>
      </ScrollReveal>

      <section class="timeline-section">
        <ScrollReveal>
          <h2>{{ t('career.education.title') }}</h2>
        </ScrollReveal>
        <div class="timeline">
          <ScrollReveal 
            v-for="(item, index) in t('career.education.items')" 
            :key="index"
            :delay="index * 100"
            direction="left"
            class="timeline-item"
          >
            <div class="timeline-icon">
              <i class="pi pi-book"></i>
            </div>
            <Card class="timeline-content">
              <template #title>
                <div class="timeline-header">
                  <h3>{{ item.title }}</h3>
                  <span class="period">{{ item.period }}</span>
                </div>
              </template>
              <template #content>
                <h4>{{ item.subtitle }}</h4>
                <p>{{ item.description }}</p>
              </template>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section class="timeline-section">
        <ScrollReveal>
          <h2>{{ t('career.experience.title') }}</h2>
        </ScrollReveal>
        <div class="timeline">
          <ScrollReveal 
            v-for="(item, index) in t('career.experience.items')" 
            :key="index"
            :delay="index * 100"
            direction="right"
            class="timeline-item"
          >
            <div class="timeline-icon">
              <i class="pi pi-briefcase"></i>
            </div>
            <Card class="timeline-content">
              <template #title>
                <div class="timeline-header">
                  <h3>{{ item.title }}</h3>
                  <span class="period">{{ item.period }}</span>
                </div>
              </template>
              <template #content>
                <h4>{{ item.company }}</h4>
                <p>{{ item.description }}</p>
              </template>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <div class="cv-section">
          <Card>
            <template #content>
              <div class="cv-content">
                <p>Download my complete curriculum vitae for more details about my experience and skills.</p>
                <Button 
                  icon="pi pi-download" 
                  label="Download CV" 
                  class="p-button-outlined download-cv"
                  @click="downloadCV"
                />
              </div>
            </template>
          </Card>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>

<style scoped lang="scss">
.career {
  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }
}

.intro-card {
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--secondary-color);
    font-size: 1.1rem;

    i {
      color: var(--primary-color);
    }
  }
}

.timeline-section {
  margin: 3rem 0;

  h2 {
    color: var(--primary-color);
    margin-bottom: 2rem;
    text-align: center;
  }
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  position: relative;

  &:not(:last-child) {
    .timeline-icon::after {
      content: '';
      position: absolute;
      top: 4rem;
      left: 1.5rem;
      width: 2px;
      height: calc(100% + 1rem);
      background-color: var(--secondary-color);
      opacity: 0.5;
    }
  }
}

.timeline-icon {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  i {
    color: white;
    font-size: 1.2rem;
  }
}

.timeline-content {
  flex-grow: 1;

  :deep(.p-card) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h3 {
      margin: 0;
      color: var(--primary-color);
      font-size: 1.25rem;
    }

    .period {
      color: var(--secondary-color);
      font-weight: 500;
    }
  }

  h4 {
    color: var(--text-color);
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  p {
    color: var(--text-color);
    margin: 0;
    line-height: 1.5;
  }
}

.cv-section {
  max-width: 800px;
  margin: 4rem auto;

  .cv-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;

    p {
      color: var(--text-color);
      font-size: 1.1rem;
      margin: 0;
    }

    .download-cv {
      min-width: 150px;
      
      &:hover {
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 640px) {
  .timeline-item {
    gap: 1rem;
  }

  .timeline-icon {
    width: 2.5rem;
    height: 2.5rem;

    i {
      font-size: 1rem;
    }
  }

  .timeline-content {
    .timeline-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }
}
</style>