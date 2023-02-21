import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/civ/', //nombre del repositorio en github
  plugins: [vue()],
})
