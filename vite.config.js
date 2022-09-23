import { defineConfig } from "vite";
import path, { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "main.js"),
      name: "vite-test",
      fileName: (ext) => `index.${ext}.js`,
      formats: ["es", "cjs", "umd"],
    },
    sourcemap: true,
  },
});
