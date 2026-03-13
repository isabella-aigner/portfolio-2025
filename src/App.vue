<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

import Navigation from "./components/Navigation.vue";

const { locale, t } = useI18n();

const languages = ref([
  { name: "DE", code: "de" },
  { name: "EN", code: "en" },
]);

const selectedLanguage = ref(locale.value);

const switchLanguage = (lang: string) => {
  locale.value = lang;
  selectedLanguage.value = lang;
};

const menuItems = computed(() => ([
  { label: t('nav.home'), path: "/" },
  { label: t('nav.portfolio'), path: "/projects" },
  { label: t('nav.playground'), path: "/personal-projects" },
  { label: t('nav.career'), path: "/career" },
  { label: t('nav.contact'), path: "/#contact" },
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
    <p>{{ t('contact.imprint') }}</p>
  </footer>
</template>
