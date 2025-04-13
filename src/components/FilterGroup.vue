<script setup lang="ts">
import { ref, computed } from "vue";
import { FilterItem } from "../models/FilterItem";
import { useRoute } from "vue-router";

import FilterButton from "./FilterButton.vue";

const route = useRoute();

defineProps<{
  filters: FilterItem[];
  styleModifier?: string;
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
      <div class="flex gap-2 filter-group-el" :class="styleModifier">
        <template
          v-for="(filter) in filters"
          :key="filter.code">
          <FilterButton
            :filter="filter"
            :is-selected="selectedFilter === filter.code"
            @toggle-filter="toggleFilter(filter.code)"
          />
        </template>
      </div>
    </TransitionGroup>
  </div>
</template>
