import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app/',
      assets: '/src/assets/',
      entities: '/src/entities/',
      features: '/src/features/',
      pages: '/src/pages/',
      shared: '/src/shared/',
      widgets: '/src/widgets/',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id && id.indexOf('node_modules') !== -1) {
            const name = id.split('node_modules/')[1].split('/')[0];
            return `vendor.${name}`;
          }
        },
      },
    },
  },
});
