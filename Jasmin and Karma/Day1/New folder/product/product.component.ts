import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pname:string="";
  qty:any=1;
  price:any=0;
  total:string="";
  constructor() { }

  ngOnInit(): void {
  }
  get_total_amount()
  {

  this.total=  this.total ="Total Amount : "+ this.price*this.qty;
  

  }

}
