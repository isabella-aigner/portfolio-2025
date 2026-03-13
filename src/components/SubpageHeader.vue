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
  <section class="bg-[#0D1A2C] pt-[36px] pb-[32px] md:pt-[48px] md:pb-[44px] text-center relative overflow-hidden">
    <div class="absolute top-0 left-0 pointer-events-none">
      <img src="/assets/images/bg.png" alt="" />
    </div>
    <div class="absolute top-[-50px] right-0 pointer-events-none">
      <img src="/assets/images/header-lines.svg" alt="" />
    </div>
    <div class="page-inner relative z-10">
      <h1 class="subpage-title text-[2.25rem] md:text-[3.5rem] font-bold text-white m-0 mb-[0.625rem] leading-[1.15]">{{ title }}</h1>
      <p class="subpage-subtitle text-[1.125rem] text-[rgba(216,235,255,0.7)] mx-auto mt-0 mb-[1.75rem] max-w-[520px] leading-[1.6]">{{ subtitle }}</p>
      <a
        v-if="ctaHref"
        :href="ctaHref"
        :target="ctaExternal ? '_blank' : undefined"
        :rel="ctaExternal ? 'noopener noreferrer' : undefined"
        class="subpage-cta inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#429EC8] text-white text-base font-semibold no-underline transition-opacity duration-200 hover:opacity-[0.85]"
      >
        {{ ctaLabel }}
      </a>
    </div>
  </section>
</template>
