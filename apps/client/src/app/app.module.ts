import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreDataModule } from '@angular-songify/core-data';
import { UiToolbarModule } from '@angular-songify/ui-toolbar';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular-songify/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, UiToolbarModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
