import { ManagerFunctionsService } from './../../services/managerService/manager-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers-data',
  templateUrl: './managers-data.component.html',
  styleUrls: ['./managers-data.component.css']
})
export class ManagersDataComponent {

  managersData : []
  constructor(private api:ManagerFunctionsService) {
    api.get().subscribe((data :any)=>{
      this.managersData=data;
    });
   }
   
   deleteManager(id){
     this.api.delete(id).subscribe((data : any )=>{
      window.location.reload();
     })
   }


}
