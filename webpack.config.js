/**
 * Created by xiongmingcai on 17/12/18.
 */
var path = require('path');
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
    module:{},
    plugins:[],
    devServer:{
        contentBase:path.resolve(__dirname,'./'),
        host:'192.168.1.110',
        compress:true,
        port:9000
    }
};
