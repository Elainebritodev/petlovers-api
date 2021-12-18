import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  name: {
    type: String, required: true, minlength: 3, maxlength: 100,
  },
  birthday: { type: Date, required: true },
  size: { type: String, enum: ['small', 'medium', 'large', 'giant'], required: true },
  description: { type: String, maxlength: 150 },
}, {
  timestamps: true,
});

const Task = model('task', 'taskSchema');

export default Task;
