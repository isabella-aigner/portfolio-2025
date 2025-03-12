import { ref } from 'vue'

export function useImageLoader() {
  const isLoading = ref(true)

  const loadImage = (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        isLoading.value = false
        resolve()
      }
    })
  }

  return {
    isLoading,
    loadImage
  }
}