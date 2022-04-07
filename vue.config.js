const { defineConfig } = require('@vue/cli-service');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    productionSourceMap: false,
    publicPath: './',

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },

    pages: {
        h5: {
            entry: 'src/main.h5.js',
            template: 'public/index.h5.html',
            filename: 'h5.html',
            title: 'index'
        },
        editor: {
            entry: 'src/main.editor.js',
            template: 'public/index.editor.html',
            filename: 'editor.html',
            title: 'index'
        }
    },

    css: {
        extract: true,
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/styles/variables.scss";`
            }
        }
    },

    devServer: {
        port: 6689
    },

    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 删除系统默认的splitChunk
            config.optimization.delete('splitChunks');
        }

        // config
        //     .plugin('webpack-bundle-analyzer')
        //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    },

    configureWebpack: () => {
        if (process.env.NODE_ENV === 'production') {
            return {
                optimization: {
                    splitChunks: {
                        cacheGroups: {
                            common: {
                                //抽取所有入口页面都需要的公共chunk
                                name: 'chunk-common',
                                chunks: 'initial',
                                minChunks: 2,
                                maxInitialRequests: 5,
                                minSize: 0,
                                priority: 1,
                                reuseExistingChunk: true,
                                enforce: true
                            }
                        }
                    }
                },

                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: false
                    })
                ]
            };
        }
    }
});
