import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String, required: true, minlength: 3, maxlength: 100,
},
  email: { type: String, required: true, unique: true },
  password: { type: String, minlength: 6, maxlength: 1000 },
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
  active: { type: Boolean, default: true },
}, {
  timestamps: true,

});

const User = model('user', userSchema);

export default User;
