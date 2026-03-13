<script setup lang="ts">
defineProps<{
  src: string;
  alt: string;
}>();
</script>

<template>
  <div class="core-skill-tile">
    <img :src="src" :alt="alt" />
  </div>
</template>

<style>
.core-skill-tile {
  flex: 1;
  min-width: 160px;
  background: rgb(31, 46, 66);
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 210 / 360;
  max-height: 360px;
}

.core-skill-tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  .core-skill-tile {
    min-width: 140px;
    aspect-ratio: auto;
    height: 200px;
  }
}

@media (max-width: 600px) {
  .core-skill-tile {
    flex: 1 1 calc(50% - 12px);
    max-width: calc(50% - 6px);
    height: auto;
    padding: 12px;
  }
  .core-skill-tile img { height: auto; object-fit: contain; }
  .core-skill-tile:last-child { flex-grow: 0; }
}
</style>
