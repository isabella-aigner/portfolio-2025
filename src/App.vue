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
  <header class="fixed top-0 left-0 right-0 z-[100] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
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

  <footer class="text-center py-8 bg-[#0D1A2C] text-[#D8EBFF] text-base border-t border-[rgba(255,255,255,0.1)]">
    <p>© {{ new Date().getFullYear() }} Isabella Aigner. All rights reserved.</p>
  </footer>
</template>
