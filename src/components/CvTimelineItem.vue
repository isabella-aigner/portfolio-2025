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
  <div class="cv-timeline-row grid grid-cols-[380fr_772fr] max-[900px]:grid-cols-1 gap-10 items-start">
    <div class="cv-row-aside flex flex-col gap-3 pt-[2px] max-[900px]:hidden">
      <TestimonialCard v-bind="testimonial" />
    </div>
    <CvPreviewEntry v-if="entry" v-bind="entry" />
    <CvPreviewEntry v-else :empty="true" />
  </div>
</template>
