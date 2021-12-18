"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _InvalidIdException = _interopRequireDefault(require("../exceptions/InvalidIdException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateId = id => {
  const isValid = (0, _mongoose.isValidObjectId)(id);

  if (!isValid) {
    throw new _InvalidIdException.default();
  }
};

var _default = validateId;
exports.default = _default;