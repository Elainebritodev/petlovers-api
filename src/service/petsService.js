import validateId from '../validation/mongooseIdValidation';
import  PetNotFoundException from '../exceptions/PetNotFoundException';

class PetsService {
    constructor(petsRepository) {
        this.petsRepository = petsRepository;
    }

    async findAllByNameAndOwnerId(name = '', id) {
        const pets = await this. petsRepository.findAllByNameAndOwnerId(name, id);

        return pets;
    }

    async create(body, id) {
        await body.validate();

        const petData = {
            name: body.name,
            description: body.description,
            photography: body.photography,
            owner: id,
        };

        const newPet = await this.petsRepository.create(petData);

        return newPet;
    }

    async findOneByIdAndOwnerId(id, ownerId) {
        validateId(id);

        const pet = await this.petsRepository.findOneByIdAndOwnerId(id, ownerId);

        return pet;
    }

    async updateOne(id, ownerId, body) {
        await body.validate();
        validateId(id);

        await this.validatePetExists(id, ownerId);

        const petData = {
            name: body.name,
            description: body.description,
        }

        const editedPet = await this.petsRepository.updatePetById(id, petData);

        return editedPet;
    }

    async deleteOne(id, ownerId) {
        validateId(id);

        await this.validatePetExists(id, ownerId);
        await this.petsRepository.deleteOneById(id);
    }

    async validatePetExists(id, ownerId) {
        const pet = await this.petsRepository.findOneByIdAndOwnerId(id, ownerId);

        if (!pet) {
            throw new PetNotFoundException();
        }
    }
}

export default PetsService;