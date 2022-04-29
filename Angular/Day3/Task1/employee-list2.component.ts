import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-employee-list2',
  templateUrl: './employee-list2.component.html',
  styleUrls: ['./employee-list2.component.css']
})
export class EmployeeList2Component 

{

  property:boolean=false;
  start:number = 0;
  end:number = 4;

  EmpArray:Employee[]=[
    {Empno:1,EmpName:"Smith",EmoJob:"Developer",Salary:450000,Dept:"Sales"},
    {Empno:2,EmpName:"Steves",EmoJob:"manager",Salary:4223455,Dept:"Admin"},
    {Empno:3,EmpName:"Andrew",EmoJob:"HR",Salary:890000,Dept:"Admin"},
    {Empno:4,EmpName:"Smith",EmoJob:"Developer",Salary:450000,Dept:"Sales"},
    {Empno:5,EmpName:"Steves",EmoJob:"manager",Salary:4223455,Dept:"Admin"},
    {Empno:6,EmpName:"Andrew",EmoJob:"HR",Salary:890000,Dept:"Admin"},
    {Empno:7,EmpName:"Smith",EmoJob:"Developer",Salary:450000,Dept:"Sales"},
    {Empno:8,EmpName:"Steves",EmoJob:"manager",Salary:4223455,Dept:"Admin"},
    {Empno:9,EmpName:"Andrew",EmoJob:"HR",Salary:890000,Dept:"Admin"},
    {Empno:10,EmpName:"Smith",EmoJob:"Developer",Salary:450000,Dept:"Sales"},
    {Empno:11,EmpName:"Steves",EmoJob:"manager",Salary:4223455,Dept:"Admin"},
    {Empno:12,EmpName:"Andrew",EmoJob:"HR",Salary:890000,Dept:"Admin"}
  ];

  LoadMore()
  {
    if(this.end >= this.EmpArray.length)
    {
      this.property=true;
      this.start = 0;
      this.end = 4;
    }
    else
    {
      this.start = this.end;
      this.end = this.end + 4;
    }


  }



}