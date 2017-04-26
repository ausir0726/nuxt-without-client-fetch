const axios = require('axios');

module.exports = {


  
  generate: {
    async routes() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return data.map(post => `/post/${post.id}`);
    },
  },
  /**
   * 如果放置的空間在資料夾內請修改 base
   */
  router: {
    base: '/',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: 'nuxt-without-client-fetch',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: 'nuxt-without-client-fetch' },
      { hid: 'description', name: 'description', content: 'FINPO project' },
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/bs4.scss', lang: 'scss' },
    { src: '~assets/css/main.styl', lang: 'stylus' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  plugins: [],
};
