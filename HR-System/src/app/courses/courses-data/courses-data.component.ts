import { course } from './../../models/coursesModel/courseModel';
import { CourseFunctionsService } from './../../services/courseService/course-functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-data',
  templateUrl: './courses-data.component.html',
  styleUrls: ['./courses-data.component.css']
})
export class CoursesDataComponent{
  model = new course();
  coursesData : []
  constructor(private api: CourseFunctionsService) {
    api.get().subscribe((data:any)=>{
      this.coursesData=data;
    })
   }
   showInsData(id){
     this.api.getById(id).subscribe((data : any)=>{
        this.model=data;
     })
   }

}
