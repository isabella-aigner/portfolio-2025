<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const socialLinks = ref([
  { name: "GitHub", icon: "pi pi-github", url: "#" },
  { name: "LinkedIn", icon: "pi pi-linkedin", url: "#" },
  { name: "Email", icon: "pi pi-envelope", url: "mailto:your.email@example.com" },
]);
</script>

<template>
  <div class="contact">
    <h1>{{ t("contact.title") }}</h1>

    <Card class="contact-card">
      <template #content>
        <p>{{ t("contact.message") }}</p>

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
      </template>
    </Card>
  </div>
</template>
