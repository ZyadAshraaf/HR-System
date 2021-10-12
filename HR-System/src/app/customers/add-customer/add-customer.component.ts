import { Router } from '@angular/router';
import { customer } from './../../models/customersModel/customerModel';
import { CustomerFunctionsService } from './../../services/customerService/customer-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent{
model = new customer;
  constructor(private api:CustomerFunctionsService,private route : Router) { }
  addCustomer(){
    this.api.post(this.model).subscribe((data:any)=>{
      this.route.navigateByUrl("/customersData");
    })
  }
}
