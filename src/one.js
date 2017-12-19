import css from './main.css';
var imgurl = require('./201611141559227978.jpg');
document.getElementById('title').innerText = 'hello webpack ';
var img = document.createElement('img');
img.src = imgurl ;

var body = document.getElementsByTagName('body')[0];
body.appendChild(img);