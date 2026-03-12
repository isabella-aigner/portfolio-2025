<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import Navigation from "./components/Navigation.vue";

const { locale } = useI18n();

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
  { label: "Start", path: "/" },
  { label: "Portfolio", path: "/projects" },
  { label: "Playground", path: "/personal-projects" },
  { label: "Werdegang", path: "/career" },
  { label: "Kontakt", path: "/#contact" },
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

  <main class="pt-[60px]">
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </main>

  <footer class="footer">
    <p>© {{ new Date().getFullYear() }} Isabella Aigner. All rights reserved.</p>
  </footer>
</template>
