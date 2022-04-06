// import 'dotenv/config'
import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';


import exampleRoute from '@routes/exampleRoute';

import { middleware } from '@libs/middleware/exampleMiddleware';
import { getFirstElement } from '@libs/exampleFunction/examplePromiseFunction';


const { name, version } = require('../package.json');
console.log('[>] Starting', `${name}:v${version}`);

const app = express();
app.use(express.json({ limit: 1024 * 1024 * 1024 }));
app.use(express.urlencoded({ limit: 1024 * 1024 * 1024, extended: true }));
app.use(cors());
app.use(logger('dev'))

app.use('/', middleware);

app.use('/exampleRoute', exampleRoute);

app.listen(parseInt(process.env.LOCAL_PORT || '3000'), () =>
  console.log(
    `[√] ${process.env.npm_package_name}:v${
      process.env.npm_package_version
    } Started on ${process.env.LOCAL_PORT || 3000}, at`,
    new Date(),
  ),
);


const s = getFirstElement(["a", "b", "c"]);

const n = getFirstElement([1, 2, 3]);
