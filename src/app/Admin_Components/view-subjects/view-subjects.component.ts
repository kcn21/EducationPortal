import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  public _Message
  public subjects
  public subjectsBackup
  public itemToRemoveId
  public editViewEnabled=false
  public indAtEditView=-1
  public itemToRemoveName=null
  constructor(private _AdminService:AdminService) { 
    this._AdminService.getSubjects().subscribe(data=>{
      this.subjects=data;
      this.subjectsBackup=JSON.parse(JSON.stringify(this.subjects))
    })

    //console.log(this.subjects)
  }

  ngOnInit() {
  }
  displayEditView(buttonRef){
    this._Message=""
    this.editViewEnabled=true;
    this.subjects=JSON.parse(JSON.stringify(this.subjectsBackup))
    //console.log(buttonRef.value) 
    this.indAtEditView=buttonRef.value // Index Of Course which user want to edit
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
  updateSubject(){
    //console.log(this.subjects[this.indAtEditView])
    this._AdminService.updateSubject(this.subjects[this.indAtEditView]).subscribe(data=>{
      this._Message="Subject " + this.subjectsBackup[this.indAtEditView].SubjectName+" Updated Successfully!";
      this.indAtEditView=-1;
      this._AdminService.getSubjects().subscribe(data=>{
        //console.log(data)
        this.subjects=data;
        this.subjectsBackup=JSON.parse(JSON.stringify(this.subjects))
      })
    })
  }
  cancelEditSubject(){
    this.subjects=JSON.parse(JSON.stringify(this.subjectsBackup))
    this.subjects[this.indAtEditView].SubjectName=this.subjectsBackup[this.indAtEditView].SubjectName
    console.log(this.subjectsBackup[this.indAtEditView].SubjectName)
    this.indAtEditView=-1;
  }
  removeSubject(sub){
    //console.log("Cost: "+co._id)
    if(confirm("Delete Subject Will Automatically Delete All Corresponding Courses & Videos.\nAre You Sure?"))
    {
      this.itemToRemoveId={sId:sub._id}
      this.itemToRemoveName=sub.SubjectName
      //console.log(sub)
      //console.log(this.itemToRemoveId)
      this._AdminService.removeSubject(this.itemToRemoveId).subscribe(data=>{
        if(data)
        {
            this._Message=this.itemToRemoveName+' Is Removed Successfully!';
            this._AdminService.getSubjects().subscribe(data=>{
              //console.log(data)
              this.subjects=data;
              this.subjectsBackup=JSON.parse(JSON.stringify(this.subjects))

            })
        }
        else
        {
          this._Message=this.itemToRemoveName+' Is Not Removed Try Again !';
        }
      })
    }
   
  }


}
