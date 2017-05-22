var webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'hashicon': './src/hashicon.ts',
    },
    output: {
        path: __dirname + '/../dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {   
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}