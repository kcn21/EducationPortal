import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _registerUrl='http://localhost:8081/register'
  private _loginUrl='http://localhost:8081/login1'
  private _isLoggedInUrl='http://localhost:8081/isLoggedIn'
  constructor(private _http:HttpClient,private cookieService:CookieService) { 
    /*_http.get('../assets/config.json').subscribe(res => {
      this._registerUrl=res["apiAddress"]+"/"+this._registerUrl;
      this._loginUrl=res["apiAddress"]+"/"+this._loginUrl;
      this._isLoggedInUrl=res["apiAddress"]+"/"+this._isLoggedInUrl;
    });*/
  }
  /*public getJSON():Observable<any>{
    return this._http.get("./config.json")
  }*/
  registerUser(user)
  {
    return this._http.post<any>(this._registerUrl,user)
  }
  loginUser(user)
  {
    var res= this._http.post<any>(this._loginUrl,user,{
      withCredentials:true
    })
    //console.log(res)
    
      console.log("works")
    return res
  }
  loggedIn(){
    this._http.post<any>(this._isLoggedInUrl,null,{
      withCredentials:true
    }).subscribe(data=>{
      if(!data.loggedIn)
      {
        this.cookieService.delete('loggedIn');
        //localStorage.removeItem('loggedIn')
      }
    })
     return !! this.cookieService.get('loggedIn')
  }
  logOut(){
    this.cookieService.delete('loggedIn')
  }
}
