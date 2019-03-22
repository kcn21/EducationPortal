import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthServiceService} from '../src/services/auth-service.service'
import {CookieService} from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:AuthServiceService,private _route:Router,private cookieService:CookieService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    var req_url=state.url
    console.log(req_url);
    var role_ToCheck="User"
    if(req_url.indexOf('admin') > -1)
    {
        role_ToCheck="Admin"
    }
    var curr_role=this.cookieService.get('role')
    var res=this._authService.loggedIn()
    if(res && curr_role ==="Admin")
      {
        console.log("Admin is trying to access admin's private pages")
        return true
      }
      else if(res && role_ToCheck === "Admin" && curr_role ==="User")
      {
        console.log("USer is trying to access admin's private pages")
        this._route.navigate(['/home'])
        return false
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
