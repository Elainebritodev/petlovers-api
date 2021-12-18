import * as yup from 'yup';
import validateSchema from '../validation/schemaValidation';

class EditPetRequestDTO {

    constructor({ name, description }) {       
        this.name = name;
        this.description = description;

        this.schema = yup.object().shape({
            name: yup.string().required('Required Field').min(3, 'Minimum of 3 characters').max(50, 'Maximum of 50 characters'),
            description: yup.string().max(150, 'Maximum of 150 characters'),
        });
    }

    async validate() {
        await validateSchema(
            this.schema, 
            { name: this.name, description: this.description},
        );
    }
}

export default EditPetRequestDTO; 
