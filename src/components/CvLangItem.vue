<script setup lang="ts">
defineProps<{
  name: string;
  level: string;
  score: number;
}>();
</script>

<template>
  <div class="cv-lang-item flex flex-col gap-[10px]">
    <div class="flex justify-between items-baseline">
      <span class="text-[0.9375rem] font-semibold text-[#D8EBFF]">{{ name }}</span>
      <span class="text-[0.8125rem] text-[#839CB5]">{{ level }}</span>
    </div>
    <div class="flex gap-[6px]">
      <span
        v-for="n in 5"
        :key="n"
        class="w-7 h-[6px] rounded-[3px] transition-colors duration-200"
        :class="n <= score
          ? 'bg-[linear-gradient(90deg,#429EC8,#4A6FA5)]'
          : 'bg-[rgba(150,166,198,0.15)]'"
      />
    </div>
  </div>
</template>
