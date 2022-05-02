import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent 

{
public sid:number=1;
public sname:string="saroj wani";
public semail:string="";
public cname:string="Angular";
public fees:number=345322;
public joindate:Date=new Date();

//public joindate:Date=new Date("12/4/2022");
//public joindate:Date=new Date();



}