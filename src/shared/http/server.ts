import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from '@shared/http/routes';
import AppErrors from './AppErrors';
import '@shared/typeorm';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

app.use((error: Error, _: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppErrors) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }
  console.error(error);
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
