import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service'
import {SafePipe} from'../safe.pipe'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos
  public topics
  public subjects
  public selectedTopic
  constructor(private _AdminService:AdminService ) {
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        this.selectedTopic=this.topics[0].topicdetails[1]
      })
   }

  ngOnInit() {
  }

}
