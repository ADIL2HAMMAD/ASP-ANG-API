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

  getProduitData()  {
    return this.http.get(this.ServerWithProduitApiUrl).map(res => res.json()) ;
   }

  getCategorieData()  {
   return this.http.get(this.ServerWithCategorieApiUrl).map(res => res.json()) ;
  }

}
