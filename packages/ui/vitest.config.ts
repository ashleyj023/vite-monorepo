import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, 'src/setupTests.ts'),
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, '../../apps/vite-dashboard/src/store'),
      '@slices': path.resolve(__dirname, '../../apps/vite-dashboard/src/slices'),
      '@ui-components': path.resolve(__dirname, 'packages/ui/src/components'),
    },
    globals: true, // Makes globals (like `expect` and `vi`) available in the tests
    include: [
      'src/**/*.test.tsx', // Only include test files
    ],
    coverage: {
      provider: 'istanbul',
    },
  },
});


















