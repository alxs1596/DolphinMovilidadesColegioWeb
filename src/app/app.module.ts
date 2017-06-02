
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { PrincipalModule } from './principal/principal.module'

import { AppComponent } from './app.component';

import { AppRoutingModule } from 'app/app-routing/app-routing.module';




@NgModule({
  declarations: [
    AppComponent,

    
    
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    
    AppRoutingModule,
    ReactiveFormsModule,

    PrincipalModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
