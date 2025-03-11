<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socialLinks = ref([
  { name: 'GitHub', icon: 'pi pi-github', url: 'https://github.com/isabella-aigner' },
  { name: 'LinkedIn', icon: 'pi pi-linkedin', url: 'https://www.linkedin.com/in/isabella-aigner' },
  { name: 'Email', icon: 'pi pi-envelope', url: 'mailto:isabella.aigner@gmail.com' }
])
</script>

<template>
  <section class="contact-section">
    <Card>
      <template #title>
        <div class="section-title">
          <i class="pi pi-envelope"></i>
          <span>{{ t('contact.title') }}</span>
        </div>
      </template>
      <template #content>
        <div class="contact-content">
          <p>{{ t('contact.message') }}</p>
          <div class="social-links">
            <Button 
              v-for="link in socialLinks" 
              :key="link.name"
              :icon="link.icon"
              :label="link.name"
              class="p-button-outlined"
              @click="window.open(link.url, '_blank')"
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  margin-top: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  .section-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    justify-content: center;
    
    i {
      font-size: 1.25rem;
    }
  }
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    color: var(--text-color);
    max-width: 600px;
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;

  :deep(.p-button) {
    min-width: 120px;
  }
}

@media (max-width: 640px) {
  .social-links {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
}
</style>