"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authController = _interopRequireDefault(require("./controllers/authController"));

var _petController = _interopRequireDefault(require("./controllers/petController"));

var _tasksController = _interopRequireDefault(require("./controllers/tasksController"));

var _protectedRoute = _interopRequireDefault(require("./middlewares/protectedRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/auth', _authController.default); // rota pública

router.use(_protectedRoute.default); // middleware de rota protegida

router.use('/pet', _petController.default); // rotas privadas

router.use('/tasks', _tasksController.default);
var _default = router;
exports.default = _default;