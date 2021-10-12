import { HttpClient } from '@angular/common/http';
import { manager } from './../../models/managerModel/managerModel';
import { APIFunctionsService } from './../APIService/apifunctions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerFunctionsService extends APIFunctionsService<manager>{

  constructor(http:HttpClient) { 
    super(http,"http://localhost:3000/Managers")
  }
}
