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

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footer {
  text-align: center;
  padding: 2rem;
  background: #0D1A2C;
  color: #D8EBFF;
  font-size: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
