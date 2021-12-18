"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongooseIdValidation = _interopRequireDefault(require("../validation/mongooseIdValidation"));

var _PetNotFoundException = _interopRequireDefault(require("../exceptions/PetNotFoundException"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PetsService {
  constructor(petsRepository) {
    this.petsRepository = petsRepository;
  }

  async findAllByNameAndOwnerId(name = '', id) {
    const pets = await this.petsRepository.findAllByNameAndOwnerId(name, id);
    return pets;
  }

  async create(body, id) {
    await body.validate();
    const petData = {
      name: body.name,
      description: body.description,
      owner: id
    };
    const newPet = await this.petsRepository.create(petData);
    return newPet;
  }

  async findOneByIdAndOwnerId(id, ownerId) {
    (0, _mongooseIdValidation.default)(id);
    const pet = await this.petsRepository.findOneByIdAndOwnerId(id, ownerId);
    return pet;
  }

  async updateOne(id, ownerId, body) {
    await body.validate();
    (0, _mongooseIdValidation.default)(id);
    await this.validatePetExists(id, ownerId);
    const petData = {
      name: body.name,
      description: body.description
    };
    const editedPet = await this.petsRepository.updatePetById(id, petData);
    return editedPet;
  }

  async deleteOne(id, ownerId) {
    (0, _mongooseIdValidation.default)(id);
    await this.validatePetExists(id, ownerId);
    await this.petsRepository.deleteOneById(id);
  }

  async validatePetExists(id, ownerId) {
    const pet = await this.petsRepository.findOneByIdAndOwnerId(id, ownerId);

    if (!pet) {
      throw new _PetNotFoundException.default();
    }
  }

}

var _default = PetsService;
exports.default = _default;