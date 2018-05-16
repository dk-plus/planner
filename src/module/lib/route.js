const $ = require('jquery');
const artT = require('art-template/dist/template.js');

const Route = (() => {
  const _e = {
    routeBtn: '[data-route]',
    page: '#app'
  };

  const route = {
    '/': require('../app/main/index.js'),
    '/step1': require('../app/step_1/index.js'),
    '/step2': require('../app/step_2/index.js'),
    '/step3': require('../app/step_3/index.js'),
    '/step4': require('../app/step_4/index.js'),
    '/step5': require('../app/step_5/index.js'),
  }

  _e.back = () => {
    window.history.back();
  }

  _e.goTo = (path) => {
    window.history.pushState({
      path: path
    },{},path);
  }

  _e.redirect = (path) => {
    window.history.replaceState({
      path: path
    }, {}, path);
  }

  _e.init = () => {
    $(window).on('popstate', (e) => {
      e.preventDefault();
      console.log(e.state);
      redirect(location.pathname);
    });
    $('body').on('click', _e.routeBtn, (e) => {
      let path = $(e.target).data('route');
      _e.goTo(path);
      redirect(path);
    })
  }

  function redirect(path) {
    if (path === '/') {
      // location.href = 'http://localhost:3000'
    }
    route[path].init();
  }

  return _e;
})();
module.exports = Route;