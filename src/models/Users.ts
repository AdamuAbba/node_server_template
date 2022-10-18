import { IUser } from '@configs/types/types';
import { Schema, model } from 'mongoose';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'invalid email format'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [6, 'password must be longer than 6 characters'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = model<IUser>('User', UserSchema);
