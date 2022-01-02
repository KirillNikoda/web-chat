import { inject, injectable } from 'inversify';
import { BarService } from './bar.service';

@injectable()
export class FooService {
  constructor(@inject('BarService') private barService: BarService) {}
  response() {
    return this.barService.process();
  }
}
