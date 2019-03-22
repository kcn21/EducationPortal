import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthServiceService} from '../src/services/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthServiceService,private _route:Router){

  }
  canActivate():boolean{
      if(this._authService.loggedIn())
        {
          console.log("yes!")
            return true
        }
        else
        {
          console.log("Again in signin page")
          this._route.navigate(['/signin'])
          return false;
        }
  }
  /*syncFun() {
    var validUser=false
    var sync=true
    this._authService.loggedIn().subscribe(data=>
      {
        console.log(data)
        if(data.loggedIn)
        {
          console.log("yeah!")
          validUser=true
        }
        sync=false;
      });
      while(sync){
        //require('deasync').sleep(100);
        
      }
      return validUser
  }*/
}
