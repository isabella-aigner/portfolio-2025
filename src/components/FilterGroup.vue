<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { FilterItem } from "../models/FilterItem";

import FilterButton from "./FilterButton.vue";

defineProps<{
  filters: FilterItem[];
  selectedFilter: string | null;
}>();

const emit = defineEmits<{
  (event: "toggledFilter", code: string | null): void;
}>();

const selectedFilter = ref<string | null>(null);

const toggleFilter = (filter: string) => {
  selectedFilter.value === filter
    ? (selectedFilter.value = null)
    : (selectedFilter.value = filter);
  emit("toggledFilter", selectedFilter.value);
};
</script>

<template>
  <div class="filter-group">
    <TransitionGroup name="tag">
      <div class="flex gap-2">
        <template v-for="(filter, index) in filters.slice(0, 4)" :key="filter.code">
          <FilterButton
            :filter="filter"
            :is-selected="selectedFilter === filter.code"
            :class="{ 'last-of-line': index === 3 }"
            @toggle-filter="toggleFilter(filter.code)"
          />
        </template>
      </div>
      <div class="flex gap-2">
        <template v-for="(filter, index) in filters.slice(4, 8)" :key="filter.code">
          <FilterButton
            :filter="filter"
            :is-selected="selectedFilter === filter.code"
            :class="{ 'last-of-line': index === 3 }"
            @toggle-filter="toggleFilter(filter.code)"
          />
        </template>
      </div>
    </TransitionGroup>
  </div>
</template>
