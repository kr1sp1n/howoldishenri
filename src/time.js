'use strict';

var hg = require('mercury');
var h = hg.h;
var moment = require('moment');

function TimeOutput(t, unit, fixed) {
  return hg.state({
    value: hg.value(0),
    unit: hg.value(unit),
    t: hg.value(t),
    fixed: hg.value(fixed || false)
  });
};

TimeOutput.render = function render(state) {
  var opts = {
    style: {
      'margin': 'auto'
    }
  };
  var now = moment();
  var value = now.diff(state.t, state.unit).toString(); 
  if(state.fixed) {
    value = now.diff(state.t, state.unit, true).toFixed(2).toString();
  }
  return h('h1', opts, value + ' ' + state.unit)
};

module.exports = TimeOutput;

