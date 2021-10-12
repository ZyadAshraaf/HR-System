import { manager } from './../../models/managerModel/managerModel';
import { ManagerFunctionsService } from './../../services/managerService/manager-functions.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent{

  model = new manager;
  constructor(private api:ManagerFunctionsService,private route : Router) { }
  addManager(){
    this.api.post(this.model).subscribe((data:any)=>{
      this.route.navigateByUrl("/managersData");
    })
  }

}
