"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.toJSON = void 0;

var toJSON = function toJSON(data) {
  return data.json();
};

exports.toJSON = toJSON;
var _default = toJSON;
exports.default = _default;