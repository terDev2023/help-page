// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Help-page",
      link: [
        { rel: 'stylesheet', href: "https://rsms.me/inter/inter.css" }
      ]
    },
  },
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ]
})
