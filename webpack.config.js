import { join } from 'path';
// eslint-disable-next-line no-undef
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

export const output = {
    // eslint-disable-next-line no-undef
    path     : join(__dirname, '/dist'),
    filename : 'index.bundle.js'
};
export const devServer = {
    historyApiFallback : true,
    port               : 4000,
    open               : true,
    hot                : true
};
export const module = {
    rules : [
        {
            test    : /\.(js|jsx)$/,
            exclude : /node_modules/,
            use     : {
                use : [ 'babel-loader', 'eslint-loader' ]
            }
        },
        {
            test : /\.scss$/,
            use  : [
                _loader,
                'css-loader',
                'sass-loader'
            ]
        }
    ]
};
export const plugins = [ new MiniCssExtractPlugin() ];
