/**
 * Created by xiongmingcai on 17/12/19.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/one.js',
        jquery:'jquery',
        vue:'vue'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(ejs|html)$/i,
                use: [
                    {
                        loader: 'html-withimg-loader',
                        options: {
                            min: false
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 600,
                            outputPath: 'assets/images/',
                            name: '[hash].[ext]'
                            // ,publicPath:'http://cdn.mongyu.cn/assets'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:'jquery',
            Vue:"Vue"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:['jquery','vue'],
            filename:"assets/js/[name].js",
            minChunks:2
        }),
        new HtmlWebpackPlugin({
            my_str: 'my-var',
            projectPath: "http://项目七牛云cdn地址/assets",
            title: 'Custom template',
            template: './src/my-index.ejs',
            hash: true
        }),
        new ExtractTextPlugin("assets/css/[hash].css")
    ]
};
