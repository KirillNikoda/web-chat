import { injectable } from 'inversify';

@injectable()
export class BarService {
  process(): string {
    return 'process';
  }
}
