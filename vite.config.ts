import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), Pages({
    dirs: 'src/pages',
    extensions: ['tsx'],
    routeStyle: 'next'
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
