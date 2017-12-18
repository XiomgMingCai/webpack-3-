/**
 * Created by xiongmingcai on 17/12/18.
 */
var path = require('path');
var  UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var   HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry:{
        one:'./src/one.js',
        tow:'./src/tow.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath: '/',
    },
    module:{
        rules: [//规则
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 600
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
        ,new HtmlWebpackPlugin({
            my_str: 'my-var',
            projectPath:"http://项目七牛云cdn地址/assets",
            title: 'Custom template',
            template: './src/my-index.ejs',
            hash: true
        })
        ,new ExtractTextPlugin("assets/css/main.css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./'),
        host:'192.168.1.110',
        compress:true,
        port:9000
    }
};
