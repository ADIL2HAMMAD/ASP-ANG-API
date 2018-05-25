import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from 'selenium-webdriver/http';

@Injectable()
export class ServiceService {

  public Server = 'http://localhost:17951/';
  public CategorieApiUrl = 'api/Categorie';
  public ProduitApiUrl = 'api/Produit';

  public ServerWithCategorieApiUrl = this.Server + this.CategorieApiUrl;
  public ServerWithProduitApiUrl = this.Server + this.ProduitApiUrl;


  constructor( private http : Http) { }



  /* this part  is reserved To PRODUCT CRUD  operations*/


  getProduitData()  {
    return this.http.get(this.ServerWithProduitApiUrl).map(res => res.json()) ;
   }




     /* End product CRUD  operations*/



       /* this part  is reserved To CATEGORIE CRUD  operations*/


  getCategorieData()  { return this.http.get(this.ServerWithCategorieApiUrl).map(res => res.json()) ; }


  DeleteCategorieData(categorieID : number){
    return this.http.delete(this.ServerWithCategorieApiUrl+"/"+categorieID);
  }






       /* End product CRUD  operations*/


}
