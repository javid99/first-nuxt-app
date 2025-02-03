// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   modules: [
     "@nuxtjs/tailwindcss",
     "@nuxtjs/color-mode",
     "@nuxt/content",
     '@nuxtjs/sitemap'
   ],
   content: {
      build: {
        markdown: {
          highlight: {
            theme: {
              // Default theme (same as single string)
              default: 'github-light',
              // Theme used if `html.dark`
              dark: 'github-dark',
              // Theme used if `html.sepia`
              sepia: 'monokai'
            }
          }
        }
      }
    },
    app: {
      pageTransition: {
        name: 'page',
        mode: 'out-in'
      }
    },

    site: {
      url: 'http://localhost:3000/',
      name: 'my first nuxt site' 
    },

    nitro: {
      prerender: {
        routes:["/sitemap.xml"]
      }
    }
});