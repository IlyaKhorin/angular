import { Component, OnInit } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: ICourseListItem[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseItems = this.courseService.getCourseItems();
  }

  deleteCourse(courseItem: ICourseListItem) {
    console.log("Deleting item: id:", courseItem.id);
    this.courseItems.splice(this.courseItems.indexOf(courseItem), 1);
  }

  createCourse() {
    console.log("Creating item");
  }

  loadMoreCourses(){
    console.log("Loading more");
  }

}
