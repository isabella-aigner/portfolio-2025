<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { FilterItem } from "../models/FilterItem";

import FilterButton from "./FilterButton.vue";

defineProps<{
  filters: FilterItem[];
  selectedFilter: FilterItem | null;
}>();

const emit = defineEmits<{
  (event: "toggledFilter", code: string): void;
}>();

const selectedFilter = ref<string | null>(null);

const toggleFilter = (skillCode: string) => {
  selectedFilter.value = selectedFilter.value === skillCode ? null : skillCode;
  if (selectedFilter.value) emit("toggledFilter", selectedFilter.value);
};
</script>

<template>
  <div class="filter-group">
    <TransitionGroup name="tag">
      <FilterButton
        v-for="filter in filters"
        :key="filter.code"
        :filter="filter"
        :is-selected="selectedFilter === filter.code"
        @toggle-filter="toggleFilter(filter.code)"
      />
    </TransitionGroup>
  </div>
</template>
