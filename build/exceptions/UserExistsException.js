"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class UserExistsException extends Error {
  constructor() {
    super();
    this.message = 'Email has already being taken by another user. Please choose another.';
    this.status = 400;
  }

}

var _default = UserExistsException;
exports.default = _default;