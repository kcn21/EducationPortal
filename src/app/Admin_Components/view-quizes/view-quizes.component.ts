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
  public QuestionsBackup
  public CourseInWhichEditView=-1
  public displayEditQuestions=false;
  public Topics=null
  public _Message
  public Questions
  public CurrentEditCourseQuestions
  public CurrentEditCourseQuestionsBackup
  public CurrentlyEditingQuizCourseName
  public DisplayEditQuestionView
  public editQueViewEnabled
  public courseIndForEditing=-1
  public quizIndForEditing=-1
  public queIndForEditing=-1
  constructor(private _AdminService:AdminService) { 
    this.fetchQuizData()
    this.fetchTopicsData()
    this.fetchQuestions()
  }

  ngOnInit() {
  }
  getTopicName(tid){
    if(this.Topics != null)
    {
    var Topic=this.Topics.filter(t=>t._id == tid)[0]
    //console.log("asdasdsa : "+Topic)
    return Topic.TopicName
    }
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
    this.displayEditQuestions=false;
    this.CourseQuizes=JSON.parse(JSON.stringify(this.CourseQuizesBackup))
    //this.courses[this.indAtEditView].CourseName=this.coursesBackup[this.indAtEditView].CourseName
    //console.log(this.CourseQuizesBackup[this.indAtEditView].CourseName)
    this.indAtEditView=-1;
  }
  onRemoveQuestion(queInd){
    console.log(this.CurrentEditCourseQuestions[queInd])
    this._AdminService.removeQuestion({queId:this.CurrentEditCourseQuestions[queInd]._id}).subscribe(data=>{
        if(data)
        {
          this._Message="Question Removed Successfully!"
          this.editQueViewEnabled=false
          this.queIndForEditing=-1
          this._AdminService.getQuestions().subscribe(data=>{
            this.Questions=data
            this.CurrentEditCourseQuestions=this.Questions.filter(QuizQue=>QuizQue.QuizId === this.CourseQuizes[this.courseIndForEditing].quizdetails[this.quizIndForEditing]._id)
            this.CurrentEditCourseQuestionsBackup=JSON.parse(JSON.stringify(this.CurrentEditCourseQuestions))
          })
        }
        else
        {
          this._Message="Question is not removed.Try it again."
        }
    })
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
  isEnabledEditQueView(i){
    if(this.DisplayEditQuestionView)
    {
      if(this.queIndForEditing==i)
        return true;
    }
    return false;
  }
  onUpdateQuestion(){
    //console.log(this.CurrentEditCourseQuestions[this.queIndForEditing])
    //we update that question on database
 
    this._AdminService.updateQuestion(this.CurrentEditCourseQuestions[this.queIndForEditing]).subscribe(data=>{
      if(data)
      {
        this._Message="Question Updated Successfully!"
        this.editQueViewEnabled=false
        this.queIndForEditing=-1
        this._AdminService.getQuestions().subscribe(data=>{
          this.Questions=data
          this.CurrentEditCourseQuestions=this.Questions.filter(QuizQue=>QuizQue.QuizId === this.CourseQuizes[this.courseIndForEditing].quizdetails[this.quizIndForEditing]._id)
          this.CurrentEditCourseQuestionsBackup=JSON.parse(JSON.stringify(this.CurrentEditCourseQuestions))
        })
      }
      else
      {
        this._Message="Question is not updated.Try it again."
      }
    })
  }
  onCancelQuestion(){
    this.DisplayEditQuestionView=false;
    this.CurrentEditCourseQuestions=JSON.parse(JSON.stringify(this.CurrentEditCourseQuestionsBackup))
    console.log(this.CurrentEditCourseQuestions[this.queIndForEditing])
    this.queIndForEditing=-1
    //console.log(this.Questions)
  }
  onEditQuestion(ind){
    this.DisplayEditQuestionView=true
    this._Message=""
    this.editQueViewEnabled=true
    this.CurrentEditCourseQuestions=JSON.parse(JSON.stringify(this.CurrentEditCourseQuestionsBackup))
    this.queIndForEditing=ind
  }
  onEditQuiz(ci,ind){
    this.displayEditQuestions=false
    this._Message=""
    this.editViewEnabled=true;
    this.CourseQuizes=JSON.parse(JSON.stringify(this.CourseQuizesBackup))
    this.indAtEditView=ind
    this.CourseInWhichEditView=ci
  }
  onEditQuestions(courseInd,quizInd){
    //console.log(this.CourseQuizes[courseInd].quizdetails[quizInd]._id)
    this.CurrentEditCourseQuestions=this.Questions.filter(QuizQue=>QuizQue.QuizId === this.CourseQuizes[courseInd].quizdetails[quizInd]._id)
    console.log("sadsad"+this.CurrentEditCourseQuestions)
    this.CurrentEditCourseQuestionsBackup=this.CurrentEditCourseQuestions
    this.displayEditQuestions=true
    this.courseIndForEditing=courseInd
    this.quizIndForEditing=quizInd
    this.CurrentlyEditingQuizCourseName=this.CourseQuizes[courseInd].CourseName
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
  fetchQuestions(){
    this._AdminService.getQuestions().subscribe(data=>{
      this.Questions=data
    })
  }
}
