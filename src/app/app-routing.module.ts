import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './Admin_Components/content/content.component';
import { AddCourseComponent } from './Admin_Components/add-course/add-course.component';
import { SidebarComponent } from './Admin_Components/sidebar/sidebar.component';
import { AuthGuard } from 'src/auth.guard';
import { AddVideoComponent } from './Admin_Components/add-video/add-video.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { AddTopicComponent } from './Admin_Components/add-topic/add-topic.component';
import { NavigationComponent } from './navigation/navigation.component';
import {TextcontentComponent} from './textcontent/textcontent.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'signin',component:SignInComponent},
    {path:'signin/:mes',component:SignInComponent},
    {path:'signup',component:SignUpComponent},
    {path:'home',component:HomeComponent},
    {path:'admin',component:ContentComponent,canActivate:[AuthGuard]},
    {path:'admin/:task',component:SidebarComponent,canActivate:[AuthGuard]},
    {path:'sidebar',component:SidebarComponent},
    {path:'coursedetails',component:CoursedetailsComponent,canActivate:[AuthGuard]},
    {path:'textcontent/:id',component:TextcontentComponent,canActivate:[AuthGuard]},
    {path:'**',redirectTo:'/home',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
