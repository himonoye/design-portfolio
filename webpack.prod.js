const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: 'production',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./view/index.html",
            filename: "./index.html",
        })
    ],
}