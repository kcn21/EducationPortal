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
   if(this._authService.loggedIn()){
      return true
   }
   else
   {
    this._route.navigate(['/signin'])
    return false;
   }
}
}
