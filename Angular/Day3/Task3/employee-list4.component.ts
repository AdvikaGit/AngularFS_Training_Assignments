import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee-list4',
  templateUrl: './employee-list4.component.html',
  styleUrls: ['./employee-list4.component.css']
})
export class EmployeeList4Component

{
  key:number  =0;
  value:number=0;


  minvalue:number=0;
  maxvalue:number=0;

  EmpArray:Employee[]=[
    {Empno:1,EmpName:"Smith",EmoJob:"Developer",Salary:45000,Dept:"Sales"},
    {Empno:2,EmpName:"Steves",EmoJob:"manager",Salary:42234,Dept:"Admin"},
    {Empno:3,EmpName:"Andrew",EmoJob:"HR",Salary:89000,Dept:"Admin"},
    {Empno:4,EmpName:"Smith",EmoJob:"Developer",Salary:34000,Dept:"Sales"},
    {Empno:5,EmpName:"Steves",EmoJob:"manager",Salary:566455,Dept:"Admin"},
    {Empno:6,EmpName:"Andrew",EmoJob:"HR",Salary:67000,Dept:"Admin"},
    {Empno:7,EmpName:"Smith",EmoJob:"Developer",Salary:34000,Dept:"Sales"},
    {Empno:8,EmpName:"Steves",EmoJob:"manager",Salary:42234,Dept:"Admin"},
    {Empno:9,EmpName:"Andrew",EmoJob:"HR",Salary:95000,Dept:"Admin"},
    {Empno:10,EmpName:"Smith",EmoJob:"Developer",Salary:32400,Dept:"Sales"},
    {Empno:11,EmpName:"Steves",EmoJob:"manager",Salary:56432,Dept:"Admin"},
    {Empno:12,EmpName:"Andrew",EmoJob:"HR",Salary:67843,Dept:"Admin"}
  ];


  filterData_click()
  {
    this.key = this.minvalue;
    this.value = this.maxvalue;
  }


}