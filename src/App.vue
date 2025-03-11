<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t, locale } = useI18n();

const languages = ref([
  { name: "DE", code: "de" },
  { name: "EN", code: "en" },
]);

const selectedLanguage = ref(locale.value);
const isMobileMenuOpen = ref(false);

const switchLanguage = (lang: string) => {
  locale.value = lang;
  selectedLanguage.value = lang;
};

const handleNavigation = (path: string) => {
  if (path === "/#contact") {
    if (router.currentRoute.value.path !== "/") {
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const contactSection = document.querySelector(".contact-section");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const contactSection = document.querySelector(".contact-section");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push(path);
  }
  isMobileMenuOpen.value = false;
};

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
    <nav class="nav">
      <div class="logo">Portfoliod</div>

      <!-- Desktop Navigation -->
      <div class="nav-content desktop-nav">
        <div class="nav-links">
          <Button
            v-for="item in menuItems"
            :key="item.path"
            :label="item.label"
            :class="{ active: $route.path === item.path }"
            link
            @click="handleNavigation(item.path)"
          />
        </div>
        <SelectButton
          v-model="selectedLanguage"
          :options="languages"
          option-label="name"
          option-value="code"
          @change="switchLanguage($event.value)"
          class="language-switch"
        />
      </div>

      <!-- Mobile Menu Button -->
      <Button
        icon="pi pi-bars"
        class="mobile-menu-button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      />

      <!-- Mobile Navigation -->
      <Transition name="slide-down">
        <div v-if="isMobileMenuOpen" class="mobile-nav">
          <div class="mobile-nav-content">
            <div class="mobile-nav-links">
              <Button
                v-for="item in menuItems"
                :key="item.path"
                :label="item.label"
                :class="{ active: $route.path === item.path }"
                class="mobile-nav-item"
                link
                @click="handleNavigation(item.path)"
              />
            </div>
            <SelectButton
              v-model="selectedLanguage"
              :options="languages"
              option-label="name"
              option-value="code"
              @change="switchLanguage($event.value)"
              class="language-switch"
            />
          </div>
        </div>
      </Transition>
    </nav>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>

  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} Isabella Aigner. All rights reserved.</p>
  </footer>
</template>
