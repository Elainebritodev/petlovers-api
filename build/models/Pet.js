"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const petSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  birthday: {
    type: Date
  },
  size: {
    type: String,
    enum: ['small', 'medium', 'large', 'giant']
  },
  description: {
    type: String,
    maxlength: 150
  },
  task: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'task',
    default: []
  }],
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  photography: {}
}, {
  timestamps: true
});
const Pet = (0, _mongoose.model)('pet', petSchema);
var _default = Pet;
exports.default = _default;