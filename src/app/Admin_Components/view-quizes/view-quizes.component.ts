import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  public editViewEnabled=false
  public indAtEditView=-1
  public CourseQuizes
  public CourseQuizesBackup
  public CourseInWhichEditView=-1
  public Topics=null
  public _Message
  constructor(private _AdminService:AdminService) { 
    this.fetchQuizData()
    this.fetchTopicsData()
  }

  ngOnInit() {
  }
  getTopicName(tid){
    if(this.Topics != null)
    {
    var Topic=this.Topics.filter(t=>t._id == tid)[0]
    //console.log(Topic)
    return Topic.TopicName
    }
  }
  onEditQuestions(courseInd)
  {

  }
  onUpdateQuiz(courseInd){
    console.log(this.CourseQuizes[courseInd].quizdetails[this.indAtEditView])
    this._AdminService.updateQuiz(this.CourseQuizes[courseInd].quizdetails[this.indAtEditView]).subscribe(data=>{
      this._Message="Quiz Updated Successfully!";
      this.indAtEditView=-1;
      this.fetchQuizData();
    })
  }
  onCancelUpdateQuiz(){
    this.CourseQuizes=JSON.parse(JSON.stringify(this.CourseQuizesBackup))
    //this.courses[this.indAtEditView].CourseName=this.coursesBackup[this.indAtEditView].CourseName
    //console.log(this.CourseQuizesBackup[this.indAtEditView].CourseName)
    this.indAtEditView=-1;
  }
  onRemoveQuiz(quizId)
  {
      this._AdminService.removeQuiz({qId:quizId}).subscribe(data=>{
        if(data)
        {
            this._Message="Quiz Removed Successfully!"
            this.fetchQuizData()
        }
      })
  }
  isEnabledEditView(ci,data){
    //console.log(data)
    if(this.editViewEnabled)
    {
      if(this.indAtEditView==data && this.CourseInWhichEditView==ci)
        return true;
    }
    return false;
  }
  onEditQuiz(ci,ind){
    this._Message=""
    this.editViewEnabled=true;
    this.CourseQuizes=JSON.parse(JSON.stringify(this.CourseQuizesBackup))
    this.indAtEditView=ind
    this.CourseInWhichEditView=ci
  }
  fetchQuizData(){
    this._AdminService.getQuizes().subscribe(data=>{
      this.CourseQuizes=data
      //console.log(this.CourseQuizes)
      this.CourseQuizesBackup=JSON.parse(JSON.stringify(this.CourseQuizes))
    })
  }
  fetchTopicsData(){
    this._AdminService.getAllTopics().subscribe(data=>{
      this.Topics=data
    })
  }
}
