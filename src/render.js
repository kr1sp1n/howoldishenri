'use strict';

var hg = require('mercury');
var h = hg.h;
var moment = require('moment');

module.exports = function render(state) {
  var t = moment('2015-11-19 20:38:00+02:00');
  var now = moment();
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

  var opts = {
    style: { 
      'margin': 'auto'
    }
  };
  return h('div', div_opts, [
    h('h1', opts, now.diff(t, 'seconds').toString() + ' seconds'),
    h('h1', opts, now.diff(t, 'minutes').toString() + ' minutes'),
    h('h1', opts, now.diff(t, 'hours').toString() + ' hours'),
    h('h1', opts, now.diff(t, 'days').toString() + ' days'),
    h('h1', opts, now.diff(t, 'weeks', true).toFixed(2).toString() + ' weeks'),
    h('h1', opts, now.diff(t, 'months', true).toFixed(2).toString() + ' months'),
    h('h1', opts, now.diff(t, 'years', true).toFixed(2).toString() + ' years')
  ]);
};
