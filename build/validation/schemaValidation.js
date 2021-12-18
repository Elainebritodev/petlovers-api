"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InvalidBodyRequestException = _interopRequireDefault(require("../exceptions/InvalidBodyRequestException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateSchema = async (schema, body) => {
  try {
    await schema.validate(body, {
      abortEarly: false
    });
  } catch (error) {
    const errors = error.inner.map(err => ({
      field: err.path,
      error: err.errors[0]
    }));
    throw new _InvalidBodyRequestException.default(errors);
  }
};

var _default = validateSchema;
exports.default = _default;