import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service'

@Component({
  selector: 'app-view-tutorials',
  templateUrl: './view-tutorials.component.html',
  styleUrls: ['./view-tutorials.component.css']
})
export class ViewTutorialsComponent implements OnInit {

  public Message
  public Tutorials
  public TutorialToRemoveId
  public TutorialToRemoveName
  p:number=1
  constructor(private _AdminService:AdminService) { 
    this._AdminService.getTutorial().subscribe(data=>{
      this.Tutorials=data
      console.log(this.Tutorials)
    })
  }

  ngOnInit() {
  }
  removeTutorial(to)
  {
    console.log(to)
    
    this.TutorialToRemoveId={tId:to._id}
    this.TutorialToRemoveName=to.Title
    this._AdminService.removeTutorial(this.TutorialToRemoveId).subscribe(data=>{
      if(data)
      {
        this.Message=this.TutorialToRemoveName+"is successfully removed";

        this._AdminService.getTutorial().subscribe(data=>{
          this.Tutorials=data
        })
      }
    })
  }
}
