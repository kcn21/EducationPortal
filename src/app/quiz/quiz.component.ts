import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private _AdminService:AdminService) { }

  
  ngOnInit() {
  }

}
