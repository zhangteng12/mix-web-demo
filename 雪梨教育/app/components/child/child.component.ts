import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() arr;
  @Output() delIndex=new EventEmitter();
  del(i){
      this.delIndex.emit(i);
  }

  index=0;

  log(msg){  //因为每个函数代码前边一部分一样，所以可以定义一个函数简便代码
    console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  }
  
  constructor() { 
    // this.log('constructor');
    // console.log(this.arr);  //undefined
  }

  ngOnChanges(changes:SimpleChanges): void{
    // this.log('ngOnChanges');
    // console.log(changes);
    for(let item in changes){
      console.log(changes[item].currentValue);
      for(let i in changes[item]){
        console.log(`属性名是${i},属性值是${changes[item][i]}`);
      }
    }
  }

  ngOnInit() {
    // this.log('ngOnInit');
    // console.log(this.arr);
  }

  // ngDoCheck ():void{
  //   this.log('ngDoCheck');
  // }

  // ngAfterContentChecked():void{
  //   this.log('ngAfterContentChecked');
  // }

  ngAfterContentInit():void{
    // this.log('ngAfterContentInit');
  }

  // ngAfterViewChecked():void{
  //   this.log('ngAfterViewChecked');
  // }

  ngAfterViewInit():void{
    // this.log('ngAfterViewInit');
  }



}
