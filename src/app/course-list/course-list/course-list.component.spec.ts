import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseListItem } from '../course-list-item';
import { CourseDomain } from '../course-domain.enum';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  let listProvider: Partial<CourseService>;

  let testItems = [ new CourseListItem(
    1,
    "Course 1",
    new Date("2018/06/20"),
    20,
    "course 1 description",
    CourseDomain.NET,
    true
  ),
  new CourseListItem(
    2,
    "Course 2",
    new Date("2018/01/11"),
    40,
    "course 2 long long long long description",
    CourseDomain.JAVA,
    false
  ),]

  beforeEach(async(() => {

    listProvider = {
      getCourseItems: jasmine.createSpy('getCourseItems').and.returnValue(testItems),
      removeCourseItem:jasmine.createSpy('removeCourseItem'),
      addCourseItem:jasmine.createSpy('addCourseItem'),
      loadMore:jasmine.createSpy('loadMore'),
    };

    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide:CourseService, useValue: listProvider}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('list should be initiated', () => {
    fixture.detectChanges();
    expect(listProvider.getCourseItems).toHaveBeenCalled();
    expect(component.courseItems).toBe(testItems);
    expect(component.courseItems.length).toBe(2);
  });

  it('should create value', () => {
    fixture.detectChanges();
    component.createCourse();
    expect(listProvider.addCourseItem).toHaveBeenCalled();
    expect(listProvider.getCourseItems).toHaveBeenCalledTimes(2);
  });

  it('should delete value', () => {
    fixture.detectChanges();
    component.deleteCourse(testItems[1]);
    expect(listProvider.removeCourseItem).toHaveBeenCalled();
    expect(listProvider.getCourseItems).toHaveBeenCalledTimes(2);
  });

  it('should load more values', () => {
    fixture.detectChanges();
    component.loadMoreCourses();
    expect(listProvider.loadMore).toHaveBeenCalled();
    expect(listProvider.getCourseItems).toHaveBeenCalledTimes(2);
  });
});
