<script setup lang="ts">
defineProps<{
  title: string
  claim: string
  image: string
}>()
</script>

<template>
  <header class="page-header" :style="{ backgroundImage: `url(${image})` }">
    <div class="header-overlay">
      <div class="header-content">
        <h1>{{ title }}</h1>
        <p class="claim">{{ claim }}</p>
      </div>
    </div>
  </header>
</template>