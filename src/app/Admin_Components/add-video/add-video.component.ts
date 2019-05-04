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
  public topics
  public TopicNames
  public SelectedCourse=0
  public SelectedTopic=0
  public videourl=""
  public videoIsSet=false;
  constructor(private route:Router,private AdminService:AdminService) {
    this.SelectedCourse=0
    this.SelectedTopic=0
    this.AdminService.getCourseNames().subscribe(data=>{
      console.log(data)
      if(data)
      {
        this.CourseNames=data
      }
    })
    this.AdminService.getTopics().subscribe(data=>{
      console.log(data)
      if(data)
      {
        this.topics=data
        this.TopicNames=this.topics.filter(ct=>ct._id === this.SelectedCourse)
        console.log(this.TopicNames)
      }
    })
   }

  ngOnInit() {
  }
  SelectedCourseChanged()
  {
    //console.log("Method Called")
    this.TopicNames=this.topics.filter(ct=>ct._id === this.SelectedCourse)[0].topicdetails
    console.log(this.TopicNames)
    this.SelectedTopic=0
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
      TopicId:cname.TopicId,
      Title:cname.Title,
      Link:this.videourl,
      Description:cname.Description
    }
    this.AdminService.AddVideo(Video).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/admin','viewTutorials']);
      else  
      {
        console.log("Error")
      }
    })
  }
}

