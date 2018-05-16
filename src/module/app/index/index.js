const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

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
      render();
    });
    Route.init();
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  return _e;
})();
module.exports = Module;