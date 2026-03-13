<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue';
import CvPreviewEntry from './CvPreviewEntry.vue';

defineProps<{
  testimonial: {
    compact?: boolean;
    text?: string;
    company?: string;
    companyText?: string;
    logo?: string;
    logoAlt?: string;
    logos?: { src: string; alt: string }[];
  };
  entry?: {
    logo?: string;
    logoAlt?: string;
    dotText?: string;
    dotFh?: boolean;
    logos?: { src: string; alt: string; sm?: boolean }[];
    title?: string;
    date?: string;
    label?: string;
    items?: string[];
    empty?: boolean;
  };
}>();
</script>

<template>
  <div class="cv-timeline-row">
    <div class="cv-row-aside">
      <TestimonialCard v-bind="testimonial" />
    </div>
    <CvPreviewEntry v-if="entry" v-bind="entry" />
    <CvPreviewEntry v-else :empty="true" />
  </div>
</template>

<style>
.cv-timeline-row {
  display: grid;
  grid-template-columns: 380fr 772fr;
  gap: 40px;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .cv-timeline-row { grid-template-columns: 1fr; }
  .cv-timeline-row .cv-row-aside { display: none; }
}

.cv-row-aside {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2px;
}
</style>
