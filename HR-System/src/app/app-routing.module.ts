import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesDataComponent } from './courses/courses-data/courses-data.component';
import { EditManagerComponent } from './managers/edit-manager/edit-manager.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { ManagersDataComponent } from './managers/managers-data/managers-data.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomersDataComponent } from './customers/customers-data/customers-data.component';
import { EmployessDataComponent } from './employees/employess-data/employess-data.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {path : "",component: HomeComponent},
  {path : "home",component: HomeComponent},
  {path : "addEmployee",component: AddEmployeeComponent},
  {path : "editEmployee/:id",component: EditEmployeeComponent},
  {path : "EData",component: EmployessDataComponent },
  {path : "customersData",component: CustomersDataComponent },
  {path : "editCustomer/:id",component: EditCustomerComponent },
  {path : "addCustomer",component: AddCustomerComponent },
  {path : "managersData",component: ManagersDataComponent },
  {path : "addManager",component: AddManagerComponent },
  {path : "editManager/:id",component: EditManagerComponent },
  {path : "coursesData",component: CoursesDataComponent},
  {path : "**",component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }