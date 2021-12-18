"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidIdException extends Error {
  constructor() {
    super();
    this.message = 'Invalid Id informed';
    this.status = 400;
  }

}

var _default = InvalidIdException;
exports.default = _default;