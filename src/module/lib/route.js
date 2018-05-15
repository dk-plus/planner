const $ = require('jquery');

const Route = (() => {
  const _e = {
    routeBtn: '[data-route]'
  };

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
    });
    $('body').on('click', _e.routeBtn, (e) => {
      let path = $(e.target).data('route');
      _e.goTo(path);
    })
  }

  return _e;
})();
module.exports = Route;