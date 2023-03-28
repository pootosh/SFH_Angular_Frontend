import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

productList: Product[];

  constructor() {
    this.productList= [
      new Product('Paracetamol', 'Paracetamol is a common painkiller and fever-reducing medication used worldwide. It acts by reducing the production of prostaglandins in the brain that are responsible for causing pain and inflammation. Paracetamol is a relatively safe medication when taken in recommended doses, and the potential side effects are usually mild. It is available over-the-counter in most countries and is used to treat a variety of conditions such as headaches, period pain, toothache, joint pains, and flu symptoms. However, it is essential to follow the recommended dosage instructions and avoid taking too much or too frequently to avoid accidental overdose or liver damage. Paracetamol is also widely used in combination with other medications and is commonly found in cough and cold remedies.', 100, 10, 200),
      new Product('Aman', 'Singh', 100, 10, 200),
      new Product('Abhishek', 'Singh', 100, 10, 200),
      new Product('Sahil', 'Yadav', 100, 10, 200),
      new Product('Aman', 'Singh', 100, 10, 200),
      new Product('Aman', 'Singh', 100, 10, 200),
    ]
  }

  getProducts(){
    return this.productList
  }
}
