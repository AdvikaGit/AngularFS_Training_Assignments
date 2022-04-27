import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit 
{

  
  
  constructor() { }

  ngOnInit(): void 
  {
  }
 
  public EmployeeId:number=54654564
	public EmployeeName:string="Stephen";
	public EmployeeJob:string="Manger";
	public EmployeeSalary:number=75000
	public EmployeeDepo:number=10;
}
