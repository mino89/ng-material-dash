import { DataFetchModule } from './shared/data-fetch/data-fetch.module';
import { UikitModule } from './shared/uikit/uikit.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UikitModule,
    DataFetchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
