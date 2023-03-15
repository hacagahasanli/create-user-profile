import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@routes': '/src/routes',
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@assets': '/src/assets',
      '@api': '/src/api',
    },
  },
})
