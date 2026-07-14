import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import sanity from "@sanity/astro"; 
import vercel from "@astrojs/vercel"; // 🌟 Ara ho importem així

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  
  // Activem el mode SSR
  output: "server",
  adapter: vercel(),

  integrations: [
    mdx(), 
    sitemap(), 
    icon(), 
    sanity({
      projectId: "mytf86dr", // Substitueix pel teu ID real
      dataset: "production",
      useCdn: false, 
      apiVersion: "2026-07-13",
    })
  ],
  
  vite: {
    plugins: [tailwindcss()],
  },
});

 