import { Component, OnInit } from '@angular/core';
import { Product1 } from '../models/Product1';

@Component({
  selector: 'app-product-list2',
  templateUrl: './product-list2.component.html',
  styleUrls: ['./product-list2.component.css']
})
export class ProductList2Component{
  
ProdArray: Product1[] = [
  { pid: 1, pname: "Samsung", price: 100, category: "mobile", qty: 4 ,picture:"assets/mobile.jpg"},
  { pid: 2, pname: "LG", price: 200, category: "TV", qty: 2,picture:"assets/TV.jpg" },
  { pid: 3, pname: "Toshiba", price: 300, category: "mobile", qty: 4,picture:"assets/mobile.jpg" },
  { pid: 4, pname: "Onida", price: 40540, category: "mobile", qty: 6,picture:"assets/mobile.jpg" }
  
]
}