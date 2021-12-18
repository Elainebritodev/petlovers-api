"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const resquestTrackMiddleware = (req, res, next) => {
  console.log(`Receiving "${req.method}" request to route "${req.path}"`);
  next();
};

var _default = resquestTrackMiddleware;
exports.default = _default;