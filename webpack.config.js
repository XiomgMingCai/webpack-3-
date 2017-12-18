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
        filename:'[name].js'
    },
    module:{},
    plugins:[],
    devServer:{
        contentBase:path.resolve(__dirname,'./'),
        host:'localhost',
        compress:true,
        port:9000
    }
};
