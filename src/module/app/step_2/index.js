const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

// const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app',
    name: '',
    stage: 1
  };

  let obj = {};

  _e.init = () => {
    Rem.init();
    render();
    $('.stage').on('change', () => {
      _e.stage = $('.stage').val();
      _e.name = $('.name').val();
      store();
    })
    $('body').on('click', '[data-route]', store);
  }

  function store() {
    // $('.stage').val();
    Storage.set('stage', _e.stage);
    Storage.set('name', _e.name);
    console.log(localStorage);
    $('body').off('click', '[data-route]', store);
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(obj));
  }

  return _e;
})();
module.exports = Module;