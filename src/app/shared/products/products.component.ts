import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  productList: Product[];
  constructor(private productservice :ProductService){
    this.productList=this.productservice.getProducts()

  }


}
