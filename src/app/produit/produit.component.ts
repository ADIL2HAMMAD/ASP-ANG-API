import { SharedproduitService } from './../sharedproduit.service';
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
  private prod = new ProduitModel();
  private  selectedCategorieId : number ;
  private produits = [{}];
   ProduitToUpdateItem = new ProduitModel();
   check = false;


  /* OUR CONSTRUCTOR */
  constructor(
    private service : ServiceService ,
    private  sharedproduitservices:SharedproduitService,
    private toastr : ToastrService,
    private router : Router ,
    private route : ActivatedRoute )  {
  }





  /*  GET ALL ProduitS DATA  Form the Service*/
  ProduitData() {
    this.service.getProduitData()
    .subscribe( res => {
    this.produits = res;
   console.log(this.produits)
})
  }






  showadd( )
  {
    this.router.navigate(['add'], { relativeTo: this.route });

    this.check = true;
   }









          /*  DELETE Produit THAT HAVE ID = ProduitID  from  the Service */
  DeleteProduit(id: number) {
    if (confirm('Are you sure to delete the product ID  :  ' + id) == true)
    {
      this.service.DeleteProduitData(id).subscribe((res: any) => { }, error =>   console.log(error)   );
      console.log("DeletedProduitID is :  " + id);
      this.toastr.error("Please Refresh Your Page To Apply All Your Modification","Deleted Successfully");
      this.router.navigate(['./../'] , {relativeTo : this.route});
    }
  }






      /*  Update Produit THAT HAVE ID = ProduitID  and Put them  into  the Service */
  UpdateProduit( prod : ProduitModel  ){
    this.ProduitToUpdateItem= prod;

    this.sharedproduitservices.ProduitToUpdate(this.ProduitToUpdateItem);

    this.check = true
    /* Navigation using TS    ======>>>>    this.router.navigate(['update'], { relativeTo: this.route });   */

  }







  ngOnInit() {

    this.ProduitData();


}/*  End of  ngOnInit Hooks  */

}/* End of  class ProduitComponent */
