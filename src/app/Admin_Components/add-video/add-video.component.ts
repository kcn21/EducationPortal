import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import {SafePipe} from'../../safe.pipe'
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  public CourseNames
  public SelectedCourse=0
  public videourl=""
  public videoIsSet=false;
  constructor(private route:Router,private AdminService:AdminService) {
    this.AdminService.getCourseNames().subscribe(data=>{
      console.log(data)
      if(data)
      {
        this.CourseNames=data
      }
    })
   }

  ngOnInit() {
  }
  urlSet(){
    if(!!this.videourl){
    this.videoIsSet=true
    }else
    {
      this.videoIsSet=false;
    }
  }
  onSubmit(cname){
    console.log(cname.Poster)
    var Video= {
      CourseId:cname.CourseId,
      Title:cname.Title,
      Link:this.videourl,
      Description:cname.Description
    }
    /*this.AdminService.AddVideo(Video).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/admin']);
      else  
      {
        console.log("Error")
      }
    })*/
  }

}

