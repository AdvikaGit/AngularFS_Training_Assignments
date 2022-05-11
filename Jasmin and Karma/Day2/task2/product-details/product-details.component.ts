import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
 {

  
  @Input()
  
  item: any= {};

  @Output() onremoveprod = new EventEmitter<number>();

  public  removeprod(pid: number)
  {
  // event emitting
    this. onremoveprod.emit(pid);
  }
  constructor() { }

  ngOnInit(): void {
  }

}