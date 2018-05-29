import { CategorieModel } from './categorieModel.Model';
import { Headers, Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from 'selenium-webdriver/http';







@Injectable()
export class ServiceService {

  result: any;
  public Server = 'http://localhost:';
  public port = '17951'
  public CategorieApiUrl = '/api/Categorie/';
  public ProduitApiUrl = '/api/Produit/';

  public ServerWithCategorieApiUrl = this.Server+this.port + this.CategorieApiUrl;
  public ServerWithProduitApiUrl = this.Server + this.port + this.ProduitApiUrl;


  constructor( private http : Http ) { }


  /* ******************************************************************************************************** */

  /* this part  is reserved To PRODUCT CRUD  operations*/


  getProduitData()  {
    return this.http.get(this.ServerWithProduitApiUrl).map(res => res.json()) ;
   }




     /* End product CRUD  operations*/

/* ******************************************************************************************************** */







// ======================================================================================= //

       /* this part  is reserved To CATEGORIE CRUD  operations*/


  getCategorieData()  { return this.http.get(this.ServerWithCategorieApiUrl).map(res => res.json()) ; }


 DeleteCategorieData(categorieID : number){  return this.http.delete(this.ServerWithCategorieApiUrl+"/"+categorieID); }


 AddCategorieData(categorie : CategorieModel )
 {

  var res = JSON.stringify(categorie);

 console.log("categorie model from services : "+res);
/* var res = JSON.stringify(categorieModel); */
/*
console.log("After stringify categorie model from services : "+res); */


/* let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this.http.post(this.ServerWithCategorieApiUrl, {"nomCategorie": "NEW CATEGORIE",}, options)
                .map(res =>  res.json()).subscribe(res => {
                  this.result = res;
                  console.log("result shows from services Component :  " + this.result);} ) ; */


}






       /* End product CRUD  operations*/
// ======================================================================================= //


}
