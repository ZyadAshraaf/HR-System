import { HttpClient } from '@angular/common/http';
import { course } from './../../models/coursesModel/courseModel';
import { APIFunctionsService } from './../APIService/apifunctions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseFunctionsService extends APIFunctionsService<course>{

  constructor(http:HttpClient) { 
    super(http,"http://localhost:3000/Courses")
  }
}
