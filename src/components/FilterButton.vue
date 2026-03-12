<script setup lang="ts">
import { FilterItem } from "../models/FilterItem";

withDefaults(
  defineProps<{
    filter: FilterItem;
    isSelected: boolean;
  }>(),
  {
    isSelected: false,
  }
);

const emit = defineEmits<{
  (event: "toggleFilter", code: string): void;
}>();
</script>

<template>
  <button
    :key="filter.code"
    :class="[
      'inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold text-sm transition-all',
      isSelected
        ? 'bg-[#429EC8] border-[#429EC8] text-white'
        : 'border-[#429EC8] text-[#429EC8] hover:bg-[#429EC8] hover:text-white'
    ]"
    @click="emit('toggleFilter', filter.code)"
  >
    <i v-if="filter.icon" :class="filter.icon"></i>
    {{ filter.name }}
  </button>
</template>
