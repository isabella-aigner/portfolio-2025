<script setup lang="ts">
defineProps<{
  name: string;
  pct: number;
  color: string;
  colorDim: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between items-baseline">
      <span class="text-[0.9375rem] font-medium text-[#D8EBFF]">{{ name }}</span>
      <span class="text-[0.8125rem] font-semibold text-[#839CB5] tabular-nums">{{ pct }}%</span>
    </div>
    <div class="h-[6px] rounded-[3px] bg-[rgba(150,166,198,0.12)] overflow-hidden">
      <div
        class="cv-tool-bar-fill h-full rounded-[3px]"
        :style="{ width: pct + '%', '--bar-color': color, '--bar-color-dim': colorDim }"
      />
    </div>
  </div>
</template>

<style scoped>
.cv-tool-bar-fill {
  background: linear-gradient(90deg, var(--bar-color-dim, #1a3a5c), var(--bar-color, #429EC8));
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
