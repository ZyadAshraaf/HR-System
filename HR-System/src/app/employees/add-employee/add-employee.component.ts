import { employee } from './../../models/employeesModel/employeeModel';
import { EmployeeFunctionsService } from './../../services/employeServicee/employee-functions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
model = new employee();
  constructor(private api : EmployeeFunctionsService, private route : Router) {}
  addEmployee(){
    this.api.post(this.model).subscribe((data : any)=>{
      this.route.navigateByUrl("/EData");
    })
  }

}
