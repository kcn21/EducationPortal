import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
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
<<<<<<< HEAD
      this.Route.navigate(['/admin','viewSubject'])
=======
      this.Route.navigate(['/admin','viewCourses'])
>>>>>>> e680bb1b49b3a515a5aac9e4223a0b66baf2c229
    })
  }
}
