<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <div class="core-skill-tile flex-[1_1_calc(50%-12px)] max-w-[calc(50%-6px)] h-auto p-3 last:grow-0 min-[601px]:flex-1 min-[601px]:min-w-[140px] min-[601px]:max-w-none min-[601px]:h-[200px] min-[601px]:p-0 min-[601px]:last:flex-1 min-[901px]:min-w-[160px] min-[901px]:aspect-[210/360] min-[901px]:max-h-[360px] min-[901px]:h-auto bg-[rgb(31,46,66)] rounded-lg overflow-hidden">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-auto object-contain block min-[601px]:h-full min-[601px]:object-cover"
    />
  </div>
</template>
