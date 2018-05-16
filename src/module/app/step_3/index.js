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

  let obj = {
    data: []
  };

  _e.init = () => {
    setLength(Number(localStorage.getItem('stage')));
    Rem.init();
    setTimeout(() => {
      render();
    },0);
    $('body').on('click', '[data-route]', store);
  }

  function store() {
    Storage.set('ccc', 'ccc');
    console.log(localStorage);
    Storage.clear();
    console.log(localStorage);
    $('body').off('click', '[data-route]', store);
  }

  function setLength(length) {
    for (let i = 0; i<length; i++) {
      obj.data.push(1)
    }
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  return _e;
})();
module.exports = Module;