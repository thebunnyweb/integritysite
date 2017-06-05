window.jQuery = window.$ = require('jquery');
window.Bootstrap = require('bootstrap');
var slick = require('slick-carousel');
var videoBg = require('jquery-background-video');


const spotLight = require('../components/spotlight/spotlight.js');
spotLight({
	el : 'section#spotlight'
});