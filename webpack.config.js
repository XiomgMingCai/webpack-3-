/**
 * Created by xiongmingcai on 17/12/18.
 */
var path = require('path');
var  UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var   HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var settings = {
    publicPath: 'http://cdn.com/assets',
    version: '1.0.0'
}
settings = {
    publicPath: '/',
    version: '1.0.0'
}
module.exports = {
    entry:{
        one:'./src/one.js',
        tow:'./src/tow.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath: settings.publicPath,
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
                            limit: 600,
                            outputPath:'assets/images/',
                            name:'[hash].[ext]'
                            // ,publicPath:'http://cdn.mongyu.cn/assets'
                        }
                    }
                ]
            }
            , {
                test: /\.(ejs|html)$/i,
                use: ['html-withimg-loader']
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
        ,new ExtractTextPlugin("assets/css/[hash].css")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./'),
        host:'192.168.1.110',
        compress:true,
        port:9000
    }
};
