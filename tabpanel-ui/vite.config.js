import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true, // Enable source maps
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [react()],
});
