import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
@Component({
  selector: 'app-employee-list6',
  templateUrl: './employee-list6.component.html',
  styleUrls: ['./employee-list6.component.css']
})
export class EmployeeList6Component 
{

  EmpArray:Employee[]=[
    {Empno:1,EmpName:"Smith",EmoJob:"Developer",Salary:20000,Dept:"Sales"},
    {Empno:2,EmpName:"Steves",EmoJob:"manager",Salary:42234,Dept:"Admin"},
    {Empno:3,EmpName:"Andrew",EmoJob:"HR",Salary:89000,Dept:"Admin"},
    {Empno:4,EmpName:"Smith",EmoJob:"Developer",Salary:34000,Dept:"Sales"},
   
   
  ];




}