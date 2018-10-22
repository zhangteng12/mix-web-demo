import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  txt:string;
  counter:number=0;
  arr:Msg[]=[];
  getValue(e){
    if(e.keyCode == 13){
      this.arr.push(new Msg(this.txt,false));
      this.txt="";
    }
  }
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    });
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done=!this.arr[idx].done;
    this.count();
  }

}

//如果想要类暴露出去，加上export
export class Msg{
  constructor(public titile:string,public done:boolean){

  }
}
// 就可以有Msg类型,比如arr:Msg ，使用类的时候要new ，
//  属性:后边跟的是类型