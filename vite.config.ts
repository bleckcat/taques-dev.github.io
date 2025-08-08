import react from "@vitejs/plugin-react-swc"
import { componentTagger } from "lovable-tagger"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  base: '/taques-dev.github.io/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
