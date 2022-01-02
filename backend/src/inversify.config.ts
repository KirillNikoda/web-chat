import { Container } from 'inversify';
import { BarService } from './bar.service';

// declare metadata by @controller annotation
import { FooService } from './foo.service';

// set up container
export const container = new Container();

// set up bindings
container.bind<FooService>('FooService').to(FooService);
container.bind<BarService>('BarService').to(BarService);
