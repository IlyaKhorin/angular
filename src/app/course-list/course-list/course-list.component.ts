import { Component, OnInit } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';
import { CourseListItem } from '../course-list-item';
import { CourseDomain } from '../course-domain.enum';
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

}
