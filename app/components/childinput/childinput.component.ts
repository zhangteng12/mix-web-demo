import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent implements OnInit {

  constructor() { }

  @Input() input;
  @Input() item;
  @Output() getValues=new EventEmitter();

  getValue(e){
    this.getValues.emit(e);
  }

  ngOnInit() {
  }

}
