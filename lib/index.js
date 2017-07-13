'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterator = exports.time = exports.random = exports.id = exports.create = undefined;

var _create2 = require('./create');

var _create3 = _interopRequireDefault(_create2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _create = (0, _create3.default)('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'),
    id = _create.id,
    random = _create.random,
    time = _create.time,
    iterator = _create.iterator;

exports.default = { create: _create3.default, id: id, random: random, time: time, iterator: iterator };
exports.create = _create3.default;
exports.id = id;
exports.random = random;
exports.time = time;
exports.iterator = iterator;