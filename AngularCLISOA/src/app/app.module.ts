import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { PetfinderComponent } from './petfinder/petfinder.component';

@NgModule({
  declarations: [
    AppComponent,
    FunfactsComponent,
    PetfinderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
