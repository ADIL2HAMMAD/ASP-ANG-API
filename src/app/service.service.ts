/* Models */
import { CategorieModel } from './categorieModel.Model';
import { ProduitModel } from './produitModel.model';

/* imports */
import { HttpModule,Headers, Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from 'selenium-webdriver/http';

/* headers */
var headers = new Headers({ 'Content-Type': 'application/json' });
var options = new RequestOptions({ headers: headers });






@Injectable()
export class ServiceService {


  /* Server Settings */
  private Server = 'http://localhost:';
  private port = '17951'
  private CategorieApiUrl = '/api/Categorie/';
  private ProduitApiUrl = '/api/Produit/';
  private ServerWithCategorieApiUrl = this.Server+this.port + this.CategorieApiUrl;
  private ServerWithProduitApiUrl = this.Server + this.port + this.ProduitApiUrl;


  /* Constructor */
  constructor( private http : Http ) { }





  /* ******************************************************************************************************** */

  /* this part  is reserved To PRODUCT CRUD  operations*/


  getProduitData() : Observable<any>  { return this.http.get(this.ServerWithProduitApiUrl).map(res => res.json()); }


  DeleteProduitData(ProduitID : number){  return this.http.delete(this.ServerWithProduitApiUrl+ProduitID); }



  AddProduitData(Produit : ProduitModel ){
    /*  output of Produit is an array of Objects => JSON.stringify(Produit)  will  format the result to Json objects in order to post it to DB using our Web Api */
    return this.http.post(this.ServerWithProduitApiUrl, Produit ,options)
    .map(res =>  res.json())
    .subscribe( ) ;
  }




  UpdateProduitData( Produit : ProduitModel ){
    let body = JSON.stringify(Produit);

   return this.http.put(this.ServerWithProduitApiUrl+JSON.stringify(Produit.produitID) , body ,options)
    .map(res => res.json())
    .subscribe();
  }




  /* End product CRUD  operations*/

  /* ******************************************************************************************************** */










  // ======================================================================================= //

  /* this part  is reserved To CATEGORIE CRUD  operations*/


  getCategorieData()  { return this.http.get(this.ServerWithCategorieApiUrl).map((res : Response) => res.json()) ; }


  DeleteCategorieData(categorieID : number){  return this.http.delete(this.ServerWithCategorieApiUrl+categorieID); }



  AddCategorieData(categorie : CategorieModel ){
    /*  output of categorie is an array of Objects => JSON.stringify(categorie)  will  format the result to Json objects in order to post it to DB using our Web Api */
    let body = JSON.stringify(categorie);
    return this.http.post(this.ServerWithCategorieApiUrl, body ,options)
    .map(res =>  res.json())
    .subscribe( ) ;
  }



  UpdateCategorieData( categorie : CategorieModel ){
    let cat = JSON.stringify(categorie);
    let body = JSON.parse(cat);     console.log("Categorie => body => idCategorie   is : "+body.categorieID  );
   return this.http.put(this.ServerWithCategorieApiUrl+body.categorieID , body ,options)
    .map(res => res.json())
    .subscribe();
  }





  /* End product CRUD  operations*/
  // ======================================================================================= //


}
