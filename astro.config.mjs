import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://modern-z.github.io",
  base: "/inplace-modernization-mainframe",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
