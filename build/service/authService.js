"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = require("../utils/bcrypt");

var _jwt = require("../utils/jwt");

var _UserExistsException = _interopRequireDefault(require("../exceptions/UserExistsException"));

var _InvalidCredentialsException = _interopRequireDefault(require("../exceptions/InvalidCredentialsException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthoService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async register(body) {
    await body.validate();
    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (foundUser) {
      throw new _UserExistsException.default();
    }

    const encryptedPassword = (0, _bcrypt.generateHash)(body.password, 10);
    const newUser = { ...body,
      password: encryptedPassword
    };
    const savedUser = await this.authRepository.saveUser(newUser);
    return {
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email
    };
  }

  async login(body) {
    await body.validate();
    const foundUser = await this.authRepository.findUserByEmail(body.email);

    if (!foundUser) {
      throw new _InvalidCredentialsException.default();
    }

    const isPasswordMatch = (0, _bcrypt.compareHash)(body.password, foundUser.password);

    if (!isPasswordMatch) {
      throw new _InvalidCredentialsException.default();
    }

    const token = (0, _jwt.generateLoginToken)({
      id: foundUser._id,
      role: foundUser.role
    });
    return {
      token,
      role: foundUser.role
    };
  }

}

var _default = AuthoService;
exports.default = _default;