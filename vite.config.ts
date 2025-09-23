import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qilinxue.github.io/',
  server: {
    port: 5173,
    host: true,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist'
  }
})
