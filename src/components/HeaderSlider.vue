<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ImageItem } from '../models/ImageItem';

const props = defineProps<{
  title: string,
  description: string,
  imageList: ImageItem[]
}>();

const currentSlide = ref(0);
const timer = ref();

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.imageList.length;
};

onMounted(() => {
  timer.value = setInterval(nextSlide, 7000);
});

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div class="relative h-[85vh] overflow-hidden">
    <!-- Slides -->
    <template v-for="(image, index) in imageList" :key="index" >
      <div
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 headerImageArea"
        :class="{ 'opacity-0': currentSlide !== index }"
      >
        <img
          :src="image.imgLink"
          :alt="image.altText"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
    </template>

    <!-- Static Text Content -->
    <div class="absolute inset-0 flex items-center justify-center text-white">
      <div class="text-center px-4">
        <h1 class="text-5xl font-bold mb-4 header-title">
          {{ title }}
        </h1>
        <p class="text-xl header-claim">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div v-if="imageList.length > 1" class="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(_, index) in imageList"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-white' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>