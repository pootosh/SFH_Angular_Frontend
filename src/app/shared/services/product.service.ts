import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productList: Product[];

  constructor() {
    this.productList= [
      new Product('Aditya', 'Singh', 100, 10, 200),
      new Product('Aman', 'Singh', 100, 10, 200),
      new Product('Abhishek', 'Singh', 100, 10, 200),
      new Product('Sahil', 'Yadav', 100, 10, 200),
    ]
  }

  getProducts(){
    return this.productList
  }
}
