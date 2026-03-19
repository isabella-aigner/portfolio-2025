import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    imagePresets({
      default: widthPreset({
        widths: [320, 640, 960],
        formats: { webp: { quality: 80 }, jpeg: { quality: 80 } },
      }),
    }),
    ViteImageOptimizer({
      jpg:  { quality: 82 },
      jpeg: { quality: 82 },
      png:  { quality: 85, compressionLevel: 9 },
      webp: { quality: 82 },
      svg:  { multipass: true },
      includePublic: true,
    }),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/primevue') || id.includes('node_modules/primeicons')) return 'primevue';
          if (id.includes('node_modules/gsap'))        return 'gsap';
          if (id.includes('node_modules/@unhead'))     return 'unhead';
          if (id.includes('node_modules/@vueuse'))     return 'vueuse';
          if (id.includes('node_modules/vue-i18n') || id.includes('node_modules/@intlify')) return 'i18n';
          if (id.includes('node_modules/vue') || id.includes('node_modules/vue-router')) return 'vue-core';
        },
      },
    },
  },
})
