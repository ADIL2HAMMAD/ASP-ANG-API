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
  private myIDS = [{}];


  /* OUR CONSTRUCTOR */
  constructor( private service : ServiceService , private toastr : ToastrService, private router : Router , private route : ActivatedRoute )  {

  }





  /*  GET ALL ProduitS DATA */
  ProduitData() {
        this.service.getProduitData()
    .subscribe(value => {    console.log(value);   });
 /*
    this.service.getCategorieData()
    .subscribe(value => {
      console.log(value);
      value.forEach(element => {
        console.log( "cats ids :" +element.categorieID);
        var  categoriesID = element.categorieID;
        console.log( "categoriesID :" +categoriesID);
      });
    });
*/
  }







  /*  DELETE Produit THAT HAVE ID = ProduitID   */
  DeleteProduit(){

    this.service.DeleteProduitData(this.DeletedProduitID).subscribe((res: any) => { }, error =>   console.log(error)   );

    console.log("DeletedProduitID is :  " + this.DeletedProduitID);

    this.ProduitData();
  }


  onDelete(id?: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
        this.toastr.warning("Deleted Successfully","Employee Register");
    }
  }




  /*  ADD A NEW  Produit  */
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


  showadd(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }
  showupdate(){
    this.router.navigate(['update'], { relativeTo: this.route });
  }



  ngOnInit() {

 /*       this.service.getCategorieData()
                .subscribe( res => {

                const localVar = JSON.stringify(res) ;
               const array =JSON.parse(localVar);
console.log("array"+localVar);

               var obj = {};
               array.forEach(element => {
                  array.map(k => Object.keys(k).forEach(a => obj[a] = k[a]))
               });


               console.log(obj)

            }) */




}/*  End of  ngOnInit Hooks  */

}/* End of  class ProduitComponent */
