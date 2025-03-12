<template>
  <div 
    ref="elementRef"
    :class="[
      'scroll-reveal',
      {
        'reveal-visible': isVisible,
        [`reveal-${direction}`]: true
      }
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  direction?: 'up' | 'down' | 'left' | 'right'
  threshold?: number
  delay?: number
}>(), {
  direction: 'up',
  threshold: 0.2,
  delay: 0
})

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        setTimeout(() => {
          isVisible.value = true
        }, props.delay)
        observer?.unobserve(entry.target)
      }
    },
    {
      threshold: props.threshold
    }
  )

  if (elementRef.value) {
    observer.observe(elementRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>