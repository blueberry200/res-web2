const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/res-web2/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
})