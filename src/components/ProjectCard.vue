<script setup lang="ts">
import { FilterItem } from "../models/FilterItem";
import { ProjectItem } from "../models/ProjectItem";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    project: ProjectItem;
    isSelected?: boolean;
    selectedFilter: string | null;
    filterItems: FilterItem[];
  }>(),
  {
    isSelected: false,
  }
);

const emit = defineEmits<{
  (event: "toggledProject", projectId: string): void;
  (event: "toggledFilter", code: string): void;
  (event: "openGalleryModal"): void;
}>();

const getFilterName = (filterCode: string) =>
  props.filterItems.find((s) => s.code === filterCode)?.name || filterCode;

const handleActionBtnClick = (type: string | undefined, url: string) => {
  if (type && type === "external") {
    window.open(url, "_blank");
  }
};
</script>

<template>
  <div
    :class="[
      'bg-[#1D2B40] rounded-xl overflow-hidden border transition-all duration-300',
      isSelected ? 'border-[#429EC8]' : 'border-[#D8EBFF]/[0.06] hover:border-[#D8EBFF]/15'
    ]"
  >
    <!-- Project Header / Image -->
    <div
      :id="`${project.id}-header`"
      class="relative h-48 bg-cover bg-center cursor-pointer group"
      :style="{ backgroundImage: `url(${project.image})` }"
      @click="emit('toggledProject', project.id)"
    >
      <div class="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex flex-col justify-end p-5">
        <h3 class="text-xl font-bold text-white m-0">{{ project.title }}</h3>
        <p v-if="project.subtitle" class="text-sm text-[#D8EBFF]/80 mt-1 m-0">{{ project.subtitle }}</p>
      </div>
    </div>

    <!-- Project Content -->
    <div :id="`${project.id}-content`" class="p-5">
      <!-- Basic Info -->
      <div class="cursor-pointer" @click="emit('toggledProject', project.id)">
        <p v-if="project.description" class="text-[#D8EBFF]/70 text-sm leading-relaxed mb-4">{{ project.description }}</p>

        <!-- Filter Tags -->
        <div class="flex flex-wrap gap-2 mb-3">
          <TransitionGroup name="tag">
            <span
              v-for="filter in project.filterTags"
              :key="filter"
              :class="[
                'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all',
                selectedFilter === filter
                  ? 'bg-[#429EC8] text-white'
                  : 'bg-[#429EC8]/15 text-[#429EC8] hover:bg-[#429EC8]/25'
              ]"
              @click.stop="emit('toggledFilter', filter)"
            >
              <i :class="filterItems.find((s) => s.code === filter)?.icon" class="text-xs"></i>
              {{ getFilterName(filter) }}
            </span>
          </TransitionGroup>
        </div>

        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[rgba(150,150,194,0.12)] border border-[rgba(150,150,194,0.2)] text-[#9696C6] text-xs"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Expanded Content -->
      <Transition name="expand">
        <div v-if="isSelected" class="mt-6 space-y-6">
          <!-- Project Meta Info -->
          <div
            v-if="project.year || project.role || project.client"
            class="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer"
            @click="emit('toggledProject', project.id)"
          >
            <Transition v-if="project.year" name="fade-slide-up" appear>
              <div class="bg-[#0D1A2C]/50 rounded-lg p-4">
                <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider mb-1">{{ t("projects.year") }}</h4>
                <p class="text-[#D8EBFF] text-sm m-0">{{ project.year }}</p>
              </div>
            </Transition>
            <Transition v-if="project.role" name="fade-slide-up" appear>
              <div class="bg-[#0D1A2C]/50 rounded-lg p-4" style="transition-delay: 100ms">
                <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider mb-1">{{ t("projects.role") }}</h4>
                <p class="text-[#D8EBFF] text-sm m-0">{{ project.role }}</p>
              </div>
            </Transition>
            <Transition v-if="project.client" name="fade-slide-up" appear>
              <div class="bg-[#0D1A2C]/50 rounded-lg p-4" style="transition-delay: 200ms">
                <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider mb-1">{{ t("projects.client") }}</h4>
                <p class="text-[#D8EBFF] text-sm m-0">{{ project.client }}</p>
              </div>
            </Transition>
          </div>

          <!-- Project Details -->
          <div
            v-if="project.details"
            class="space-y-4 cursor-pointer"
            @click="emit('toggledProject', project.id)"
          >
            <TransitionGroup name="fade-slide-up">
              <div
                v-for="(detail, index) in project.details"
                :key="detail.title"
                :style="{ transitionDelay: `${index * 100}ms` }"
              >
                <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider mb-1">{{ detail.title }}</h4>
                <p class="text-[#D8EBFF]/70 text-sm leading-relaxed m-0">{{ detail.content }}</p>
              </div>
            </TransitionGroup>
          </div>

          <!-- Audio Player -->
          <div v-if="!!project.audio" class="space-y-3">
            <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider">Audio Preview</h4>
            <div
              v-for="(audio, index) in project.audio"
              class="grid grid-cols-6 gap-2 items-center"
              :key="index"
            >
              <p v-if="audio.title" class="audio-title col-span-2 text-sm text-[#D8EBFF]/70 m-0">{{ audio.title }}</p>
              <audio controls :src="audio.link" :type="audio.type" :class="audio.title ? 'col-span-4' : 'col-span-6'" class="w-full">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <!-- Video Player -->
          <div v-if="!!project.video" class="space-y-3">
            <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider">Video Preview</h4>
            <div :class="{ 'grid grid-cols-2 gap-2': project.video.length > 1 }">
              <div
                v-for="(video, index) in project.video"
                :key="index"
              >
                <video controls :src="video.link" :poster="video.poster" class="w-full rounded-lg">
                  Your browser does not support the video element.
                </video>
              </div>
            </div>
          </div>

          <!-- Gallery -->
          <div
            v-if="project.gallery"
            class="space-y-3 cursor-pointer"
            @click="emit('toggledProject', project.id)"
          >
            <h4 class="text-xs font-semibold text-[#429EC8] uppercase tracking-wider">{{ t("projects.gallery") }}</h4>
            <div class="grid grid-cols-1 gap-3">
              <TransitionGroup name="gallery">
                <template v-if="project.gallery">
                  <div v-for="(image, index) in project.gallery" :key="index">
                    <img
                      :src="`${image}`"
                      class="w-full rounded-lg object-cover"
                      :style="{ transitionDelay: `${index * 100}ms` }"
                    />
                  </div>
                </template>
                <template v-else>
                  <div
                    v-for="(image, index) in project.gallery"
                    :key="index"
                    class="w-full h-48 rounded-lg bg-cover bg-center"
                    :style="{
                      backgroundImage: `url(${image})`,
                      transitionDelay: `${index * 100}ms`,
                    }"
                  ></div>
                </template>
              </TransitionGroup>
            </div>
          </div>

          <!-- Links -->
          <div v-if="project.links" class="flex flex-wrap gap-3">
            <TransitionGroup name="fade-slide-up">
              <button
                v-for="(link, index) in project.links"
                :key="link.title"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D8EBFF]/20 text-[#D8EBFF]/70 font-medium text-sm transition-all hover:border-[#429EC8] hover:text-[#D8EBFF] cursor-pointer bg-transparent"
                :style="{ transitionDelay: `${index * 100}ms` }"
                @click="handleActionBtnClick(link.type, link.url)"
              >
                <i :class="link.icon"></i>
                {{ link.title }}
              </button>
              <button
                v-if="project.fullScreenGallery"
                key="btn"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#D8EBFF]/20 text-[#D8EBFF]/70 font-medium text-sm transition-all hover:border-[#429EC8] hover:text-[#D8EBFF] cursor-pointer bg-transparent"
                :style="{ transitionDelay: `${project.links.length * 100}ms` }"
                @click="emit('openGalleryModal')"
              >
                Open Gallery
              </button>
            </TransitionGroup>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 2000px;
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.4s ease;
}
.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.tag-enter-active,
.tag-leave-active {
  transition: all 0.2s ease;
}
.tag-enter-from,
.tag-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
