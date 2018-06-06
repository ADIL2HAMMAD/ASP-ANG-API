/* Import of essential Packages */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpModule } from '@angular/http';
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/* Import of The Useable Component */
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';
import { CategorieFormComponent } from './categorie/categorie-form/categorie-form.component';
import { CategorieListComponent } from './categorie/categorie-list/categorie-list.component';
import { ProduitFormComponent } from './produit/produit-form/produit-form.component';



/* inmport of Routing File */
import {routes} from './routing.routing';
import { ProduitFormUpdateComponent } from './produit-form-update/produit-form-update.component';
import { SharedproduitService } from './sharedproduit.service';






@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    CategorieComponent,
    HomeComponent,
    CategorieFormComponent,
    CategorieListComponent,
    ProduitFormComponent,
    ProduitFormUpdateComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ServiceService , SharedproduitService ],
  bootstrap: [AppComponent]
})


export class AppModule { }
