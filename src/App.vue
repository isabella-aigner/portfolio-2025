<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import Navigation from "./components/Navigation.vue";

const { t, locale } = useI18n();

const languages = ref([
  { name: "DE", code: "de" },
  { name: "EN", code: "en" },
]);

const selectedLanguage = ref(locale.value);

const switchLanguage = (lang: string) => {
  locale.value = lang;
  selectedLanguage.value = lang;
};

// Update menu items whenever language changes
const menuItems = computed(() => ([
  { label: t("nav.home"), path: "/" },
  { label: t("nav.projects"), path: "/projects" },
  { label: t("nav.personalProjects"), path: "/personal-projects" },
  { label: t("nav.career"), path: "/career" },
  { label: t("nav.contact"), path: "/#contact" },
]));
</script>

<template>
  <header class="header">
    <Navigation
      :navItems="menuItems"
      :selectedLanguage="selectedLanguage"
      :languageOptions="languages"
      @switch-language="switchLanguage"
    />
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} {{ t('contact.imprint') }}</p>
  </footer>
</template>
