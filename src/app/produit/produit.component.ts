import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private service : ServiceService) { }

  ngOnInit() {
  }


  ProduitData()
  {
    this.service.getProduitData()
    .subscribe(value => {    console.log(value);   });
  }

}
