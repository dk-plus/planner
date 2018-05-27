const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

// const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');
const Cookie = require('../../lib/cookie.js');

const Reg = require('../reg/index.js');
const Main = require('../main/index.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app',
    name: '#name',
    pwd: '#pwd',
    log: '#log-btn',
    reg: '#reg-btn'
  };

  let obj = {};

  _e.init = () => {
    render();
    $(_e.log).on('click', () => {
      let user = {
        perUser: $(_e.name).val(),
        perPass: $(_e.pwd).val()
      }
      // console.log(user);
      Request.post('/login', user, (data) => {
        console.log(data);
        if (data.code === 0) {
          Cookie.setCookie('user', user.perUser);
          Cookie.setCookie('pwd', user.perPass);
          Main.init();
        }
        if (data.code === -2) {
          console.log('登录失败');
          $('#pop-up').show();
          setTimeout(() => {
            location.href = location.origin;
          }, 500);
        }
      }, (err) => {
        console.log(err);
      });
    });
    $(_e.reg).on('click', () => {
      Reg.init();
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