"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Pet = _interopRequireDefault(require("../models/Pet"));

var _petsService = _interopRequireDefault(require("../service/petsService"));

var _petsRepository = _interopRequireDefault(require("../repository/petsRepository"));

var _CreatePetRequestDTO = _interopRequireDefault(require("../dtos/CreatePetRequestDTO"));

var _EditPetRequestDTO = _interopRequireDefault(require("../dtos/EditPetRequestDTO"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const petsRepository = new _petsRepository.default(_Pet.default);
const petsService = new _petsService.default(petsRepository);
const router = (0, _express.Router)();
router.get('/', async (req, res, next) => {
  try {
    const {
      name
    } = req.query;
    const {
      id
    } = req.user;
    const pets = await petsService.findAllByNameAndOwnerId(name, id);
    res.json(pets);
  } catch (error) {
    next(error);
  }
});
router.get('/:petId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      petId
    } = req.params;
    const pet = await petsService.findOneByIdAndOwnerId(petId, id);
    res.json(pet);
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const body = new _CreatePetRequestDTO.default(req.body);
    const newPet = await petsService.create(body, id);
    res.status(201).json(newPet);
  } catch (error) {
    next(error);
  }
});
router.put('/:petId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      petId
    } = req.params;
    const body = new _EditPetRequestDTO.default(req.body);
    const editedPet = await petsService.updateOne(petId, id, body);
    res.json(editedPet);
  } catch (error) {
    next(error);
  }
});
router.delete('/:petId', async (req, res, next) => {
  try {
    const {
      id
    } = req.user;
    const {
      petId
    } = req.params;
    await petsService.deleteOne(petId, id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
});
var _default = router;
exports.default = _default;