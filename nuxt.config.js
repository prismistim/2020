const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Prismist_M' },
      { hid: 'og:url', property: 'og:url', content: 'https://prismistim.github.io/2020' },
      { hid: 'og:title', property: 'og:title', content: 'prismistim/2020' },
      { hid: 'og:description', property: 'og:description', content: 'HAPPY NEW YEAR!!' },
      { hid: 'og:image', property: 'og:image', content: 'https://prismistim.github.io/2020/twitter.jpg' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'prismistim.github.io/2020'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    fallback: true
  },
  router: {
    base: routerBase
  }
}
