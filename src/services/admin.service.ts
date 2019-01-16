import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _addCourseUrl='http://localhost:8081/AddCourse'

  constructor(private _http:HttpClient) { }
  AddCourse(course)
  {
    return this._http.post<any>(this._addCourseUrl,course)
  }
}
