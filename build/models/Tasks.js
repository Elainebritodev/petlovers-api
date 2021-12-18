"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const taskSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100
  },
  birthday: {
    type: Date,
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large', 'giant'],
    required: true
  },
  description: {
    type: String,
    maxlength: 150
  }
}, {
  timestamps: true
});
const Task = (0, _mongoose.model)('task', 'taskSchema');
var _default = Task;
exports.default = _default;