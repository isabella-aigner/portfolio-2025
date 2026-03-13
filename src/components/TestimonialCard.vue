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
  <div class="testimonial-card" :class="{ 'testimonial-card--compact': compact }">
    <div class="testimonial-stars">★★★★★</div>
    <p v-if="text" class="testimonial-text">{{ text }}</p>
    <span v-if="company" class="testimonial-company">{{ company }}</span>
    <span v-if="companyText" class="testimonial-company-text">{{ companyText }}</span>
    <img v-if="logo" :src="logo" :alt="logoAlt || ''" class="testimonial-logo" />
    <div v-if="logos?.length" class="testimonial-logos">
      <img v-for="l in logos" :key="l.src" :src="l.src" :alt="l.alt" class="testimonial-logo" />
    </div>
  </div>
</template>

<style>
.testimonial-card {
  background: rgb(37, 51, 73);
  border-radius: 8px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.testimonial-card--compact { gap: 8px; }

.testimonial-card .testimonial-stars {
  color: #F59E0B;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.testimonial-card .testimonial-company {
  font-size: 1rem;
  font-weight: 600;
  color: #D8EBFF;
  margin: 0;
  opacity: 0.85;
}

.testimonial-card .testimonial-company-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #D8EBFF;
  letter-spacing: 0.02em;
}

.testimonial-card .testimonial-logos {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.testimonial-card .testimonial-logo {
  height: 22px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.testimonial-card .testimonial-text {
  font-size: 0.9375rem;
  color: #D8EBFF;
  margin: 0;
  line-height: 1.6;
  font-style: italic;
  opacity: 0.9;
}
</style>
