import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Convert ESM import.meta.url to a directory path (equivalent to __dirname in CJS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  css: {
    modules: false,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "SuccessModal",
      fileName: "index",
    },
    cssCodeSplit: false,
    minify: "terser", // Meilleur compression
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name;
        },
      },
    },
  },
});
