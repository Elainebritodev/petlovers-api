"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidBodyRequestException extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.status = 400;
  }

}

var _default = InvalidBodyRequestException;
exports.default = _default;