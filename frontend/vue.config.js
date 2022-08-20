const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/main.scss";`
        }
    }
  },
  // configureWebpack: {
  //   plugins: [
  //       new webpack.ProvidePlugin({
  //           Vue: ['vue', 'default'],
  //           mapGetters: ['vuex', 'mapGetters'],
  //           mapActions: ['vuex', 'mapActions'],
  //           mapMutations: ['vuex', 'mapMutations'],
  //           mapState: ['vuex', 'mapState'],
  //       })
  //   ]
  // }
})
