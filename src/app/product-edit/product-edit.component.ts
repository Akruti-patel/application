import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id:number= null;

  constructor(
    private formBuilder: FormBuilder, 
    private activeAouter: ActivatedRoute, 
    private router: Router, 
    private api: ApiService
  ) { }

  ngOnInit() {
   
 
    this.productForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });
  }

  
  updateProduct(form:NgForm) {
 
    this.api.updateProduct(this.id, form)
      .subscribe(res => {
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
     
  }

}
