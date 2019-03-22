import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../../src/services/auth-service.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public checkLogin=false
  constructor(private route:Router,private AuthService:AuthServiceService,private cookieService:CookieService) { }

  ngOnInit() {
  }
  onSubmit(Email,Password){
    var user={
      Email,
      Password
    }
    this.AuthService.loginUser(user).subscribe(data=>{
      console.log(data)
      if(data){
        this.cookieService.set( 'loggedIn', 'true' );
        //localStorage.setItem('loggedIn',"true")
        this.route.navigate(['/home']);
      } 
      else  
      {
        this.checkLogin=true;
        this.route.navigate(['/signin'])
      }
    })
  }
}
