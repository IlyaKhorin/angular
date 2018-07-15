import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent  {

  searchQuery: string;

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  searchCourses() {
    console.log(this.searchQuery);
    this.onSearch.emit(this.searchQuery);
  }

}
