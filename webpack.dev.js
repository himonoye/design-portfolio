const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    output: {
        publicPath: '/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                filename: 'fonts/[name][ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
        fallback: { 
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "vm": require.resolve("vm-browserify"),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            favicon: path.resolve(__dirname, 'src', 'assets', 'favicon.svg'),
            inject: 'body'
        })
    ]
    
}