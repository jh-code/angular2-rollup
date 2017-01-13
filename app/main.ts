import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import './style.css';
import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule);
