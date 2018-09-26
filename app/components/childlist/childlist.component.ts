import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-childlist',
  templateUrl: './childlist.component.html',
  styleUrls: ['./childlist.component.css']
})
export class ChildlistComponent implements OnInit {

  @Input() arr;
  @Input() counter;
  @Input() title;

  @Output() delList=new EventEmitter();
  @Output() changeList=new EventEmitter();

  delete(i){
    this.delList.emit(i);
  }
  change(i){
    this.changeList.emit(i);
  }

  constructor() { }

  ngOnInit() {
  }

}

