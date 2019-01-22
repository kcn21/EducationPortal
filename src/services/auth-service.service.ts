import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _registerUrl='register'
  private _loginUrl='login'
  constructor(private _http:HttpClient) { 
    _http.get('../assets/config.json').subscribe(res => {
      this._registerUrl=res["apiAddress"]+"/"+this._registerUrl;
      this._loginUrl=res["apiAddress"]+"/"+this._loginUrl;
    });
  }
  public getJSON():Observable<any>{
    return this._http.get("./config.json")
  }
  registerUser(user)
  {
    return this._http.post<any>(this._registerUrl,user)
  }
  loginUser(user)
  {
    return this._http.post<any>(this._loginUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logOut(){
    localStorage.removeItem('token')
  }
}
