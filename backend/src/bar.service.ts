import { injectable } from 'inversify';

@injectable()
export class BarService {
  process() {
    return 'process';
  }
}
