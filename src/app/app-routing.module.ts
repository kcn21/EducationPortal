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

const routes: Routes = [
  {path:'',redirectTo:'/signin',pathMatch:'full'},
    {path:'signin',component:SignInComponent},
    {path:'signup',component:SignUpComponent},
    {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
    {path:'admin',component:ContentComponent},
    {path:'admin/:task',component:ContentComponent},
    {path:'sidebar',component:SidebarComponent},
    {path:'tutorial',component:AddVideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
