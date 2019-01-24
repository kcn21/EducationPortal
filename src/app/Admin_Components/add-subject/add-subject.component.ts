import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service'
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private _AdminService:AdminService) { }

  ngOnInit() {
    
  }
  onSubmit(SubjectName)
  {
    var Subject = {
      SubjectName
    }

    this._AdminService.AddSubject(Subject).subscribe(data=>{
      console.log(data)
    })
  }
}
