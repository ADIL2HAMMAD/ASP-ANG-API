
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
categorieID : number ;

/* OUR CONSTRUCTOR */
  constructor( private service : ServiceService )  {   }

/*  GET ALL CATEGORIES DATA */
  CategorieData()
  {
    this.service.getCategorieData()
    .subscribe(value => {    console.log(value);   });
  }


/*  DELETE CATEGORIE THAT HAVE ID = categorieID   */

  DeleteCategorie(){

    console.log("before delete  " + this.categorieID);

    this.service.DeleteCategorieData(this.categorieID).subscribe((res: any) => { }, error =>   console.log(error)   );

    console.log("after delete  " + this.categorieID);

    this.CategorieData();
  }





  ngOnInit() {}

}
