<script setup lang="ts">
import { computed } from 'vue';
import { ProjectItem } from '../models/ProjectItem';
import { FilterItem } from '../models/FilterItem';

const props = defineProps<{
  project: ProjectItem;
  isOpen: boolean;
  filterItems: FilterItem[];
  clickableCard?: boolean;
}>();

const emit = defineEmits<{ (e: 'toggle', project: ProjectItem): void }>();

const getFilterName = (code: string) =>
  props.filterItems.find(f => f.code === code)?.name || code;

const hasLeftMedia = computed(() =>
  !!(props.project.gallery?.length || props.project.video?.length));
</script>

<template>
  <div
    class="proj-card"
    :class="{ 'is-open': isOpen }"
    :id="`${project.id}-header`"
    :style="clickableCard && !isOpen ? 'cursor: pointer' : ''"
    @click="clickableCard && !isOpen && emit('toggle', project)"
  >

    <!-- ── COLLAPSED STATE ── -->
    <template v-if="!isOpen">
      <div class="proj-card-img">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="proj-card-body">
        <span v-if="project.year" class="proj-card-year">{{ project.year }}</span>
        <h2 class="proj-card-title">{{ project.title }}</h2>
        <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
        <div class="proj-card-categories">
          <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">
            {{ getFilterName(tag) }}
          </span>
        </div>
        <div class="proj-card-tools">
          <span v-for="tool in project.tags.slice(0, 6)" :key="tool" class="proj-tool-tag">{{ tool }}</span>
          <span v-if="project.tags.length > 6" class="proj-tool-tag proj-tool-more">+{{ project.tags.length - 6 }}</span>
        </div>
      </div>
      <div class="proj-card-footer">
        <button class="proj-toggle-btn" @click.stop="emit('toggle', project)">
          <span>Details ansehen</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </template>

    <!-- ── EXPANDED STATE ── -->
    <template v-else>
      <div class="proj-exp-wrap" :class="{ 'proj-exp-wrap--text-only': !hasLeftMedia }">

        <!-- Left: gallery + video -->
        <div v-if="hasLeftMedia" class="proj-exp-images">
          <img
            v-for="(img, i) in project.gallery"
            :key="`img-${i}`"
            :src="img"
            :alt="`${project.title} – Bild ${i + 1}`" />
          <div v-for="(vid, i) in project.video" :key="`vid-${i}`" class="proj-exp-video">
            <p v-if="vid.title" class="proj-video-title">{{ vid.title }}</p>
            <video controls :src="vid.link" :poster="vid.poster"></video>
          </div>
        </div>

        <!-- Right: text -->
        <div class="proj-exp-text">
          <div class="proj-exp-header">
            <span v-if="project.year" class="proj-card-year">{{ project.year }}</span>
            <h2 class="proj-card-title">{{ project.title }}</h2>
            <p v-if="project.subtitle" class="proj-card-subtitle">{{ project.subtitle }}</p>
          </div>

          <div class="proj-card-categories">
            <span v-for="tag in project.filterTags" :key="tag" class="proj-cat-tag">{{ getFilterName(tag) }}</span>
          </div>

          <p v-if="project.description" class="proj-exp-desc">{{ project.description }}</p>

          <div v-if="project.details" class="proj-expand-details">
            <div v-for="detail in project.details" :key="detail.title" class="proj-detail-block">
              <h4 class="proj-detail-title">{{ detail.title }}</h4>
              <p class="proj-detail-text">{{ detail.content }}</p>
            </div>
          </div>

          <div v-if="project.year || project.role || project.client" class="proj-expand-meta">
            <div v-if="project.year" class="proj-meta-item">
              <span class="proj-meta-label">Jahr</span>
              <span class="proj-meta-value">{{ project.year }}</span>
            </div>
            <div v-if="project.role" class="proj-meta-item">
              <span class="proj-meta-label">Rolle</span>
              <span class="proj-meta-value">{{ project.role }}</span>
            </div>
            <div v-if="project.client" class="proj-meta-item">
              <span class="proj-meta-label">Auftraggeber</span>
              <span class="proj-meta-value">{{ project.client }}</span>
            </div>
          </div>

          <div class="proj-expand-tech">
            <span v-for="tag in project.tags" :key="tag" class="proj-tech-tag">{{ tag }}</span>
          </div>

          <div v-if="project.audio?.length" class="proj-exp-audio">
            <div v-for="(track, i) in project.audio" :key="i" class="proj-audio-item">
              <p v-if="track.title" class="proj-audio-title">{{ track.title }}</p>
              <audio controls :src="track.link"></audio>
            </div>
          </div>

          <div v-if="project.links?.length" class="proj-expand-links">
            <a
              v-for="link in project.links"
              :key="link.title"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="proj-link-btn"
              @click.stop>
              {{ link.title }} →
            </a>
          </div>

          <button class="proj-toggle-btn proj-toggle-close" @click="emit('toggle', project)">
            <span>Schließen</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </template>

  </div>
</template>

<style>
/* Project card */
.proj-card {
  background: #122033;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.proj-card.is-open {
  grid-column: 1 / -1;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.proj-card:not(.is-open):hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.proj-card-img {
  overflow: hidden;
  width: 100%;
}

.proj-card-img img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

@media (max-width: 768px) {
  .proj-card-img img { height: 220px; }
}

.proj-card:not(.is-open):hover .proj-card-img img {
  transform: scale(1.04);
}

.proj-card-body {
  padding: 24px 28px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.proj-card-year {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #429EC8;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.proj-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  line-height: 1.25;
}

@media (max-width: 768px) {
  .proj-card-title { font-size: 1.25rem; }
}

.proj-card-subtitle {
  font-size: 0.9375rem;
  color: rgba(216,235,255,0.65);
  margin: 0;
  line-height: 1.5;
}

.proj-card-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.proj-cat-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(66,158,200,0.12);
  border: 1px solid rgba(66,158,200,0.3);
  color: #429EC8;
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
}

.proj-card-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 4px;
}

.proj-tool-tag {
  display: inline-flex;
  align-items: center;
  padding: 3px 11px;
  border-radius: 100px;
  background: rgba(150,150,194,0.1);
  border: 1px solid rgba(150,150,194,0.2);
  color: #9696C2;
  font-size: 0.8125rem;
  font-weight: 500;
  white-space: nowrap;
}

.proj-tool-tag.proj-tool-more {
  background: rgba(150,150,194,0.06);
  color: rgba(150,150,194,0.6);
}

.proj-card-footer {
  padding: 12px 28px 20px;
  border-top: 1px solid rgba(216,235,255,0.07);
  margin-top: auto;
}

.proj-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: rgba(216,235,255,0.5);
  font-size: 0.9375rem;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  padding: 4px 0;
  transition: color 0.2s;
}

.proj-toggle-btn svg {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

.proj-toggle-btn:hover { color: #D8EBFF; }

.proj-toggle-btn.is-open { color: #429EC8; }
.proj-toggle-btn.is-open svg { transform: rotate(180deg); }

/* Expanded card */
.proj-exp-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 520px;
}

@media (max-width: 900px) {
  .proj-exp-wrap { grid-template-columns: 1fr; }
}

.proj-exp-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3px;
  background: #0a1420;
  align-content: start;
}

.proj-exp-images img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
}

.proj-exp-images img:first-child:last-child,
.proj-exp-images img:nth-child(odd):last-child {
  grid-column: 1 / -1;
  height: 360px;
}

@media (max-width: 900px) {
  .proj-exp-images {
    grid-template-columns: repeat(2, 1fr);
    max-height: 320px;
    overflow: hidden;
  }
}

.proj-exp-text {
  padding: 36px 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  background: #122033;
}

@media (max-width: 900px) {
  .proj-exp-text { padding: 28px 24px; }
}

.proj-exp-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.proj-exp-desc {
  font-size: 1rem;
  color: rgba(216,235,255,0.85);
  line-height: 1.7;
  margin: 0;
}

.proj-expand-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding-top: 4px;
  border-top: 1px solid rgba(216,235,255,0.08);
}

.proj-meta-item { display: flex; flex-direction: column; gap: 4px; }

.proj-meta-label {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.proj-meta-value {
  font-size: 0.9375rem;
  color: #D8EBFF;
  line-height: 1.5;
}

.proj-expand-details { display: flex; flex-direction: column; gap: 16px; }
.proj-detail-block   { display: flex; flex-direction: column; gap: 5px; }

.proj-detail-title {
  font-size: 0.6875rem;
  font-weight: 700;
  color: #429EC8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

.proj-detail-text {
  font-size: 0.9375rem;
  color: rgba(216,235,255,0.8);
  line-height: 1.65;
  margin: 0;
}

.proj-expand-tech { display: flex; flex-wrap: wrap; gap: 7px; }

.proj-tech-tag {
  padding: 4px 13px;
  border-radius: 100px;
  background: rgba(150,150,194,0.1);
  border: 1px solid rgba(150,150,194,0.2);
  color: #9696C2;
  font-size: 0.8125rem;
  font-weight: 500;
}

.proj-expand-links { display: flex; flex-wrap: wrap; gap: 10px; }

.proj-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  border-radius: 8px;
  border: 1px solid rgba(216,235,255,0.25);
  background: transparent;
  color: #D8EBFF;
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s;
}

.proj-link-btn:hover {
  border-color: #429EC8;
  color: #429EC8;
}

.proj-toggle-close {
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px solid rgba(216,235,255,0.07);
  align-self: flex-start;
}

/* Text-only expanded (no left media) */
.proj-exp-wrap--text-only { grid-template-columns: 1fr; }

/* Video block */
.proj-exp-video { width: 100%; background: #0a1420; }
.proj-exp-video video {
  width: 100%;
  display: block;
  max-height: 360px;
  object-fit: cover;
}

.proj-video-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(216,235,255,0.7);
  margin: 0;
  padding: 10px 12px 6px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* Audio block */
.proj-exp-audio { display: flex; flex-direction: column; gap: 12px; }

.proj-audio-item { display: flex; flex-direction: column; gap: 6px; }
.proj-audio-item audio { width: 100%; accent-color: #429EC8; }

.proj-audio-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(216,235,255,0.7);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
