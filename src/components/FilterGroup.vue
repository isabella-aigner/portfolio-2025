<script setup lang="ts">
import { ref, computed } from "vue";
import { FilterItem } from "../models/FilterItem";
import { useRoute } from "vue-router";

import FilterButton from "./FilterButton.vue";

const route = useRoute();

defineProps<{
  filters: FilterItem[];
}>();

const emit = defineEmits<{
  (event: "toggledFilter", code: string | null): void;
}>();

const routeFilterValue = computed(() => route.query?.filter);

const selectedFilter = ref<string | null>((routeFilterValue.value as string) || null);

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
