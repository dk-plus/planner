const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

// const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');
const FormatTime = require('../../lib/formatTime.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app'
  };

  let obj = {
    data: []
  };

  let timeData = {
    timeC: 0
  }

  _e.init = () => {
    setLength(Number(localStorage.getItem('stage')));
    Rem.init();
    render();
    // $('body').on('click', '[data-route]', store);
    $('body').on('click', '.action', store);
  }

  function store() {
    Request.post('/task/new', formatData(), (data) => {
      if (data.code === 0) {
        console.log('sucess');
        // location.href = location.origin;
      }
      if (data.code === -2) {
        console.log('fail');
      }
    }, (err) => {
      console.log(err);
    });
    // console.log(localStorage);
    Storage.clear();
    // console.log(localStorage);
    // $('body').off('click', '[data-route]', store);
  }

  function setLength(length) {
    for (let i = 0; i<length; i++) {
      obj.data.push(1)
    }
  }

  function form() {
    let data = [];
    let nextStartTime = '';
    $('.stage').each((index, item) => {
      let obj = {};
      obj['taskName'] = $('.detail').eq(index).val();
      obj['startTime'] = nextStartTime!==''? nextStartTime: FormatTime.formatToday(new Date());
      let day = $('.time').eq(index).children().eq(0).val();
      let hour = $('.time').eq(index).children().eq(1).val();
      let min = $('.time').eq(index).children().eq(2).val();
      // console.log(day,hour,min,FormatTime.totalSec(day, hour, min));
      obj['timeConsume'] = FormatTime.totalSec(day, hour, min);
      obj['stageLevel'] = index;
      data.push(obj);
      nextStartTime = FormatTime.formatToday(new Date(new Date(obj['startTime']).getTime() + obj['timeConsume']));
      // console.log(nextStartTime);
      timeData.timeC += obj['timeConsume'];
      console.log(timeData);
    });
    return data;
  }

  function formatData() {
    let data = {};
    // let timeC = timeData.timeC;
    data = {
      "taskName": localStorage.getItem('name'),
      "startTime": FormatTime.formatToday(new Date()),
      "taskList": form(),
      "timeConsume": timeData.timeC,    //总消耗时间
    }
    return data;
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  return _e;
})();
module.exports = Module;