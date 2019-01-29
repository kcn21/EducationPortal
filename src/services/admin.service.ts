import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private _addCourseUrl='http://localhost:8081/AddCourse'
  private _getCourseNamesUrl='http://localhost:8081/getCourseNames'
  private _addVideoUrl="http://localhost:8081/AddVideo"
  private _getVideosUrl="http://localhost:8081/GetVideos"
  private _removeCourseUrl="http://localhost:8081/RemoveCourse"
  private _updateCourseUrl="http://localhost:8081/UpdateCourse"
  constructor(private _http:HttpClient) { }
  AddCourse(course)
  {
    return this._http.post<any>(this._addCourseUrl,course)
  }
  updateCourse(course)
  {
      return this._http.post<any>(this._updateCourseUrl,course)
  }
  removeCourse(CourseId)
  {
    return this._http.post<any>(this._removeCourseUrl,CourseId)
  }
  getCourseNames()
  {
    return this._http.post<any>(this._getCourseNamesUrl,null)
  }

  AddVideo(video)
  {
    return this._http.post<any>(this._addVideoUrl,video)
  }
  getVideos(CourseId)
  {
    return this._http.post<any>(this._getVideosUrl,CourseId)
  }
}
