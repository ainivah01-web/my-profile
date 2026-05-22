import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/my-profile/' : '/',
  test: {
    environment: 'jsdom',
    globals: true,
  },
})