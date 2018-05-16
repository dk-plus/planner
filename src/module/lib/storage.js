const Storage = (() => {
  const _e = {};
  _e.set = (key, item) => {
    localStorage.setItem(key, item);
  }
  _e.get = (key) => {
    localStorage.getItem(key);
  }
  _e.delete = (key) => {
    localStorage.removeItem(key);
  }
  _e.clear = () => {
    localStorage.clear();
  }
  _e.init = () => {

  }
  return _e;
})();
module.exports = Storage;