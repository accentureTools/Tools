import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderModule } from './presentation/shared/components/main-header/main-header.module';

@NgModule({  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHeaderModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
