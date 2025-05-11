import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/digital-asset-novo/', // substitui pelo nome do repositório, se for diferente
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
