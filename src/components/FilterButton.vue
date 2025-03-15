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
  <Button
    class="filter-button"
    :key="filter.code"
    :label="filter.name"
    :icon="filter.icon"
    :class="{ active: isSelected }"
    @click="emit('toggleFilter', filter.code)"
  />
</template>
