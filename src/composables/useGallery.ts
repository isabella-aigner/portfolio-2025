import { ref } from 'vue'
import type { Project } from '../types'

export function useGallery() {
  const galleryVisible = ref(false)
  const selectedImage = ref<string | null>(null)
  const currentImageIndex = ref(0)

  const showGallery = (project: Project) => {
    if (project.gallery && project.gallery.length > 0) {
      selectedImage.value = project.gallery[0]
      currentImageIndex.value = 0
      galleryVisible.value = true
    }
  }

  const nextImage = (gallery: string[]) => {
    currentImageIndex.value = (currentImageIndex.value + 1) % gallery.length
    selectedImage.value = gallery[currentImageIndex.value]
  }

  const previousImage = (gallery: string[]) => {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? gallery.length - 1 
      : currentImageIndex.value - 1
    selectedImage.value = gallery[currentImageIndex.value]
  }

  return {
    galleryVisible,
    selectedImage,
    currentImageIndex,
    showGallery,
    nextImage,
    previousImage
  }
}