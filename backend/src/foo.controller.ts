import * as express from 'express';
import {
  Controller,
  controller,
  httpGet,
  request,
  response,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { FooService } from './foo.service';

@controller('/foo')
class FooController implements Controller {
  constructor(@inject('FooService') private fooService: FooService) {}

  @httpGet('/')
  public index(
    @request() req: express.Request,
    @response() res: express.Response
  ): string {
    console.log(req, res);

    return this.fooService.response();
  }
}

export default FooController;
