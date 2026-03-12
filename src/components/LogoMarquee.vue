<script setup lang="ts">
defineProps<{ logos: string[] }>();
</script>

<template>
  <section class="logos-section relative py-10 mt-[70px]">
    <div class="logos-fade absolute top-0 bottom-0 left-0 w-32 z-10 pointer-events-none logos-fade-left"></div>
    <div class="overflow-hidden">
      <div class="logos-strip flex items-center gap-10 w-max">
        <img v-for="src in [...logos, ...logos, ...logos]" :key="src + Math.random()" :src="src" alt="company logo" class="h-8 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
      </div>
    </div>
    <div class="logos-fade absolute top-0 bottom-0 right-0 w-32 z-10 pointer-events-none logos-fade-right"></div>
  </section>
</template>

<style scoped>
.logos-strip {
  animation: marquee 40s linear infinite;
}
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.logos-fade-left {
  background: linear-gradient(to right, #0D1A2C 40%, transparent);
}
.logos-fade-right {
  background: linear-gradient(to left, #0D1A2C 40%, transparent);
}
</style>
