import {Http , Response}  from '@angular/http';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})

export class CategorieComponent implements OnInit
{

  constructor( private service : ServiceService )  {   }


  CategorieData()
  {
    this.service.getCategorieData()
    .subscribe(value => {    console.log(value);   });
  }


  ngOnInit() {}


}
