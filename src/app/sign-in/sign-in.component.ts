import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthServiceService} from '../../../src/services/auth-service.service'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public checkLogin=false
  public Message="Login"
  constructor(private route:Router,private aRoute:ActivatedRoute,private AuthService:AuthServiceService,private cookieService:CookieService) { 
    var mes=this.aRoute.snapshot.paramMap.get('mes')
    if(mes)
      this.Message=mes;
  }

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
        this.checkLogin=true;
        //this.route.navigate(['/signin'])
      }
    })
  }
}
