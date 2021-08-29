import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular-songify/material';
import { CoreStateModule } from '@angular-songify/core-state';
import { CoreDataModule } from '@angular-songify/core-data';
import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs/songs.component';
import { HomeComponent } from './home/home.component';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongsDetailsComponent } from './songs/songs-details/songs-details.component';
import { FormsModule } from '@angular/forms';
import { UiToolbarModule } from '@angular-songify/ui-toolbar';

@NgModule({
  declarations: [AppComponent, SongsComponent, HomeComponent, SongListComponent, SongsDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreStateModule,
    CoreDataModule,
    AppRoutingModule,
    FormsModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
