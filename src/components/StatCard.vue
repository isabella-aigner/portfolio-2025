<script setup lang="ts">
defineProps<{
  num: string;
  label: string;
}>();
</script>

<template>
  <div class="stat-card flex-1 flex items-center gap-[10px] bg-[#0D1A2C] border border-[rgba(216,235,255,0.1)] rounded-lg py-6 px-[30px]">
    <span class="text-[2rem] md:text-[2.5rem] font-bold text-white leading-none whitespace-nowrap">{{ num }}</span>
    <span class="text-[1.25rem] md:text-[1.875rem] font-bold text-white leading-[1.1]">{{ label }}</span>
  </div>
</template>
