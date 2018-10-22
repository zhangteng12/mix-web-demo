import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {
  shequ;
  shequId:number;
  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  ngOnInit() {
    this.shequId=this.router.snapshot.params['shequId']
    this.http.get('/api/shequs/'+this.shequId).subscribe(data=>{
      this.shequ=data;
    });
  }
}
