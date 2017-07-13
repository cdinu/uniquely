'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uuid;

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var x = (0, _create2.default)('0123456789abcdef').random;
var y = (0, _create2.default)('89abcdef').random;

function uuid() {
  return [x(8), x(4), '4' + x(3), y(1) + x(3), x(12)].join('-');
}