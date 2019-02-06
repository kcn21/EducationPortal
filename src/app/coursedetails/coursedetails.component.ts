import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AdminService}from '../../services/admin.service';
import {SafePipe}from '../safe.pipe'
@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  public courses
  public currentlyshowingVideoForCourseId=-1
  public videos
  public currentlyshowingVideoIndex=-1
  public currentlyshowingVideo=null
  constructor(private _AdminService:AdminService) {
    this._AdminService.getCourseNames().subscribe(data=>{
      this.courses=data;
    })
   }
  ngOnInit() {
  }
  displayNextVideo(){
    if(this.currentlyshowingVideoIndex + 1 < this.videos.length ){
      this.currentlyshowingVideoIndex++;
      //console.log(this.currentlyshowingVideoIndex)
      this.currentlyshowingVideo=this.videos[this.currentlyshowingVideoIndex]
      //console.log(this.currentlyshowingVideo)
    }
  }
  displayPrevVideo(){
    if(this.currentlyshowingVideoIndex - 1 >= 0){
      this.currentlyshowingVideoIndex--;
      //console.log(this.currentlyshowingVideoIndex)
      this.currentlyshowingVideo=this.videos[this.currentlyshowingVideoIndex]
      //console.log(this.currentlyshowingVideo)
    }
  }
  selectCourseForVideos(butRef){
    this.currentlyshowingVideoForCourseId=butRef.value;
    this.currentlyshowingVideoIndex=-1;
    var obj={
      cId:this.courses[this.currentlyshowingVideoForCourseId]._id
    }
    this._AdminService.getVideos(obj).subscribe(data=>{
      //console.log(data)
        if(data)
        {
          this.videos=data;
          this.currentlyshowingVideoIndex=0;
          this.currentlyshowingVideo=this.videos[this.currentlyshowingVideoIndex]
          //console.log(this.currentlyshowingVideo)
          //console.log("Vidos:"+this.videos)
        }
      })
   }
}
