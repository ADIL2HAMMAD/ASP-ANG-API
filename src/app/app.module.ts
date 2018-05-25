import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';

import {routes} from './routing.routing';

import { ServiceService } from './service.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    CategorieComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,

    BrowserModule,
    routes
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
