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
  public displayAddCourse=false;
  public displayAddVideo=false;
  public displayViewCourses=false;
  public displayAddSubject=false; 
<<<<<<< HEAD
  public displayViewSubject=false;
  public task
  
 
  constructor(private route:ActivatedRoute,private router:Router) { 
    route.params.subscribe(val => {
      this.task=this.route.snapshot.paramMap.get('task');
      console.log(this.task);
      this.displayAddCourse=false;
      this.displayViewCourses=false;
      this.displayAddVideo=false;
      this.displayAddSubject=false;
      this.displayViewSubject=false;
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
    });  
=======
  public displayRemoveSubject=false;
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
    else if(this.task == 'removeSubject')
    {
      this.displayRemoveSubject=true;
    }
      
>>>>>>> e680bb1b49b3a515a5aac9e4223a0b66baf2c229
  }

  ngOnInit() {
  }
  subLinkCliked(e){
    /*this.displayAddCourse=false;
    this.displayViewCourses=false;
    this.displayAddVideo=false;
    this.displayAddSubject=false;
    this.displayRemoveSubject=false;
      if(e.id == 'addCourse')
      {
        this.displayAddCourse=true;
        this.router.navigate(['/admin','addCourse']);
      }
      else if(e.id == 'viewCourses')
      {
        this.displayViewCourses=true;
        this.router.navigate(['/admin','viewCourses']);
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
<<<<<<< HEAD
      }*/
=======
      }
      else if(e.id=='removeSubject')
      {
        this.displayRemoveSubject=true;
      }

>>>>>>> e680bb1b49b3a515a5aac9e4223a0b66baf2c229
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
