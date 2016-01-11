'use strict';

var hg = require('mercury');
var h = hg.h;
var moment = require('moment');

var TimeOutput = require('./time.js');
var t = moment('2015-11-19 20:38:00+02:00');

function App(initialState) {
  var state = hg.state({
    time: hg.value(0),
    seconds: TimeOutput(t, 'seconds'),
    minutes: TimeOutput(t, 'minutes'),
    hours: TimeOutput(t, 'hours'),
    days: TimeOutput(t, 'days'),
    weeks: TimeOutput(t, 'weeks', true),
    months: TimeOutput(t, 'months', true),
    years: TimeOutput(t, 'years', true),
    _hotVersion: hg.value(0),
    channels: {
      changeTime: changeTime
    }
  });
  setInterval(function() {
    changeTime(state, { time: Date.now() });
  }, 1000);
  return state;
};

function changeTime(state, data) {
  state.time.set(data.time);
}

module.exports = App;
