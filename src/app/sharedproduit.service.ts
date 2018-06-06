import { ServiceService } from './service.service';
import { ProduitModel } from './produitModel.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedproduitService {

  constructor() { }



  private Produit : any  = {};

  /* Produit Informations Getter For More  privacy */
   getProduit(){
     return this.Produit ;
   }







     /*  I  Use this  Method in order to Recap Produit Informations From Produit Component (when You click Icon Update)
     and put the  infomations in Produit Variable   ==> return is a ProduitModel (designation , prix ...)*/

  ProduitToUpdate(produit? : ProduitModel){
    const prod = JSON.stringify(produit);
    console.log("return values  from SharedProdService ===>>>>   :"+prod);
    this.Produit = prod ;
    return this.Produit;
  }






  /* this Method excute put Method Do the Modifications and Update our Produit*/
  updateProduit()
  {
    // ici en va updater le produit utilisant le service put
  }
}
