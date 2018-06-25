import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {
  
  @Input()public courseItem:ICourseListItem;
  @Output()public onCourseDeleted: EventEmitter<ICourseListItem> = new EventEmitter<ICourseListItem>();

  constructor() { }

  ngOnInit() {
  }

  deleteCourseItem(){
    this.onCourseDeleted.emit(this.courseItem);
  }

  editCourseItem(){
    console.log("item editing:", this.courseItem)
  }

}
