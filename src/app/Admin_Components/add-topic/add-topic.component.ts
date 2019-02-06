import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  public displayEditor=false;
  public SelectedCourse=0
  public CourseNames
  public topicName
  public _Message=null
  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: true,
    theme:'dark'  
  }
  public editorContent
  constructor(private route:Router,private AdminService:AdminService) { 
    this.AdminService.getCourseNames().subscribe(data=>{
      this.CourseNames=data;
    })
  }

  ngOnInit() {
  }
  
  addTopic(){
    var topic={
      TopicName:this.topicName,
      Content:this.editorContent,
      CourseId:this.SelectedCourse
    }
    this.AdminService.AddTopic(topic).subscribe(data=>{
      console.log(data);
      this.route.navigate(['/admin','viewTopics'])
    })
  }
  displayTopicEditView(){
    if(this.SelectedCourse != 0)
      this.displayEditor=true;
    else
      this._Message="Please Select The Course"
  }
}
