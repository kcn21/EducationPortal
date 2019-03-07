import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl, FormGroup} from '@angular/forms';
import {SafePipe} from'../safe.pipe'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-textcontent',
  templateUrl: './textcontent.component.html',
  styleUrls: ['./textcontent.component.css',
             ]
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
  public quiznumber:number=0
  public isenabled=false;
  public ViewQuiz=false;
  public TextBlock=true;
  public VideoContent=false;
  public submitquizenabled=false;
  public cName
  public CourseId
  public TopicId
  public QuizId
  public quiz
  public Allquestions
  public questions=[]
  public selectedquestion
  public totalquestions
  public solvedquestions=0
  public marksForQuiz=0
  public IsAttemptedTruly=[]
  public IsAnswered=[]
  public RefOfSelectedAnser=[]
  public Answers=[]
  form = new FormGroup({
    gender: new FormControl('lamb'),
  });
  constructor(private route:ActivatedRoute,private _AdminService:AdminService ) {
    this.CourseId=this.route.snapshot.paramMap.get('id')
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
        this.selectedCourse=this.courses.filter(course=>course._id === this.CourseId)[0];
        this.cName=this.selectedCourse.CourseName
        //console.log(this.cName)
    })
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        console.log(this.topics)
        this.topics=this.topics.filter(topic=> topic._id === this.CourseId)[0];
        this.TopicId=this.topics.topicdetails[0]._id
        this._AdminService.getQuizForCourse({cId:this.CourseId}).subscribe(data=>{
          this.quizes=data;
          this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
          console.log("selected quiz is :"+this.selectedQuiz)
          this.QuizId=this.selectedQuiz[0]._id
          this._AdminService.getQuestions().subscribe(data=>{
            this.Allquestions=data;
            console.log("questions are :"+this.questions)
            this.questions=this.Allquestions.filter(quiz=>quiz.QuizId ===  this.QuizId)
            console.log("questions are :"+this.questions)
          })
         
        })
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
    console.log("in method")
    this.EnabledTextContent()
    this.selectedTopic=this.disp_topics[i].Content;
    this.selectedTopictitle=this.disp_topics[i].TopicName;
    this.k=i;
    this.TopicId=this.disp_topics[i]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    console.log(this.selectedQuiz)
    if(!this.selectedQuiz.length)
    {
      this.questions=[]
    }
    else
    {
      this.QuizId=this.selectedQuiz[0]._id
      console.log(this.questions);
      this.questions=this.Allquestions.filter(quiz=>quiz.QuizId ===  this.QuizId)
      console.log(this.questions);
      console.log(this.k)
    }
    this.marksForQuiz=0;
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
    this.ViewQuiz=false;
    this.TextBlock=true;
    this.VideoContent=false;
    this.TopicId=this.disp_topics[this.k]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    if(!this.selectedQuiz.length)
    {
      this.questions=[]
    }
    else
    {
      this.QuizId=this.selectedQuiz[0]._id
      console.log(this.questions);
      this.questions=this.Allquestions.filter(quiz=>quiz.QuizId ===  this.QuizId)
      console.log(this.questions);
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
    this.ViewQuiz=false;
    this.TextBlock=true;
    this.VideoContent=false;
    this.TopicId=this.disp_topics[this.k]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    if(!this.selectedQuiz.length)
    {
      this.questions=[]
    }
    else
    {
      this.QuizId=this.selectedQuiz[0]._id
      console.log(this.questions);
      this.questions=this.Allquestions.filter(quiz=>quiz.QuizId ===  this.QuizId)
      console.log(this.questions);
      console.log(this.k)
    }
  }
  displayprevquiz()
  {
    if(this.quiznumber>=0)
    {
      this.quiznumber--
      this.selectedquestion=this.questions[this.quiznumber];
      console.log(this.quiznumber)
    }
  }
  displaynextquiz()
  {
    if(this.quiznumber+1<=this.questions.length)
    {
      this.quiznumber++
      this.selectedquestion=this.questions[this.quiznumber];
      console.log(this.quiznumber)
    }
  }
  EnabledViewQuiz()
  {
    this.ViewQuiz=true;
    this.TextBlock=false;
    this.VideoContent=false;
    this.submitquizenabled=false;
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
  submitquiz()
  {
    this.solvedquestions=0
    this.marksForQuiz=0
    this.submitquizenabled=true;
    this.totalquestions=this.questions.length;
    console.log(this.Answers)
    this.questions.forEach((que,queNo) => {
      //console.log("\n"+ind)
      if(que.CorrectOption === this.Answers[queNo])
      {
        this.solvedquestions++;
        this.marksForQuiz+=que.Marks
      }      
    });
    /*this.questions.filter(function(que,queNo){
     //console.log("Que No : "+queNo+"\n Question: "+que)
      console.log("sdas"+this.Answers[queNo])
      if(que.CorrectOption === this.Answers[queNo])
      {
        this.solvedquestions++;
        this.marksForQuiz+=que.Marks
      }
    })*/
  }
  selectoption(ans,i)
  {
    //console.log("this is ans :"+ans + "   i :"+i);
   /// console.log("correct ans is :"+ this.questions[i].CorrectOption);
    if(this.questions[i].CorrectOption==ans)
    {
     // console.log("correct ans is ")
      this.solvedquestions++;
      this.marksForQuiz+=this.questions[i].Marks;
     // console.log("marks are :"+this.marksForQuiz);
      //console.log("this marks are :"+this.questions[i].Marks)
    }
  }
  onClickOption(liRef,optionSelected,queNo)
  {
    //console.log("ssadasdsadasdsadasdsa")
    console.log($(liRef).css('backgroundColor'))
    if(!this.IsAnswered[queNo])
    {
      this.IsAnswered[queNo]=true
      console.log("=========================")
      $(liRef).css("background-color", "rgb(0, 153, 255)");
      this.RefOfSelectedAnser[queNo]=liRef
    }
    else
    {
      $(this.RefOfSelectedAnser[queNo]).css("background-color", "white");
      this.RefOfSelectedAnser[queNo]=liRef
      $(liRef).css("background-color", "rgb(0, 153, 255)");
    }
    this.Answers[queNo]=optionSelected
    console.log(this.Answers)
    //console.log("this is ans :"+optionSelected + "   i :"+queNo);
    //console.log("correct ans is :"+ this.questions[queNo].CorrectOption);
    /*if(this.questions[queNo].CorrectOption == optionSelected && !this.IsAttemptedTruly[queNo]) 
    {
      console.log("correct ans is ")
      this.solvedquestions++;
      this.marksForQuiz+=this.questions[queNo].Marks;
      console.log("marks are :"+this.marksForQuiz);
      console.log("this marks are :"+this.questions[queNo].Marks)
      this.IsAttemptedTruly[queNo]=true;
    }
    else if(this.questions[queNo].CorrectOption != optionSelected && this.IsAttemptedTruly[queNo])
    {
      this.solvedquestions--;
      this.marksForQuiz-=this.questions[queNo].Marks;
      this.IsAttemptedTruly[queNo]=false;

    }*/
  }
}