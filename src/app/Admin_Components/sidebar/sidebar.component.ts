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
  public toggleTutorialMenu=false;
  public toggleSubjectMenu=false;
  public router:Router;
  public displayAddCourse=false;
  public displayAddVideo=false;
  public displayViewCourses=false;
  public displayAddSubject=false; 
  public task
  
  constructor(private route:ActivatedRoute) { 
    this.task=this.route.snapshot.paramMap.get('task');
    console.log(this.task);
    if(this.task == 'addCourse')
    {
        this.displayAddCourse=true;
    }
    else if(this.task=='addVideo')
    {
      this.displayAddVideo=true;
    }
    else if(this.task=='addSubject')
    {
      this.displayAddSubject=true;
    }
    else if(this.task == 'viewCourses')
    {
      this.displayViewCourses=true;
    }
      
  }

  ngOnInit() {
  }
  subLinkCliked(e){
    this.displayAddCourse=false;
    this.displayViewCourses=false;
    this.displayAddVideo=false;
    this.displayAddSubject=false;
      if(e.id == 'addCourse')
      {
        this.displayAddCourse=true;
      }
      else if(e.id == 'viewCourses')
      {
        this.displayViewCourses=true;

      }
      else if(e.id == 'addVideo')
      {
        this.displayAddVideo=true;
      }
      else if(e.id=='addSubject')
      {
        this.displayAddSubject=true;
      }
      else if(e.id == 'viewCourse')
      {
        this.displayViewCourses=true;
      }

  }
  onToggleMenu(data){
    if(data == 'c'){
        if(this.toggleCourseMenu === true){
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
  }
}
