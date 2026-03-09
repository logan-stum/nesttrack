// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/logan-stum/nesttrack", // must match your GitHub repo name exactly
  build: {
    lib: {
      entry: "src/nesttrack.jsx",
      name: "NestTrack",
      formats: ["es", "umd"],
      fileName: (format) => `nesttrack.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
      },
    },
  },
});