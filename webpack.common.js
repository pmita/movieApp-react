/* eslint-disable no-undef */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const cssDev =[ 'style-loader', 'css-loader', 'sass-loader' ];
const cssProd = [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ];
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
        mode   : !isProd ? 'development' : 'production',
        entry  : path.resolve(__dirname, './src/index.js'),
        output : {
            path     : path.join(__dirname, '/dist'), 
            filename : 'index.bundle.js' 
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
                    use  : cssConfig
                }
            ]
        },
        plugins : [
            new MiniCssExtractPlugin({ filename: 'main.css' }), 
            new HtmlWebpackPlugin({
                template : './public/index.html',
                title    : 'Movie App',
                filename : 'index.html',
                inject   : 'body'

            })
        ]
    };
