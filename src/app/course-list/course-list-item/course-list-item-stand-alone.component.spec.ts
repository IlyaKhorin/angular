import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { By } from "@angular/platform-browser";
import { CourseListItem } from '../course-list-item';
import { CourseListItemComponent } from './course-list-item.component';
import { CourseDomain } from '../course-domain.enum';
import { ICourseListItem } from '../icourse-list-item';

describe('PublicationCardComponent', () => {
  let sut: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  let courseItem: CourseListItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ]
    })
  }));

  beforeEach(() => {
    courseItem =  new CourseListItem(1,
      "Course 1",
      new Date("2018/06/20"),
      20,
      "course 1 description",
      CourseDomain.NET);
    
    fixture = TestBed.createComponent(CourseListItemComponent);
    sut = fixture.componentInstance;

    sut.courseItem = courseItem;
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should raise delete course', () => {
    const deleteBtn = fixture.debugElement.query(By.css('.btn-danger'));

    let deletedItem: ICourseListItem;
    sut.onCourseDeleted.subscribe((actualItem: ICourseListItem) => deletedItem = actualItem);

    deleteBtn.triggerEventHandler('click', courseItem);

    expect(deletedItem).toBe(courseItem);
  }); 
});
