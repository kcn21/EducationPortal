import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service'
import {SafePipe} from'../safe.pipe'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-textcontent',
  templateUrl: './textcontent.component.html',
  styleUrls: ['./textcontent.component.css']
})
export class TextcontentComponent implements OnInit {
  public videos
  public topics
  public subjects
  public selectedTopic
  public cName
  public disp_topics
  public courses
  constructor(private route:ActivatedRoute,private _AdminService:AdminService ) {
    this.cName=this.route.snapshot.paramMap.get('id')
    console.log(this.cName)
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        console.log(this.topics)
        this.topics=this.topics.filter(topic=> topic.CourseName === this.cName)[0];
        console.log(this.topics)
        this.disp_topics=this.topics.topicdetails
        this.selectedTopic=this.disp_topics[0].Content;
      })
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
      })
   }
  ngOnInit() {
   
  }
  onselectedtopic(i)
  {
    this.selectedTopic=this.disp_topics[i].Content;
  }
}