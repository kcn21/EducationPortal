import { Component, OnInit } from '@angular/core';
import {AdminService}from'../../../services/admin.service'
@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  public courses
  constructor(private _AdminService:AdminService) {
    this._AdminService.getCourseNames().subscribe(data=>{
      if(data)
      {
        this.courses=data;
        console.log(data);
      }
    })
   }

  ngOnInit() {
  }

}
