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

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.reveal-up {
  transform: translateY(50px);
}

.scroll-reveal.reveal-down {
  transform: translateY(-50px);
}

.scroll-reveal.reveal-left {
  transform: translateX(50px);
}

.scroll-reveal.reveal-right {
  transform: translateX(-50px);
}

.scroll-reveal.reveal-visible {
  opacity: 1;
  transform: translate(0);
}
</style>
