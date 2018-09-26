import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../services/Local.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  txt:string;
  count:number=0;
  arr1:Msg[]=[];
  getValue(e){
    if(e.keyCode == 13){
      this.arr1.push(new Msg(this.txt,false));
      this.txt="";
    }
  }
  countE(){
    this.count=0;
    this.arr1.forEach((value,index)=>{
      if(value.done){
        this.count++;
      }
    });
  }
  delete(idx){
    this.arr1.splice(idx,1);
    this.countE();
  }
  change(idx){
    this.arr1[idx].done=!this.arr1[idx].done;
    this.countE();
  }

  constructor() { }

  ngOnInit() {
  }

}
 
//如果想要类暴露出去，加上export

export class Msg{
  constructor(public title:string,public done:boolean){

  }
}


