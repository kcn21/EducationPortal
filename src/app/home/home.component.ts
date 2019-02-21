import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service'
declare var jquery:any;
declare var $ :any;
var num:number=0;
import {SafePipe} from'../safe.pipe'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public videos
  public topics
  public subjects
  public courses
  public selectedTopic
  public items
  public db
  public rowvalue
  public colvalue
  public numofcourses
  public lastDisplayed=-1
  constructor(private _AdminService:AdminService ) {
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
        this.numofcourses=this.courses.length;
    }) 
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        this.selectedTopic=this.topics[0].topicdetails[0]
      })
      /*while(num<=this.numofcourses)
      {
        if(num==0)
        {
            $("div.main").append("<div class='row'></div>")
            $("div.main div.row:last-child").append("<div class='column' style='float:left;margin-bottom:10px;margin-left:10px;width: 33.33%;padding: 10px;width: 480px;height: 300px;'><img src='../../assets/HTML5.PNG'><figcaption>HTML learning</figcaption></div>")
        }
        else
        {
          if((num%3)==0)
          {
              $("div.main div.row:last-child").after("<div class='row'></div>")
          }
          $("div.main div.row:last-child").append("<div class='column' style='float:left;margin-bottom:10px;margin-left:10px;width: 33.33%;padding: 10px;width: 480px;height: 300px;'><img src='../../assets/HTML5.PNG'><figcaption>HTML learning</figcaption></div>")
        }
        num=num+1
      }*/
      //addBlocks(){
        
     // }
      /*this.db.collection("courses").count({},function(err,data){
        if(err)
         {
            return err
         }
         else
         {
            this.numofcourses=data;
         }
      })*/
      //this.items = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
   }
   decrementrow()
   {
     this.rowvalue=this.rowvalue-1;
   }
   decrementcol()
   {
     this.colvalue=this.colvalue-1;
   }
  ngOnInit() {
  }
  addBlocks(){
    if(num==0)
    {
        $("div.main").append("<div class='row'></div>")
        $("div.main div.row:last-child").append("<div class='column' style='float:left;margin-bottom:10px;margin-left:10px;width: 33.33%;padding: 10px;width: 480px;height: 300px;'><img src='../../assets/HTML5.PNG'><figcaption>HTML learning</figcaption></div>")
    }
    else
    {
      if((num%3)==0)
      {
          $("div.main div.row:last-child").after("<div class='row'></div>")
      }
      $("div.main div.row:last-child").append("<div class='column' style='float:left;margin-bottom:10px;margin-left:10px;width: 33.33%;padding: 10px;width: 480px;height: 300px;'><img src='../../assets/HTML5.PNG'><figcaption>HTML learning</figcaption></div>")
    }
    num=num+1
  }
}
