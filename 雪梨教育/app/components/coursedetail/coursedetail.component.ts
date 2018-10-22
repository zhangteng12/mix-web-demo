import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {
  videoId: number;
  video;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  
  ngOnInit() {
    this.videoId=this.router.snapshot.params['videoId']
    this.http.get('/api/videos/'+this.videoId).subscribe(data=>{
      this.video=data;
    });
  }
}
