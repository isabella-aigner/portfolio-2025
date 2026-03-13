<template>
  <div
    ref="elementRef"
    class="opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="{
      'translate-y-[50px]':  !isVisible && direction === 'up',
      '-translate-y-[50px]': !isVisible && direction === 'down',
      'translate-x-[50px]':  !isVisible && direction === 'left',
      '-translate-x-[50px]': !isVisible && direction === 'right',
      '!opacity-100 !translate-x-0 !translate-y-0': isVisible,
    }"
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
