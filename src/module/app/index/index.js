const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

const Login = require('../login/index.js');

const Cookie = require('../../lib/cookie.js');
const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app'
  };

  let obj = {};

  _e.init = () => {
    Rem.init();
    Request.get('/task/select', (data) => {
      obj.data = data;
      // render();
      if (!Cookie.getCookie('user') && !Cookie.getCookie('pwd')) {
        Login.init();
      }else {
        render();
      }
      $('.mask').on('click', getTaskId);
    });
    Route.init();
  }

  function getTaskId(e) {
    let id = $(e.target).data('url');
    Request.get(id, (data) => {
      Storage.set('taskId', id);
      console.log(localStorage);
      console.log(data);
      
    });
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  return _e;
})();
module.exports = Module;