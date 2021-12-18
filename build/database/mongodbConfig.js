"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const initMongoConnection = () => {
  (0, _mongoose.connect)(process.env.MONGODB_URI).then(() => console.log('Connected to the database')).catch(error => console.log(error));
};

var _default = initMongoConnection;
exports.default = _default;