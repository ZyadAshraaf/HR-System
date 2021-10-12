import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployessDataComponent } from './employees/employess-data/employess-data.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { CustomersDataComponent } from './customers/customers-data/customers-data.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { ManagersDataComponent } from './managers/managers-data/managers-data.component';
import { EditManagerComponent } from './managers/edit-manager/edit-manager.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { CoursesDataComponent } from './courses/courses-data/courses-data.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployessDataComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    HomeComponent,
    AddCustomerComponent,
    CustomersDataComponent,
    EditCustomerComponent,
    ManagersDataComponent,
    EditManagerComponent,
    AddManagerComponent,
    CoursesDataComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
