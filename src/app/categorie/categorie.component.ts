import { CategorieModel } from './../categorieModel.Model';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})

export class CategorieComponent implements OnInit
{




  /*  VARIABLE DECLARATION */
  private DeletedcategorieID : number ;
  private UpdatedCategorieID : number ;
  private AddCategorieNom :string ;
  private UpdatedCategorieNom :string ;
  private Cat = new CategorieModel();





  /* OUR CONSTRUCTOR */
  constructor( private service : ServiceService  )  {

  }





  /*  GET ALL CATEGORIES DATA */
  CategorieData() {
    this.service.getCategorieData()
    .subscribe(value => {    console.log(value);   });
  }




  /*  DELETE CATEGORIE THAT HAVE ID = categorieID   */
  DeleteCategorie(){

    this.service.DeleteCategorieData(this.DeletedcategorieID).subscribe((res: any) => { }, error =>   console.log(error)   );

    console.log("DeletedcategorieID is :  " + this.DeletedcategorieID);

    this.CategorieData();
  }




  /*  ADD A NEW  CATEGORIE  */
  AddCategorie(   ){
    this.Cat.nomCategorie = this.AddCategorieNom ;
    this.service.AddCategorieData(this.Cat);

  }



  /* UPDATE CATEGORIE THAT HAVE   ID = categorieID  */
  UpdateCategorie(){
    this.Cat.nomCategorie = this.UpdatedCategorieNom ;
    this.Cat.categorieID = this.UpdatedCategorieID ;
    this.service.UpdateCategorieData(  this.Cat) ;

  }





  ngOnInit() {


  }

}
