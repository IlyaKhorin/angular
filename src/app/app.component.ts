import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { CourseService } from './course-list/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() { }
}
