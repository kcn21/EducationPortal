import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl, FormGroup} from '@angular/forms';
import {SafePipe} from'../safe.pipe'
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-textcontent',
  templateUrl: './textcontent.component.html',
  styleUrls: ['./textcontent.component.css',
             ]
})
export class TextcontentComponent implements OnInit {
  public videos
  public videoForSelectedTopic
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
  public QuizOrTextOrVideo=0;
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
  public previouslyselectedoption=null;
  public previouslyselectedTopic=null;
  public IsQuizSubmitted=false;
  public textRef;
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

        this._AdminService.getTutorial().subscribe(data=>{
          this.videos=data;
          this.videoForSelectedTopic=this.videos.filter(video=>video.TopicId==this.TopicId)
        })

        this._AdminService.getQuizForCourse({cId:this.CourseId}).subscribe(data=>{
          if(data[0])
          {
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
        }
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
    $('.Text').css("background-color","white");
      $('.Text').css("color","black");
  }
  onselectedtopic(topicRef,i)
  {
    if(this.previouslyselectedTopic!=null)
    {
      $(this.previouslyselectedTopic).css("background-color", "green");
    $(this.previouslyselectedTopic).css("color", "white");
    }
    $(topicRef).css("background-color", "#ddd");
    $(topicRef).css("color", "black");
    console.log("in method")
    //this.EnabledTextContent()
    this.checkDisplayedContent()
    this.selectedTopic=this.disp_topics[i].Content;
    this.selectedTopictitle=this.disp_topics[i].TopicName;
    this.k=i;
    this.TopicId=this.disp_topics[i]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    console.log(this.selectedQuiz)
    this.videoForSelectedTopic=this.videos.filter(video=>video.TopicId==this.TopicId)
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
    this.checkDisplayedContent()
    this.TopicId=this.disp_topics[this.k]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    this.videoForSelectedTopic=this.videos.filter(video=>video.TopicId==this.TopicId);
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
    this.checkDisplayedContent()
    this.TopicId=this.disp_topics[this.k]._id;
    this.selectedQuiz=this.quizes.filter(topic=>topic.TopicId === this.TopicId);
    this.videoForSelectedTopic=this.videos.filter(video=>video.TopicId==this.TopicId);
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
  EnabledViewQuiz(aRef)
  {
    $('.Text').css("background-color","black");
    $('.Text').css("color","white");
    this.submitquizenabled=false;
    this.IsQuizSubmitted=false;
    if(this.previouslyselectedoption!=null)
    {
      $(this.previouslyselectedoption).css("background-color","black");
      $(this.previouslyselectedoption).css("color","white");
    }
    $(aRef).css("background-color", "white");
    $(aRef).css("color", "black");
    this.previouslyselectedoption=aRef;
    this.ViewQuiz=true;
    this.TextBlock=false;
    this.VideoContent=false;
    if(this.TextBlock)
    {
      this.QuizOrTextOrVideo=0;
    }
    else if(this.VideoContent)
    {
      this.QuizOrTextOrVideo=1;
    }
    else if(this.ViewQuiz)
    {
      this.QuizOrTextOrVideo=2;
    }
  }
  EnabledTextContent(aRef)
  {
    this.IsQuizSubmitted=false;
    if(this.previouslyselectedoption!=null)
    {
      $(this.previouslyselectedoption).css("background-color","black");
      $(this.previouslyselectedoption).css("color","white");
    }
    $(aRef).css("background-color", "white");
    $(aRef).css("color", "black");
    this.previouslyselectedoption=aRef;
    this.ViewQuiz=false;
    this.TextBlock=true;
    this.VideoContent=false;
    if(this.TextBlock)
    {
      this.QuizOrTextOrVideo=0;
    }
    else if(this.VideoContent)
    {
      this.QuizOrTextOrVideo=1;
    }
    else if(this.ViewQuiz)
    {
      this.QuizOrTextOrVideo=2;
    }
  }
  EnabledVideoContent(aRef)
  {
    $('.Text').css("background-color","black");
    $('.Text').css("color","white");
    this.IsQuizSubmitted=false;
    if(this.previouslyselectedoption!=null)
    {
      $(this.previouslyselectedoption).css("background-color","black");
      $(this.previouslyselectedoption).css("color","white");
    }
    $(aRef).css("background-color", "white");
    $(aRef).css("color", "black");
    this.previouslyselectedoption=aRef;
    this.ViewQuiz=false;
    this.TextBlock=false;
    this.VideoContent=true;
    if(this.TextBlock)
    {
      this.QuizOrTextOrVideo=0;
    }
    else if(this.VideoContent)
    {
      this.QuizOrTextOrVideo=1;
    }
    else if(this.ViewQuiz)
    {
      this.QuizOrTextOrVideo=2;
    }
  }
  submitquiz()
  {
    this.IsQuizSubmitted=true;
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
  }
  selectoption(ans,i)
  {
    
    if(this.questions[i].CorrectOption==ans)
    {   
      this.solvedquestions++;
      this.marksForQuiz+=this.questions[i].Marks;
    }
  }
  onClickOption(liRef,optionSelected,queNo)
  {
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
    console.log("Answer array is :"+this.Answers)
  }
  checkDisplayedContent()
  {
    if(this.IsQuizSubmitted)
    {
      this.TextBlock=true;
      this.ViewQuiz=false;
      this.VideoContent=false;
      $(this.previouslyselectedoption).css("background-color","black");
      $(this.previouslyselectedoption).css("color","white");
      $(this.textRef).css("background-color","white");
      $(this.textRef).css("color", "black");
      $('.Text').css("background-color","white");
      $('.Text').css("color","black");
    }
    else
    {
      if(this.QuizOrTextOrVideo==0)
      {
        this.TextBlock=true;
        this.VideoContent=false;
        this.ViewQuiz=false;
      }
      else if(this.QuizOrTextOrVideo==1)
      {
        this.TextBlock=false;
        this.VideoContent=true;
        this.ViewQuiz=false;
      }
      else if(this.QuizOrTextOrVideo==2)
      {
        this.TextBlock=false;
        this.VideoContent=false;
        this.ViewQuiz=true;
      }
    }  
  }
}