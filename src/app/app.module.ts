/* Import of essential Packages */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpModule } from '@angular/http';


/* Import of The Useable Component */
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';

/* inmport of Routing File */
import {routes} from './routing.routing';





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
    FormsModule,
    BrowserModule,
    routes
  ],
  providers: [ServiceService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
