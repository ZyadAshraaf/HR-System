import { EmployeeFunctionsService } from './../../services/employeServicee/employee-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employess-data',
  templateUrl: './employess-data.component.html',
  styleUrls: ['./employess-data.component.css']
})
export class EmployessDataComponent{
  employeesData : [];
  constructor(private api : EmployeeFunctionsService) { 
    this.api.get().subscribe((data : any)=>{
      this.employeesData = data;
    });
  }
  deleteEmployee(id){
    this.api.delete(id).subscribe((data : any)=>{
      window.location.reload();
    })
  }

}
