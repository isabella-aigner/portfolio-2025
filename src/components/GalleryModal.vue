<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ProjectItem } from "../models/ProjectItem";

import Dialog from "primevue/dialog";

const props = withDefaults(
  defineProps<{
    isVisible?: boolean;
    selectedProject?: ProjectItem
  }>(),
  {
    isVisible: false,
    selectedProject: undefined
  }
);

const currentImageIndex = ref<number>(0)
const selectedImage = ref<string | null>(null);

const nextImage = () => {
    if (props.selectedProject && props.selectedProject.gallery) {
        currentImageIndex.value = (currentImageIndex.value + 1) % props.selectedProject.gallery.length;
        selectedImage.value = props.selectedProject.gallery[currentImageIndex.value];
    }
};

const previousImage = () => {
  if (props.selectedProject && props.selectedProject.gallery) {
    currentImageIndex.value = currentImageIndex.value === 0
        ? props.selectedProject.gallery.length - 1
        : currentImageIndex.value - 1;
    selectedImage.value = props.selectedProject.gallery[currentImageIndex.value];
  }
};

onMounted(() => {
  if (props.selectedProject?.gallery)
    selectedImage.value = props.selectedProject?.gallery[0]
})

const emit = defineEmits<{
  (event: "closeGalleryModal"): void;
}>();
</script>

<template>
  <Dialog
    :visible="isVisible"
    modal
    :dismissableMask="true"
    class="gallery-dialog"
  >
    <template #header>
      <div class="flex items-center justify-between w-full px-8 py-4 text-white">
        <h3 class="m-0 font-semibold text-lg">{{ selectedProject?.title }} Gallery</h3>
        <div class="flex items-center gap-2">
          <span class="text-sm text-white/70" v-if="selectedProject?.gallery">
            {{ currentImageIndex + 1 }} / {{ selectedProject.gallery.length }}
          </span>
          <button
            class="text-white bg-transparent border-none p-1 cursor-pointer hover:opacity-70 transition-opacity"
            @click="emit('closeGalleryModal')"
          >
            <i class="pi pi-times"></i>
          </button>
        </div>
      </div>
      <div class="w-full h-px bg-white/30" />
    </template>

    <div class="relative flex items-center justify-center h-full">
      <button
        class="gallery-nav-button absolute left-[5px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white border-none cursor-pointer transition-all hover:bg-[#429EC8] hover:scale-110 opacity-30 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed"
        @click="previousImage"
        :disabled="!selectedProject?.gallery?.length"
      >
        <i class="pi pi-chevron-left"></i>
      </button>

      <div class="flex-1 flex justify-center items-center h-full">
        <img
          :src="selectedImage || ''"
          :alt="selectedProject?.title"
          class="max-w-full object-contain rounded"
        />
      </div>

      <button
        class="gallery-nav-button absolute right-[5px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white border-none cursor-pointer transition-all hover:bg-[#429EC8] hover:scale-110 opacity-30 hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed"
        @click="nextImage"
        :disabled="!selectedProject?.gallery?.length"
      >
        <i class="pi pi-chevron-right"></i>
      </button>
    </div>
  </Dialog>
</template>
