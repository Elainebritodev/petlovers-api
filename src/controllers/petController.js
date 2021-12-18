import { Router } from 'express';

import Pet from '../models/Pet';
import PetsService from '../service/petsService';
import PetsRepository from '../repository/petsRepository';

import CreatePetRequestDTO from '../dtos/CreatePetRequestDTO';
import EditPetRequestDTO from '../dtos/EditPetRequestDTO';

const petsRepository = new PetsRepository(Pet);
const petsService = new PetsService(petsRepository);

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { name } = req.query;

    const { id } = req.user;

    const pets = await petsService.findAllByNameAndOwnerId(name, id);

    res.json(pets);
  } catch (error) {
    next(error)
  }
});

router.get('/:petId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { petId } = req.params;

    const pet = await petsService.findOneByIdAndOwnerId(petId, id);
    res.json(pet);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { id } = req.user;
    const body = new CreatePetRequestDTO(req.body);
    console.log(body);
    const newPet = await petsService.create(body, id);

    res.status(201).json(newPet);
  } catch (error) {
    next(error);
  }
});

router.put('/:petId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { petId } = req.params;
    const body = new EditPetRequestDTO(req.body);

    const editedPet = await petsService.updateOne(petId, id, body);
    res.json(editedPet);
  } catch (error) {
    next(error);
  }
});

router.delete('/:petId', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { petId } = req.params;

    await petsService.deleteOne(petId, id);

    res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export default router;
