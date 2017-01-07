import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ResumeComponent } from "./resume/resume.component";
import { BlogComponent } from "./blog/blog.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing";
import { HttpModule } from "@angular/http";

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ResumeComponent,
    AboutComponent,
    BlogComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
