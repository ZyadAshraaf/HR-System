import { ManagerFunctionsService } from './../../services/managerService/manager-functions.service';
import { manager } from './../../models/managerModel/managerModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent {
  id;
  model = new manager;
    constructor(private api:ManagerFunctionsService, private activeRoute : ActivatedRoute,private route: Router) {
      this.id= activeRoute.snapshot.paramMap.get("id");
      api.getById(this.id).subscribe((data:any)=>{
      this.model=data;
      })
    }
    editManager(){
      this.api.put(this.model,this.id).subscribe((data:any)=>{
        this.route.navigateByUrl("/managersData");
      })
    }
  }
