'use strict';

var hg = require('mercury');
var h = hg.h;

var TimeOutput = require('./time.js');

module.exports = function render(state) {
  var div_opts = {
    style: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: 0,
      top: '50px',
      'z-index': 10,
      'text-align': 'center'
    }
  };
  
  return h('div', div_opts, [
    TimeOutput.render(state.seconds),
    TimeOutput.render(state.minutes),
    TimeOutput.render(state.hours),
    TimeOutput.render(state.days),
    TimeOutput.render(state.weeks),
    TimeOutput.render(state.months),
    TimeOutput.render(state.years)
  ]);
};
