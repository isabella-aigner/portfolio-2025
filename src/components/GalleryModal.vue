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
          <div class="gallery-dialog-header">
            <h3>{{ selectedProject?.title }} Gallery</h3>
            <div class="gallery-dialog-header-right">
              <span class="image-counter" v-if="selectedProject?.gallery">
                {{ currentImageIndex + 1 }} / {{ selectedProject.gallery.length }}
              </span>
              <Button
                class="btn close-btn"
                icon="pi pi-times"
                @click="emit('closeGalleryModal')"
                />
            </div>
          </div>
          <div class="gallery-white-line" />
        </template>

        <div class="gallery-dialog-content">
          <Button
            icon="pi pi-chevron-left"
            class="gallery-nav-button prev"
            @click="previousImage"
            :disabled="!selectedProject?.gallery?.length"
          />

          <div class="gallery-image-container">
            <img
              :src="selectedImage || ''"
              :alt="selectedProject?.title"
              class="gallery-dialog-image"
            />
          </div>

          <Button
            icon="pi pi-chevron-right"
            class="gallery-nav-button next"
            @click="nextImage"
            :disabled="!selectedProject?.gallery?.length"
          />
        </div>
      </Dialog>
</template>