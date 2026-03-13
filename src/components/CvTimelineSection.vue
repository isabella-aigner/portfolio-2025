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
  <section
    class="py-[50px] md:py-[70px] md:pb-[60px]"
    :class="variant === 'edu' ? 'bg-[#0a1420]' : 'bg-[#0D1A2C]'"
  >
    <div class="page-inner">
      <h2 class="cv-section-heading text-[1.5rem] md:text-[2rem] font-bold text-white m-0 mb-7 md:mb-10">{{ heading }}</h2>

      <div
        class="flex flex-col gap-0 relative before:content-[''] before:absolute before:left-[21px] before:top-[44px] before:bottom-5 before:w-0.5 before:rounded-sm before:z-0 before:pointer-events-none before:bg-[linear-gradient(to_bottom,rgba(150,166,198,0.3)_0%,rgba(150,166,198,0.2)_60%,transparent_100%)]"
        :class="variant === 'work' ? 'cv-timeline--work' : 'cv-timeline--edu'"
      >
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
        class="mt-7"
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
