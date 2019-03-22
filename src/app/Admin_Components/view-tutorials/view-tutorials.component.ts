import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service'

@Component({
  selector: 'app-view-tutorials',
  templateUrl: './view-tutorials.component.html',
  styleUrls: ['./view-tutorials.component.css']
})
export class ViewTutorialsComponent implements OnInit {
  public _Message
  public Tutorials
  public CourseTutorial
  public CourseTutorialBackup
  public courses
  public TutorialToRemoveId
  public TutorialToRemoveName
  public editViewEnabled=false;
  public indAtEditView;
  public indOfCourse;
  p:number=1
  constructor(private _AdminService:AdminService) { 
    this._AdminService.getTutorial().subscribe(data=>{
      this.Tutorials=data
      console.log(this.Tutorials)
    })
    this._AdminService.getCourseNames().subscribe(data=>{
      this.courses=data;
      console.log(this.courses)
    })
    this._AdminService.getCourseViseTutorial().subscribe(data=>{
      this.CourseTutorial=data;
      console.log(this.CourseTutorial)
      this.CourseTutorialBackup=JSON.parse(JSON.stringify(this.CourseTutorial));
    })
  }
  ngOnInit() {
  }
  updateTutorial(courseInd,TutorialInd){
    console.log(this.CourseTutorial[courseInd].videodetails[TutorialInd])
    this._AdminService.updateTutorial(this.CourseTutorial[courseInd].videodetails[TutorialInd]).subscribe(data=>{
      this._Message="Tutorial"+this.CourseTutorial[courseInd].videodetails[TutorialInd].Title+"Updated Successfully!";
      this._AdminService.getCourseViseTutorial().subscribe(data=>{
        this.CourseTutorial=data;
        console.log(this.CourseTutorial)
        this.CourseTutorialBackup=JSON.parse(JSON.stringify(this.CourseTutorial));
        this.editViewEnabled=false;
        this.indAtEditView=-1;
      })
    })
  }
  cancelEditTutorial(){
    this.CourseTutorial=JSON.parse(JSON.stringify(this.CourseTutorialBackup));
    //this.courses[this.indAtEditView].CourseName=this.coursesBackup[this.indAtEditView].CourseName
    console.log(this.CourseTutorialBackup[this.indAtEditView].CourseName)
    this.indAtEditView=-1;
    this.editViewEnabled=false;
  }
  isEnabledEditView(cInd,videoInd){
    
    if(this.editViewEnabled)
    {
      console.log("is enabled : "+videoInd)
      if(this.indAtEditView==videoInd && this.indOfCourse==cInd )
        return true;
    }
    return false;
  }
  displayEditView(buttonRef,courseId)
  {
    this._Message=""
    this.editViewEnabled=true;
    this.CourseTutorial=JSON.parse(JSON.stringify(this.CourseTutorialBackup));
    this.indAtEditView=buttonRef.value;
    this.indOfCourse=courseId;
    console.log("value of index at div view :"+this.indAtEditView);
  }
  removeTutorial(to)
  {
    console.log(to) 
    this.TutorialToRemoveId={tId:to._id}
    this.TutorialToRemoveName=to.Title
    this._AdminService.removeTutorial(this.TutorialToRemoveId).subscribe(data=>{
      if(data)
      {
        this._Message=this.TutorialToRemoveName+" is successfully removed";
        this._AdminService.getCourseViseTutorial().subscribe(data=>{
          console.log(data)
          this.CourseTutorial=data;
          console.log(this.CourseTutorial)
          this.CourseTutorialBackup=JSON.parse(JSON.stringify(this.CourseTutorial));
        })
      }
      else
      {
        this._Message=this.TutorialToRemoveName+' Is Not Removed Try Again !';
      }
    })
  }
}
