const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app'
  };

  let obj = {};

  _e.init = () => {
    Rem.init();
    Request.get('/task/16', (data) => {
      obj.data = data;
      render();
      $('.finish').on('click', finish );
    });
    // Route.init();
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  function finish() {
    let id = localStorage.getItem('taskId');
    Request.get(`/task/end/${id}`, (data) => {
      if (data.code === 0) {
        console.log('sucess');
      }
    });
  }

  return _e;
})();
module.exports = Module;