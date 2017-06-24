window.jQuery = window.$ = require('jquery');
window.Bootstrap = require('bootstrap');
const slick = require('slick-carousel');


const spotlight = require('../components/spotlight/spotlight.js');
spotlight();


const mansonryComp = require('../components/masonry/masonry.js');
mansonryComp();


const subscribeComp = require('../components/subscribe/subscribe.js');
subscribeComp();



const timeline = require('../components/timeline/timeline.js');
timeline();


const footer = require('../components/footer/footer.js');
footer();

