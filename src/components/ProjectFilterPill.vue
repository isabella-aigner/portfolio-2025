<script setup lang="ts">
defineProps<{ label: string; active: boolean }>();
const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <button
    class="inline-flex items-center px-5 py-2 rounded-full border cursor-pointer transition-all duration-200 whitespace-nowrap text-[0.9375rem] [font-family:inherit]"
    :class="active
      ? 'bg-[#429EC8] border-[#429EC8] text-white font-semibold'
      : 'border-[rgba(216,235,255,0.2)] bg-transparent text-[rgba(216,235,255,0.65)] font-medium hover:border-[#429EC8] hover:text-[#D8EBFF]'"
    @click="emit('click')"
  >
    {{ label }}
  </button>
</template>
