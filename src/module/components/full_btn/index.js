const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Route = require('../../app/lib/route.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: 'btn',
    class: '.btn'
  };

  _e.init = () => {
    render();
    $(_e.wrapper).on('click', (e) => {
      // console.log($(e.target).data('route'));
      let path = $(e.target).data('route');
      Route.goTo(path);
    });
  }

  function render() {
    const tpl = require('./index.tpl')();
    const tplRender = artT.compile(tpl);

    let data = {
      btns: [
        {
          name: 'enter',
          route: '/enter'
        }, {
          name: 'back',
          route: '/back'
        }, {
          name: 'a',
          route: '/a'
        }
      ] 
    }
    $(_e.wrapper).html(tplRender(data));
  }

  return _e;
})();
module.exports = Module;