import express, { Response, Request } from 'express';
import timeout from 'express-timeout-handler';

import { CustomError } from '@utilities/CustomError';
import { expiredTimeFunction } from '@libs/exampleFunction/examplePromiseFunction';

const timeoutExampleRoute = express.Router();

timeoutExampleRoute.get(
  '/standardTimeout/',
  async (req: Request, res: Response, next: any) => {
    try {
      await expiredTimeFunction(5000);
      res.json({ standardTimeout: 'not Expired' });
    } catch (e: any) {
      let err = new CustomError(500, e.message);
      console.log(err);
      res.status(err.status).json(err);
    }
  },
);

timeoutExampleRoute.get(
  '/setTimeout/',
  timeout.set(8000),
  async (req: Request, res: Response, next: any) => {
    try {
      await expiredTimeFunction(5000);
      res.json({ standardTimeout: 'not Expired' });
    } catch (e: any) {
      let err = new CustomError(500, e.message);
      console.log(err);
      res.status(err.status).json(err);
    }
  },
);

export default timeoutExampleRoute;
