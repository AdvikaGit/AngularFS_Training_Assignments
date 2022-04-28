import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  {

  @Input() 
  colname:string  = "";

  //SortedArray:Employee[]=[];

  EmpArray:Employee[]=[
    {Empno:1,EmpName:"Smith",EmoJob:"Developer",Salary:450000,Dept:"Sales"},
    {Empno:2,EmpName:"Steves",EmoJob:"manager",Salary:4223455,Dept:"Admin"},
    {Empno:3,EmpName:"Andrew",EmoJob:"HR",Salary:890000,Dept:"Admin"}
  ];
    

  ngOnChanges(): void {
    // alert(this.colname);
  
   this.EmpArray.sort((a:any,b:any)=>a[this.colname] < b[this.colname] ? -1 : 1);
      
   }
      
   }

