import { defineConfig } from 'tsup'

export default defineConfig({
  async onSuccess() {},
  entry: ['package/index.ts'],
  outDir: 'package/dist',
  sourcemap: true,
  dts: true,
  format: ['esm'],
  clean: true,
})
