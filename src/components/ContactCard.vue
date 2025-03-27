<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const socialLinks = ref([
  {
    name: "LinkedIn",
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/isabella-aigner",
  },
  { 
    name: "Email", 
    icon: "pi pi-envelope", 
    url: "mailto:isabella.aigner@gmail.com" 
  },
  { 
    name: "Linktree", 
    icon: "pi pi-external-link", 
    url: "https://linktr.ee/isabella.c.aigner" 
  },
]);

const handleBtnClick = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <section class="contact-section">
    <Card>
      <template #title>
        <div class="section-title">
          <i class="pi pi-envelope"></i>
          <span>{{ t("contact.title") }}</span>
        </div>
      </template>
      <template #content>
        <div class="contact-content">
          <p>{{ t("contact.message") }}</p>
          <div class="social-links">
            <Button
              v-for="link in socialLinks"
              :key="link.name"
              :icon="link.icon"
              :label="link.name"
              class="p-button-outlined btn btn-outlined"
              @click="handleBtnClick(link.url)"
            />
          </div>
        </div>
      </template>
    </Card>
  </section>
</template>
