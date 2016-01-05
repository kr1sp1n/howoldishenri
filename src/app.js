'use strict';

var hg = require('mercury');
var h = hg.h;

function App(initialState) {
  var state = hg.state({
    time: hg.value(0),
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
