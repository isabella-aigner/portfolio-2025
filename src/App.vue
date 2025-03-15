<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import Navigation from "./components/Navigation.vue";

const router = useRouter();
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

/*
const handleNavigation = (path: string) => {
  if (path === '/#contact') {
    if (router.currentRoute.value.path !== '/') {
      router.push('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const contactSection = document.querySelector('.contact-section')
        contactSection?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const contactSection = document.querySelector('.contact-section')
      contactSection?.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    router.push(path)
  }
  isMobileMenuOpen.value = false
}
*/

// Update menu items whenever language changes
const menuItems = ref([
  { label: t("nav.home"), path: "/" },
  { label: t("nav.projects"), path: "/projects" },
  { label: t("nav.personalProjects"), path: "/personal-projects" },
  { label: t("nav.career"), path: "/career" },
  { label: t("nav.contact"), path: "/#contact" },
]);

// Watch for language changes and update menu items
watch(locale, () => {
  menuItems.value = [
    { label: t("nav.home"), path: "/" },
    { label: t("nav.projects"), path: "/projects" },
    { label: t("nav.personalProjects"), path: "/personal-projects" },
    { label: t("nav.career"), path: "/career" },
    { label: t("nav.contact"), path: "/#contact" },
  ];
});
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
    <p>&copy; {{ new Date().getFullYear() }} Isabella Aigner. All rights reserved.</p>
  </footer>
</template>
