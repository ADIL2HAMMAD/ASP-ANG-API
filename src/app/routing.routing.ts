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
  {
    path: '**',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },



];

export const routes: ModuleWithProviders = RouterModule.forRoot(app_route);

