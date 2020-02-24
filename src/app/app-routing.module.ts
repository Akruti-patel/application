import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';




const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    data: { title: 'List of products' }
  },
  {
    path: 'product/add',
    component: ProductAddComponent,
    data: { title: 'Add product' }
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent,
    data: { title: 'Edit product' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
