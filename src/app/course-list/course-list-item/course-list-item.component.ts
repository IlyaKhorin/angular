import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent {

  @Input() public courseItem: ICourseListItem;
  @Output() public onCourseDeleted: EventEmitter<ICourseListItem> = new EventEmitter<ICourseListItem>();
  @Output() public onCourseEdited: EventEmitter<ICourseListItem> = new EventEmitter<ICourseListItem>();

  deleteCourseItem() {
    this.onCourseDeleted.emit(this.courseItem);
  }

  editCourseItem() {
    this.onCourseEdited.emit(this.courseItem);
  }

  get authors() {
    return this.courseItem.authors.map(a => a.firstName + ' ' + a.lastName).join(' ');
  }

}
