"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message || 'A problem occurred. Please try again later'
  });
};
/* Isolamento do Middleware error hendling */


var _default = errorHandlingMiddleware;
exports.default = _default;