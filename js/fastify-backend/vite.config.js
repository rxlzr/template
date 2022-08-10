// noinspection JSUnusedGlobalSymbols

import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 60608,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/app.ts',
      exportName: 'app',
      tsCompiler: 'swc',
      swcOptions: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: false,
            decorators: true,
            dynamicImport: false,
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
          target: 'es2022',
          loose: false,
          externalHelpers: false,
          keepClassNames: false,
        },
        minify: false,
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  optimizeDeps: {},
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    minify: 'terser',
  },
});
