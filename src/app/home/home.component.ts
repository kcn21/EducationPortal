import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service'
import {SafePipe} from'../safe.pipe'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public videos
  constructor(private _AdminService:AdminService ) {
    var obj={
      cId:'5c40582a0eac8150206ae23b'
    }
    /*this._AdminService.getVideos(obj).subscribe(data=>{
      console.log(data)
        if(data)
        {
          this.videos=data;
          console.log("Vidos:"+this.videos)
        }
      })*/
      this._AdminService.getCourseAsPerSubject().subscribe(data=>{
        console.log(data)
      })
     
   }

  ngOnInit() {
  }

}
