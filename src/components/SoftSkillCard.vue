<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  desc: string;
}>();
</script>

<template>
  <div class="soft-skill-card bg-[#1D2B40] rounded-lg p-8 flex flex-col gap-5 border border-[#D8EBFF]/[0.06] transition-colors hover:border-[#D8EBFF]/15">
    <div class="text-[2rem] leading-none flex-shrink-0">{{ icon }}</div>
    <div>
      <h3 class="text-2xl font-semibold text-white mb-2 leading-snug">{{ title }}</h3>
      <p class="text-base text-[#D8EBFF]/70 leading-relaxed m-0">{{ desc }}</p>
    </div>
  </div>
</template>
