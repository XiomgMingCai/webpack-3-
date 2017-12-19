import css from './main.css';
import add from './add.js';
// import $ from 'jquery'
import Vue from 'vue'
var imgurl = require('./201611141559227978.jpg');
document.getElementById('title').innerText = 'hello webpack ! 1';
var img = document.createElement('img');
img.src = imgurl ;

var body =$('body');

var json = require('./json.json')
var pre = document.createElement('pre');
pre.innerText = JSON.stringify(json,null,4)
body.append(pre);
body.append(img);
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})