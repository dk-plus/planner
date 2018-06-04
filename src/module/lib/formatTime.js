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

  _e.formatToday = (date) => {
    let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    let day = date.getDate() >= 10 ? date.getDate() : '0' + (date.getDate());
    let hour = date.getHours() >= 10 ? date.getHours() : '0' + (date.getHours());
    let min = date.getMinutes() >= 10 ? date.getMinutes() : '0' + (date.getMinutes());
    let sec = date.getSeconds() >= 10 ? date.getSeconds() : '0' + (date.getSeconds() );
    return `
      ${date.getFullYear()}-${month}-${day} ${hour}:${min}:${sec}
    `
    // return `
    //   ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    // `
  }

  _e.totalSec = (day, hour, min) => {
    return _e.dayToSec(day) + _e.hourToSec(hour) + _e.minToSec(min);
  }

  _e.secToDays = (sec) => {
    let str = "";
    let day = 24 * 60 * 60 * 1000;
    let hour = 60 * 60 * 1000;
    let min = 60 * 1000;
    str = parseInt(sec / day) + '天' + parseInt(sec % day / hour) + '小时' + parseInt(sec % day % hour / min) + '分钟' + parseInt(sec % day % hour % min/ 1000) +'秒';
    return str;
  }

  _e.init = () => {}
  return _e;
})();

module.exports = formatTime;