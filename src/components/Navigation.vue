<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { NavItem } from "../models/NavItem";
import { ref } from "vue";
import { LanguageItem } from "../models/LanguageItem";

const router = useRouter();
const route = useRoute();

const props = defineProps<{
  navItems: NavItem[];
  selectedLanguage: string;
  languageOptions: LanguageItem[];
}>();


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
          :class="{ active: route.path === item.path }"
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
              :class="{ active: route.path === item.path }"
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

<style>
.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.25rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav .logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--nav-text);
  letter-spacing: -0.01em;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.desktop-nav .nav-links {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.desktop-nav .nav-links .p-button {
  color: var(--nav-text);
  opacity: 0.75;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  outline: none !important;
  box-shadow: none !important;
}

.desktop-nav .nav-links .p-button.active {
  color: #4A6FA5;
  opacity: 1;
  font-weight: 700;
  pointer-events: none;
}

.desktop-nav .nav-links .p-button.active .p-button-label::before {
  content: '';
  display: inline-block;
  width: 15px;
  height: 15px;
  background: #4A6FA5;
  margin-right: 6px;
  vertical-align: middle;
  border-radius: 2px;
}

.desktop-nav .nav-links .p-button:not(.active):hover {
  color: #4A6FA5;
  opacity: 1;
}

.desktop-nav .language-switch.p-selectbutton {
  border: 1px solid #4A6FA5;
  border-radius: 8px;
}

.desktop-nav .language-switch.p-selectbutton .p-button {
  padding: 0.3rem 0.4rem;
  font-size: 0.75rem;
  min-width: 2rem;
  color: var(--nav-text);
  opacity: 0.7;
  outline: none !important;
  box-shadow: none !important;
}

.desktop-nav .language-switch.p-selectbutton .p-button.p-highlight {
  background: #4A6FA5;
  border-color: #4A6FA5;
  color: white;
  opacity: 1;
}

.desktop-nav .language-switch.p-selectbutton .p-button:not(.p-highlight):hover {
  color: #4A6FA5;
  opacity: 1;
}

.mobile-menu-button {
  display: none;
  background: transparent;
  border: none;
  color: var(--nav-text);
  padding: 0.5rem;
}

.mobile-menu-button:hover {
  background: rgba(66, 158, 200, 0.1);
}

.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.mobile-nav .mobile-nav-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav .mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav .mobile-nav-item {
  width: 100%;
  justify-content: flex-start;
  padding: 0.75rem 1rem;
  color: var(--nav-text);
  opacity: 0.75;
  outline: none !important;
  box-shadow: none !important;
}

.mobile-nav .mobile-nav-item.active {
  color: #4A6FA5;
  font-weight: 700;
  opacity: 1;
}

.mobile-nav .mobile-nav-item:not(.active):hover {
  color: #4A6FA5;
  opacity: 1;
}

.mobile-nav .mobile-language-switch {
  align-self: center;
  margin-top: 0.5rem;
  border: 2px solid #4A6FA5;
  border-radius: 8px;
}

.mobile-nav .mobile-language-switch.p-selectbutton .p-button {
  padding: 0.7rem 0.8rem;
  font-size: 0.875rem;
  min-width: 2.5rem;
  color: var(--nav-text);
  opacity: 0.7;
}

.mobile-nav .mobile-language-switch.p-selectbutton .p-button.p-highlight {
  background: #4A6FA5;
  border-color: #4A6FA5;
  color: white;
  opacity: 1;
}

.mobile-nav .mobile-language-switch.p-selectbutton .p-button:not(.p-highlight):hover {
  color: #4A6FA5;
  opacity: 1;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
  max-height: 400px;
  opacity: 1;
  transform: translateY(0);
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .desktop-nav { display: none; }
  .mobile-menu-button { display: block; }
  .nav { padding: 0.75rem 1rem; }
}

@media (min-width: 769px) {
  .mobile-nav { display: none; }
}
</style>
