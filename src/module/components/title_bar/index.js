const $ = require('jquery');
const artT = require('art-template/dist/template.js');

const Module = (() => {
  const _e = {
    wrapper: ''
  };

  _e.init = () => {

  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    $(_e.wrapper).html(tplRender(data));
  }

  return _e;
})();
module.exports = Module;