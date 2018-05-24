

// tslint:disable-next-line:eofline
import { ModuleWithProviders } from '@angular/core';
import {Routes , RouterModule  } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { CategorieComponent } from './categorie/categorie.component';
import {HomeComponent } from './home/home.component';



const app_route: Routes = [
    {
        path: 'produit',
        component: ProduitComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },

  {
      path: 'categorie',
      component: CategorieComponent,
  },




];

export const routes: ModuleWithProviders = RouterModule.forRoot(app_route);

