import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productArr: Product[] = [
    { pid: 1, pname: "Samsung", price: 100, category: "small", qty: 4 },
    { pid: 2, pname: "LG", price: 200, category: "medium", qty: 2 },
    { pid: 3, pname: "Toshiba", price: 300, category: "big", qty: 4 },
    { pid: 4, pname: "Onida", price: 400, category: "small", qty: 6 },
    { pid: 5, pname: "Sony", price: 500, category: "big", qty: 8 },
  ];
    




  

  constructor() { }

  ngOnInit(): void {
  }

}
