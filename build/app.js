"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _mongodbConfig = _interopRequireDefault(require("./database/mongodbConfig"));

var _routes = _interopRequireDefault(require("./routes"));

var _requestTrackin = _interopRequireDefault(require("./middlewares/requestTrackin"));

var _errorHandling = _interopRequireDefault(require("./middlewares/errorHandling"));

var _resourceNotFound = _interopRequireDefault(require("./middlewares/resourceNotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
(0, _mongodbConfig.default)();
app.use(_express.default.json()); // para que o express possa acessar o req.body

app.use((0, _cors.default)({
  origin: process.env.FRONT_END_URI
})); // liberando acesso somente para o localhost:3000 - local do front

app.use(_requestTrackin.default);
app.use('/api', _routes.default); // as rotas foram isoladas em outros arquivos para deixa mais clean (authController, petController, taskController)

/* Criando dois middlewares */

app.use(_errorHandling.default);
/* Middleware error hendling */

app.use(_resourceNotFound.default);
/* Middleware de rota não encontrada */

app.listen(process.env.PORT, () => console.log(`App connected at PORT ${process.env.PORT}`));