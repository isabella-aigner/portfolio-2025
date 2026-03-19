<script setup lang="ts">
import { computed } from 'vue';
import { ProjectItem } from '../models/ProjectItem';
import { FilterItem } from '../models/FilterItem';

const props = defineProps<{
  project: ProjectItem;
  isOpen: boolean;
  filterItems: FilterItem[];
  clickableCard?: boolean;
  selectedFilter?: string | null;
}>();

const emit = defineEmits<{ (e: 'toggle', project: ProjectItem): void }>();

const getFilterName = (code: string) =>
  props.filterItems.find(f => f.code === code)?.name || code;

const hasLeftMedia = computed(() =>
  !!(props.project.gallery?.length || props.project.video?.length));
</script>

<template>
  <div
    class="proj-card bg-[#122033] rounded-lg overflow-hidden flex flex-col transition-[transform,box-shadow] duration-[250ms] ease-[ease]"
    :class="isOpen
      ? 'col-span-full shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
      : 'hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] group'"
    :id="`${project.id}-header`"
    :style="clickableCard ? 'cursor: pointer' : ''"
    @click="clickableCard && emit('toggle', project)"
  >

    <!-- ── COLLAPSED STATE ── -->
    <template v-if="!isOpen">
      <div class="overflow-hidden w-full">
        <img :src="project.image" :alt="project.title" class="w-full h-[280px] max-md:h-[220px] object-cover block transition-transform duration-[400ms] group-hover:scale-[1.04]" />
      </div>
      <div class="px-7 pt-6 pb-4 flex flex-col gap-[10px] flex-1">
        <span v-if="project.year" class="text-[0.8125rem] font-semibold text-[#429EC8] tracking-[0.07em] uppercase">{{ project.year }}</span>
        <h2 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-white m-0 leading-[1.25]">{{ project.title }}</h2>
        <p v-if="project.subtitle" class="text-[0.9375rem] text-[rgba(216,235,255,0.65)] m-0 leading-[1.5]">{{ project.subtitle }}</p>
        <div class="flex flex-wrap gap-[6px] mt-[2px]">
          <span
            v-for="tag in project.filterTags"
            :key="tag"
            class="inline-flex items-center px-3 py-1 rounded-full border text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-200"
            :class="tag === selectedFilter
              ? 'bg-[#429EC8] border-[#429EC8] text-white font-semibold'
              : 'bg-[rgba(66,158,200,0.12)] border-[rgba(66,158,200,0.3)] text-[#429EC8]'"
          >
            {{ getFilterName(tag) }}
          </span>
        </div>
        <div class="flex flex-wrap gap-[6px] pt-1">
          <span v-for="tool in project.tags.slice(0, 6)" :key="tool" class="inline-flex items-center px-[11px] py-[3px] rounded-full bg-[rgba(150,150,194,0.1)] border border-[rgba(150,150,194,0.2)] text-[#9696C2] text-[0.8125rem] font-medium whitespace-nowrap">{{ tool }}</span>
          <span v-if="project.tags.length > 6" class="inline-flex items-center px-[11px] py-[3px] rounded-full bg-[rgba(150,150,194,0.06)] border border-[rgba(150,150,194,0.2)] text-[rgba(150,150,194,0.6)] text-[0.8125rem] font-medium whitespace-nowrap">+{{ project.tags.length - 6 }}</span>
        </div>
      </div>
      <div class="px-7 pt-3 pb-5 border-t border-[rgba(216,235,255,0.07)] mt-auto">
        <button class="inline-flex items-center gap-2 bg-transparent border-none text-[rgba(216,235,255,0.5)] text-[0.9375rem] font-medium [font-family:inherit] cursor-pointer py-1 px-0 transition-colors duration-200 hover:text-[#D8EBFF]" @click.stop="emit('toggle', project)">
          <span>Details ansehen</span>
          <svg class="transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </template>

    <!-- ── EXPANDED STATE ── -->
    <template v-else>
      <div class="grid min-h-[520px] relative" :class="hasLeftMedia ? 'grid-cols-2 max-[900px]:grid-cols-1' : 'grid-cols-1'">
        <button
          class="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(13,26,44,0.7)] border border-[rgba(216,235,255,0.15)] text-[rgba(216,235,255,0.6)] cursor-pointer transition-[background,color,border-color] duration-200 hover:bg-[rgba(66,158,200,0.2)] hover:text-[#D8EBFF] hover:border-[rgba(66,158,200,0.4)]"
          @click.stop="emit('toggle', project)"
          aria-label="Schließen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
          </svg>
        </button>

        <!-- Left: gallery + video -->
        <div v-if="hasLeftMedia" class="grid grid-cols-2 gap-[3px] bg-[#0a1420] content-start max-[900px]:max-h-[320px] max-[900px]:overflow-hidden">
          <img
            v-for="(img, i) in project.gallery"
            :key="`img-${i}`"
            :src="img"
            :alt="`${project.title} – Bild ${i + 1}`"
            class="w-full h-[260px] object-cover block [&:first-child:last-child]:col-span-full [&:first-child:last-child]:h-[360px] [&:nth-child(odd):last-child]:col-span-full [&:nth-child(odd):last-child]:h-[360px]"
            @click.stop />
          <div v-for="(vid, i) in project.video" :key="`vid-${i}`" class="w-full bg-[#0a1420]" @click.stop>
            <p v-if="vid.title" class="text-[0.875rem] font-semibold text-[rgba(216,235,255,0.7)] m-0 px-3 pt-[10px] pb-[6px] uppercase tracking-[0.06em]">{{ vid.title }}</p>
            <video controls :src="vid.link" :poster="vid.poster" class="w-full block max-h-[360px] object-cover"></video>
          </div>
        </div>

        <!-- Right: text -->
        <div class="pt-9 px-9 pb-8 max-[900px]:px-6 max-[900px]:py-7 flex flex-col gap-5 overflow-y-auto bg-[#122033]">
          <div class="flex flex-col gap-[6px]">
            <span v-if="project.year" class="text-[0.8125rem] font-semibold text-[#429EC8] tracking-[0.07em] uppercase">{{ project.year }}</span>
            <h2 class="text-[1.25rem] md:text-[1.5rem] font-semibold text-white m-0 leading-[1.25]">{{ project.title }}</h2>
            <p v-if="project.subtitle" class="text-[0.9375rem] text-[rgba(216,235,255,0.65)] m-0 leading-[1.5]">{{ project.subtitle }}</p>
          </div>

          <div class="flex flex-wrap gap-[6px]">
            <span v-for="tag in project.filterTags" :key="tag" class="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(66,158,200,0.12)] border border-[rgba(66,158,200,0.3)] text-[#429EC8] text-[0.8125rem] font-medium whitespace-nowrap">{{ getFilterName(tag) }}</span>
          </div>

          <p v-if="project.description" class="text-base text-[rgba(216,235,255,0.85)] leading-[1.7] m-0">{{ project.description }}</p>

          <div v-if="project.details" class="flex flex-col gap-4">
            <div v-for="detail in project.details" :key="detail.title" class="flex flex-col gap-[5px]">
              <h4 class="text-[0.6875rem] font-bold text-[#429EC8] uppercase tracking-[0.08em] m-0">{{ detail.title }}</h4>
              <p class="text-[0.9375rem] text-[rgba(216,235,255,0.8)] leading-[1.65] m-0">{{ detail.content }}</p>
            </div>
          </div>

          <div v-if="project.year || project.role || project.client" class="flex flex-wrap gap-6 pt-1 border-t border-[rgba(216,235,255,0.08)]">
            <div v-if="project.year" class="flex flex-col gap-1">
              <span class="text-[0.6875rem] font-bold text-[#429EC8] uppercase tracking-[0.1em]">Jahr</span>
              <span class="text-[0.9375rem] text-[#D8EBFF] leading-[1.5]">{{ project.year }}</span>
            </div>
            <div v-if="project.role" class="flex flex-col gap-1">
              <span class="text-[0.6875rem] font-bold text-[#429EC8] uppercase tracking-[0.1em]">Rolle</span>
              <span class="text-[0.9375rem] text-[#D8EBFF] leading-[1.5]">{{ project.role }}</span>
            </div>
            <div v-if="project.client" class="flex flex-col gap-1">
              <span class="text-[0.6875rem] font-bold text-[#429EC8] uppercase tracking-[0.1em]">Auftraggeber</span>
              <span class="text-[0.9375rem] text-[#D8EBFF] leading-[1.5]">{{ project.client }}</span>
            </div>
          </div>

          <div class="flex flex-wrap gap-[7px]">
            <span v-for="tag in project.tags" :key="tag" class="px-[13px] py-1 rounded-full bg-[rgba(150,150,194,0.1)] border border-[rgba(150,150,194,0.2)] text-[#9696C2] text-[0.8125rem] font-medium">{{ tag }}</span>
          </div>

          <div v-if="project.audio?.length" class="flex flex-col gap-3">
            <div v-for="(track, i) in project.audio" :key="i" class="flex flex-col gap-[6px]" @click.stop>
              <p v-if="track.title" class="text-[0.875rem] font-semibold text-[rgba(216,235,255,0.7)] m-0 uppercase tracking-[0.06em]">{{ track.title }}</p>
              <audio controls :src="track.link" class="w-full accent-[#429EC8]"></audio>
            </div>
          </div>

          <div v-if="project.links?.length" class="flex flex-wrap gap-[10px]">
            <a
              v-for="link in project.links"
              :key="link.title"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-[6px] px-5 py-[9px] rounded-lg border border-[rgba(216,235,255,0.25)] bg-transparent text-[#D8EBFF] text-[0.9375rem] font-semibold no-underline transition-[border-color,color] duration-200 hover:border-[#429EC8] hover:text-[#429EC8]"
              @click.stop>
              {{ link.title }} →
            </a>
          </div>

        </div>
      </div>
    </template>

  </div>
</template>
