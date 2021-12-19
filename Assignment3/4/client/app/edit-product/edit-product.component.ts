import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  data:any;
  id:any;
  product !: Product;
  constructor(private productService: ProductService, private router:Router, private route:ActivatedRoute) { }
  form = new FormGroup({
    title: new FormControl(""),
    price: new FormControl(""),
    desc: new FormControl("")
  })
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.getProductdata(this.id);
  }

  getProductdata(id:any){
    this.productService.getProduct(id).subscribe(res => {
      this.data = res;
      this.product = this.data;
      this.form = new FormGroup({
        title: new FormControl(this.product.title),
        price: new FormControl(this.product.price),
        desc: new FormControl(this.product.desc),
      })
    })
  }

  editData(){
    this.productService.updateProduct(this.id,this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("admin/products");
    })
  }

}
