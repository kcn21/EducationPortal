import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private route:Router,private AdminService:AdminService) { }

  ngOnInit() {
  }
  onSubmit(CourseName,Subject,Description,Duration,Cost){
    var course={
      CourseName,
      Subject,
      Description,
      Duration,
      Cost
    }
    
    this.AdminService.AddCourse(course).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/home']);
      else  
      {
        this.route.navigate(['/addCourse'])
      }
    })
  }

}
