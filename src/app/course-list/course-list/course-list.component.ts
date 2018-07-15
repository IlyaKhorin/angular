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
    this.reloadItems();
  }

  deleteCourse(courseItem: ICourseListItem) {
    console.log("Deleting item: id:", courseItem.id);
    this.courseService.removeCourseItem(courseItem);
    this.reloadItems();
  }

  createCourse() {
    console.log("Creating item");
    this.courseService.addCourseItem(null);
    this.reloadItems();
  }

  loadMoreCourses(){
    console.log("Loading more");
    this.courseService.loadMore();
    this.reloadItems();
  }

  private reloadItems() {
    this.courseItems = this.courseService.getCourseItems();
  }
}
