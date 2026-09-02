import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves at /weng-yongting/, so set the base path accordingly.
  base: '/weng-yongting/',
  plugins: [react()],
})
