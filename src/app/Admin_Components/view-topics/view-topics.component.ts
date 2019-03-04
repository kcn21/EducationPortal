import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';


@Component({
  selector: 'app-view-topics',
  templateUrl: './view-topics.component.html',
  styleUrls: ['./view-topics.component.css']
})
export class ViewTopicsComponent implements OnInit {

  public Coursetopics
  public CoursetopicsBackup
  private itemToRemoveId
  private itemToRemoveName=null
  public _Message
  public displayEditor=false
  public editorContent
  public editingTopicObj
  public topicNameInEditor
  constructor(private _AdminService:AdminService) { 
    this.fetchTopicData()
}
  ngOnInit() {
  }
  removeTopic(to){
    console.log(to);
    this.itemToRemoveId={tId:to._id}
    this.itemToRemoveName=to.TopicName
    console.log(this.itemToRemoveId)
    this._AdminService.removeTopic(this.itemToRemoveId).subscribe(data=>{
      if(data)
      {
          this._Message=this.itemToRemoveName+' Is Removed Successfully!';
          this._AdminService.getTopics().subscribe(data=>{
            console.log(data)
            this.Coursetopics=data;
            this.CoursetopicsBackup=JSON.parse(JSON.stringify(this.Coursetopics))
          })
      }
      else
      {
        this._Message=this.itemToRemoveName+' Is Not Removed Try Again !';
      }
    })
  }
  displayEditView(t)
  {
    this.displayEditor=true;
    this.editingTopicObj=t;
    this.editorContent=t.Content
    this.topicNameInEditor=t.TopicName
  }
  cancelUpdateTopic(){
    this._Message=""
    this.stopEditing()
    this.Coursetopics=JSON.parse(JSON.stringify(this.CoursetopicsBackup))
  }
  updateTopic()
  {
    this._Message=""
    var topic={
      _id:this.editingTopicObj._id,
      TopicName:this.topicNameInEditor,
      Content:this.editorContent,
    }
    console.log(topic)
    this._AdminService.updateTopic(topic).subscribe(data=>{
      if(data)
      {
        console.log(data)
        this.stopEditing()
        this.fetchTopicData()
      }
    })
  }
  stopEditing(){
    this._Message=""
    this.displayEditor=false;
    this.editingTopicObj=null;
    this.editorContent=null
    this.topicNameInEditor=null
  }
  fetchTopicData(){
    this._Message=""
    this._AdminService.getTopics().subscribe(data=>{
      this.Coursetopics=data;
      console.log(this.Coursetopics)
      this.CoursetopicsBackup=JSON.parse(JSON.stringify(this.Coursetopics))
    })
  }
}
