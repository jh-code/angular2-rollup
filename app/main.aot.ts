import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../build/app/app.module.ngfactory';
import './style.css';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
