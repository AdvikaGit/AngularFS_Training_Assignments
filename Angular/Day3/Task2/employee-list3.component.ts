import { Component, OnInit } from '@angular/core';
import { Employee1 } from '../models/Employee1';

@Component({
  selector: 'app-employee-list3',
  templateUrl: './employee-list3.component.html',
  styleUrls: ['./employee-list3.component.css']
})
export class EmployeeList3Component 
{
  public userObj1:Employee1 = {EmpName:"Scott", EmpGrade:1};
  public userObj2:Employee1 = {EmpName:"Nancy", EmpGrade:2};
  


  EmpArray:Employee1[]=[
    {EmpName:"Scott",EmpGrade:1},
    {EmpName:"Smith",EmpGrade:2},
    {EmpName:"Stephan",EmpGrade:4},
    {EmpName:"Niasa",EmpGrade:3},
    {EmpName:"kelvin",EmpGrade:1},
    {EmpName:"Newton",EmpGrade:4},
  
  
  ]
    
}
