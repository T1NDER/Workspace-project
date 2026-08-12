import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Workspace-project/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@componentsSection": path.resolve(__dirname, "./src/components/Sections"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@dataSection": path.resolve(__dirname, "./src/data/Sections"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});