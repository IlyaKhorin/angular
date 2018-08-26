import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {

  public searchString: string;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  public searchChanged(val: string) {
    this.onSearch.emit(val);
  }

}
