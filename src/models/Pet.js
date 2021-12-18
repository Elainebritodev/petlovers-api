import { Schema, model } from 'mongoose';

const petSchema = new Schema({
  name: {
    type: String, required: true, minlength: 3, maxlength: 50,
  },
  birthday: { type: Date },
  size: { type: String, enum: ['small', 'medium', 'large', 'giant'] },
  description: { type: String, maxlength: 150 },
  task: [{ type: Schema.Types.ObjectId, ref: 'task', default: [] }],
  owner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  photography: { type: String },

}, {
  timestamps: true,

});

const Pet = model('pet', petSchema);

export default Pet;
