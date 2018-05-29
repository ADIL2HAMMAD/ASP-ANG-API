import { CategorieComponent } from './../categorie/categorie.component';
import { ProduitModel } from './../produitModel.model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {





  /*  VARIABLE DECLARATION */
  private DeletedProduitID : number ;
  private UpdatedProduitID : number ;
  private AddProduitNom :string ;
  private UpdatedProduitNom :string ;
  private prod = new ProduitModel();





  /* OUR CONSTRUCTOR */
  constructor( private service : ServiceService  )  {

  }





  /*  GET ALL ProduitS DATA */
  ProduitData() {
    /*     this.service.getProduitData()
    .subscribe(value => {    console.log(value);   }); */

     this.service.getCategorieData()
    .subscribe(value => {
      console.log(value);

/*       let cat = JSON.stringify(value);
      let body = JSON.parse(cat);     console.log("Produit => body => categorieID   is : "+cat ); */
value.forEach(element => {
  console.log( element.categorieID);

});


    });

  }




  /*  DELETE Produit THAT HAVE ID = ProduitID   */
  DeleteProduit(){

    this.service.DeleteProduitData(this.DeletedProduitID).subscribe((res: any) => { }, error =>   console.log(error)   );

    console.log("DeletedProduitID is :  " + this.DeletedProduitID);

    this.ProduitData();
  }




  /*  ADD A NEW  Produit  */
  /*   AddProduit(   ){
    this.prod = this.AddProduitNom ;
    this.service.AddProduitData(this.prod);

  } */



  /* UPDATE Produit THAT HAVE   ID = ProduitID  */
  /*   UpdateProduit(){
    this.prod.nomProduit = this.UpdatedProduitNom ;
    this.prod.ProduitID = this.UpdatedProduitID ;
    this.service.UpdateProduitData(  this.prod) ;

  } */






  ngOnInit() {
  }

}
