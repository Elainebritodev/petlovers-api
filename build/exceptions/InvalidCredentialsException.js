"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class InvalidCredentialsException extends Error {
  constructor() {
    super();
    this.message = 'Invalid email or passaword credentials';
    this.status = 400;
  }

}

var _default = InvalidCredentialsException;
exports.default = _default;