import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../../src/services/auth-service.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailPattern= "^[a-z0-9,_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private route:Router,private AuthService:AuthServiceService,private cookieService:CookieService) { }

  ngOnInit() {
  }
  onSubmit(FName,LName,Email,Password){
    var user={
        FName,
        LName,
        Email,
        Password
    }
    console.log(user)
    this.AuthService.registerUser(user).subscribe(data=>{
      console.log(data)
      if(data)
      {
        var user={
          Email,
          Password
        }
        this.AuthService.loginUser(user).subscribe(data=>{
          console.log(data)
          if(data){
            console.log(data)
            if(!this.cookieService.check('loggedIn'))
            {
              this.cookieService.set( 'loggedIn', 'true' );
            }
            if(!this.cookieService.check('username'))
            {
              this.cookieService.set('username',data.uname);
            }
            if(!this.cookieService.check('role'))
            {
              this.cookieService.set('role',data.role);
            }
            //localStorage.setItem('loggedIn',"true")
            if(data.role === "Admin")
            {
              console.log("Redirecting To ADmin Page")
              this.route.navigate(['/admin']);
            }
            else
            {
              this.route.navigate(['/home']);
            }
          } 
          else  
          {
            console.log("Invalid Login")
            //this.route.navigate(['/signin'])
          }
        })
        
      }  
      else
        this.route.navigate(['/signup'])
    })
  }
}
