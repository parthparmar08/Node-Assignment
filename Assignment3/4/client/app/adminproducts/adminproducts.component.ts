import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {
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

  deleteData(id:any){
    this.productService.deleteProduct(id).subscribe(res => {
      this.data = res;
      this.getProductdata();
    })
  }
}
