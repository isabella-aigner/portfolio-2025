<template>
  <div
    class="w-full h-[500px] max-md:h-[400px] bg-cover bg-center relative -mt-8 mb-16 max-md:-mt-4 max-md:mb-12"
    :class="{ 'bg-[var(--surface-ground)]': isLoading }"
    :style="{ backgroundImage: isLoading ? 'none' : `url(${image})` }"
  >
    <!-- gradient overlay -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.6))] transition-opacity duration-300"
      :class="isLoading ? 'opacity-0' : 'opacity-100'"
    ></div>

    <div class="absolute inset-0 flex items-center justify-center bg-[var(--surface-ground)]" v-if="isLoading">
      <i class="pi pi-spin pi-spinner text-[3rem] text-[var(--primary-color)]"></i>
    </div>

    <div
      class="header-content relative z-[1] h-full flex flex-col justify-center items-center text-white text-center p-8 max-md:p-4 max-w-[1200px] mx-auto opacity-0 translate-y-5 transition-all duration-500"
      :class="{ '!opacity-100 !translate-y-0': !isLoading }"
    >
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
