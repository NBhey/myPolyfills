module.exports = function () {
  if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myMap was called wrong`);
      }
      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myMap ${callback} is not a function`
        );
      }

      const result = [];
      for (let i = 0; i < this.length; i += 1) {
        result.push(callback(this[i], i, this));
      }

      return result;
    };
  }

  if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initValue) {
      if (!(this instanceof Array || this instanceof String)) {
        throw new TypeError(`Array.prototype.myReduce was called wrong`);
      }
      if (typeof callback !== "function") {
        throw new TypeError(
          `Array.prototype.myReduce ${callback} is not a function`
        );
      }

      let acc = arguments.length >= 2 ? initValue : this[0]
      let iStart = arguments.length >= 2 ? 0 : 1

      for (let i = iStart; i < this.length; i += 1) {
       acc =  callback(acc, this[i], i, this)
      }

      return acc;
    };
  }
};

[1,2,3,4,5].reduce((acc,el,index,arr) => {

}, 0)