import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NgFor } from '@angular/common';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor, //This directive has been added as a dependency using the imports property.
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Notes: 17 April 2023
/*Remember the syntax of [(ngModel)]. 
  This defines a two-way binding, meaning that the value of the input is bound to the property, and the value of the property is bound to the input.
  Hebana, ngiyaqala ukuzwa ngo ngSubmit

  Angular tracks the state of the form internally. In order to check its validity, we need to access the form using a reference, defined using a #:
*/