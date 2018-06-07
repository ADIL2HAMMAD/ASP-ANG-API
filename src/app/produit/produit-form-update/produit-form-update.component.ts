import { Http } from '@angular/http';
import { element } from 'protractor';
import { ProduitModel } from './../../produitModel.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedproduitService } from '../../sharedproduit.service';
import { ServiceService } from '../../service.service';


@Component({
  selector: 'app-produit-form-update',
  templateUrl: './produit-form-update.component.html',
  styleUrls: ['./produit-form-update.component.css'],
})


export class ProduitFormUpdateComponent implements OnInit {




  /* variables Declaration */

  private designationProduit :string ;
  private prixProduit  : number ;
  private quantiteProduit : number ;
private Produit=new  ProduitModel()  ;












  /* our Constructor */
  constructor(
    private sharedproduitservice :SharedproduitService,
    private toastr : ToastrService,
    private router : Router ,
    private route : ActivatedRoute,
  private service :  ServiceService) { }








  updateproduit(){
     this.Produit.designation = this.designationProduit ;
    this.Produit.prix = this.prixProduit ;
     this.Produit.quantite  =this.quantiteProduit ;

     console.log(this.Produit);

     this.service.UpdateProduitData(this.Produit );
    // this.service.UpdateProduitData(this.Produit)
  }








  /* return To produit component  */
  previous(){
    this.router.navigate(['./../'] , {relativeTo : this.route});
  }






  ngOnInit() {

    const result = this.sharedproduitservice.getProduit();
    /* return values of result array Key => values */
    const values = Object.keys(result).map(key=>result[key]);

    this.Produit.produitID = values[0] ;
    this.Produit.designation = values[1] ;
    this.Produit.prix = values[2] ;
    this.Produit.quantite = values[3] ;
    this.Produit.categorieID = values[4] ;


    this.designationProduit =this.Produit.designation ;
    this.prixProduit = this.Produit.prix ;
    this.quantiteProduit = this.Produit.quantite ;




  }

}
