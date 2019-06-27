const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry:{
        'react-watermarks' : './src/index.js',
        'react-watermarks.min': './src/index.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                loader: require.resolve('babel-loader'),
            }
        ]
    },
    mode:'none',
    output: {
        filename: '[name].js',
        library:'reactWatermarks',
        libraryTarget:'umd',
        //避免watermark.default
        libraryExport:"default",
    },
    optimization: {
        minimize: true,
        minimizer: [
            //es6压缩
            new TerserPlugin({
                include: /\.min\.js$/,

            })
        ]
    }
}