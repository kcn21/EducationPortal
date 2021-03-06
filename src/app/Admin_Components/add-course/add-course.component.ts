import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public SelectedSubject=0
  public SubjectNames
  public task
  public imageurl=""
  public ImageIsSet=false
  constructor(private route:Router,private AdminService:AdminService) { 
    this.AdminService.getSubjects().subscribe(data=>{
      //console.log(data)
      if(data)
      {
        this.SubjectNames=data
      }
    })

  }
  pathSet()
  {
    if(this.imageurl)
    {
        this.ImageIsSet=true;
    }
    else
    {
      this.ImageIsSet=false;
    }
  }
  ngOnInit() {
  }
  onSubmit(c){
    console.log(this.imageurl)
    var course={
      CourseName:c.CourseName,
      SubjectId:c.SubjectId,
      Description:c.Description,
      ImagePath:this.imageurl,
      Duration:c.Duration,
      Cost:c.Cost
    }
  
    this.AdminService.AddCourse(course).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/admin','viewCourses'])
      else  
      {
        this.route.navigate(['/admin','addCourse'])
      }
    })
  }

}
