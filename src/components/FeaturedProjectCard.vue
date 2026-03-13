<script setup lang="ts">
withDefaults(defineProps<{
  image: string;
  alt?: string;
  title: string;
  desc?: string;
  size?: 'large' | 'small';
}>(), {
  size: 'small',
});

const emit = defineEmits<{ (e: 'click'): void }>();
</script>

<template>
  <div
    class="group bg-[#122033] rounded-lg overflow-hidden cursor-pointer transition-[transform,box-shadow] duration-[250ms] ease-[ease] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
    :class="size === 'large' ? 'proj-large' : 'proj-small'"
    @click="emit('click')"
  >
    <div class="overflow-hidden">
      <img
        :src="image"
        :alt="alt || title"
        class="w-full block object-cover transition-transform duration-[400ms] ease-[ease] group-hover:scale-[1.03]"
        :class="size === 'large'
          ? 'h-[220px] md:h-[388px]'
          : 'h-[160px] md:h-[204px]'"
      />
    </div>
    <div class="pt-5 px-6 pb-6">
      <h3
        class="font-semibold text-white mt-0 mb-2 leading-[1.3]"
        :class="size === 'large' ? 'text-2xl' : 'text-xl'"
      >{{ title }}</h3>
      <p v-if="desc" class="text-base text-[#D8EBFF] m-0 leading-[1.6]">{{ desc }}</p>
    </div>
  </div>
</template>
