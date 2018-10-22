import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from './services/Common.Service';
import { LogService } from 'src/app/services/log.service';
import { ShareService } from 'src/app/services/share.service';
import { RouterModule, Router } from '@angular/router'
import { ShequComponent } from 'src/app/components/shequ/shequ.component';
import { CourseComponent } from 'src/app/components/course/course.component';
import { TongbuComponent } from 'src/app/components/tongbu/tongbu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { HttpClientModule }from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component'
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HomeComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    ShequdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[//子路由
        {path:'todo',component:TodolistComponent},
        {path:'parent',component:ParentComponent},
        {path:'',redirectTo:'todo',pathMatch:'full'},//子路由的重定向，跳转到首页组件时默认todolist组件显示
      ]},
      {path:"tongbu",component:TongbuComponent},
      {path:"tongbu/:courseId",component:TongbudetailComponent},
      {path:"course",component:CourseComponent},
      {path:"course/:videoId",component:CoursedetailComponent},
      {path:"shequ",component:ShequComponent},
      {path:"shequ/:shequId",component:ShequdetailComponent},
      {path:"",redirectTo:"home",pathMatch:"full"},
      {path:"**",component:ShequComponent},
    ]),
  ],
  providers: [
    // CommonService,//与下一行效果一样
    // {provide:CommonService,useClass:CommonService},//与上一行效果一样
    // LogService,
    // ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
