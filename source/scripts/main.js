window.jQuery = window.$ = require('jquery');
window.Bootstrap = require('bootstrap');
const slick = require('slick-carousel');
var masonry = require('masonry-layout');

const spotlight = require('../components/spotlight/spotlight.js');
spotlight();


const mansonryComp = require('../components/masonry/masonry.js');
mansonryComp();


const subscribeComp = require('../components/subscribe/subscribe.js');
subscribeComp();

