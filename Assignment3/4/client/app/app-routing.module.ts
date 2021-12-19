import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
const routes: Routes = [
  {
    path: "",component:ProductsComponent
  },
  {
    path: "admin/products", component: AdminproductsComponent
  },
  {
    path:"admin/addproduct", component: AddProductComponent
  },
  {
    path:"admin/editproduct/:id", component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
