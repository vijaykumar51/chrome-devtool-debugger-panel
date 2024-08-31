import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "./", // Ensure relative paths are generated
  build: {
    outDir: "dist", // Output directory relative to the root
    emptyOutDir: true,
    rollupOptions: {
      input: "index.html",
    },
  },
  plugins: [react()],
});
