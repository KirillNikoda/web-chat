import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';

dotenv.config();

import './inversify.config';
import './foo.controller';

console.log(process.env.PORT);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(process.env.PORT || 8080);
