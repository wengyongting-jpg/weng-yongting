import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Default base is '/'. For GitHub Pages, the predeploy script passes --base.
  plugins: [react()],
})
