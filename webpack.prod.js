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
                test: /\.(js|jsx|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
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
            template: "./index.html",
            filename: "./index.html",
            favicon: "./src/assets/favicon.svg"
        }),
    ]
}