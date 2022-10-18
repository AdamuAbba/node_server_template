import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import UserRouter from '@routes/user.routes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/user', UserRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

// console.log(require('crypto').randomBytes(64).toString('hex'));
