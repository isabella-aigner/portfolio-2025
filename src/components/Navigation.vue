<script setup lang="ts">
import { useRouter } from "vue-router";
import { NavItem } from "../models/NavItem";
import { ref, defineProps } from "vue";
import { LanguageItem } from "../models/LanguageItem";

const router = useRouter();

const props = defineProps<{
  navItems: NavItem[];
  selectedLanguage: string;
  languageOptions: LanguageItem[];
}>();

console.log(props);

const emit = defineEmits<{
  (event: "switchLanguage", language: string): void;
}>();

const isMobileMenuOpen = ref(false);
const selectedLanguage = ref(props.selectedLanguage);

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
</script>

<template>
  <nav class="nav">
    <div class="logo">Isabella Aigner</div>

    <!-- Desktop Navigation -->
    <div class="nav-content desktop-nav">
      <div class="nav-links">
        <Button
          v-for="item in navItems"
          :key="item.path"
          :label="item.label"
          :class="{ active: $route.path === item.path }"
          link
          @click="handleNavigation(item.path)"
        />
      </div>
      <SelectButton
        v-model="selectedLanguage"
        :options="languageOptions"
        option-label="name"
        option-value="code"
        @change="emit('switchLanguage', $event.value)"
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
              v-for="item in navItems"
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
            :options="languageOptions"
            option-label="name"
            option-value="code"
            @change="emit('switchLanguage', $event.value)"
            class="mobile-language-switch"
          />
        </div>
      </div>
    </Transition>
  </nav>
</template>
