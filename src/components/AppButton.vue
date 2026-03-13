<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md';
  href?: string;
  target?: string;
}>(), {
  variant: 'outline',
  size: 'md',
});
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    class="app-btn inline-flex items-center gap-[6px] [font-family:inherit] font-semibold rounded-lg cursor-pointer no-underline whitespace-nowrap transition-[border-color,color,background,transform] duration-200"
    :class="[
      variant === 'primary'
        ? 'app-btn--primary bg-[#429EC8] border-0 text-white text-[1.0625rem] min-w-[220px] h-14 px-8 justify-center pointer-events-auto hover:bg-[#5ab3d8] hover:-translate-y-0.5 md:min-w-[262px] md:h-16 md:text-lg'
        : 'app-btn--outline bg-transparent border border-[rgba(216,235,255,0.25)] text-[#D8EBFF] hover:border-[#429EC8] hover:text-[#429EC8]',
      variant === 'outline' && size === 'sm'
        ? 'text-[0.875rem] px-[14px] py-[6px]'
        : variant === 'outline' ? 'text-[0.9375rem] px-[18px] py-2' : ''
    ]"
  ><slot /></a>
  <button
    v-else
    class="app-btn inline-flex items-center gap-[6px] [font-family:inherit] font-semibold rounded-lg cursor-pointer whitespace-nowrap transition-[border-color,color,background,transform] duration-200"
    :class="[
      variant === 'primary'
        ? 'app-btn--primary bg-[#429EC8] border-0 text-white text-[1.0625rem] min-w-[220px] h-14 px-8 justify-center pointer-events-auto hover:bg-[#5ab3d8] hover:-translate-y-0.5 md:min-w-[262px] md:h-16 md:text-lg'
        : 'app-btn--outline bg-transparent border border-[rgba(216,235,255,0.25)] text-[#D8EBFF] hover:border-[#429EC8] hover:text-[#429EC8]',
      variant === 'outline' && size === 'sm'
        ? 'text-[0.875rem] px-[14px] py-[6px]'
        : variant === 'outline' ? 'text-[0.9375rem] px-[18px] py-2' : ''
    ]"
  ><slot /></button>
</template>
