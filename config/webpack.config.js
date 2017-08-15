var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'hashicon': './src/hashicon.ts',
        'hashicon.min': './src/hashicon.ts'
    },
    output: {
        path: __dirname + '/../dist',
        publicPath: '/dist/',
        filename: '[name].js',
        library: 'HashIcon',
        libraryTarget: 'umd',
        libraryExport: 'default',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        loaders: [
            {   
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
                query: {
                  declaration: false,
                }
            }
        ]
    }
}