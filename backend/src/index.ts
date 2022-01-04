import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';

dotenv.config();

import './inversify.config';
import './foo.controller';
import '@modules/auth/controller/auth.controller';

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

const app = server.build();
app.listen(process.env.PORT || 8080);
