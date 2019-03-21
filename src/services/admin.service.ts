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
  private _addTopicUrl="http://localhost:8081/AddTopic"
  private _getTopicsUrl="http://localhost:8081/getTopics"
  private _removeTopicUrl="http://localhost:8081/removeTopic"
  private _updateTopicUrl="http://localhost:8081/updateTopic"
  private _getTutorialUrl="http://localhost:8081/getTutorial"
  private _removeTutorialUrl="http://localhost:8081/removeTutorial"
  private _addQuizUrl="http://localhost:8081/addQuiz"
  private _addQuestionsUrl="http://localhost:8081/addQuestions"
  private _getQuestionsUrl="http://localhost:8081/getQuestions"
  private _getQuizesUrl="http://localhost:8081/getQuizes" 
  private _getAllTopicsUrl="http://localhost:8081/getAllTopics"
  private _removeQuizUrl="http://localhost:8081/removeQuiz"
  private _updateQuizUrl="http://localhost:8081/UpdateQuiz"
  private _updateQuestionUrl="http://localhost:8081/UpdateQuestion"
  private _removeQuestionUrl="http://localhost:8081/removeQuestion"
  constructor(private _http:HttpClient) { }
  AddCourse(course)
  {
    return this._http.post<any>(this._addCourseUrl,course)
  }
  updateCourse(course)
  {
      return this._http.post<any>(this._updateCourseUrl,course)
  }
  AddTopic(topic)
  {
     return this._http.post<any>(this._addTopicUrl,topic)
  }
  getAllTopics()
  {
    return this._http.post<any>(this._getAllTopicsUrl,null)
  }
  // Topics as per course
  getTopics()
  {
      return this._http.post<any>(this._getTopicsUrl,null)
  }
  removeTopic(topic)
  {
    return this._http.post<any>(this._removeTopicUrl,topic)
  }
  removeCourse(CourseId)
  {
    return this._http.post<any>(this._removeCourseUrl,CourseId)
  }
  getCourseNames()
  {
    return this._http.post<any>(this._getCourseNamesUrl,null,{
      withCredentials:true
    })
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
  updateTopic(topic)
  {
    return this._http.post<any>(this._updateTopicUrl,topic)
  }
  getTutorial()
  {
    return this._http.post<any>(this._getTutorialUrl,null)
  }
  removeTutorial(tutorialId)
  {
    return this._http.post<any>(this._removeTutorialUrl,tutorialId)
  }
  addQuiz(quiz)
  {
    return this._http.post<any>(this._addQuizUrl,quiz)
  }
  addQuestions(data)
  {
    return this._http.post<any>(this._addQuestionsUrl,data)
  }
  getQuestions()
  {
    return this._http.post<any>(this._getQuestionsUrl,null)
  }
  getQuizes()
  {
    return this._http.post<any>(this._getQuizesUrl,null)
  }
  removeQuiz(quizId)
  {
    return this._http.post<any>(this._removeQuizUrl,quizId)
  }
  updateQuiz(quizObj)
  {
    return this._http.post<any>(this._updateQuizUrl,quizObj)
  }
  updateQuestion(newDataOfQue)
  {
    return this._http.post<any>(this._updateQuestionUrl,newDataOfQue)
  }
  removeQuestion(QueId){
    return this._http.post<any>(this._removeQuestionUrl,QueId)
  }
}
