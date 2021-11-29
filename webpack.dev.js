/* eslint-disable no-undef */
const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
        output : {
            path     : path.join(__dirname, '/dist'), 
            filename : 'index.bundle.js' 
        },
        devServer : {
            historyApiFallback : true,
            port               : 3000, 
            open               : true,
            hot                : true
        }
    });
