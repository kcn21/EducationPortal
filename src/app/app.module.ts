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

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    SidebarComponent,
    ContentComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
