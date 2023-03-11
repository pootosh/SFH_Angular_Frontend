export class Product{
  name: string;
  description: string;
  price: number;
  discount: number;
  mrp: number;

  constructor(name: string, description: string, price: number, discount: number, mrp: number){
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.mrp = mrp;
  }
}
