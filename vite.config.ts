import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    imagePresets({
      default: widthPreset({
        class: 'responsive-image',
        widths: [320, 640, 960],
        formats: ['webp', 'jpeg'],
      }),
    }),
    tailwindcss(),
  ],
})
