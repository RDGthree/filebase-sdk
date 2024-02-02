import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.js'],
  splitting: false,
  sourcemap: false,
  noExternal: ['@ipld/car', '@helia/car', '@helia/unixfs'],
  dts: true,
  format: ['cjs', 'esm'],
  clean: true,
})
