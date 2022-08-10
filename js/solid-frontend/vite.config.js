// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  assetsIncludes: ['assets/**/*'],
  plugins: [solidPlugin()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@static', replacement: '/static' },
    ],
    conditions: ['development', 'browser'],
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    assetsDir: 'a',
    assetsInlineLimit: 0,
    minify: 'terser',
  },
  test: {
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    deps: {
      inline: [/solid-js/],
    },
  },
});
