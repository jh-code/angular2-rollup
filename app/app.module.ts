import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules }   from '@angular/router';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
