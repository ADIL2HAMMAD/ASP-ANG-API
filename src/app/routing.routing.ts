
import { ModuleWithProviders } from '@angular/core';
import {Routes , RouterModule  } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import {HomeComponent } from './home/home.component';
import { ProduitFormComponent } from './produit/produit-form/produit-form.component';
import { ProduitFormUpdateComponent } from './produit/produit-form-update/produit-form-update.component';



const app_route: Routes = [
/*    {
    path: 'produit',
    component: ProduitComponent,
  }, */
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '*',
    component: HomeComponent
  },
  {
     path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'produit',
    component: ProduitComponent,
    children: [
      { path: 'add', component: ProduitFormComponent},
      { path: 'update', component: ProduitFormUpdateComponent}
    ]
  },



];

export const routes: ModuleWithProviders = RouterModule.forRoot(app_route);

