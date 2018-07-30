import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { CourseDomain } from './course-domain.enum';
import { ICourseListItem } from './icourse-list-item';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  private id = 100;
  private items: ICourseListItem[];

  constructor() {
    this.items = [
      new CourseListItem(
        1,
        'Course 1',
        new Date('2018/10/20'),
        20,
        'course 1 description',
        CourseDomain.NET,
        false
      ),
      new CourseListItem(
        2,
        'Course 2',
        new Date('2018/07/11'),
        40,
        'course 2 long long long long description',
        CourseDomain.JAVA,
        true
      ),
      new CourseListItem(
        3,
        'Course 3',
        new Date('2018/06/15'),
        153,
        'course 1 description',
        CourseDomain.CPP,
        true
      ),
      new CourseListItem(
        4,
        'Course 4',
        new Date('2018/08/15'),
        153,
        'course 4 description',
        CourseDomain.CPP,
        true
      ),
    ];
  }

  public getCourseItem(id: number): ICourseListItem {
    return this.items.find((item) => item.id === id);
  }

  public getCourseItems(): ICourseListItem[] {
    return this.items;
  }

  public removeCourseItem(item: ICourseListItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  public addCourseItem(item: ICourseListItem) {
    item.id = this.id++;
    this.items.push(item);
  }

  public editCourseItem(item: ICourseListItem) {
    const replace = this.getCourseItem(item.id);
    this.items.splice(this.items.indexOf(replace), 1, item);
  }

  public loadMore() {
  }

}
