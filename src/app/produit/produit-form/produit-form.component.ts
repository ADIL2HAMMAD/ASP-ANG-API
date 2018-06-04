import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ProduitModel } from '../../produitModel.model';
import { NgForm } from '@angular/forms'
import { FormControl, FormGroup, Validators } from '@angular/forms';;


@Component({
  selector: 'app-produit-form',
  templateUrl: './produit-form.component.html',
  styleUrls: ['./produit-form.component.css']
})
export class ProduitFormComponent implements OnInit {

  quantiteProduit: number;
  prixProduit: number;
  designationProduit: string;
  categories : any = [{}];
  selectedCategorieId : number;
  private prod = new ProduitModel();





  constructor(private service : ServiceService , private  toast:ToastrService) { }


  getid(event)   { this.selectedCategorieId = event.target.value; }

  /* Add a product informations to a post Method and save it in DB */

  addproduit(form ){

    this.prod.designation = this.designationProduit ;
    this.prod.prix = this.prixProduit ;
    this.prod.quantite = this.quantiteProduit ;
    this.prod.categorieID = this.selectedCategorieId ;
    /* console.log(this.prod); */

    this.service.AddProduitData(this.prod);
    this.resetfeilds(form);
    this.toast.success("Nouveau Produit ajouté avec succes" , "Ajout de Produit");
  }



  /* reset all Form fields */
  resetfeilds(form? : NgForm){
    form.reset();

    this.prod.produitID = null ;
    this.prod.categorieID = null ;
    this.prod.prix = null ;
    this.prod.quantite = null ;
    this.prod.designation = '' ;
    this.toast.warning("le Formulaire Vide" , "Reset");
  }







  ngOnInit() {

/*    this.toast.show("hello", "hi");*/
    /* fill the DropDown list With Categorie Values in Order to Allow a user To choice a Categorie*/
    /*  console.log(this.selectedCategorieId); */
    this.service.getCategorieData()
    .subscribe(cat => {
      console.log(cat);
      this.categories = cat;
    });
  }

}
