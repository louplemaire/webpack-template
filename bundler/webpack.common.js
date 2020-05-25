const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../src/index.js'),
    output:
    {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin([ { from: 'static' } ])
    ],
    module:
    {
        rules:
        [
            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            // CSS
            {
                test: /\.css$/,
                use:
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            // Stylus
            {
                test: /\.styl$/,
                use:
                [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                ]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },

            // Images
            {
                test: /\.(jpg|png|gif|svg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            },

            // Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/fonts/'
                        }
                    }
                ]
            },

            // Audios
            {
                test: /\.(mp3|wav|ogg)$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            outputPath: 'assets/audios/'
                        }
                    }
                ]
            }
        ]
    }
}