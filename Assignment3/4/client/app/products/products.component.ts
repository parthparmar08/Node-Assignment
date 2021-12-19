import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductdata()
  }

  getProductdata(){
    this.productService.getProducts().subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }
}
