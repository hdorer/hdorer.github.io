import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hdorer-github-io/',
  plugins: [react()],
  assetsInclude: ["**/*.md"],
  build: {
    outDir: 'dist'
  }
})
