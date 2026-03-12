<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
}>();
</script>

<template>
  <section class="relative overflow-hidden bg-[#0D1A2C] py-12 text-center">
    <div class="relative z-10 max-w-[1440px] mx-auto px-6 md:px-[60px] xl:px-[100px]">
      <h1 class="text-4xl md:text-[3.5rem] font-bold text-white leading-tight mb-2.5">{{ title }}</h1>
      <p class="text-lg text-[#D8EBFF]/70 max-w-[520px] mx-auto leading-relaxed mb-7">{{ subtitle }}</p>
      <a
        v-if="ctaHref"
        :href="ctaHref"
        :target="ctaExternal ? '_blank' : undefined"
        :rel="ctaExternal ? 'noopener noreferrer' : undefined"
        class="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#429EC8] text-white font-semibold text-base no-underline transition-opacity hover:opacity-85"
      >
        {{ ctaLabel }}
      </a>
    </div>
  </section>
</template>
