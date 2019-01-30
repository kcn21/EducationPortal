import { Component, OnInit } from '@angular/core';
import {AdminService}from '../../../services/admin.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  public courses
  public coursesBackup
  public fields
  public editViewEnabled=false
  public indAtEditView
  private itemToRemoveId
  private itemToRemoveName=null
  public _Message=null
  public subjects
  constructor(private _AdminService:AdminService) {
    this.fields=["Course Name","Subject","Description","Duration","Cost"]
    this._AdminService.getCourseNames().subscribe(data=>{
      this.courses=data;
      
      this.coursesBackup=JSON.parse(JSON.stringify(this.courses))
      console.log(this.coursesBackup)
    })
    this._AdminService.getSubjects().subscribe(data=>{
      this.subjects=data;
    })
    //console.log(this.courses)
 }
 getSubjectName =  function(ob)
 {
   if(!this.subjects)
   {
     return ;  
   }
    var subject = this.subjects.filter(item=> item._id == ob.SubjectId)[0];
    console.log(subject);
    return subject.SubjectName;
 }

  ngOnInit() {
  }
  updateCourse(){
    //console.log(this.courses[this.indAtEditView])
    this._AdminService.updateCourse(this.courses[this.indAtEditView]).subscribe(data=>{
      this._Message="Course " + this.coursesBackup[this.indAtEditView].CourseName+" Updated Successfully!";
      this.indAtEditView=-1;
      this._AdminService.getCourseNames().subscribe(data=>{
        //console.log(data)
        this.courses=data;
        this.coursesBackup=JSON.parse(JSON.stringify(this.courses))
      })
    })
  }
  cancelEditCourse(){
    this.courses=JSON.parse(JSON.stringify(this.coursesBackup))
    //this.courses[this.indAtEditView].CourseName=this.coursesBackup[this.indAtEditView].CourseName
    console.log(this.coursesBackup[this.indAtEditView].CourseName)
    this.indAtEditView=-1;
  }
  isEnabledEditView(data){
    //console.log(data)
    if(this.editViewEnabled)
    {
      if(this.indAtEditView==data)
        return true;
    }
    return false;
  }
  displayEditView(buttonRef){
    this._Message=""
    this.editViewEnabled=true;
    //console.log(buttonRef.value) 
    this.indAtEditView=buttonRef.value// Index Of Course which user want to edit
  }
  removeCourse(co){
    //console.log("Cost: "+co._id)
    this.itemToRemoveId={cId:co._id}
    this.itemToRemoveName=co.CourseName
    //console.log(this.itemToRemoveName)
    this._AdminService.removeCourse(this.itemToRemoveId).subscribe(data=>{
      if(data)
      {
          this._Message=this.itemToRemoveName+' Is Removed Successfully!';
          this._AdminService.getCourseNames().subscribe(data=>{
            //console.log(data)
          this.courses=data;
          this.coursesBackup=JSON.parse(JSON.stringify(this.courses))
          })
      }
      else
      {
        this._Message=this.itemToRemoveName+' Is Not Removed Try Again !';
      }
    })
  }
}
