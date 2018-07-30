import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourseListItem } from '../icourse-list-item';
import { CourseListItem } from '../course-list-item';

@Component({
  selector: 'app-course-list-item-edit',
  templateUrl: './course-list-item-edit.component.html',
  styleUrls: ['./course-list-item-edit.component.css']
})
export class CourseListItemEditComponent implements OnInit {

  @Input() private courseItem:ICourseListItem; 

  constructor(private courseService:CourseService) { this.courseItem = new CourseListItem(null,null,new Date(Date.now()),null,null,null,null) }

  ngOnInit() {
  }

  public saveItem(){
    this.courseService.addCourseItem(this.courseItem)
    this.courseService.newItem = false;
  }

  public cancelItem(){
    this.courseService.newItem = false;
  }
}
