// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  // Fonts are downloaded from Google Fonts at build time and served from our own domain.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-playfair",
      weights: ["400 700"],
      styles: ["normal", "italic"],
      subsets: ["cyrillic", "latin"],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["cyrillic", "latin"],
      fallbacks: ["sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
