import { Component, OnInit } from '@angular/core';
import { Data1Service } from '../data1.service';

@Component({
  selector: 'app-employee-list7',
  templateUrl: './employee-list7.component.html',
  styleUrls: ['./employee-list7.component.css']
})
export class EmployeeList7Component implements OnInit 
{

  id:number=0;
      empname:string="";
      job:string="";
      salary:number=0;
      dept:string="";
  EmployeeArray:any[] = [];

  constructor(private dataService:Data1Service) { }

  ngOnInit(): void {
   // this.getData_click();
  }

  getData_click()
  {
			this.dataService.getAllEmployees().subscribe( (resData:any) =>
			{
        console.log(resData);
        this. EmployeeArray = resData;
			});
  }

  addData_click() {
    let emObj:any = {};
    emObj.id=this.id;
    emObj.empname=this.empname;
    emObj.job=this.job;
    emObj.salary=this.salary;
    emObj.dept=this.dept;

    console.log(emObj);

    this.dataService.addEmployee(emObj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
  }

  updateData_click() {
    let emObj:any = {};
    emObj.id=this.id;
    emObj.empname=this.empname;
    emObj.job=this.job;
    emObj.salary=this.salary;
    emObj.dept=this.dept;

    console.log(emObj);

    this.dataService.updateEmployee(emObj).subscribe( (resData:any) =>
    {
       alert("Employeee details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(id:number) {

    this.dataService.deleteEmployee(id).subscribe( (resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(id:number) {

    this.id =id ;
    
    this.dataService.getEmployeeById(id).subscribe( (resData:any) =>
    {
      this.empname = resData.empname;
      this.job = resData.job;
      this.salary = resData.salary;
      this.dept = resData.dept;
    });
  }
  clearFields()
   {
    this.empname = "";
    this.job = "";
    this.salary= 0;
    this.dept = "";
  }
  }


