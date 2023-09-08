import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const PORT = 9000; // TODO configure env var

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": `http://localhost:${PORT}`,
    },
  },
  plugins: [react()],
});
