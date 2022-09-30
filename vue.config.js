const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack:{
        resolve: { alias: {  'Vue': 'vue/dist/vue.esm-bundler.js' } },
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/app.scss";`
            }
        }
    }
});
