/**
 * Created by xiongmingcai on 17/12/18.
 */
var path = require('path');
var UglifyJsPlugin = require('path');
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
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'./'),
        host:'192.168.1.110',
        compress:true,
        port:9000
    }
};
