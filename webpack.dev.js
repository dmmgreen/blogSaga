const pathLib = require('path');
const webpack=require('webpack');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const ROOT_PATH = pathLib.resolve(__dirname);
const ENTRY_PATH = pathLib.resolve(ROOT_PATH, 'app');
const OUTPUT_PATH = pathLib.resolve(ROOT_PATH, 'build');
const config=require('./config/config');

module.exports = {
    entry: [
        "react-hot-loader/patch",
        `webpack-hot-middleware/client?path=http://${config.host}:${config.port}/__webpack_hmr`,
        "babel-polyfill",
        pathLib.resolve(ENTRY_PATH, 'index.js')
    ],
    output: {
        path: OUTPUT_PATH,
        publicPath: '/',
        filename: '[name]-[hash:8].js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]-[local]-[hash:base64:5]',
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", 'css-loader', "postcss-loader", "less-loader"]
            }
        ]
    },
    plugins: [
        new CleanPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'blog',
            showErrors: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};