import { ICustomAuthError, IUser } from '@configs/types/types';
import { db_connection_url } from '@configs/constants';
import { UserModel } from '@models/Users';
import express, { Express, Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { generateJWTAccessToken } from '@middleware/auth';

const UserRouter: Router = express.Router();

const handleError = (err: any) => {
  let customAuthError: ICustomAuthError = { email: '', name: '', password: '' };

  //catching errors from mongoose error
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }: any) => {
      customAuthError[properties.path] = properties.message;
    });
  }

  return customAuthError;
};

UserRouter.post('/signup', async (req: Request, res: Response) => {
  try {
    await mongoose.connect(db_connection_url);
    const payload: IUser = req.body;
    const newUser = new UserModel(payload);
    // const salt: string = await bcrypt.genSalt(10);
    // const passwordHash: string = await bcrypt.hash(payload.password, salt);
    // newUser.password = passwordHash;
    await newUser.save();
    // const token = generateJWTAccessToken(payload);
    res.status(201).json({
      name: payload.name,
      email: payload.email,
    });
  } catch (err: any) {
    const error = handleError(err);
    res.status(400).json({ status: 400, error });
  }
});

export default UserRouter;
