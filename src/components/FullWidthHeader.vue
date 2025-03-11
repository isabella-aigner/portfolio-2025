<template>
  <div class="full-width-header" :style="{ backgroundImage: `url(${image})` }">
    <div class="header-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>
