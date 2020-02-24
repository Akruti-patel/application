import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { ApiService } from '../api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
    });
  }

  addProduct() {
    const payload = {
      title: this.productForm.controls.title.value,
    };
 
    this.api.addProduct(payload)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        });
  }

}
