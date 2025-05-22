export default defineNuxtConfig({
  app: {
    head: {
      title: "SushiShop",
    },
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-lucide-icons",
    "motion-v/nuxt",
    "lenis/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Nunito Sans": true,
        },
      },
    ],
    "@pinia/nuxt",
  ],
});
