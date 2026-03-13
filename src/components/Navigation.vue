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

const scrollToContact = () => {
  document.querySelector(".contact-section")?.scrollIntoView({ behavior: "smooth" });
};

const handleNavigation = (path: string) => {
  if (path === "/#contact") {
    if (router.currentRoute.value.path !== "/") {
      router.push("/").then(() => setTimeout(scrollToContact, 400));
    } else {
      scrollToContact();
    }
  } else {
    router.push(path);
  }
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <nav class="max-w-[1200px] mx-auto px-8 py-1 flex justify-between items-center relative max-md:px-4 max-md:py-3">
    <div class="text-xl font-bold text-[var(--nav-text)] tracking-[-0.01em]">Isabella Aigner</div>

    <!-- Desktop Navigation -->
    <div class="desktop-nav hidden md:flex items-center gap-8">
      <div class="nav-links flex gap-1 items-center">
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
      class="mobile-menu-button block md:hidden"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      aria-label="Toggle menu"
    />

    <!-- Mobile Navigation -->
    <Transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-nav absolute top-full left-0 right-0 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] p-4 md:hidden">
        <div class="flex flex-col gap-4">
          <div class="mobile-nav-links flex flex-col gap-2">
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
