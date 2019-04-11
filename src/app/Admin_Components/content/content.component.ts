import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import{AuthServiceService}from '../../../services/auth-service.service'
import {CookieService} from'ngx-cookie-service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public router:Router;
  public task:String;
  constructor(private route:Router,private _cookieService:CookieService ,private _AuthService:AuthServiceService) { 
  }

  ngOnInit() {
    
  }
  
}
