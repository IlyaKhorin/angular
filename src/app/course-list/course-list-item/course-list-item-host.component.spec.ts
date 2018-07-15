import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemComponent } from './course-list-item.component';
import { CourseListItem } from '../course-list-item';
import { CourseDomain } from '../course-domain.enum';
import { Component } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';

describe('CourseListItemComponent', () => {

  @Component({
    template: `<app-course-list-item [courseItem]="item" (onCourseDeleted)="deleteCourse($event)" ></app-course-list-item>`
  })
  class TestHostComponent {
    public item: CourseListItem = new CourseListItem(1,
      "Course 1",
      new Date("2018/06/20"),
      20,
      "course 1 description",
      CourseDomain.NET);
    public courseItem: ICourseListItem;
    public deleteCourse(courseItem: ICourseListItem) { this.courseItem = courseItem; }
  }

  let component: CourseListItemComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testHost: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, TestHostComponent ],      
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });
});
