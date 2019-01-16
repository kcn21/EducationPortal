import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../../../src/services/auth-service.service'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  emailPattern= "^[a-z0-9,_%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private route:Router,private AuthService:AuthServiceService) { }

  ngOnInit() {
  }
  onSubmit(Fname,Lname,Email,Password){
    var user={
        Fname,
        Lname,
        Email,
        Password
    }
    console.log(user)
    this.AuthService.registerUser(user).subscribe(data=>{
      console.log(data)
      if(data)
        this.route.navigate(['/home']);
      else
        this.route.navigate(['/signup'])
    })
    
  }
}
