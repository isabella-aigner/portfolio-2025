<script setup lang="ts">
defineProps<{
  name: string;
  level: string;
  score: number;
}>();
</script>

<template>
  <div class="cv-lang-item">
    <div class="cv-lang-meta">
      <span class="cv-lang-name">{{ name }}</span>
      <span class="cv-lang-level">{{ level }}</span>
    </div>
    <div class="cv-lang-dots">
      <span
        v-for="n in 5"
        :key="n"
        class="cv-lang-dot"
        :class="{ 'cv-lang-dot--active': n <= score }"
      />
    </div>
  </div>
</template>

<style>
.cv-lang-item { display: flex; flex-direction: column; gap: 10px; }
.cv-lang-meta { display: flex; justify-content: space-between; align-items: baseline; }

.cv-lang-name { font-size: 0.9375rem; font-weight: 600; color: #D8EBFF; }
.cv-lang-level { font-size: 0.8125rem; color: #839CB5; }

.cv-lang-dots { display: flex; gap: 6px; }

.cv-lang-dot {
  width: 28px;
  height: 6px;
  border-radius: 3px;
  background: rgba(150, 166, 198, 0.15);
  transition: background 0.2s;
}

.cv-lang-dot--active {
  background: linear-gradient(90deg, #429EC8, #4A6FA5);
}
</style>
