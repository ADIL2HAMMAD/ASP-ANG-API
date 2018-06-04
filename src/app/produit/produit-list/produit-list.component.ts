import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {


         constructor(private service : ServiceService , private toastr : ToastrService ) { }





  ngOnInit() {
  }

}
