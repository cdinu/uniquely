'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = create;

var _now = require('microseconds/now');

var _now2 = _interopRequireDefault(_now);

var _create = require('es6-util/iterator/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function create(chars) {

  var length = chars.length;

  var id = function id(i) {
    return i < length ? chars[i] : id(Math.floor(i / length) - 1) + chars[i % length];
  };

  var random = function random() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var string = '';
    for (var i = 0; i < n; i++) {
      string += id(Math.floor(Math.random() * length));
    }return string;
  };

  var time = function time() {
    return id((0, _now2.default)());
  };

  var next = function next() {
    var i = 0;
    return function () {
      return { value: id(i++), done: false };
    };
  };

  var iterator = function iterator() {
    return (0, _create2.default)(next());
  };

  return { id: id, random: random, time: time, iterator: iterator };
}