import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-vehicle-form-module',
  templateUrl: './vehicle-form-module.component.html',
  styleUrls: ['./vehicle-form-module.component.css']
})
export class VehicleFormModuleComponent implements OnInit {

  VRN = "^[A-Z0-9]{10}$";

  VehicleForm:FormGroup = new FormGroup({
    OwnerName : new FormControl("", Validators.required),
    ContactNo : new FormControl("", [Validators.required,Validators.maxLength(10)]),
    Owneremail : new FormControl("",[Validators.required ,Validators.email]),
    VehicleRegNo:new FormControl("",[Validators.required, Validators.pattern(this.VRN)]),
    Address:new FormControl("",Validators.required),
    Model:new FormControl("", Validators.pattern("[a-z]{1,10}")),
    color : new FormControl("", Validators.required),
    year:new FormControl("",[Validators.required,Validators.min(2012),Validators.max(2022)]),
   
  });

 constructor() { }

 ngOnInit(): void {
 }



 public submit_click():void
 {
     // ajax call to send data to server
     alert("Customer Details are registered.");
     let customerObj = this.VehicleForm.value;
     console.log(customerObj);
 }


}
