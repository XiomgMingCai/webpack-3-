const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const PUBLICPATH = '/';
module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: PUBLICPATH
    },
    module: {
        rules: []
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        host: 'localhost',
        compress: true,
        port: 9000
    }
});