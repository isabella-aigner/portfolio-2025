<script setup lang="ts">
import { ref, computed } from 'vue';
import CvEntryCard from './CvEntryCard.vue';
import AppButton from './AppButton.vue';

interface Entry {
  heading: string;
  sub: string;
  period: string;
  label?: string;
  details?: string[];
}

const props = withDefaults(defineProps<{
  heading: string;
  entries: Entry[];
  variant?: 'work' | 'edu';
  initialCount?: number;
}>(), {
  variant: 'work',
  initialCount: 6,
});

const showAll = ref(false);

const visibleEntries = computed(() =>
  showAll.value ? props.entries : props.entries.slice(0, props.initialCount)
);

const remaining = computed(() => props.entries.length - props.initialCount);
</script>

<template>
  <section class="cv-timeline-section" :class="{ 'cv-timeline-section--edu': variant === 'edu' }">
    <div class="page-inner">
      <h2 class="cv-section-heading">{{ heading }}</h2>

      <div class="cv-timeline" :class="variant === 'work' ? 'cv-timeline--work' : 'cv-timeline--edu'">
        <CvEntryCard
          v-for="(entry, i) in visibleEntries"
          :key="entry.sub + i"
          :heading="entry.heading"
          :sub="entry.sub"
          :period="entry.period"
          :label="entry.label"
          :details="entry.details"
          :variant="variant"
        />
      </div>

      <AppButton
        v-if="entries.length > initialCount"
        class="cv-expand-btn"
        @click="showAll = !showAll"
      >
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
          :style="{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
        {{ showAll ? 'Weniger anzeigen' : `${remaining} weitere anzeigen` }}
      </AppButton>
    </div>
  </section>
</template>

<style>
.cv-timeline-section {
  background: #0D1A2C;
  padding: 70px 0 60px;
}

@media (max-width: 768px) {
  .cv-timeline-section { padding: 50px 0 40px; }
}

.cv-timeline-section--edu { background: #0a1420; }

.cv-timeline-section .cv-section-heading {
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 40px;
}

@media (max-width: 768px) {
  .cv-section-heading { font-size: 1.5rem; margin-bottom: 28px; }
}

.cv-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.cv-timeline::before {
  content: '';
  position: absolute;
  left: 21px;
  top: 44px;
  bottom: 20px;
  width: 2px;
  border-radius: 2px;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(150, 166, 198, 0.3) 0%,
    rgba(150, 166, 198, 0.2) 60%,
    transparent 100%
  );
}

.cv-expand-btn { margin-top: 28px; }
</style>
