<script setup lang="ts">
withDefaults(defineProps<{
  compact?: boolean;
  text?: string;
  company?: string;
  companyText?: string;
  logo?: string;
  logoAlt?: string;
  logos?: { src: string; alt: string }[];
}>(), {
  compact: false,
});
</script>

<template>
  <div
    class="bg-[rgb(37,51,73)] rounded-lg py-5 px-6 flex flex-col"
    :class="compact ? 'gap-2' : 'gap-[10px]'"
  >
    <div class="text-[#F59E0B] text-[0.9rem] tracking-[2px]">★★★★★</div>
    <p v-if="text" class="text-[0.9375rem] text-[#D8EBFF] m-0 leading-[1.6] italic opacity-90">{{ text }}</p>
    <span v-if="company" class="text-base font-semibold text-[#D8EBFF] m-0 opacity-[0.85]">{{ company }}</span>
    <span v-if="companyText" class="text-xl font-bold text-[#D8EBFF] tracking-[0.02em]">{{ companyText }}</span>
    <img v-if="logo" :src="logo" :alt="logoAlt || ''" class="h-[22px] w-auto brightness-0 invert opacity-80" />
    <div v-if="logos?.length" class="flex items-center gap-4 flex-wrap">
      <img v-for="l in logos" :key="l.src" :src="l.src" :alt="l.alt" class="h-[22px] w-auto brightness-0 invert opacity-80" />
    </div>
  </div>
</template>
