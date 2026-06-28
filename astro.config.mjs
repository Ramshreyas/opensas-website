import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ramshreyas.github.io/opensas-website",
  base: "/opensas-website",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
