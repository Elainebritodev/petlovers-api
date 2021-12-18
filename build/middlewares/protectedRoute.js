"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _NotAuthorizedException = _interopRequireDefault(require("../exceptions/NotAuthorizedException"));

var _jwt = require("../utils/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const protectedRouteMiddleware = (req, res, next) => {
  //escrever uma lógica para tentar pegar um token da requisição, validá-lo e dar um next ou lançar um erro
  try {
    //inserir dentro do request as informações do usuário DONO do token
    const bearerToken = req.get('Authorization');

    if (!bearerToken) {
      throw new _NotAuthorizedException.default('Missing token');
    }

    try {
      const token = bearerToken.slice(7);
      const tokenInfo = (0, _jwt.verifyLoginToken)(token);
      console.log('INFO DENTRO DO TOKEN!!!!', tokenInfo);
      req.user = {
        id: tokenInfo.id,
        role: tokenInfo.role
      };
      next();
    } catch (error) {
      throw new _NotAuthorizedException.default('Invalid or expired token');
    }
  } catch (error) {
    next(error);
  }
};

var _default = protectedRouteMiddleware;
exports.default = _default;