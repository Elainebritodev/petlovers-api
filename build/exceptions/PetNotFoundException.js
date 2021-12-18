"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class PetNotFoundException extends Error {
  constructor() {
    super();
    this.message = 'Pet not found to be updated';
    this.status = 400;
  }

}

var _default = PetNotFoundException;
exports.default = _default;