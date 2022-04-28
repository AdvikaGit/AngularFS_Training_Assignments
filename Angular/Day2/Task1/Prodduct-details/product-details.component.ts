import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
 {

  prodObj:Product={pid:1,pname:"LG TV",price:34000,category:"Samll",qty:5};

  constructor() { }

  ngOnInit(): void {
  }

}
