const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

// const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app'
  };

  let obj = {
    data: []
  };

  _e.init = () => {
    setLength(Number(localStorage.getItem('stage')));
    Rem.init();
    render();
    $('body').on('click', '[data-route]', store);
  }

  function store() {
    Request.post('/task/new', formatData(), (data) => {
      if (data.code === 0) {
        console.log('sucess');
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
    $('body').off('click', '[data-route]', store);
  }

  function setLength(length) {
    for (let i = 0; i<length; i++) {
      obj.data.push(1)
    }
  }

  function form() {
    let data = [];
    $('.stage').each((index, item) => {
      let obj = {};
      obj['taskName'] = $('.detail').eq(index).val();
      obj['startTime'] = $('.detail').eq(index).val();
      obj['timeConsume'] = $('.detail').eq(index).val();
      obj['stageLevel'] = index;
      data.push(obj);
    });
    return data;
  }

  function formatData() {
    let data = {};
    let timeC = 0;
    $('.stage').each((index, item) => {
      timeC += $('.detail').eq(index).val();
    })
    data = {
      "taskName": localStorage.getItem('name'),
      "startTime": new Date(),
      "timeConsume": timeC,    //总消耗时间
      "taskList": form()
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