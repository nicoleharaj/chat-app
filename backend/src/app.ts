require('dotenv').config();
import express from 'express';
import config from 'config';
import connectDb from './utils/connectDb';
import log from './utils/logger';
import router from './routes';
import deserializeUser from './middleware/deserializeUser';

const app = express();

app.use(express.json());

app.use(deserializeUser);

app.use(router);

const port = config.get('port');

app.listen(port, () => {
  log.info(`App started on http://localhost:${port}`);

  connectDb();
});
