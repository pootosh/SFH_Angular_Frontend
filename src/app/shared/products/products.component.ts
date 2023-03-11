import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  isMobile: Boolean= true;

  details :  any;
  regxp = /android|iphone|kindle|ipad/i
  productList: Product[];
  constructor(private productservice :ProductService){
    this.details = navigator.userAgent;
    if(!this.regxp.test(this.details)){
      this.isMobile=false;
    }
    this.productList=this.productservice.getProducts()

  }


}
