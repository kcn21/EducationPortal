import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
import { FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private Route:Router,private _AdminService:AdminService) { }

  ngOnInit() {
    
  }
  onSubmit(SubjectName)
  {
    var Subject = {
      SubjectName
    }

    this._AdminService.AddSubject(Subject).subscribe(data=>{
      console.log(data)
      this.Route.navigate(['/admin','viewSubject'])
    })
  }
}
