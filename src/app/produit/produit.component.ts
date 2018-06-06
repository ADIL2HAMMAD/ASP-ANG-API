import { routes } from './../routing.routing';
import { Observable } from 'rxjs/Observable';
import { CategorieComponent } from './../categorie/categorie.component';
import { ProduitModel } from './../produitModel.model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {





  /*  VARIABLE DECLARATION */
  private DeletedProduitID : number ;
  private UpdatedProduitID : number ;
  private UpdatedProduitNom :string ;
  private prod = new ProduitModel();
  private  selectedCategorieId : number ;
  private designationProduit :string ;
  private prixProduit  : number ;
  private quantiteProduit : number ;
  private produits = [{}];


  /* OUR CONSTRUCTOR */
  constructor( private service : ServiceService , private toastr : ToastrService, private router : Router , private route : ActivatedRoute )  {

  }





  /*  GET ALL ProduitS DATA  Form the Service*/
  ProduitData() {
        this.service.getProduitData()
    .subscribe(value => {    console.log(value);   });
  }












  /*  ADD A NEW  Produit To the Service  */
  AddProduit(   ){
/*     this.prod.designation = this.designationProduit ;
    this.prod.prix = this.prixProduit ;
    this.prod.quantite = this.quantiteProduit ;
    this.prod.categorieID = this.selectedCategorieId ;
    this.service.AddProduitData(this.prod);
 */
  }




  /* UPDATE Produit THAT HAVE   ID = ProduitID  */
  /*   UpdateProduit(){
    this.prod.nomProduit = this.UpdatedProduitNom ;
    this.prod.ProduitID = this.UpdatedProduitID ;
    this.service.UpdateProduitData(  this.prod) ;

  } */






  showadd( ){


    this.router.navigate(['add'], { relativeTo: this.route });

  }


          /*  DELETE Produit THAT HAVE ID = ProduitID  from  the Service */
  DeleteProduit(id: number) {
    if (confirm('Are you sure to delete the product ID  :  ' + id) == true)
    {

  this.service.DeleteProduitData(id).subscribe((res: any) => { }, error =>   console.log(error)   );

  console.log("DeletedProduitID is :  " + id);

  this.ProduitData();

  this.toastr.warning("Deleted Successfully","Employee Register");

    }
  }






      /*  Update Produit THAT HAVE ID = ProduitID  and Put them  into  the Service */
  UpdateProduit( prod : ProduitModel  ){
    console.log(prod);
    /* Navigation using TS    ======>>>>         this.router.navigate(['update'], { relativeTo: this.route }); */
/*
    this.prod.nomProduit = this.UpdatedProduitNom ;
    this.prod.ProduitID = this.UpdatedProduitID ;
    this.service.UpdateProduitData(  this.prod) ; */
  }







  ngOnInit() {

     this.service.getProduitData()
                .subscribe( res => {
                this.produits = res;
               console.log(this.produits)

            })




}/*  End of  ngOnInit Hooks  */

}/* End of  class ProduitComponent */
