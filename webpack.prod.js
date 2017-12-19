const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.common.js');

const PUBLICPATH = '/';
// const PUBLICPATH = '/';

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: PUBLICPATH
    },
    module: {
        rules: []
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
});
