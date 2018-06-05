import { ItemsService } from './items.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
