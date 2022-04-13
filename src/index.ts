import express, { Request, Response } from 'express';
import logger from 'morgan';
import cors from 'cors';
import timeout from 'express-timeout-handler';

import { middleware } from '@libs/middleware/exampleMiddleware';
import { timeoutOptions } from '@utilities/timeoutOptions';

import exampleRoute from '@routes/exampleRoute';
import timeoutExampleRoute from '@routes/timeoutExampleRoute';

const { name, version } = require('../package.json');
console.log('[>] Starting', `${name}:v${version}`);

const app = express();
app.use(express.json({ limit: 1024 * 1024 * 1024 }));
app.use(express.urlencoded({ limit: 1024 * 1024 * 1024, extended: true }));
app.use(cors());
app.use(logger('dev'));

app.use('/', middleware);

app.use('/exampleRoute', exampleRoute);

app.use(timeout.handler(timeoutOptions));

app.use('/timeoutExampleRoute', timeoutExampleRoute);

app.listen(parseInt(process.env.LOCAL_PORT || '3000'), () =>
  console.log(
    `[√] ${process.env.npm_package_name}:v${
      process.env.npm_package_version
    } Started on ${process.env.LOCAL_PORT || 3000}, at`,
    new Date(),
  ),
);
