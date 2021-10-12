import { HttpClient } from '@angular/common/http';
import { employee } from './../../models/employeesModel/employeeModel';
import { APIFunctionsService } from './../APIService/apifunctions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeFunctionsService extends APIFunctionsService<employee>{

  constructor(public http:HttpClient) {
    super(http,"http://localhost:3000/Employess");
   }
}
