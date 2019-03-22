import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;
var num:number=0;
var colors = ['#9932CC', '#F08080', '#00FF7F', '#00CED1', '	#1E90FF', '	#BC8F8F'];
import {SafePipe} from'../safe.pipe'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,AfterViewChecked{
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
  public router:Router
  public IsBelowDataEnabled=false;
  public textvalue='';
  public ExtraData=false;
  public extra:0;
  public numberOftimes=0;
  p:number=1
  count:number=1
  public subject=["Data Science","Algorith","Operating System","Programming","Algorithm","Machine Learming"];
  constructor(private route:Router,private _AdminService:AdminService ) {
      this._AdminService.getSubjects().subscribe(data=>{
          this.subjects=data;
      }) 
      this._AdminService.getCourseNames().subscribe(data=>{
        this.courses=data;
        this.numofcourses=this.courses.length;
    }) 
      this._AdminService.getTopics().subscribe(data=>{
        this.topics=data;
        this.selectedTopic=this.topics[0].topicdetails[1]
      })
   }
   /*textfieldempty()
   {
     if(this.textvalue!=null)
     {
       console.log(this.textvalue);
        this.IsBelowDataEnabled=true;
     }
     else
     {
       this.IsBelowDataEnabled=false;
     }

   }*/
   /*filterterm(value)
   {
      if(!value)
      {
        this.IsBelowDataEnabled=false;
      }
      else
      {
        this.IsBelowDataEnabled=true;
      }
   }*/
   onKey(event : any)
   {
     this.extra=0;
     this.ExtraData=false;
    this.textvalue=event.target.value;
    console.log(this.textvalue);
    if(this.textvalue=='')
    {
      console.log("yes textvalue is null")
      this.IsBelowDataEnabled=false;
      this.ExtraData=false;
    }
    else
    {
      this.courses.forEach(element => {
        if(element.CourseName==this.textvalue)
        {
          this.extra++;
          console.log("extra value is increased");
        }
      });
      if(this.extra>0)
      {
        this.ExtraData=false;
      }
      else
      {
        this.ExtraData=true;
      }
      this.IsBelowDataEnabled=true;
    }
   }
   gototextcontent(item){
    console.log("hiiii")
    console.log(item.CourseName);
    this.route.navigate(['/textcontent',item._id]);
  }

  ngOnInit() {
    
  }
  ngAfterViewInit()
  {
  }
  ngAfterViewChecked()
  {
   /* while(num<this.numofcourses)
    {
      if(num==0)
      {
          $("div.main").append("<div class='row'></div>")
          $("div.main div.row:last-child").append("<div class='column' (click)='gototextcontent(item)' *ngFor='let item of"
          +this.courses+"'style='float:left;margin-bottom:25px;margin-left:10px;margin-right:10px;width: 25%;width: 326px;height: 326px; border-style: solid;border-width:2px;'><img src="
          +this.courses[num].ImagePath+" height='280' width='321'/><div style='height:35px; width:321px; background-color:"
          +colors[Math.floor(Math.random() * colors.length)]+";text-align: center;font-size: 25px;'>"
          +this.courses[num].CourseName+"</div></div>")
      }
      else
      {
        if((num%4)==0)
        {
            $("div.main div.row:last-child").after("<div class='row'></div>")
        }
          $("div.main div.row:last-child").append("<div class='column' (click)='gototextcontent(item)' *ngFor='let item of"
          +this.courses+"'style='float:left;margin-bottom:25px;margin-left:10px;margin-right:10px;width: 25%;width: 326px;height: 326px; border-style: solid;border-width:2px;'><img src="
          +this.courses[num].ImagePath+" height='280' width='321' /><div style='height:35px; width:321px; background-color:"
          +colors[Math.floor(Math.random() * colors.length)]+";text-align: center;font-size: 25px;'>"
          +this.courses[num].CourseName+"</div></div>")
      }
      num=num+1
    }
    */
    /*$('.column').on('click', function() {
      console.log("hiiii")
      this.route.navigate(['/admin','viewTutorials']);
    })*/
  }
}

/*
    while(num<this.numofcourses)
    {
      if(num==0)
      {
          $("div.main").append("<div class='row'></div>")
          $("div.main div.row:last-child").append("<div class='column' *ngFor='let item of"+this.courses+"| paginate: { itemsPerPage: 3, currentPage:"+this.p+"};' style='float:left;margin-bottom:25px;margin-left:10px;margin-right:10px;width: 25%;width: 350px;height: 355px; border-style: solid;border-width:2px;'><img src="+this.courses[num].ImagePath+" height='300' width='346'><div style='height:45px; width:346px;margin-bottom:5px; background-color:"+colors[Math.floor(Math.random() * colors.length)]+";text-align: center;font-size: 25px;'>"+this.courses[num].CourseName+"</div></div>")
      }
      else
      {
        if((num%4)==0)
        {
            $("div.main div.row:last-child").after("<div class='row'></div>")
        }
        $("div.main div.row:last-child").append("<div class='column' *ngFor='let item of"+this.courses+"| paginate: { itemsPerPage: 3, currentPage:"+this.p+"};' style='float:left;margin-bottom:25px;margin-left:10px;margin-right:10px;width: 25%;width: 350px;height: 355px; border-style: solid;border-width:2px;'><img src="+this.courses[num].ImagePath+" height='300' width='346'><div style='height:45px; width:346px; background-color:"+colors[Math.floor(Math.random() * colors.length)]+";text-align: center;font-size: 25px;'>"+this.courses[num].CourseName+"</div></div>")
      }
      num=num+1
    }
*/