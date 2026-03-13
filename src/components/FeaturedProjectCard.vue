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
    class="proj-card"
    :class="size === 'large' ? 'proj-large' : 'proj-small'"
    @click="emit('click')"
  >
    <div class="proj-img-wrap">
      <img :src="image" :alt="alt || title" />
    </div>
    <div class="proj-body">
      <h3 class="proj-title">{{ title }}</h3>
      <p v-if="desc" class="proj-desc">{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.proj-card {
  background: #122033;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.proj-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.proj-card .proj-img-wrap { overflow: hidden; }

.proj-card .proj-img-wrap img {
  width: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.proj-card:hover .proj-img-wrap img { transform: scale(1.03); }

.proj-card.proj-large .proj-img-wrap img { height: 388px; }
.proj-card.proj-small .proj-img-wrap img { height: 204px; }

@media (max-width: 768px) {
  .proj-card.proj-large .proj-img-wrap img { height: 220px; }
  .proj-card.proj-small .proj-img-wrap img { height: 160px; }
}

.proj-card .proj-body {
  padding: 1.25rem 1.5rem 1.5rem;
}

.proj-card .proj-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.proj-card.proj-small .proj-title { font-size: 1.25rem; }

.proj-card .proj-desc {
  font-size: 1rem;
  color: #D8EBFF;
  margin: 0;
  line-height: 1.6;
}
</style>
