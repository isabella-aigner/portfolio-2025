<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>

<template>
  <section class="cv-bio-section">
    <div class="page-inner">
      <h2 class="cv-bio-title">{{ title }}</h2>
      <p class="cv-bio-text">{{ text }}</p>
    </div>
  </section>
</template>

<style>
.cv-bio-section { padding: 44px 0 48px; }

@media (max-width: 768px) {
  .cv-bio-section { padding: 32px 0 36px; }
}

.cv-bio-section .cv-bio-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 auto 1rem;
  line-height: 1.4;
  max-width: 820px;
  text-align: center;
}

.cv-bio-section .cv-bio-text {
  font-size: 1rem;
  color: rgba(216,235,255,0.75);
  line-height: 1.75;
  margin: 0 auto 1.75rem;
  max-width: 820px;
}
</style>
