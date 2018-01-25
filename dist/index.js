(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.xpLib = {})));
}(this, (function (exports) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * @author xiaoping
 * @email edwardhjp@gmail.com
 * @create date 2017-10-26 03:53:38
 * @modify date 2017-10-26 03:53:38
 * @desc [倒计时类]
*/

var Countdown = function () {
  function Countdown(countdown, onTick, onEnd) {
    classCallCheck(this, Countdown);

    this.countdown = countdown; // 倒计时
    this.timeLeft = countdown;
    this.timer = null; // 初始化timer
    this.onTick = onTick;
    this.onEnd = onEnd;
  }

  createClass(Countdown, [{
    key: "start",
    value: function start() {
      var _this = this;

      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (immediate) {
        // 立即执行
        this.onTick(this.timeLeft, this);
        this.timeLeft--;
      }
      this.timer = setInterval(function () {
        if (_this.timeLeft > 0) {
          _this.onTick(_this.timeLeft, _this);
          _this.timeLeft--;
        } else {
          _this.timeLeft--;
          clearInterval(_this.timer);
          _this.onEnd(_this);
        }
      }, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
    }
  }, {
    key: "restart",
    value: function restart(newTime) {
      var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.timeLeft = newTime || this.countdown;
      this.start(immediate);
    }
  }, {
    key: "destory",
    value: function destory() {
      clearInterval(this.timer);
      
    }
  }, {
    key: "leftTime",
    get: function get$$1() {
      return this.timeLeft;
    },
    set: function set$$1(newTime) {
      this.timeLeft = newTime;
    }
  }]);
  return Countdown;
}();

exports['default'] = Countdown;

Object.defineProperty(exports, '__esModule', { value: true });

})));
