<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>

<template>
  <section class="cv-bio-section pt-[44px] pb-[48px] max-[768px]:pt-[32px] max-[768px]:pb-[36px]">
    <div class="page-inner">
      <h2 class="cv-bio-title text-[1.375rem] font-semibold text-white mx-auto mt-0 mb-4 leading-[1.4] max-w-[820px] text-center">{{ title }}</h2>
      <p class="cv-bio-text text-base text-[rgba(216,235,255,0.75)] leading-[1.75] mx-auto mt-0 mb-[1.75rem] max-w-[820px]">{{ text }}</p>
    </div>
  </section>
</template>
