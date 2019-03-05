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
  public disp_topics
  public courses
  public selectedCourse
  public quizes
  public selectedQuiz
  public k:number=0
  public isenabled=false;
  public ViewQuiz=false;
  public TextBlock=true;
  public VideoContent=false;
  public cName
  public CourseId
  public TopicId
  public QuizId
  public quiz
  public questions
  constructor(private route:ActivatedRoute,private _AdminService:AdminService ) {
    this.CourseId=this.route.snapshot.paramMap.get('id')
    //console.log(this.CourseId)
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
        //console.log(this.courses)
        this.selectedCourse=this.courses.filter(course=>course._id === this.CourseId)[0];
        //console.log("selected course is :"+this.selectedCourse)
        this.cName=this.selectedCourse.CourseName
        //console.log(this.cName)
    })
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        //console.log(this.topics)
        this.topics=this.topics.filter(topic=> topic._id === this.CourseId)[0];
        //console.log(this.topics)
        this.TopicId=this.topics.topicdetails[0]._id
        this._AdminService.getQuizForCourse({cId:this.CourseId}).subscribe(data=>{
          this.quizes=data;
          console.log("this quiz is "+this.quizes)
          //console.log(this.TopicId)
          this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
          console.log("selected quiz is :"+this.selectedQuiz)
          this.QuizId=this.selectedQuiz[0]._id
          console.log("quiz id is :"+this.QuizId)
          this._AdminService.getQuestions().subscribe(data=>{
            this.questions=data;
            console.log("questions are :"+this.questions)
            this.questions=this.questions.filter(quiz=>quiz.QuizId ===  this.QuizId)
            console.log("questions are :"+this.questions)
          })
         
        })
        //console.log(this.TopicId)
        //console.log(this.topics)
        this.disp_topics=this.topics.topicdetails
        this.selectedTopic=this.disp_topics[0].Content;
        this.selectedTopictitle=this.disp_topics[0].TopicName
      })
      
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
      })
    
      /*this._AdminService.getQuestions().subscribe(data=>{
        this.quiz=data;
      })*/
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
    else if(this.k>=this.disp_topics.length)
    {
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
    else
    {
      console.log(this.k)
    }
  }
  EnabledViewQuiz()
  {
    this.ViewQuiz=true;
    this.TextBlock=false;
    this.VideoContent=false;
  }
  EnabledTextContent()
  {
    this.ViewQuiz=false;
    this.TextBlock=true;
    this.VideoContent=false;
  }
  EnabledVideoContent()
  {
    this.ViewQuiz=false;
    this.TextBlock=false;
    this.VideoContent=true;
  }
}