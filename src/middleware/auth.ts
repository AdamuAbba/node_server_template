import { IUser } from '@configs/types/types';
import jwt from 'jsonwebtoken';
/**
 * function to generate jwt token string
 * @param user
 * @return `jwt token string`
 */
export const generateJWTAccessToken = (user: IUser) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '1800s',
  });
  console.log({ token });
  return token;
};
