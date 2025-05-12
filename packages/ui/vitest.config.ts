import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../../apps/my-new-app/src/components'),
      '@store': path.resolve(__dirname, '../../apps/vite-dashboard/src/store'),
      '@slices': path.resolve(__dirname, '../../apps/vite-dashboard/src/slices'),
    },
  },
});







