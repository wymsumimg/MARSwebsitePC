
module.exports = {

    devServer: {
        open: true,
        host: '0.0.0.0',//localhost
        port: 8080,
        https: false,
        disableHostCheck: true

    },
    baseUrl: './',
    outputDir: 'home' // 打包名称
    // configureWebpack : {
    //     performance: {
    //         hints:'warning',
    //         //入口起点的最大体积 整数类型（以字节为单位）
    //         maxEntrypointSize: 50000000,
    //         //生成文件的最大体积 整数类型（以字节为单位 300k）
    //         maxAssetSize: 30000000,
    //         //只给出 js 文件的性能提示
    //         assetFilter: function(assetFilename) {
    //             return assetFilename.endsWith('.js');
    //         }
    //     }
    // }

    
}