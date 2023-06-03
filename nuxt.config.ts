// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//     modules: [
//         '@nuxtjs/tailwindcss'
//       ],
//     app: {
//         baseURL: '/Ken_Kraft/'
//     },
//     ssr: false
// })

export default defineNuxtConfig({
  // Global page headers
  app: {
    head: {
        title: 'Kraft Solutions',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: 'Your Website Description' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
      baseURL: '/Ken_Kraft/'
  },


  // Plugins to run before rendering page
  plugins: [], 

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  supabase: {
    url: process.env.SUPABASE_URL 
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],

  // Build Configuration
  build: {},
  ssr: false
})
