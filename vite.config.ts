import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const projectName = 'DuniRequestRegistry' // tutaj wpisz nazwę projektu

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: 'index.html', // punkt startowy
      output: {
        entryFileNames: `${projectName}.js`,
        chunkFileNames: `${projectName}-[name].js`,
        assetFileNames: ({name}) => {
          if (name && name.endsWith('.css')) {
            return `${projectName}.css`
          }
          return `${projectName}-[name][extname]`
        }
      }
    },
    outDir: 'dist' // folder docelowy
  },
  plugins: [react(), tailwindcss(),],
})
