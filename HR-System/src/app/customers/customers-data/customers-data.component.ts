import { customer } from './../../models/customersModel/customerModel';
import { CustomerFunctionsService } from './../../services/customerService/customer-functions.service';
import { APIFunctionsService } from './../../services/APIService/apifunctions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-data',
  templateUrl: './customers-data.component.html',
  styleUrls: ['./customers-data.component.css']
})
export class CustomersDataComponent{
customersData : []
  constructor(private api:CustomerFunctionsService) {
    api.get().subscribe((data :any)=>{
      this.customersData=data;
    });
   }
   
   deleteCustomer(id){
     this.api.delete(id).subscribe((data : any )=>{
      window.location.reload();
     })
   }

}
