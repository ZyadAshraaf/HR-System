import { EmployeeFunctionsService } from './../../services/employeServicee/employee-functions.service';
import { employee } from './../../models/employeesModel/employeeModel';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent{
model = new employee;
id;
  constructor(private api : EmployeeFunctionsService,private route : Router,private activeRoute : ActivatedRoute) {
    this.id = activeRoute.snapshot.paramMap.get("id");
    this.api.getById(this.id).subscribe((data : any)=>{
      this.model=data;
    })
   }

  EditEmployee(){
    this.api.put(this.model,this.id).subscribe(data =>{
      this.route.navigateByUrl("/EData");
    })
  }

}
