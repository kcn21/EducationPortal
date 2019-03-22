import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
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
import { AddSubjectComponent } from './Admin_Components/add-subject/add-subject.component';
import { ViewCoursesComponent } from './Admin_Components/view-courses/view-courses.component';
import { ViewSubjectsComponent } from './Admin_Components/view-subjects/view-subjects.component';
import { AddTopicComponent } from './Admin_Components/add-topic/add-topic.component';
import { ViewTopicsComponent } from './Admin_Components/view-topics/view-topics.component';
import { ViewTutorialsComponent } from './Admin_Components/view-tutorials/view-tutorials.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { AddQuizComponent } from './Admin_Components/add-quiz/add-quiz.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigationComponent } from './navigation/navigation.component';
import { TextcontentComponent } from './textcontent/textcontent.component';
import { ViewQuizesComponent } from './Admin_Components/view-quizes/view-quizes.component';
import {CookieService} from 'ngx-cookie-service'
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
    AddSubjectComponent,
    ViewSubjectsComponent,
    AddTopicComponent,
    ViewTopicsComponent,
    ViewTutorialsComponent,
    SanitizeHtmlPipe,
    AddQuizComponent,
    ViewQuizesComponent,
    NavigationComponent,
    TextcontentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [AuthServiceService,AdminService,AuthGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
