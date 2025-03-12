<template>
  <div 
    class="full-width-header" 
    :class="{ 'is-loading': isLoading }"
    :style="{ backgroundImage: isLoading ? 'none' : `url(${image})` }"
  >
    <div class="loading-placeholder" v-if="isLoading">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div class="header-content" :class="{ 'fade-in': !isLoading }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  image: string
}>()

const isLoading = ref(true)

onMounted(() => {
  const img = new Image()
  img.src = props.image
  img.onload = () => {
    isLoading.value = false
  }
})
</script>

<style scoped lang="scss">
.full-width-header {
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  position: relative;
  margin-top: -2rem;
  margin-bottom: 4rem;

  &.is-loading {
    background-color: var(--surface-ground);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:not(.is-loading)::before {
    opacity: 1;
  }
}

.loading-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--surface-ground);

  i {
    font-size: 3rem;
    color: var(--primary-color);
  }
}

.header-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  :deep(h1) {
    font-size: 3.5rem;
    margin: 0 0 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  :deep(p) {
    font-size: 1.5rem;
    max-width: 800px;
    margin: 0;
    line-height: 1.4;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .full-width-header {
    height: 400px;
    margin-top: -1rem;
    margin-bottom: 3rem;
  }

  .header-content {
    padding: 1rem;

    :deep(h1) {
      font-size: 2.5rem;
    }

    :deep(p) {
      font-size: 1.2rem;
    }
  }
}
</style>