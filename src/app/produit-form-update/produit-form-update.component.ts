import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-produit-form-update',
  templateUrl: './produit-form-update.component.html',
  styleUrls: ['./produit-form-update.component.css']
})
export class ProduitFormUpdateComponent implements OnInit {

  constructor(private service : ServiceService , private toastr : ToastrService, private router : Router , private route : ActivatedRoute) { }



  previous(){
    this.router.navigate(['./../'] , {relativeTo : this.route});
  }

  ngOnInit() {
  }

}
