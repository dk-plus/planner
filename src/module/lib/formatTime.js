const formatTime = (() => {
  const _e = {};

  _e.dayToSec = (day) => {
    return day*24*60*60*1000;
  }

  _e.hourToSec = (hour) => {
    return hour*60*60*1000;
  }

  _e.minToSec = (min) => {
    return min*60*1000;
  }

  _e.secToDays = (sec) => {
    let str = "";
    let day = 24 * 60 * 60 * 1000;
    let hour = 60 * 60 * 1000;
    let min = 60 * 1000;
    str = parseInt(sec/day)+'天'+parseInt(sec%day/hour)+'小时'+parseInt(sec%day%hour/min)+'分钟';
    return str;
  }

  _e.init = () => {}
  return _e;
})();

module.exports = formatTime;