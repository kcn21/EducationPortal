import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public router:Router;
  public displayAddCourse=false;
  public displayAddVideo=false;
  public displayViewCourses=false;

  constructor() { }

  ngOnInit() {
  }
  subLinkCliked(e){
    this.displayAddCourse=false;
    this.displayViewCourses=false;
    this.displayAddVideo=false;
    
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
  }
}
