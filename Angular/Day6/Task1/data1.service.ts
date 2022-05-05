import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

 
  // baseUrl:string  = "https://localhost:44307/api/StudentApi/";
  baseUrl:string  = " http://localhost:3000/employees/";

  constructor(private httpObj:HttpClient) { }

  // Read All
  public getAllEmployees(): Observable<any>
  {   
    return this.httpObj.get(this.baseUrl);
  }

  // Read Single
  public getEmployeeById(empno:number):any
  {
    return this.httpObj.get(this.baseUrl + empno);
  }

  // Create
  public addEmployee(emObj:any):any
  {
    return this.httpObj.post(this.baseUrl, emObj);
  }

  // Update
  public updateEmployee(emObj:any):any
  {
    return this.httpObj.put(this.baseUrl + emObj.empno, emObj);
    // return this.httpObj.put(this.baseUrl, stObj);
  }


  // Delete
  public deleteEmployee(empno:number):any
  {
    return this.httpObj.delete(this.baseUrl + empno);
  }
}
