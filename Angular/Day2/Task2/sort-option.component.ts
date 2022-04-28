import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sort-option',
  templateUrl: './sort-option.component.html',
  styleUrls: ['./sort-option.component.css']
})
export class SortOptionComponent {
@Output()
onNameChange:EventEmitter<string> = new EventEmitter();

strName:string  = "ename";

name_change()
{
  this.onNameChange.emit(this.strName);
}


}
