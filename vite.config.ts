import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import vike from 'vike/plugin';
import { UserConfig } from 'vite';

export default defineConfig({
  plugins: [react(), vike({ prerender: true })],
  base: '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    includeSource: ['src/**/*.{js,ts}'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
}) satisfies UserConfig;
