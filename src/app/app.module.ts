import 'zone.js/dist/zone';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TestService } from './test.service';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [TestService],
    bootstrap: [AppComponent],
})
export class AppModule { }
