import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { FriendComponent } from './friend/friend.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

import { GreetingComponent } from './greeting/greeting.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortOptionComponent } from './sort-option/sort-option.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    FriendComponent,
    ProductDetailsComponent,
    ProductListComponent,
    
    GreetingComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    SortOptionComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
