"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const app = (0, _express.default)();
/* Middlewares -- Bloqueio */

app.use('/api', (req, res, next) => {
  console.log(`Receiving "${req.method}" request to route "${req.path}"`);
  next();
});
app.get('/', (req, res) => res.json({
  message: 'Hello Project API!'
}));
app.listen(process.env.PORT, () => console.log(`App connected at PORT 5050 ${process.env.PORT}`));