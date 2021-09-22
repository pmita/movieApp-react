/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry  : path.resolve(__dirname, './src/index.js'),
        output : {
            path     : path.join(__dirname, '/dist'), 
            filename : 'index.bundle.js' 
        }, // will run in the browser
          devServer : {
            historyApiFallback : true,
            port               : 4000, 
            open               : true,
            hot                : true
        },
        module : { 
            rules : [ 
                {
                    test    : /\.(js|jsx)$/, 
                    exclude : /node_modules/, 
                    use     : [ 'babel-loader', 'eslint-loader' ]
                },
                {
                    test : /\.scss$/,
                    use  : [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins : [ 
            new MiniCssExtractPlugin({
                filename : 'main.css'
            }),
            new HtmlWebpackPlugin({
                template : './public/index.html',
                title    : 'Movie App',
                filename : 'index.html',
                inject   : 'body'

            })
        ]
    };
