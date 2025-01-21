// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  app: {
    head: {
      bodyAttrs: {
        class: 'drawer min-h-screen bg-base-200 lg:drawer-open'
      }
    },
    rootTag : 'body',
    rootAttrs : {
      id: 'app'
    },
  }
})
