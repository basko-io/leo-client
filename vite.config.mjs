import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
  resolve: {
    alias: {
      src: "/src",
      root: "/"
    },
  },
  build: {
    outDir: './dist',
    assetsDir: './src',
  },
  base: "./",
  assetsInclude: ['**/*.md']

});
