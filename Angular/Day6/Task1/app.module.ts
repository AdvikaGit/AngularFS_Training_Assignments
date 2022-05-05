import { CustomHttpInterceptorService } from './custom-http-interceptor.service';
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
import { UserinfoComponent } from './userinfo/userinfo.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { EmployeePipeComponent } from './employee-pipe/employee-pipe.component';
import { EmployeeList2Component } from './employee-list2/employee-list2.component';
import { EmployeeList3Component } from './employee-list3/employee-list3.component';
import { GradePipe } from './grade.pipe';
import { EmployeeList4Component } from './employee-list4/employee-list4.component';
import { FilterPipe } from './filter.pipe';
import { RangePipe } from './range.pipe';
import { EmployeeList5Component } from './employee-list5/employee-list5.component';
import { DataService } from './data.service';
import { ProductList1Component } from './product-list1/product-list1.component';
import { StudentInfo1Component } from './student-info1/student-info1.component';
import { EmployeeList6Component } from './employee-list6/employee-list6.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { InputList1Component } from './input-list1/input-list1.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

import { EmployeeList7Component } from './employee-list7/employee-list7.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
    UserinfoComponent,
    StudentInfoComponent,
    EmployeePipeComponent,
    EmployeeList2Component,
    EmployeeList3Component,
    GradePipe,
    EmployeeList4Component,
    FilterPipe,
    RangePipe,
    EmployeeList5Component,
    ProductList1Component,
    StudentInfo1Component,
    EmployeeList6Component,
    FancyCardComponent,
    ProductList2Component,
    RxjsDemoComponent,
    InputList1Component,
    HttpDemoComponent,
    EmployeeList7Component 
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [{provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
