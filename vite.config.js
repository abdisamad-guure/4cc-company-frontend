import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/4cc-company-frontend/' : '/'),
  plugins: [react(), tailwindcss()],
  server: { proxy: { '/api': 'http://localhost:4000' } },
})
