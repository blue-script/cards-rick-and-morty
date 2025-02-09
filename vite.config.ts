import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  base: "/cards-rick-and-morty/",
  plugins: [react()],
})
