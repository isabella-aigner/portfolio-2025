<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  desc: string;
  tags: string[];
}>();
</script>

<template>
  <div class="skill-panel bg-[rgb(37,51,73)] rounded-lg p-7 flex flex-col gap-6">
    <div class="flex flex-col items-center gap-3 text-center">
      <div class="text-[2rem] leading-none text-[#D8EBFF]/85">{{ icon }}</div>
      <h3 class="text-[1.875rem] font-semibold text-white m-0 leading-snug">{{ title }}</h3>
      <p class="text-base text-[#D8EBFF]/70 leading-relaxed m-0">{{ desc }}</p>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="inline-flex items-center px-[14px] py-1 rounded-full bg-[rgba(150,150,194,0.12)] border border-[rgba(150,150,194,0.25)] text-[#9696C6] text-sm font-medium"
      >{{ tag }}</span>
    </div>
  </div>
</template>
