import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { CourseDomain } from './course-domain.enum';
import { ICourseListItem } from './icourse-list-item';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private items:ICourseListItem[];

  constructor() { 
    this.items = [
      new CourseListItem(
        1,
        "Course 1",
        new Date("2018/06/20"),
        20,
        "course 1 description",
        CourseDomain.NET
      ),
      new CourseListItem(
        2,
        "Course 2",
        new Date("2018/01/11"),
        40,
        "course 2 long long long long description",
        CourseDomain.JAVA
      ),
      new CourseListItem(
        3,
        "Course 3",
        new Date("2018/06/15"),
        120,
        "course 1 description",
        CourseDomain.CPP
      ),
    ];
  }


  public getCourseItems(): ICourseListItem[] {
    return this.items;
  }

  public removeCourseItem(item:ICourseListItem) {
     this.items.splice(this.items.indexOf(item), 1);
  }

  public addCourseItem(item:ICourseListItem) {
  }

  public editCourseItem(item:ICourseListItem) {
  }

  public loadMore() {
  }
}
