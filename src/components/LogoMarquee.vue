<script setup lang="ts">
defineProps<{ logos: string[] }>();
</script>

<template>
  <section class="logos-section relative py-10 mt-[70px]">
    <div class="absolute top-0 bottom-0 left-0 w-32 z-10 pointer-events-none bg-[linear-gradient(to_right,#0D1A2C_40%,transparent)]"></div>
    <div class="overflow-hidden">
      <div class="flex items-center gap-10 w-max animate-[marquee_40s_linear_infinite]">
        <img v-for="src in [...logos, ...logos, ...logos]" :key="src + Math.random()" :src="src" alt="company logo" class="h-8 object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
      </div>
    </div>
    <div class="absolute top-0 bottom-0 right-0 w-32 z-10 pointer-events-none bg-[linear-gradient(to_left,#0D1A2C_40%,transparent)]"></div>
  </section>
</template>
