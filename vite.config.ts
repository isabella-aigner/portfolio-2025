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
})
