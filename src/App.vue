<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t, locale } = useI18n()

const languages = ref([
  { name: 'DE', code: 'de' },
  { name: 'EN', code: 'en' }
])

const selectedLanguage = ref(locale.value)
const isMobileMenuOpen = ref(false)

const switchLanguage = (lang: string) => {
  locale.value = lang
  selectedLanguage.value = lang
}

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

// Update menu items whenever language changes
const menuItems = ref([
  { label: t('nav.home'), path: '/' },
  { label: t('nav.projects'), path: '/projects' },
  { label: t('nav.personalProjects'), path: '/personal-projects' },
  { label: t('nav.career'), path: '/career' },
  { label: t('nav.contact'), path: '/#contact' }
])

// Watch for language changes and update menu items
watch(locale, () => {
  menuItems.value = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.personalProjects'), path: '/personal-projects' },
    { label: t('nav.career'), path: '/career' },
    { label: t('nav.contact'), path: '/#contact' }
  ]
})
</script>

<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">Isabella Aigner</div>
      
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
          class="language-selector"
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
              class="mobile-language-selector"
            />
          </div>
        </div>
      </Transition>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} Isabella Aigner. All rights reserved.</p>
  </footer>
</template>

<style scoped lang="scss">
.header {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(8px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: -1;
  }
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }
}

// Desktop Navigation
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;

  .nav-links {
    display: flex;
    gap: 1rem;

    :deep(.p-button) {
      color: var(--text-color);
      opacity: 0.7;
      
      &.active {
        color: var(--primary-color);
        opacity: 1;
        font-weight: bold;
      }

      &:not(.active):hover {
        color: var(--primary-color);
        opacity: 1;
      }
    }
  }

  .language-selector {
    :deep(.p-selectbutton) {
      .p-button {
        padding: 0.15rem 0.35rem;
        font-size: 0.75rem;
        min-width: 2rem;
        color: var(--text-color);
        opacity: 0.7;

        &.p-highlight {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          opacity: 1;
        }

        &:not(.p-highlight):hover {
          color: var(--primary-color);
          opacity: 1;
        }
      }
    }
  }
}

// Mobile Menu Button
.mobile-menu-button {
  display: none;
  background: transparent;
  border: none;
  color: var(--primary-color);
  padding: 0.5rem;
  
  &:hover {
    background: rgba(74, 111, 165, 0.1);
  }
}

// Mobile Navigation
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 1rem;
  
  .mobile-nav-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .mobile-nav-item {
    width: 100%;
    justify-content: flex-start;
    padding: 0.75rem 1rem;
    color: var(--text-color);
    opacity: 0.7;
    
    &.active {
      background: var(--primary-color);
      color: white;
      opacity: 1;
    }

    &:not(.active):hover {
      color: var(--primary-color);
      opacity: 1;
    }
  }

  .mobile-language-selector {
    align-self: center;
    margin-top: 0.5rem;

    :deep(.p-selectbutton) {
      .p-button {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        min-width: 2.5rem;
        color: var(--text-color);
        opacity: 0.7;

        &.p-highlight {
          background: var(--primary-color);
          border-color: var(--primary-color);
          color: white;
          opacity: 1;
        }

        &:not(.p-highlight):hover {
          color: var(--primary-color);
          opacity: 1;
        }
      }
    }
  }
}

// Slide down animation for mobile menu
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

main {
  min-height: calc(100vh - 60px);
  padding-top: 60px; // Add padding to account for fixed header
}

.footer {
  text-align: center;
  padding: 2rem;
  background: white;
  margin-top: 4rem;
}

// Media queries for responsive design
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .nav {
    padding: 0.75rem 1rem;
  }

  main {
    padding-top: 56px; // Adjust for smaller mobile header
  }
}

@media (min-width: 769px) {
  .mobile-nav {
    display: none;
  }
}
</style>