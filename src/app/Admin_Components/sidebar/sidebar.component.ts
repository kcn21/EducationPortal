import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public toggleCourseMenu=false;
  public toggleTopicMenu=false;
  public toggleQuizesMenu=false;
  public toggleTutorialMenu=false;
  public toggleSubjectMenu=false;
  public displayAddCourse=false;
  public displayAddVideo=false;
  public displayViewCourses=false;
  public displayAddSubject=false; 
  public displayViewSubject=false;
  public displayAddTopic=false;
  public displayViewTopics=false;
  public displayViewTutorials=false;
  public displayAddQuiz=false;
  public displayViewQuiz=false;
  public task
  constructor(private route:ActivatedRoute,private router:Router) { 
    route.params.subscribe(val => {
      this.task=this.route.snapshot.paramMap.get('task');
      console.log(this.task);
      this.displayAddCourse=false;
      this.displayViewTutorials=false;
      this.displayViewCourses=false;
      this.displayAddVideo=false;
      this.displayAddQuiz=false;
      this.displayViewQuiz=false;
      this.displayAddSubject=false;
      this.displayViewSubject=false;
      this.displayViewTopics=false;
      this.displayAddTopic=false;
      this.toggleCourseMenu=false;
      this.toggleSubjectMenu=false;
      this.toggleTopicMenu=false;
      this.toggleTutorialMenu=false;
      this.toggleQuizesMenu=false;
      if(this.task == 'addCourse')
      {
          this.displayAddCourse=true;
          this.toggleCourseMenu=true;
      }
      else if(this.task=='addVideo')
      {
        this.displayAddVideo=true;
        this.toggleTutorialMenu=true;
      }
      else if(this.task=='addSubject')
      {
        this.toggleSubjectMenu=true;
        this.displayAddSubject=true;
      }
      else if(this.task == 'viewCourses')
      {
        this.toggleCourseMenu=true;
        this.displayViewCourses=true;
      }
      else if(this.task == 'viewSubject')
      {
        this.toggleSubjectMenu=true;
        this.displayViewSubject=true;
      }
      else if(this.task == 'addTopic')
      {
        this.toggleTopicMenu=true;
        this.displayAddTopic=true;
      }
      else if(this.task == 'viewTopics')
      {
        this.toggleTopicMenu=true;
        this.displayViewTopics=true;
      }
      else if(this.task == "viewTutorials")
      {
        this.toggleTutorialMenu=true;
        this.displayViewTutorials=true;
      }
      else if(this.task == "addQuiz")
      {
        this.displayAddQuiz=true;
        this.toggleQuizesMenu=true;
      }
      /*else if(this.task == "viewQuizes")
      {
        this.displayViewQuiz=true;
        this.toggleQuizesMenu=true;
      }*/
    });  
  }

  ngOnInit() {
  }
  onToggleMenu(data){
    if(data == 'c'){
        if(this.toggleCourseMenu == true){
          this.toggleCourseMenu=false;
        }
        else{
          this.toggleCourseMenu=true;
        }
      }
    else if(data =='t')
    {
        if(this.toggleTopicMenu ==true){
          this.toggleTopicMenu=false;

        }
        else{
          this.toggleTopicMenu=true;
        }
    }
    else if(data =='v')
    {
        if(this.toggleTutorialMenu ==true){
          this.toggleTutorialMenu=false;

        }
        else{
          this.toggleTutorialMenu=true;
        }
    }
    else if(data =='s')
    {
        if(this.toggleSubjectMenu ==true){
          this.toggleSubjectMenu=false;

        }
        else{
          this.toggleSubjectMenu=true;
        }
    }
    else if(data == 'q')
    {
      if(this.toggleQuizesMenu == true)
      {
        this.toggleQuizesMenu=false;
      }
      else{
        this.toggleQuizesMenu=true;
      }
    }
  }
}
