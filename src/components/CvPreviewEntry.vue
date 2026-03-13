<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  date?: string;
  label?: string;
  items?: string[];
  logo?: string;
  logoAlt?: string;
  dotText?: string;
  dotFh?: boolean;
  logos?: { src: string; alt: string; sm?: boolean }[];
  empty?: boolean;
}>(), {
  empty: false,
  dotFh: false,
});
</script>

<template>
  <div
    class="flex items-start gap-4 pb-8 relative z-[1]"
    :class="empty ? 'invisible pointer-events-none min-h-0 pb-0' : ''"
  >
    <div v-if="logos?.length" class="flex flex-col items-center gap-[6px] flex-shrink-0">
      <div
        v-for="l in logos"
        :key="l.src"
        class="flex-shrink-0 rounded-full bg-[#1D2B40] border-[1.5px] border-[rgba(150,166,198,0.25)] flex items-center justify-center overflow-hidden relative z-[2]"
        :class="l.sm ? 'w-9 h-9 p-[7px]' : 'w-11 h-11 p-2'"
      >
        <img :src="l.src" :alt="l.alt" class="w-full h-auto block brightness-0 invert opacity-[0.85]" />
      </div>
    </div>
    <div
      v-else-if="!empty"
      class="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center overflow-hidden p-2 z-[2] relative border-[1.5px]"
      :class="dotFh
        ? 'bg-[rgba(0,140,160,0.2)] border-[rgba(0,190,210,0.4)]'
        : 'bg-[#1D2B40] border-[rgba(150,166,198,0.25)]'"
    >
      <img v-if="logo" :src="logo" :alt="logoAlt || ''" class="w-full h-auto block brightness-0 invert opacity-[0.85]" />
      <span v-if="dotText" class="text-[0.6875rem] font-bold text-[rgba(0,210,230,0.9)] tracking-[0.05em]">{{ dotText }}</span>
    </div>
    <div v-if="!empty" class="flex-1 pt-[2px]">
      <h3 class="text-[1.125rem] font-semibold text-white m-0 mb-[6px] leading-[1.3]">{{ title }}</h3>
      <div v-if="date" class="flex items-center gap-1 text-[0.8125rem] text-[#839CB5] mb-2">📅 {{ date }}</div>
      <p v-if="label" class="text-xs font-bold text-[#429EC8] uppercase tracking-[0.08em] m-0 mb-[6px]">{{ label }}</p>
      <ul v-if="items?.length" class="m-0 pl-[1.2rem] list-disc flex flex-col gap-[5px]">
        <li v-for="item in items" :key="item" class="text-[0.875rem] text-[rgba(216,235,255,0.75)] leading-[1.55] last:mb-0">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
