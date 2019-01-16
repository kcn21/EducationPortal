import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public router:Router;
  public task:String;
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('t')
    console.log(this.task)
  }

}
