import { SharedproduitService } from './../sharedproduit.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProduitModel } from '../produitModel.model';

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










  /* our Constructor */
  constructor(
    private sharedproduitservice :SharedproduitService,
    private toastr : ToastrService,
    private router : Router ,
    private route : ActivatedRoute) { }








  updateproduit(){
    const result = this.sharedproduitservice.getProduit();
    console.log("result  from-prduit-update_log  :"+result);
  }








  /* return To produit component  */
  previous(){
    this.router.navigate(['./../'] , {relativeTo : this.route});
  }






  ngOnInit() {


  }

}
