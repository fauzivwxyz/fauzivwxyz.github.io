// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // penting! biar root, bukan subfolder
  plugins: [react()],
})
