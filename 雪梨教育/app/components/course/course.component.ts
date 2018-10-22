import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  videoId:number;
  videos;
  ngOnInit() {
    this.http.get('/api/videos').subscribe(data=>{
      this.videos=data;
    })

    this.router.params.subscribe((params)=>{
      this.videoId=params["videoId"];
    });
  }
  go(){
    this.route.navigate(['/course',700],{queryParams:{id:9000}});
  }
}
export class Video{
  constructor(
      public id:number,
      public videoName:string,
      public images:string,
      public thing:string,
      public task:number,
      public person:number,
      public video:string
  ){}
}
