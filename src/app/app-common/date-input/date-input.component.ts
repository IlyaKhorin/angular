import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {

  private dateValue:Date;

  @Input() public get date(){
    return this.dateValue;
  } 
  @Output() dateChange = new EventEmitter<Date>(); 
  
  public set date(value:Date){
    this.dateValue = new Date(value); 
    this.dateChange.emit(this.dateValue);
  } 
  constructor() { }

  ngOnInit() {
  }

}
