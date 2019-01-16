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
  public router:Router;
  public displayAddCourse=false;
  public displayUpdateCourse=false;
  public displayDeleteCourse=false;
  constructor() { }

  ngOnInit() {
  }
  subLinkCliked(e){
    this.displayAddCourse=false;
    this.displayUpdateCourse=false;
    this.displayDeleteCourse=false;
      if(e.id == 'addCourse')
      {
        this.displayAddCourse=true;
      }
      else if(e.id == 'updateCourse')
      {
        this.displayUpdateCourse=true;
      }
      else if(e.id == 'deleteCourse')
      {
        this.displayDeleteCourse=true;
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
    else
    {
        if(this.toggleTopicMenu ==true){
          this.toggleTopicMenu=false;

        }
        else{
          this.toggleTopicMenu=true;
        }
    }
  }
}
