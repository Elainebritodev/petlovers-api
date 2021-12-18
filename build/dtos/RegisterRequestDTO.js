"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var yup = _interopRequireWildcard(require("yup"));

var _schemaValidation = _interopRequireDefault(require("../validation/schemaValidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class RegisterRequestDTO {
  constructor({
    name,
    email,
    password
  }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.schema = yup.object().shape({
      name: yup.string().required('Required Field').min(3, 'Minimum of 3 characters').max(100, 'Maximum of 100 characters'),
      email: yup.string().required('Required Field').email('Field must havean email format'),
      password: yup.string().required('Required Field').min(6, 'Minimum 6 characters').max(150, 'Maximum of 150 characters')
    });
  }

  async validate() {
    await (0, _schemaValidation.default)(this.schema, {
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

}

var _default = RegisterRequestDTO;
exports.default = _default;