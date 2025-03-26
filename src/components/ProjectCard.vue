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
  <Card class="project-card" :class="{ expanded: isSelected }">
    <!-- Project Header -->
    <template #header>
      <div
        :id="`${project.id}-header`"
        class="project-header cursor-pointer"
        :style="{ backgroundImage: `url(${project.image})` }"
        @click="emit('toggledProject', project.id)"
      >
        <div class="project-overlay">
          <h3>{{ project.title }}</h3>
          <p v-if="project.subtitle" class="subtitle">{{ project.subtitle }}</p>
        </div>
      </div>
    </template>

    <!-- Project Content -->
    <template #content>
      <div :id="`${project.id}-content`" class="project-content cursor-pointer">
        <!-- Basic Info -->
        <div class="basic-info" @click="emit('toggledProject', project.id)">
          <p v-if="project.description">{{ project.description }}</p>
          <div class="skills">
            <TransitionGroup name="tag">
              <span
                v-for="filter in project.filterTags"
                :key="filter"
                class="skill-tag"
                :class="{ active: selectedFilter === filter }"
                @click="emit('toggledFilter', filter)"
              >
                <i :class="filterItems.find((s) => s.code === filter)?.icon"></i>
                {{ getFilterName(filter) }}
              </span>
            </TransitionGroup>
          </div>
          <div class="tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Expanded Content -->
        <Transition name="expand">
          <div v-if="isSelected" class="expanded-content">
            <!-- Project Info -->
            <div
              class="info-grid cursor-pointer"
              @click="emit('toggledProject', project.id)"
            >
              <Transition v-if="project.year" name="fade-slide-up" appear>
                <div class="info-item">
                  <h4 class="project-subhl">{{ t("projects.year") }}</h4>
                  <p>{{ project.year }}</p>
                </div>
              </Transition>
              <Transition name="fade-slide-up" appear>
                <div class="info-item" style="transition-delay: 100ms">
                  <h4 class="project-subhl">{{ t("projects.role") }}</h4>
                  <p>{{ project.role }}</p>
                </div>
              </Transition>
              <Transition name="fade-slide-up" appear>
                <div class="info-item" style="transition-delay: 200ms">
                  <h4 class="project-subhl">{{ t("projects.client") }}</h4>
                  <p>{{ project.client }}</p>
                </div>
              </Transition>
            </div>

            <!-- Project Details -->
            <div
              v-if="project.details"
              class="details cursor-pointer"
              @click="emit('toggledProject', project.id)"
            >
              <TransitionGroup name="fade-slide-up">
                <div
                  v-for="(detail, index) in project.details"
                  :key="detail.title"
                  class="detail-section"
                  :style="{ transitionDelay: `${index * 100}ms` }"
                >
                  <h4 class="project-subhl">{{ detail.title }}</h4>
                  <p>{{ detail.content }}</p>
                </div>
              </TransitionGroup>
            </div>

            <!-- Audio Player -->
            <div v-if="!!project.audio" class="audio-section">
              <h4 class="project-subhl">Audio Preview</h4>
              <div
                v-for="(audio, index) in project.audio"
                class="audio-player grid grid-cols-6 gap-2 items-center justify-stretch mb-2"
                :key="index"
              >

                  <p class="audio-title col-span-2">{{ audio.title }}</p>

                  <audio controls :src="audio.link" :type="audio.type" class="col-span-4">
                    Your browser does not support the audio element.
                  </audio>

              </div>
            </div>

            <!-- Video Player -->
            <div v-if="!!project.video" class="video-section">
              <h4 class="project-subhl">Video Preview</h4>
              <div
                v-for="(video, index) in project.video"
                :key="index"
                class="video-player"
              >
                <video controls :src="video.link" :poster="video.poster">
                  Your browser does not support the video element.
                </video>
              </div>
            </div>

            <!-- Gallery -->
            <div
              class="gallery cursor-pointer"
              @click="emit('toggledProject', project.id)"
            >
              <h4 class="project-subhl">{{ t("projects.gallery") }}</h4>
                <div class="gallery-grid" :class="project.galleryGrid">
                <TransitionGroup name="gallery">
                  <template v-if="project.gallery">
                    <div v-for="(image, index) in project.gallery" :key="index">
                      <img
                        :src="`${image}`"
                        :style="{
                          transitionDelay: `${index * 100}ms`,
                        }"
                      />
                    </div>
                  </template>
                  <template v-else>
                    <div
                      v-for="(image, index) in project.gallery"
                      :key="index"
                      class="gallery-image"
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
            <div v-if="project.links" class="project-links cursor-none">
              <TransitionGroup name="fade-slide-up">
                <Button
                  v-for="(link, index) in project.links"
                  :key="link.title"
                  :label="link.title"
                  :icon="link.icon"
                  class="p-button-outlined btn btn-outlined cursor-pointer"
                  :style="{ transitionDelay: `${index * 100}ms` }"
                  @click="handleActionBtnClick(link.type, link.url)"
                />
                <Button
                  v-if="project.fullScreenGallery"
                  key="btn"
                  label="Open Gallery"
                  class="p-button-outlined btn btn-outlined cursor-pointer"
                  :style="{ transitionDelay: `${project.links.length * 100}ms` }"
                  @click="emit('openGalleryModal')"
                />
              </TransitionGroup>
            </div>
          </div>
        </Transition>
      </div>
    </template>
  </Card>
</template>
