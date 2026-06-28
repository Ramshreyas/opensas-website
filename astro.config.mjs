import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://ramshreyas.github.io/opensas-website",
  base: "/opensas-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
