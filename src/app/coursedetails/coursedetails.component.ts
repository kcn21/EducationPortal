import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  public videoTitle
  public  video
  public videourl=""

  constructor(private route:Router,private AdminService:AdminService) {
    
   }
  ngOnInit() {
  }

}
