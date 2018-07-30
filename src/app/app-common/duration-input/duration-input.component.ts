import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnInit {

  private durationValue:number;

  @Input() public get duration(){
    return this.durationValue;
  } 
  @Output() durationChange = new EventEmitter(); 
  
  public set duration(value:number){
    this.durationValue = value; 
    this.durationChange.emit(value);
  } 

  constructor() { }

  ngOnInit() {
  }

}
