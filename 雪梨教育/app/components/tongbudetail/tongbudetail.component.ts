import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  // flag:boolean=true;//或改为false不添加，或写表达式也可以eg:3>7
  // num=1;
  // change(event){
  //   this.num=event.target.value; 
  //   // console.log(event);
  // }
  // name;

  // date=new Date();
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId']
    this.http.get('/api/courses/'+this.courseId).subscribe(data=>{
      this.course=data;
    })
    //也可以用这种形式、异步管道
    // this.course=this.http.get('/api/courses/'+this.courseId);//返回可观察对象



    // this.http.get('api/courses'+this.courseId).pipe(map(data=>{
    //   this.name='haha';
    //   return data;   //转化返回
    // })).pipe(filter(data=>{
    //   return data.id==3;   //过滤返回布尔值
    // })).subscribe(data=>{
    //   console.log(data);
    //   this.course=data;
    // })
  }

}
