import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../build/aot/app/app.module.ngfactory';
import './style.css';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
