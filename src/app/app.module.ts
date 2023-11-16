import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NgFor } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor, //This directive has been added as a dependency using the imports property.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
