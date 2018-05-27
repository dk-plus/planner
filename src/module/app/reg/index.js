const $ = require('jquery');
const artT = require('art-template/dist/template.js');
const Rem = require('../../lib/rem.js');

const Route = require('../../lib/route.js');
const Request = require('../../lib/request.js');
const Storage = require('../../lib/storage.js');
const Cookie = require('../../lib/cookie.js');

const Main = require('../main/index.js');

require('./index.less');

const Module = (() => {
  const _e = {
    wrapper: '#app',
    name: '#name',
    nick: '#nick',
    sign: 'signiture',
    reg: '#regi-btn'
  };

  let obj = {};

  _e.init = () => {
    render();
    $(_e.reg).on('click', () => {
      let user = {
        perUser: $(_e.name).val(),
        perPass: $(_e.pwd).val(),
        perName: $(_e.nick).val(),
        perComment: $(_e.sign).val()
      }
      Cookie.setCookie('user', user.perUser);
      Cookie.setCookie('pwd', user.perPass);
      // console.log(user);
      Request.post('/person/add', user, (data) => {
        console.log(data);
        Main.init();
      }, (err) => {
        console.log(err);
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