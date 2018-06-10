const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

// const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');
const Cookie = require('../../lib/cookie.js');

const Main = require('../main/index.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app',
  };

  let obj = {};

  _e.init = () => {
    Request.get('/info', (data) => {
      obj.data = data.message;
      // console.log(obj);
      render();
    },(err) => {
      console.log(err);
    });
    $('body').on('click', '.log-out', () => {
      Request.get('/logout', (data) => {
        if (data.code === 0) {
          console.log('登出成功');
          location.reload();
        }
      });
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