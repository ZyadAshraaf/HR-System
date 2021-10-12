import { ActivatedRoute, Router } from '@angular/router';
import { customer } from './../../models/customersModel/customerModel';
import { CustomerFunctionsService } from './../../services/customerService/customer-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
id;
model = new customer;
  constructor(private api:CustomerFunctionsService, private activeRoute : ActivatedRoute,private route: Router) {
    this.id= activeRoute.snapshot.paramMap.get("id");
    api.getById(this.id).subscribe((data:any)=>{
    this.model=data;
    })
  }
  editCustomer(){
    this.api.put(this.model,this.id).subscribe((data:any)=>{
      this.route.navigateByUrl("/customersData");
    })
  }
}
