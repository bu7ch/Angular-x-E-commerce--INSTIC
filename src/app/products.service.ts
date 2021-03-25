import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PRODUCT_API = 'https://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {
    
   }
   
  getProducts() {
    return this.http.get(PRODUCT_API)
  }
}
