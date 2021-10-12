import { HttpClient } from '@angular/common/http';
import { customer } from './../../models/customersModel/customerModel';
import { APIFunctionsService } from './../APIService/apifunctions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerFunctionsService extends APIFunctionsService<customer>{

  constructor(http : HttpClient) {
    super(http,"http://localhost:3000/Customers");
  }
}
