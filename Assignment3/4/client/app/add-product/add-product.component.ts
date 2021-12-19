import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form !: FormGroup;
  constructor(private productService:ProductService, private formBuilder:FormBuilder, private router:Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      title: [''],
      price: [''],
      desc: ['']
    })
  }
  ngOnInit(): void {
    this.createForm();
  }

  insertData(){
    console.log(this.form.value)
    this.productService.insertProduct(this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("admin/products")
    })
  }
}
