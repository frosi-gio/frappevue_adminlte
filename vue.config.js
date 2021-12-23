module.exports = {

    devServer: {
        disableHostCheck: true
    },
    chainWebpack: (config) => {
        // Pug Loader
        config.module
            .rule('pug')
            .test(/\.pug$/)
            .use('pug-plain-loader')
            .loader('pug-plain-loader')
            .end();
    },
    css: {
        loaderOptions: {
            sass: {
                prependlData: `
              @import "@/scss/_variables.scss";
            `
            }
        }
    },

}