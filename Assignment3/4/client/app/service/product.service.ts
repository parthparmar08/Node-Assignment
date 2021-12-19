import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get('http://localhost:3000/products');
  }

  deleteProduct(id:any){
    return this.httpClient.delete('http://localhost:3000/admin/product/' + id);
  }

  getProduct(id:any){
    return this.httpClient.get('http://localhost:3000/admin/product/' + id)
  }

  insertProduct(data:any){
    return this.httpClient.post('http://localhost:3000/admin/product/',data)
  }
  updateProduct(id:any,data:any){
    return this.httpClient.put('http://localhost:3000/admin/product/'+id,data)
  }

}
