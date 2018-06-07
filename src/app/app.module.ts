
/* Import of essential Packages */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule  } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/* Import of The Useable Component */
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitFormComponent } from './produit/produit-form/produit-form.component';
import { ProduitFormUpdateComponent } from './produit/produit-form-update/produit-form-update.component';


/* inmport of Routing File  & Services*/
import {routes} from './routing.routing';
import { SharedproduitService } from './sharedproduit.service';
import { ServiceService } from './service.service';







@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    HomeComponent,
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
