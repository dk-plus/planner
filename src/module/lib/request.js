const $ = require('jquery');

const request = (function () {

  function get(url, callbackSucess, callbackError) {
    $.ajax({
      url: url,
      method: 'GET',
      success: callbackSucess,
      error: callbackError
    });
  }

  function post(url, data, callbackSucess, callbackError) {
    $.ajax({
      url: url,
      method: 'POST',
      data: JSON.stringify(data),
      success: callbackSucess,
      error: callbackError
    });
  }

  return {
    get: get,
    post: post
  }
})();

module.exports = request;