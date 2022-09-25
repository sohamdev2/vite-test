import { defineConfig } from "vite";
import path, { resolve } from "path";
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": resolve(__dirname, 'src'),
  //   },
  // },
  build: {
    lib: {
      entry: resolve(__dirname, "main.js"),
      name: "vite-test",
      fileName: "index",
    },
    sourcemap: true,
  },
  plugins: [createVuePlugin()],
});
