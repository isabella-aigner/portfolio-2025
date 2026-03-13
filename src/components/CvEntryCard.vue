<script setup lang="ts">
withDefaults(defineProps<{
  heading: string;
  sub: string;
  period: string;
  label?: string;
  details?: string[];
  variant?: 'work' | 'edu';
}>(), {
  variant: 'work',
});
</script>

<template>
  <div class="cv-career-entry flex items-start gap-5 pb-5 relative z-[1] last:pb-0">

    <div
      class="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center relative z-[2] border-[1.5px]"
      :class="variant === 'work'
        ? 'bg-[rgba(66,158,200,0.12)] border-[rgba(66,158,200,0.35)] text-[#429EC8] shadow-[0_0_0_3px_#0D1A2C]'
        : 'bg-[rgba(0,140,160,0.2)] border-[rgba(0,190,210,0.4)] text-[rgba(0,210,230,0.9)] shadow-[0_0_0_3px_#0a1420]'"
    >
      <!-- Work: briefcase -->
      <svg v-if="variant === 'work'" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4C2.9 7 2 7.9 2 9v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" fill="currentColor" opacity="0.9"/>
        <path d="M16 7V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2" stroke="currentColor" stroke-width="1.5" fill="none"/>
      </svg>
      <!-- Education: graduation cap -->
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
      </svg>
    </div>

    <div class="flex-1 bg-[#1D2B40] rounded-[10px] py-[18px] px-[22px] mt-1 border border-[rgba(150,166,198,0.08)] transition-[border-color] duration-200 hover:border-[rgba(66,158,200,0.2)]">
      <h3 class="text-base font-semibold text-white m-0 mb-2 leading-[1.3]">{{ heading }}</h3>
      <div class="flex flex-wrap gap-y-3 gap-x-6 mb-1">
        <span class="inline-flex items-center gap-[5px] text-[0.875rem] text-[#839CB5]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0">
            <path v-if="variant === 'work'" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            <path v-else d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
          </svg>
          {{ sub }}
        </span>
        <span class="inline-flex items-center gap-[5px] text-[0.875rem] text-[#839CB5]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          {{ period }}
        </span>
      </div>
      <template v-if="details && details.length">
        <p v-if="label" class="text-xs font-bold text-[#429EC8] uppercase tracking-[0.08em] mt-3 mb-[6px]">{{ label }}</p>
        <ul class="m-0 pl-[1.1rem] flex flex-col gap-1">
          <li v-for="d in details" :key="d" class="text-[0.9rem] text-[rgba(216,235,255,0.75)] leading-[1.55]">{{ d }}</li>
        </ul>
      </template>
    </div>

  </div>
</template>
