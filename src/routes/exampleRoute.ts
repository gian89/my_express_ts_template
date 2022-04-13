import express, { Response, Request } from 'express';

import { CustomError } from '@utilities/CustomError';
import { routeCaller } from '@libs/routeCaller/routeCaller';
import {
  examplePromiseFunction,
  sumElement,
} from '@libs/exampleFunction/examplePromiseFunction';

const exampleRoute = express.Router();

exampleRoute.get('/', async (req: Request, res: Response, next: any) => {
  res.json({ ok: 'ok' });
});

exampleRoute.get(
  '/routeCallerExample/',
  async (req: Request, res: Response, next: any) => {
    await routeCaller(examplePromiseFunction, res, next, 'param1', 'param2');
  },
);

exampleRoute.post(
  '/tryCatchExample/:param1/',
  async (req: Request, res: Response, next: any) => {
    try {
      const { param1 } = req.params;
      let { param2 } = req.body;
      const result = await examplePromiseFunction(param1, param2);
      res.json(result);
    } catch (e: any) {
      let err = new CustomError(400, e.message);
      console.log(err);
      res.status(err.status).json(err);
    }
  },
);

exampleRoute.post(
  '/sumElement/',
  async (req: Request, res: Response, next: any) => {
    try {
      let body = req.body;
      const result = sumElement(body);
      res.json(result);
    } catch (e: any) {
      let err = new CustomError(500, e.message);
      console.log(err);
      res.status(err.status).json(err);
    }
  },
);

export default exampleRoute;
