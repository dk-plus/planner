const Cookie = (() => {
  const _e = {};

  _e.setCookie = (key, value) => {
    let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    document.cookie = cookieText;
  }

  _e.getCookie = (key) => {
    let cookieKey = encodeURIComponent(key) + '=',
        cookieStart = document.cookie.indexOf(cookieKey),
        cookieValue = null;

    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart);
      if (cookieEnd = -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieKey.length, cookieEnd));
    }
    return cookieValue;
  }

  _e.init = () => {

  }

  return _e;
})();

module.exports = Cookie;