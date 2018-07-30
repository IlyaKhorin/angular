import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListItemEditComponent } from './course-list-item-edit.component';

describe('CourseListItemEditComponent', () => {
  let component: CourseListItemEditComponent;
  let fixture: ComponentFixture<CourseListItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
