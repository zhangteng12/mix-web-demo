import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {
  shequId: number;
  shequs;

  constructor(private router:ActivatedRoute,private http:HttpClient,private route:Router) { }

  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);
    this.http.get('/api/shequs').subscribe(data=>{
      this.shequs=data;
    })

    //参数订阅
    this.router.params.subscribe((params)=>{
      this.shequId=params["shequId"];
    });
  }
  go(){
    this.route.navigate(['/shequ',600],{queryParams:{id:1000}});
  }
}
export class Shequ{
  constructor(
      public id:number,
      public picture:string,
      public images:string,
      public task:string,
      public thing:string,
      public person:string,
      public date:string,
      public read:number,
      public comment:number
  ){}
}
