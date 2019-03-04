import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  public displayAddQuesPage=false
  public SelectedCourse=0
  public QuestionCount=1
  public SelectedCorrectOption=0
  public SelectedTopic=0
  public topics           // Topic Of All Courses
  public TopicNames
  public CourseNames
  public timeLimit
  public quizName
  public displayAddQuizPage=true
  public _Message=null
  public Questions:Array<Object>=[]
  constructor(private route:Router,private AdminService:AdminService) { 
    var que={
      Title:"How are You?",
      OptionA:"Bas Santi",
      OptionB:"Jalsa",
      OptionC:"Mazama",
      OptionD:"Fine",
      CorrectOption:"B",
      Marks:4
    }
    //this.Questions.push(que)
   // this.Questions.push(que)
    this.AdminService.getCourseNames().subscribe(data=>{
      this.CourseNames=data;
    })
    this.AdminService.getTopics().subscribe(data=>{
      this.topics=data;
      //console.log(this.topics)
      //console.log(this.CourseNames[this.SelectedCourse])
      this.TopicNames=this.topics.filter(ct=>ct._id === this.SelectedCourse)
      //console.log(this.TopicNames)
    })
  }
  ngOnInit() {
  }
  SelectedCourseChanged()
  {
    //console.log("Method Called")
    this.TopicNames=this.topics.filter(ct=>ct._id === this.SelectedCourse)[0].topicdetails
    //console.log(this.TopicNames)
    this.SelectedTopic=0
  }
  showAddQuestionPage()
  {
    this.displayAddQuesPage=true;
    this.displayAddQuizPage=false;
  }
  addQue(data)
  {
    //console.log(data)
      var Que={
          Title:data.Title,
          OptionA:data.OptionA,
          OptionB:data.OptionB,
          OptionC:data.OptionC,
          OptionD:data.OptionD,
          CorrectOption:data.CorrectOption,
          Marks:data.Marks,
      }

      this.Questions.push(Que)
      //console.log(this.Questions)
      this.displayAddQuizPage=false;
      this.displayAddQuesPage=false;
      this.SelectedCorrectOption=0;
      this.QuestionCount++;
  }
  addQuiz()
  {
    //console.log("method called")
    var Quiz={
      QuizName:this.quizName,
      TimeLimit:this.timeLimit,
      CourseId:this.SelectedCourse,
      TopicId:this.SelectedTopic
    }
    this.AdminService.addQuiz(Quiz).subscribe(data=>{
      //console.log(data)
      var questionsForNewQuizData={
        QuizId:data._id,
        QuizQuestions:this.Questions
      }
      this.AdminService.addQuestions(questionsForNewQuizData).subscribe(data=>{
          if(data)
          {
           // console.log("asdsadasdsadasdsadsd")
            this.route.navigate(['/admin','viewQuizes'])
          }
      })  
    })
    
  }
}
