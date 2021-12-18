"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 1000
  },
  role: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User'
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});
const User = (0, _mongoose.model)('user', userSchema);
var _default = User;
exports.default = _default;