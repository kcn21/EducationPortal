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
  public selectedTopictitle
  public cName
  public disp_topics
  public courses
  public k:number=0
  public isenabled=false;
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
        this.selectedTopictitle=this.disp_topics[0].TopicName
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
    this.selectedTopictitle=this.disp_topics[i].TopicName;
    this.k=i;
    console.log(this.k)
  }
  displaynextcontent()
  {
    if(this.k+1<=this.disp_topics.length)
    {
      this.k++
      this.selectedTopic=this.disp_topics[this.k].Content;
      this.selectedTopictitle=this.disp_topics[this.k].TopicName;
      console.log(this.k)
    }
  }
  displayprevcontent()
  {
    if(this.k-1>=0)
    {
      this.k--
      this.selectedTopic=this.disp_topics[this.k].Content;
      this.selectedTopictitle=this.disp_topics[this.k].TopicName;
      console.log(this.k)
    }
  }
}