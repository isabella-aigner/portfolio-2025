<script setup lang="ts">
defineProps<{ label: string; active: boolean }>();
const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <button class="proj-filter-pill" :class="{ active }" @click="emit('click')">
    {{ label }}
  </button>
</template>

<style>
.proj-filter-pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid rgba(216,235,255,0.2);
  background: transparent;
  color: rgba(216,235,255,0.65);
  font-size: 0.9375rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  white-space: nowrap;
}

.proj-filter-pill:hover {
  border-color: #429EC8;
  color: #D8EBFF;
}

.proj-filter-pill.active {
  background: #429EC8;
  border-color: #429EC8;
  color: #ffffff;
  font-weight: 600;
}
</style>
