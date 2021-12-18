class PetNotFoundException extends Error {
  constructor() {
    super();
    this.message = 'Pet not found to be updated';
    this.status = 400;
  }
}

export default PetNotFoundException;
