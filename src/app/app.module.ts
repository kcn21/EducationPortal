import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './Admin_Components/sidebar/sidebar.component';
import { ContentComponent } from './Admin_Components/content/content.component';
import { AddCourseComponent } from './Admin_Components/add-course/add-course.component';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from 'src/services/auth-service.service';
import { AdminService } from 'src/services/admin.service';
import { AuthGuard } from 'src/auth.guard';
import { AddVideoComponent } from './Admin_Components/add-video/add-video.component';
import { SafePipe } from './safe.pipe';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ViewCoursesComponent } from './Admin_Components/view-courses/view-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    SidebarComponent,
    ContentComponent,
    AddCourseComponent,
    AddVideoComponent,
    SafePipe,
    CoursedetailsComponent,
    ViewCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [AuthServiceService,AdminService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
