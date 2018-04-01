import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
import 'hammerjs';


=======
>>>>>>> b86dbea77f1eb0bf07f41b4dbcf96be07e3ad21a
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
