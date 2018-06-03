const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const FormatTime = require('../../lib/formatTime.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app'
  };

  let obj = {};

  _e.init = () => {
    Rem.init();
    setTimeout(() => {
      let taskId = localStorage.getItem('taskId');
      Request.get(taskId, (data) => {
        obj.data = data;
        setComplete();
        render();
        $('.finish').on('click', finish);
      });
    }, 500);
    // Route.init();
  }

  function setComplete() {
    console.log(obj.data.message.taskList);
    obj.data.message.taskList.forEach((item) => {
      let start = new Date(item.startTime).getTime();
      let comsume = item.timeConsume;
      let end = start + comsume;
      // console.log(end);
      let now = new Date().getTime();
      let complete = end - now;
      console.log(`${complete}/${comsume}=${complete / comsume * 100}`);
      item.complete = 100 - complete/comsume*100;
      console.log(obj);

      item.timeConsume = FormatTime.secToDays(item.timeConsume);
    });
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  function finish() {
    let id = localStorage.getItem('taskId').split('/')[2];
    Request.get(`/task/end/${id}`, (data) => {
      if (data.code === 0) {
        console.log('sucess');
      }
    });
  }

  return _e;
})();
module.exports = Module;