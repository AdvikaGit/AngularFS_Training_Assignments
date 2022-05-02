import { Component, OnInit } from '@angular/core';
import { Product1 } from '../models/Product1';

@Component({
  selector: 'app-product-list1',
  templateUrl: './product-list1.component.html',
  styleUrls: ['./product-list1.component.css']
})
export class ProductList1Component 
{
  displayMode:string  = "List";

ProdArray: Product1[] = [
    { pid: 1, pname: "Samsung", price: 100, category: "mobile", qty: 4 ,picture:"assets/mobile.jpg"},
    { pid: 2, pname: "LG", price: 200, category: "TV", qty: 2,picture:"assets/TV.jpg" },
    { pid: 3, pname: "Toshiba", price: 300, category: "mobile", qty: 4,picture:"assets/mobile.jpg" },
    { pid: 4, pname: "Onida", price: 40540, category: "mobile", qty: 6,picture:"assets/mobile.jpg" },
    { pid: 5, pname: "SonyiPad", price: 50043, category: "ipad", qty: 8,picture:"assets/ipad.jpg" },
    { pid: 6, pname: "SamsungIPhone", price: 300, category: "mobile", qty: 4 ,picture:"assets/mobile.jpg"},
    { pid: 7, pname: "Onida", price: 40330, category: "TV", qty: 6 ,picture:"assets/TV.jpg"},
    { pid: 8, pname: "Sony", price: 50440, category: "ipad", qty: 8 ,picture:"assets/ipad.jpg"}
]
  
  

Image_Click(param:string){
  // alert(param);
  this.displayMode = param;
}

}