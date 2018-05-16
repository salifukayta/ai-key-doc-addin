import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare const Office: any;
// declare const OfficeHelpers: any;



Office.initialize = () => {
  console.log('Office init');
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
};
