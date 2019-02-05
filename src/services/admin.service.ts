import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';

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
  private _getCourseAsPerSubjectUrl="http://localhost:8081/GetCourseAsPerSubject"
  private _addSubjectUrl="http://localhost:8081/AddSubject"
  private _getSubjectUrl="http://localhost:8081/getSubjects"
  private _updatesubjectUrl="http://localhost:8081/updateSubject"
  private _removeSubjectUrl="http://localhost:8081/removeSubject"
  private _getTutorialUrl="http://localhost:8081/getTutorial"
  private _removeTutorialUrl="http://localhost:8081/removeTutorial"
  private _addTopicUrl="http://localhost:8081/addTopic"
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
  getCourseAsPerSubject()
  {
    return this._http.post<any>(this._getCourseAsPerSubjectUrl,null)
  }
  AddSubject(SubjectName)
  {
    return this._http.post<any>(this._addSubjectUrl,SubjectName)
  }
  getSubjects()
  {
    return this._http.post<any>(this._getSubjectUrl,null)
  }
  updateSubject(subject)
  {
    return this._http.post<any>(this._updatesubjectUrl,subject)
  }
  removeSubject(SubjectId)
  {
    return this._http.post<any>(this._removeSubjectUrl,SubjectId)
  }
  getTutorial()
  {
    return this._http.post<any>(this._getTutorialUrl,null)
  }
  removeTutorial(tutorialId)
  {
    return this._http.post<any>(this._removeTutorialUrl,tutorialId)
  }
  AddTopic(topic)
  {
    return this._http.post<any>(this._addTopicUrl,topic)
  }
}
