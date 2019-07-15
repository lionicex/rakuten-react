const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: "localhost.rakuten.tv",
        port: 8080,
        publicPath: 'http://localhost.rakuten.tv:8080/build'
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        template: 'public/index.html'
    })]
};
