const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : {
        bundle : './src/index.js'
    },
    output : {
        path : path.join(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.js$/,
                exclude : '/node_modules/'
            },
            {
                use : [
                    'style-loader',
                    'css-loader'
                ],
                test : /\.css$/
            },
            {
                loader : 'file-loader',
                test : /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$|\.woff2$/
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.$' : 'jquery',
            'window.jQuery' : 'jquery'
        })
    ]
}