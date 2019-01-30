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
  public itemToRemoveId
  public itemToRemoveName=null
  constructor(private _AdminService:AdminService) { 
    this._AdminService.getSubjects().subscribe(data=>{
      this.subjects=data;
    })

    //console.log(this.subjects)
  }

  ngOnInit() {
  }
  
  removeSubject(sub){
    //console.log("Cost: "+co._id)
    if(confirm("Delete Subject Will Automatically Deletes Corresponding Courses & Videos.\nAre You Sure?"))
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
